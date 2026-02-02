# 上海中考择校系统技术设计文档

## 1. 文档概述

本文档基于《上海中考择校系统需求与设计文档》（`PRD_SPEC/PRD_DESIGN.md`）以及当前代码实现，描述实际采用的技术栈、架构、目录边界、API 规范与部署方式。目标是保证“文档 ↔ 代码”一致，减少误导与返工。

## 2. 技术选型（当前实现）

### 2.1 前端

| 技术/框架 | 说明 | 版本/来源 |
| --- | --- | --- |
| Vite | 构建与开发服务器 | `package.json` |
| React + TypeScript | UI + 类型系统 | `package.json` |
| React Router | 路由 | `package.json` |
| Tailwind CSS + shadcn/ui | 原子样式与组件基座 | `src/components/ui/*` |
| @tanstack/react-query | 数据请求与缓存 | `src/features/*` |
| i18next + react-i18next | 多语言 | `src/i18n.ts`, `src/locales/*` |
| Axios | HTTP 客户端 | `src/lib/api.ts` |
| Capacitor (iOS) | 移动端打包 | `capacitor.config.ts` |

### 2.2 后端

| 技术/框架 | 说明 | 版本/来源 |
| --- | --- | --- |
| Flask | API 服务 | `requirements.txt` |
| Pydantic | 请求校验/数据建模 | `requirements.txt` |
| SQLAlchemy + psycopg2 | 数据访问 | `requirements.txt` |
| JWT | 鉴权 | `requirements.txt` |
| Supabase SDK (可选) | 云数据库/数据源 | `requirements.txt`, `app/services/schools_fetch.py` |

## 3. 架构总览

### 3.1 应用边界

- Web 应用（Vite + React）：`src/`
- API 服务（Flask）：`app/`
- Serverless 入口（Vercel）：`api/index.py`

### 3.2 依赖边界（必须遵守）

- `src/components/ui/*` 为基础 UI 原子组件，默认只读。
- `src/components/Shared/*` 为跨页面复用组件，只能依赖 `src/components/ui/*`。
- `src/features/*` 为业务特性模块（页面/组件/数据请求）。
- `src/pages/*` 仅做页面组合，尽量不放业务逻辑。
- `app/api/v1/*` 仅处理路由、参数校验与响应封装。
- `app/services/*` 承载业务逻辑与数据组合。
- `app/core/*` 存放配置、鉴权、响应与错误处理。

详见：`docs/architecture/overview.md`、`docs/architecture/api-service-map.md`。

## 4. 前端架构

### 4.1 目录结构（实际）

```
src/
  App.tsx                # 路由入口
  main.tsx               # 应用入口
  pages/                 # 页面（薄层组装）
  features/              # 业务模块（页面逻辑与组件）
  components/
    ui/                  # shadcn/ui 原子组件
    Shared/              # 共享复合组件
  layouts/               # 布局（如 MainTabsLayout）
  lib/                   # API 客户端/类型/工具
  hooks/                 # 通用 Hooks
  i18n.ts                # i18n 初始化
  locales/               # 多语言资源
  App.css, index.css     # 样式入口
```

### 4.2 路由设计（当前）

来自 `src/App.tsx`：

| 路由 | 组件 | 说明 | 认证 |
| --- | --- | --- | --- |
| `/login` | `LoginPage` | 登录 | 否 |
| `/register` | `RegisterPage` | 注册 | 否 |
| `/` | `MainTabsLayout` | 认证布局 | 是 |
| `/targets` | `TargetsPage` | 目标管理 | 是 |
| `/filter` | `FilterPage` | 学校筛选 | 是 |
| `/mocks` | `MocksPage` | 模考记录 | 是 |
| `/eval` | `EvalPage` | 评估分析 | 是 |
| `/schools/:id` | `SchoolDetailPage` | 学校详情 | 是 |
| `/demo` | `DemoPage` | 演示页 | 否 |
| `*` | `NotFoundPage` | 兜底 | 否 |

### 4.3 数据访问与缓存

- 统一请求封装：`src/lib/api.ts`（Axios）
- 业务 API 封装：`src/lib/dataClient.ts`
- React Query 用于页面数据请求/缓存（`src/features/*`）
- API baseURL：
  - Web：`VITE_API_BASE_URL`（默认 `/api/v1`）
  - Capacitor：`VITE_API_BASE_URL_CAPACITOR` 优先

### 4.4 认证与路由保护

- Token 存储：`localStorage`（key: `token`）
- 请求拦截：`src/lib/api.ts` 注入 `Authorization: Bearer <token>`
- 认证保护：`src/components/Shared/ProtectedRoute`
- 401/403：清理 token 并跳转登录（含 redirect）

### 4.5 UI 与样式约束

- 基础组件：`src/components/ui/*`（默认只读）
- 共享组件：`src/components/Shared/*`
- UI 规范参考：`docs/ui/guide.md`
- 任何样式改动需先确认（见 `docs/ai/rules.md`）

## 5. 后端架构

### 5.1 目录结构（实际）

```
app/
  main.py                # Flask 入口
  api/v1/                # 路由层
    auth.py
    filter.py
    mocks.py
    schools.py
  services/              # 业务逻辑层
    auth_service.py
    filter_service.py
    mocks_service.py
    schools_service.py
    schools_fetch.py
    targets_service.py
    utils.py
  core/                  # 基础设施
    auth.py
    config.py
    response.py
    errors.py
  db/
    session.py
```

### 5.2 路由与服务职责

- 路由层：参数校验、权限检查、响应封装
- 服务层：业务逻辑与数据组合
- 统一响应：`app/core/response.py::api_response`

服务映射详见：`docs/architecture/api-service-map.md`。

### 5.3 数据访问

- PostgreSQL 为默认数据库（可接 Supabase 托管）
- SQLAlchemy + psycopg2 作为主要访问方式
- `app/services/schools_fetch.py` 用于多数据源聚合/增强

## 6. API 设计

### 6.1 统一响应

参考 `docs/api/contract.md`：

```json
{ "data": {}, "meta": {} }
```

错误结构：

```json
{ "code": "ERROR_CODE", "message": "...", "details": {} }
```

### 6.2 路由列表（当前）

#### 认证
- `POST /api/v1/auth/register`
- `POST /api/v1/auth/login`
- `POST /api/v1/auth/logout`
- `GET /api/v1/auth/me`

#### 学生画像与筛选
- `GET /api/v1/filter/options`
- `GET /api/v1/filter/middle-schools`
- `GET /api/v1/filter/student-profile`
- `POST /api/v1/filter/student-profile`

#### 学校与目标
- `GET /api/v1/schools/`
- `GET /api/v1/schools/simple`
- `GET /api/v1/schools/<id>`
- `POST /api/v1/schools/targets`
- `GET /api/v1/schools/targets`
- `DELETE /api/v1/schools/targets/<school_code>`
- `GET /api/v1/schools/targets/evaluation`
- `GET /api/v1/schools/test`

#### 模考
- `GET /api/v1/mocks/`
- `GET /api/v1/mocks/stats`
- `POST /api/v1/mocks/`
- `PUT /api/v1/mocks/<exam_id>`
- `DELETE /api/v1/mocks/<exam_id>`

> 具体参数与响应字段请以 `docs/api/contract.md` 与 `src/lib/types.ts` 为准。

## 7. 数据模型（逻辑层）

以 API 响应与前端类型为准（`src/lib/types.ts`），主要包含：

- `School`：学校基本信息、类型、区县、分数线等
- `MiddleSchool`：初中学校信息
- `StudentProfile`：学生画像（区县/初中/分数区间）
- `TargetSchool`：目标学校集合
- `MockExam`：模考成绩、科目与统计

数据库细节以 `app/services/*` 实现为准。

## 8. 部署与运行

### 8.1 本地开发

- 前端：`npm run dev`（Vite）
- 后端：`python app/main.py`（Flask）

### 8.2 生产部署（当前方案）

- 前端构建：`npm run build` 输出到 `dist/`
- Flask 负责提供静态资源 + `/api/v1` API
- Vercel Serverless 入口：`api/index.py`（可选）
- iOS：Capacitor 通过 `capacitor.config.ts` 打包

## 9. 工程约束（AI 相关）

- 规则入口：`docs/ai/rules.md`、`AGENTS.md`、`src/AGENTS.md`、`app/AGENTS.md`
- 关键要求：
  - 不做业务逻辑/DB 结构调整，除非明确批准
  - 一次变更最多 3 个文件
  - 样式改动需用户确认
  - `src/components/ui/*` 默认只读

这些约束用于确保 AI 参与时的可控性与一致性。

---

如需进一步扩展（例如新增模块、引入新的服务组件或调整 API 版本），请先更新本技术设计文档与 `docs/architecture/*` 以保持一致。
