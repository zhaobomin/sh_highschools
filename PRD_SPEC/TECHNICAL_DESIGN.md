# 上海中考择校系统技术设计文档

## 1. 技术设计文档概述

本技术设计文档基于《上海中考择校系统需求与设计文档》（PRD_DESIGN.md）和前端演示页面（demo_v3.html），旨在详细说明系统的技术实现方案，包括技术选型、架构设计、前后端方案、API接口、数据库设计等内容。本文档对AI友好，提供了清晰的技术架构和实现路径，为开发团队提供明确的技术指导。

### 1.1 架构一致性决策（推荐栈）
- 前端：Vite + React + React Router + Tailwind + shadcn/ui；国际化使用 react-i18next
- 后端：FastAPI + Pydantic + PostgreSQL（SQLAlchemy/asyncpg）；统一REST API（/api/v1）
- 部署：前端静态资源（可Vercel/传统服务器）；后端服务（Uvicorn/Nginx代理或容器平台）
- 说明：文档中涉及 Next.js API Routes 的内容为可选替代方案；推荐栈以 Vite + FastAPI 为准
- 约束：所有前端网络请求通过统一Fetcher；接口契约与错误结构按 6.0 与 7.3 执行
## 2. 技术选型

### 2.1 前端技术栈
 
| 技术/框架              | 版本   | 用途     | 选型理由                                   |
| ---------------------- | ------ | -------- | ------------------------------------------ |
| Vite                   | 5.x    | 构建工具 | 极速开发与热更新，配置简单，适合轻量SPA    |
| React                  | 18.x   | UI库     | 组件化开发，生态成熟                       |
| TypeScript             | 5.x    | 类型系统 | 类型安全提升代码质量                       |
| Tailwind CSS           | 3.x    | CSS框架  | 原子化样式，快速开发与一致风格             |
| shadcn/ui              | 最新版 | UI组件库 | 与Tailwind深度集成、可定制主题             |
| React Router           | 6.x    | 路由     | 页面较多时使用；若页面较少可暂不加，后续补 |
| Fetch + 轻封装 / Axios | 最新版 | 数据请求 | 统一错误处理与认证头，简单可靠             |

### 2.2 后端技术栈
 
| 技术/框架  | 版本   | 用途     | 选型理由                                   |
| ---------- | ------ | -------- | ------------------------------------------ |
| FastAPI    | 0.115+ | 后端框架 | 高性能、类型友好、开发效率高，适合轻量服务 |
| Pydantic   | 2.x    | 数据模型 | 严谨的数据验证与类型支持                   |
| Python     | 3.11+  | 编程语言 | 生态完善，学习与维护成本低                 |
| PostgreSQL | 15.x   | 数据库   | 稳定、功能丰富，支持复杂查询与JSON         |
| JWT        | 最新版 | 认证机制 | 无状态认证，前后端分离架构友好             |

### 2.3 部署与集成
 
| 技术/工具       | 版本   | 用途       | 选型理由                          |
| --------------- | ------ | ---------- | --------------------------------- |
| Vite Dev Server | 最新版 | 本地前端   | 热更新与快速开发                  |
| Uvicorn         | 最新版 | ASGI服务器 | 轻量高性能运行FastAPI             |
| Nginx           | 1.25+  | 反向代理   | 静态资源与API转发、提升性能与安全 |
| GitHub Actions  | 最新版 | CI/CD      | 自动化测试、构建与部署            |
| Docker（可选）  | 最新版 | 容器化     | 简化部署与环境一致性              |

## 3. 系统架构

### 3.1 整体架构

上海中考择校系统默认支持传统服务器端部署，同时也支持Vercel云部署，采用插件化设计，主要包括以下层次：

1. **核心层**：
   - **认证模块**：用户注册、登录、认证等核心功能，作为系统基础组件
   - **插件管理**：插件的注册、加载、管理机制
   - **基础服务**：数据库连接、缓存管理、配置管理等

2. **插件层**：
   - **前端插件**：学校筛选、目标管理、模考记录、评估分析等前端模块，以插件方式设计
   - **后端插件**：学校数据管理、目标学校管理、模考记录管理、评估分析等后端模块，以插件方式设计

3. **前端层**：基于 React + Vite 的单页应用，负责用户界面展示和用户交互，可部署在Vercel或传统服务器，支持插件的动态加载。

4. **API层**：基于 FastAPI 的后端API，负责处理前端请求和业务逻辑，推荐与前端通过Nginx反向代理协同部署，支持插件的路由注册。

5. **数据层**：默认生成环境使用PostgreSQL，同时支持Supabase作为云数据库选项。开发和测试环境推荐使用本地PostgreSQL，生产环境推荐使用Supabase托管的PostgreSQL数据库。

6. **外部服务层**：包括邮件服务、云存储服务等第三方服务。

### 3.2 架构图

```mermaid
sequenceDiagram
    participant Client as 前端
    participant FrontendPlugins as 前端插件
    participant Core as 核心层
    participant BackendPlugins as 后端插件
    participant Vercel as Vercel平台
    participant API as Next.js API Routes
    participant LocalDB as 本地PostgreSQL
    participant SupabaseDB as Supabase (PostgreSQL)
    participant External as 外部服务

    Client->>Vercel: HTTP请求
    Vercel->>Core: 核心路由处理
    
    alt 认证请求
        Core->>Core: 处理认证逻辑
        Core-->>Vercel: 认证结果
    else 插件请求
        Core->>FrontendPlugins: 加载前端插件
        FrontendPlugins->>API: 调用插件API
        API->>BackendPlugins: 加载后端插件
        BackendPlugins->>BackendPlugins: 处理业务逻辑
        
        alt 开发/测试环境
            BackendPlugins->>LocalDB: 数据库查询
            LocalDB-->>BackendPlugins: 返回数据
        else 生产环境
            BackendPlugins->>SupabaseDB: 数据库查询
            SupabaseDB-->>BackendPlugins: 返回数据
        end
        
        BackendPlugins-->>API: 处理结果
        API-->>FrontendPlugins: API响应
        FrontendPlugins-->>Core: 前端处理结果
    end
    
    Core-->>Vercel: 最终响应
    Vercel-->>Client: JSON响应
    
    alt 需要发送邮件
        Core->>External: 发送邮件
        External-->>Core: 邮件发送结果
    end
```

### 3.3 核心流程

1. **用户认证流程**：
   - 用户注册/登录
   - 后端生成JWT令牌
   - 前端存储令牌并在后续请求中携带
   - 后端验证令牌有效性

2. **学校筛选流程**：
   - 前端提交筛选条件
   - 后端查询数据库获取符合条件的学校
   - 后端返回学校列表
   - 前端展示学校列表

3. **模考记录流程**：
   - 前端提交模考成绩
   - 后端验证数据并存储
   - 后端计算模考总分和统计数据
   - 前端展示模考记录和统计结果

4. **录取概率评估流程**：
   - 前端请求评估目标学校
   - 后端获取用户模考成绩和学校分数线
   - 后端计算录取概率
   - 前端展示评估结果

## 4. 前端架构

### 4.1 目录结构

```
frontend/
  ├── app/
  │   ├── layout.tsx            # 应用布局
  │   ├── page.tsx              # 首页
  │   ├── api/                  # Next.js API Routes
  │   │   ├── auth/             # 认证相关API（核心模块）
  │   │   └── plugins/          # 插件API路由
  │   ├── auth/                 # 认证相关页面（核心模块）
  │   │   ├── login/page.tsx    # 登录页
  │   │   └── register/page.tsx # 注册页
  ├── core/                     # 核心层
  │   ├── auth/                 # 认证模块
  │   ├── plugin-manager/       # 插件管理
  │   └── services/             # 基础服务
  ├── plugins/                  # 插件层
  │   ├── targets/              # 目标管理插件
  │   │   ├── frontend/         # 前端组件
  │   │   └── backend/          # 后端逻辑
  │   ├── filter/               # 学校筛选插件
  │   │   ├── frontend/         # 前端组件
  │   │   └── backend/          # 后端逻辑
  │   ├── mocks/                # 模考记录插件
  │   │   ├── frontend/         # 前端组件
  │   │   └── backend/          # 后端逻辑
  │   └── eval/                 # 评估分析插件
  │       ├── frontend/         # 前端组件
  │       └── backend/          # 后端逻辑
  ├── components/
  │   ├── ui/                   # Shadcn UI组件
  │   └── layout/               # 布局组件
  ├── lib/
  │   ├── api.ts                # API请求封装
  │   ├── auth.ts               # 认证相关逻辑
  │   ├── plugin.ts             # 插件管理工具
  │   ├── utils.ts              # 工具函数
  │   └── types.ts              # TypeScript类型定义
  ├── hooks/
  │   ├── useAuth.ts            # 认证Hook
  │   └── usePlugin.ts          # 插件管理Hook
  ├── public/                   # 静态资源
  ├── styles/                   # 全局样式
  ├── next.config.js            # Next.js配置
  ├── package.json              # 依赖管理
  └── tsconfig.json             # TypeScript配置
```

### 4.1a Vite项目目录结构（推荐）

```
frontend/
  ├── src/
  │   ├── pages/                 # 路由页面（React Router）
  │   │   ├── Home.tsx
  │   │   ├── auth/
  │   │   │   ├── Login.tsx
  │   │   │   └── Register.tsx
  │   │   ├── targets/           # 目标管理页
  │   │   ├── filter/            # 学校筛选页
  │   │   ├── mocks/             # 模考记录页
  │   │   └── eval/              # 评估分析页
  │   ├── components/
  │   │   ├── ui/                # Shadcn UI组件
  │   │   │   └── shared/        # Shared组件集（锁定最小集）
  │   │   │       ├── AppShell.tsx
  │   │   │       ├── TabShell.tsx
  │   │   │       ├── TabPanel.tsx
  │   │   │       ├── PageHeader.tsx
  │   │   │       ├── SectionCard.tsx
  │   │   │       ├── FilterBar.tsx
  │   │   │       ├── DataTableShell.tsx
  │   │   │       ├── FormSection.tsx
  │   │   │       ├── FormField.tsx
  │   │   │       ├── ConfirmDialog.tsx
  │   │   │       └── states/
  │   │   │           ├── LoadingSkeleton.tsx
  │   │   │           ├── EmptyState.tsx
  │   │   │           └── ErrorState.tsx
  │   │   └── layout/            # 布局组件
  │   ├── plugins/               # 前端插件
  │   ├── core/                  # 核心：auth、plugin-manager、services
  │   ├── lib/
  │   │   ├── api.ts             # 统一Fetcher
  │   │   ├── auth.ts
  │   │   ├── plugin.ts
  │   │   └── types.ts
  │   ├── hooks/
  │   ├── styles/
  │   ├── main.tsx               # 应用入口
  │   └── router.tsx             # 路由入口
  ├── index.html
  ├── vite.config.ts
  ├── package.json
  └── tsconfig.json
```

### 4.2 状态管理

采用React Context API结合useReducer实现全局状态管理，主要管理以下状态：

1. **用户状态**：用户信息、认证状态、JWT令牌
2. **学生信息状态**：所在区、初中类型、当前初中学校、成绩预估
3. **目标学校状态**：目标学校列表、排序方式
4. **模考记录状态**：模考记录列表、统计数据
5. **评估分析状态**：评估结果、概率等级

### 4.3 路由设计

采用React Router实现路由管理，主要路由如下：

| 路由             | 组件                | 功能                     | 认证要求 | 路由分组   |
| ---------------- | ------------------- | ------------------------ | -------- | ---------- |
| `/`              | `page.tsx`          | 首页，重定向到目标管理页 | 是       | 认证路由组 |
| `/auth/login`    | `login/page.tsx`    | 登录页                   | 否       | 公开路由组 |
| `/auth/register` | `register/page.tsx` | 注册页                   | 否       | 公开路由组 |
| `/targets`       | `targets/page.tsx`  | 目标管理页               | 是       | 认证路由组 |
| `/filter`        | `filter/page.tsx`   | 学校筛选页               | 是       | 认证路由组 |
| `/mocks`         | `mocks/page.tsx`    | 模考记录页               | 是       | 认证路由组 |
| `/eval`          | `eval/page.tsx`     | 评估分析页               | 是       | 认证路由组 |
| `/404`           | `404/page.tsx`      | 404错误页面              | 否       | 公开路由组 |
| `/500`           | `500/page.tsx`      | 500错误页面              | 否       | 公开路由组 |

### 4.3.1 路由分组设计

1. **公开路由组**：
   - 包含不需要认证的路由，如登录、注册、404、500页面
   - 路径前缀：`/auth/*`、`/404`、`/500`
   - 访问权限：所有用户可访问

2. **认证路由组**：
   - 包含需要用户登录的核心功能路由
   - 路径前缀：`/targets`、`/filter`、`/mocks`、`/eval`、`/`
   - 访问权限：已登录用户可访问
   - 未登录用户自动重定向到登录页

3. **API路由组**：
   - 包含所有API接口
   - 路径前缀：`/api/*`
   - 访问控制：基于JWT令牌验证

### 4.3.2 多语言支持

实现国际化支持，为不同地区的用户提供本地化体验：

1. **语言支持**：
   - 简体中文（默认）
   - 英文（可选）

2. **实现方案**：
   - Vite 推荐使用 `react-i18next`，在 `src/i18n` 初始化实例并按页面/组件加载命名空间
   - 若采用 Next.js 方案，可使用 `next-intl`
   - 所有用户可见的文本都通过国际化函数包装
   - 支持语言切换，用户可在设置中选择偏好语言

3. **国际化文件**：
   - `messages/zh.json`：简体中文翻译
   - `messages/en.json`：英文翻译

### 4.4 认证保护

所有核心功能页面都需要进行用户登录验证，实现方式如下：

1. **路由保护**：
   - 在React Router层使用受保护Route与高阶组件实现路由级认证保护
   - 基于路由分组的统一认证验证，公开路由组和认证路由组分离
   - 未登录用户自动重定向到登录页面

2. **API请求认证**：
   - 前端API客户端自动添加JWT令牌到请求头
   - 实现响应拦截器，捕获认证失败错误
   - 认证失败时清除本地令牌并重定向到登录页面

3. **全局认证状态管理**：
   - 使用React Context API管理全局认证状态
   - 实现`useAuth` Hook，提供认证状态和操作方法
   - 认证状态变化时自动更新UI和路由状态

4. **认证失败处理**：
   - 前端请求API数据出现认证失败时，捕获401错误
   - 清除本地存储的认证信息
   - 重定向到登录页面，并在登录后返回原请求页面

5. **Token过期处理**：
   - 实现Token过期检测和自动刷新机制
   - Token即将过期时，自动使用刷新令牌获取新Token
   - 刷新失败时，重定向到登录页面

6. **多因素认证支持**：
   - 实现基于TOTP（时间-based一次性密码）的双因素认证
   - 用户可在个人设置中启用/禁用双因素认证
   - 首次登录或敏感操作时要求验证双因素认证码

7. **基于角色的访问控制**：
   - 实现用户角色系统，包括普通用户和管理员角色
   - 基于角色的权限控制，管理员可访问所有功能
   - 普通用户只能访问自己的数据和功能

8. **API速率限制**：
   - 实现API请求速率限制，防止恶意请求和暴力破解
   - 基于IP和用户ID的双重速率限制
   - 超过限制时返回429错误，提示用户稍后重试

### 4.5 数据获取与缓存机制

采用React Query实现数据获取和缓存，结合浏览器本地存储，设计完整的前端缓存机制，确保页面只有在被刷新或数据变更时才更新：

1. **自动缓存**：
   - React Query自动缓存API响应，默认缓存时间为5分钟
   - 缓存键基于查询参数和请求URL，确保缓存的唯一性
   - 支持多级缓存策略，区分不同类型的数据缓存时间

2. **数据变更检测**：
   - 使用React Query的`useQuery`钩子，自动检测数据变更
   - 实现基于时间戳的数据版本控制，确保数据一致性
   - 支持乐观更新，提交数据时立即更新UI，提高用户体验

3. **缓存失效策略**：
   - **手动失效**：当用户执行写操作（如添加、更新、删除数据）时，手动使相关缓存失效
   - **自动失效**：基于时间的缓存过期机制，超过缓存时间自动重新获取数据
   - **依赖失效**：当相关数据变更时，自动使依赖该数据的缓存失效

4. **本地存储缓存**：
   - 使用`localStorage`存储非敏感数据，如学校列表、分数线数据等
   - 使用`sessionStorage`存储会话相关数据，如用户认证状态
   - 实现缓存数据的序列化和反序列化，确保数据结构的完整性

5. **页面刷新检测**：
   - 实现页面刷新时的缓存策略，保留必要的缓存数据
   - 区分硬刷新和软刷新，采用不同的缓存处理策略
   - 支持离线访问，当网络不可用时使用缓存数据

6. **缓存管理**：
   - 实现缓存大小限制，防止缓存占用过多浏览器存储空间
   - 定期清理过期缓存，保持缓存的有效性
   - 提供缓存调试工具，便于开发和测试

7. **缓存预热**：
   - 在应用启动时预加载常用数据，如学校列表、分数线数据等
   - 实现基于用户行为的缓存预热，预测用户可能需要的数据
   - 减少首次加载时间，提高用户体验

8. **缓存监控**：
   - 实现缓存使用情况的监控，包括缓存命中率、缓存大小等
   - 提供缓存性能分析工具，识别缓存瓶颈
   - 基于监控数据调整缓存策略，优化缓存性能

9. **缓存键设计**：
   - 优化缓存键的设计，确保缓存的唯一性和有效性
   - 支持基于用户ID的缓存隔离，确保数据安全性
   - 实现缓存键的版本控制，支持缓存数据的平滑迁移

10. **具体实现方案**：
    - 学校数据：缓存时间1小时，本地存储持久化，应用启动时预加载
    - 用户数据：缓存时间30分钟，会话存储，基于用户ID隔离
    - 模考记录：缓存时间10分钟，实时更新，基于用户行为预热
    - 评估结果：缓存时间5分钟，基于模考记录和学校数据的变更自动失效

### 4.6 组件化设计

采用原子化组件设计，将UI拆分为以下层次：

1. **原子组件**：
   - 按钮、输入框、选择器等基础UI元素
   - 使用Shadcn/ui组件库，确保UI的一致性
   - 支持自定义主题，与Tailwind CSS集成良好

2. **分子组件**：
   - 表单、卡片、列表项等组合UI元素
   - 可复用的业务组件，如学校卡片、模考记录项等
   - 支持响应式设计，适配不同屏幕尺寸

3. **组织组件**：
   - 页面布局、导航栏、标签页等布局UI元素
   - 可复用的布局组件，如侧边栏、顶部导航等
   - 支持深色模式和浅色模式

4. **页面组件**：
   - 完整的页面组件，组合多个组织组件和分子组件
   - 实现页面级的状态管理和数据获取

5. **可复用组件库**：
   - **表格组件**：支持排序、筛选、分页等功能
   - **表单组件**：支持表单验证和错误提示
   - **图表组件**：基于Recharts的可复用图表
   - **模态框组件**：支持自定义内容和动画效果
   - **通知组件**：支持Toast、Alert等通知方式

6. **组件文档化**：
   - 使用Storybook实现组件的文档化
   - 为每个组件提供使用示例和API文档
   - 支持组件的交互式预览和测试

7. **组件命名规范**：
   - 使用PascalCase命名组件
   - 组件目录结构清晰，按功能分类
   - 组件代码遵循TypeScript类型定义

### 4.7 前端与后端交互

采用Fetch API封装的API客户端，主要包括以下功能：

1. **请求拦截**：自动添加JWT令牌到请求头
2. **响应拦截**：统一处理错误响应和认证失效
3. **类型安全**：使用TypeScript类型定义API请求和响应
4. **错误处理**：统一处理网络错误和业务错误
5. **性能优化**：
   - **前端代码分割**：使用Next.js的动态导入，实现组件级别的代码分割
   - **CDN使用**：静态资源通过CDN加速，减少服务器负载
   - **服务器端渲染**：使用Next.js的服务器端渲染，提高首屏加载速度
   - **缓存策略**：实现HTTP缓存头，减少重复请求
   - **网络请求优化**：批量请求、请求合并、取消不必要的请求

6. **API文档**：
   - 使用Swagger或OpenAPI规范实现API文档
   - 为每个API接口提供详细的参数说明和响应示例
   - 支持API接口的交互式测试

### 4.7.1 统一Fetcher设计

为避免各页面重复实现数据请求逻辑，前端提供统一的Fetcher（位于 [api.ts](file:///Users/zhaobomin/Documents/projects/sh_highschools/frontend/lib/api.ts)），统一处理baseURL、认证头、错误解析、超时与重试策略。

1. 基础配置
   - baseURL：通过环境变量`NEXT_PUBLIC_API_BASE_URL`配置，默认`/api/v1`
   - 超时：默认10秒，可通过每次调用的`options.timeoutMs`覆盖
   - 认证：自动从全局认证状态读取JWT并注入`Authorization: Bearer <token>`
   - 取消：支持`AbortController`，通过`options.signal`传入

2. 重试策略
   - 幂等请求（GET/HEAD）：默认开启自动重试，最多3次，指数退避（300ms/600ms/1200ms）
   - 非幂等请求（POST/PUT/DELETE）：默认不重试，可显式开启并限定`retryCount`
   - 对`429/5xx/NETWORK_ERROR`触发重试；`401/403`不重试，交由认证处理

3. 错误解析（与7.3统一异常机制一致）
   - 优先解析后端统一错误格式`{ error: { code, message, details, timestamp } }`
   - 映射错误类型与错误码（如`AUTH_ERROR(4001)`、`NETWORK_ERROR(4006)`、`SERVER_ERROR(5001)`）
   - 401/403：清除本地令牌并重定向登录页；保留原请求路径以便登录后回跳
   - 超时与网络错误：归类为`NETWORK_ERROR(4006)`并提供友好提示

4. 请求流程
   - 组装URL：`baseURL + path`（页面仅传相对路径）
   - 注入Headers：`Content-Type: application/json`、`Authorization`（如有）
   - 执行`fetch`并包裹超时控制
   - 响应处理：2xx返回JSON；非2xx进入统一错误解析与处理

5. 与缓存协作
   - Fetcher专注网络层；缓存由React Query管理
   - 页面使用`useQuery/useMutation`结合统一Fetcher，按4.5节策略控制失效与预热

6. 使用规范
   - 所有模块统一通过Fetcher调用，不直接使用`fetch/axios`
   - API路径一律使用相对路径，禁止页面自行拼接`baseURL`
   - 新增API方法在`lib/api.ts`集中维护，其他模块仅调用

7. 接口约定
   - `get(path, options)`
   - `post(path, body, options)`
   - `put(path, body, options)`
   - `del(path, options)`
   - `options`支持：`timeoutMs`、`retry`、`retryCount`、`retryDelay`、`idempotent`、`signal`

8. 拦截器扩展
   - 前置拦截器：统一参数/Headers处理、指标埋点
   - 后置拦截器：统一错误上报（Sentry）、业务态转换

### 4.7.2 前端请求方法命名与查询键规范
1. 方法命名（动词+资源）
   - 列表：`listSchools`、`listTargets`、`listMockExams`
   - 获取：`getSchoolById`、`getScoreLinesBySchool`
   - 创建：`createTarget`、`createMockExam`
   - 更新：`updateMockExam`
   - 删除：`deleteTarget`、`deleteMockExam`
   - 认证：`authLogin`、`authRefresh`、`authLogout`、`authMe`
2. 查询键（React Query）
   - 统一命名：`["schools:list", params]`、`["targets:list"]`、`["mocks:list", params]`
   - 详情键：`["schools:detail", id]`、`["score-lines:list", { schoolId, params }]`
   - 禁止自由命名，确保缓存与失效一致

## 5. 后端架构

### 5.1 目录结构

```
frontend/
  ├── app/
  │   ├── api/                  # Next.js API Routes
  │   │   ├── auth/             # 认证相关API（核心模块）
  │   │   │   └── route.ts      # 认证路由
  │   │   └── plugins/          # 插件API路由
  │   │       ├── [plugin]/     # 插件动态路由
  │   │           └── [...path]/ # 插件子路由
  │   │               └── route.ts
  ├── core/                     # 核心层
  │   ├── api/                  # 核心API
  │   │   └── auth/             # 认证API
  │   ├── services/             # 核心服务
  │   │   ├── authService.ts    # 认证服务
  │   │   └── pluginService.ts  # 插件管理服务
  │   ├── lib/                  # 核心工具库
  │   │   ├── db.ts             # 数据库连接（Prisma）
  │   │   ├── jwt.ts            # JWT工具
  │   │   └── password.ts       # 密码工具
  │   └── schemas/              # 核心数据验证
  │       └── auth.ts           # 认证相关schema
  ├── plugins/                  # 插件层
  │   ├── targets/              # 目标管理插件
  │   │   ├── frontend/         # 前端组件
  │   │   ├── backend/          # 后端逻辑
  │   │   │   ├── service.ts    # 业务逻辑
  │   │   │   ├── schema.ts     # 数据验证
  │   │   │   └── routes.ts     # API路由
  │   │   └── plugin.json       # 插件配置
  │   ├── filter/               # 学校筛选插件
  │   │   ├── frontend/         # 前端组件
  │   │   ├── backend/          # 后端逻辑
  │   │   │   ├── service.ts    # 业务逻辑
  │   │   │   ├── schema.ts     # 数据验证
  │   │   │   └── routes.ts     # API路由
  │   │   └── plugin.json       # 插件配置
  │   ├── mocks/                # 模考记录插件
  │   │   ├── frontend/         # 前端组件
  │   │   ├── backend/          # 后端逻辑
  │   │   │   ├── service.ts    # 业务逻辑
  │   │   │   ├── schema.ts     # 数据验证
  │   │   │   └── routes.ts     # API路由
  │   │   └── plugin.json       # 插件配置
  │   └── eval/                 # 评估分析插件
  │       ├── frontend/         # 前端组件
  │       ├── backend/          # 后端逻辑
  │       │   ├── service.ts    # 业务逻辑
  │       │   ├── schema.ts     # 数据验证
  │       │   └── routes.ts     # API路由
  │       ├── python/           # Python模块
  │       │   ├── eval_model.py # 概率计算模型
  │       │   └── data_processor.py # 数据处理
  │       └── plugin.json       # 插件配置
  ├── public/                   # 静态资源
  ├── styles/                   # 全局样式
  ├── next.config.js            # Next.js配置
  ├── package.json              # 依赖管理
  ├── tsconfig.json             # TypeScript配置
  ├── plugin.config.js          # 插件配置
  └── .env.local                # 环境变量（本地）
```

### 5.1a FastAPI后端目录结构（推荐）
```
backend/
  ├── app/
  │   ├── main.py                 # FastAPI应用入口
  │   ├── api/                    # 路由按资源分组
  │   │   ├── v1/
  │   │   │   ├── auth.py         # 认证路由
  │   │   │   ├── schools.py      # 学校与分数线路由
  │   │   │   ├── targets.py      # 目标学校路由
  │   │   │   ├── mocks.py        # 模考记录路由
  │   │   │   └── eval.py         # 评估分析路由
  │   ├── core/                   # 核心模块
  │   │   ├── config.py           # 配置与环境变量
  │   │   ├── security.py         # JWT/权限/速率限制
  │   │   └── errors.py           # 统一异常处理
  │   ├── models/                 # SQLAlchemy模型
  │   ├── schemas/                # Pydantic模型
  │   ├── services/               # 业务服务层
  │   ├── db/                     # 数据库连接与会话
  │   │   ├── session.py
  │   │   └── init.sql
  │   └── plugins/                # 后端插件（按模块扩展）
  ├── tests/                      # Pytest测试
  ├── requirements.txt            # Python依赖
  └── README.md                   # 后端说明
```

### 5.2 核心模块

1. **认证模块**：处理用户注册、登录、注销、密码重置等核心功能，作为系统基础组件，实现JWT令牌的签发和验证
2. **插件管理模块**：负责插件的注册、加载、初始化和管理，提供插件API接口，集成认证验证
3. **基础服务模块**：提供数据库连接、缓存管理、配置管理等基础服务
4. **认证中间件**：全局认证中间件，验证所有核心API请求的JWT令牌有效性，未认证请求返回401错误

### 5.3 插件模块

1. **学生信息插件**：管理学生基本信息和成绩预估
2. **学校插件**：管理学校数据、分数线数据和学校筛选
3. **目标学校插件**：管理用户的目标学校列表
4. **模考记录插件**：管理用户的模考成绩和统计数据
5. **评估分析插件**：基于模考成绩和学校分数线计算录取概率

### 5.4 业务逻辑

1. **核心业务逻辑**：
   - **认证逻辑**：用户注册、登录、注销、密码重置等
   - **插件管理逻辑**：插件的注册、加载、初始化和管理
   - **安全机制**：JWT令牌的签发和验证、密码的加密存储、请求限流和防暴力破解

2. **插件业务逻辑**：
   - **学生信息逻辑**：学生基本信息和成绩预估的管理
   - **学校逻辑**：学校数据、分数线数据的管理和学校筛选
   - **目标学校逻辑**：用户目标学校列表的管理
   - **模考记录逻辑**：用户模考成绩的管理和统计分析
   - **评估分析逻辑**：基于模考成绩和学校分数线计算录取概率
     - 基于正态分布模型计算达到分数线的概率
     - 考虑模考成绩的均值和标准差
     - 考虑学校分数线的历年变化
     - 考虑不同学校的竞争激烈程度

## 6. 数据库设计

### 6.1 数据库表结构

#### 高中学校表（schools）
| 字段名     | 数据类型     | 描述                                 | 约束                      |
| ---------- | ------------ | ------------------------------------ | ------------------------- |
| code       | VARCHAR(20)  | 学校代码（主键）                     | PRIMARY KEY               |
| name       | VARCHAR(100) | 学校名称                             | NOT NULL                  |
| district   | VARCHAR(50)  | 所在区县                             | NOT NULL                  |
| type       | VARCHAR(20)  | 学校类型（市重点、区重点、一般高中） | NOT NULL                  |
| full_type  | VARCHAR(100) | 完整学校类型描述                     |                           |
| address    | VARCHAR(200) | 学校地址                             |                           |
| phone      | VARCHAR(20)  | 联系电话                             |                           |
| email      | VARCHAR(100) | 电子邮箱                             |                           |
| features   | TEXT         | 学校特色                             |                           |
| faculty    | TEXT         | 师资力量                             |                           |
| note       | TEXT         | 备注信息                             |                           |
| created_at | TIMESTAMP    | 创建时间                             | DEFAULT CURRENT_TIMESTAMP |
| updated_at | TIMESTAMP    | 更新时间                             | DEFAULT CURRENT_TIMESTAMP |

#### 分数线表（score_lines）
| 字段名      | 数据类型     | 描述                       | 约束                      |
| ----------- | ------------ | -------------------------- | ------------------------- |
| id          | UUID         | 分数线ID（主键）           | PRIMARY KEY               |
| school_code | VARCHAR(20)  | 学校代码（外键）           | REFERENCES schools(code)  |
| district    | VARCHAR(50)  | 区县名称                   | NOT NULL                  |
| score       | DECIMAL(5,1) | 录取分数线                 | NOT NULL                  |
| score_upper | DECIMAL(5,1) | 分数上限（达成率判断依据） |                           |
| score_lower | DECIMAL(5,1) | 分数下限（达成率判断依据） |                           |
| year        | INTEGER      | 年份                       | NOT NULL                  |
| created_at  | TIMESTAMP    | 创建时间                   | DEFAULT CURRENT_TIMESTAMP |
| updated_at  | TIMESTAMP    | 更新时间                   | DEFAULT CURRENT_TIMESTAMP |

#### 初中学校表（middle_schools）
| 字段名     | 数据类型     | 描述                  | 约束                      |
| ---------- | ------------ | --------------------- | ------------------------- |
| code       | VARCHAR(20)  | 学校代码（主键）      | PRIMARY KEY               |
| name       | VARCHAR(100) | 初中学校名称          | NOT NULL                  |
| district   | VARCHAR(50)  | 所在区县              | NOT NULL                  |
| type       | VARCHAR(20)  | 学校类型（公办/民办） | NOT NULL                  |
| created_at | TIMESTAMP    | 创建时间              | DEFAULT CURRENT_TIMESTAMP |
| updated_at | TIMESTAMP    | 更新时间              | DEFAULT CURRENT_TIMESTAMP |

#### 到校名额及录取分数线表（school_seats）
| 字段名                    | 数据类型     | 描述                 | 约束                            |
| ------------------------- | ------------ | -------------------- | ------------------------------- |
| id                        | UUID         | 名额ID（主键）       | PRIMARY KEY                     |
| middle_school_code        | VARCHAR(20)  | 初中学校代码（外键） | REFERENCES middle_schools(code) |
| high_school_code          | VARCHAR(20)  | 高中学校代码（外键） | REFERENCES schools(code)        |
| seats                     | INTEGER      | 到校名额数量         | NOT NULL                        |
| year                      | INTEGER      | 年份                 | NOT NULL                        |
| total_admission_score     | DECIMAL(5,1) | 到校总分分数线       |                                 |
| chinese_admission_score   | DECIMAL(5,1) | 语文分数线           |                                 |
| math_admission_score      | DECIMAL(5,1) | 数学分数线           |                                 |
| english_admission_score   | DECIMAL(5,1) | 英语分数线           |                                 |
| physics_admission_score   | DECIMAL(5,1) | 物理分数线           |                                 |
| chemistry_admission_score | DECIMAL(5,1) | 化学分数线           |                                 |
| politics_admission_score  | DECIMAL(5,1) | 道法分数线           |                                 |
| history_admission_score   | DECIMAL(5,1) | 历史分数线           |                                 |
| created_at                | TIMESTAMP    | 创建时间             | DEFAULT CURRENT_TIMESTAMP       |
| updated_at                | TIMESTAMP    | 更新时间             | DEFAULT CURRENT_TIMESTAMP       |

#### 到区名额及录取分数线表（district_seats）
| 字段名                    | 数据类型     | 描述                 | 约束                      |
| ------------------------- | ------------ | -------------------- | ------------------------- |
| id                        | UUID         | 名额ID（主键）       | PRIMARY KEY               |
| district                  | VARCHAR(50)  | 区县名称             | NOT NULL                  |
| high_school_code          | VARCHAR(20)  | 高中学校代码（外键） | REFERENCES schools(code)  |
| seats                     | INTEGER      | 到区名额数量         | NOT NULL                  |
| year                      | INTEGER      | 年份                 | NOT NULL                  |
| total_admission_score     | DECIMAL(5,1) | 到区总分分数线       |                           |
| chinese_admission_score   | DECIMAL(5,1) | 语文分数线           |                           |
| math_admission_score      | DECIMAL(5,1) | 数学分数线           |                           |
| english_admission_score   | DECIMAL(5,1) | 英语分数线           |                           |
| physics_admission_score   | DECIMAL(5,1) | 物理分数线           |                           |
| chemistry_admission_score | DECIMAL(5,1) | 化学分数线           |                           |
| politics_admission_score  | DECIMAL(5,1) | 道法分数线           |                           |
| history_admission_score   | DECIMAL(5,1) | 历史分数线           |                           |
| created_at                | TIMESTAMP    | 创建时间             | DEFAULT CURRENT_TIMESTAMP |
| updated_at                | TIMESTAMP    | 更新时间             | DEFAULT CURRENT_TIMESTAMP |

#### 平行志愿录取分数线表（parallel_admission_scores）
| 字段名                    | 数据类型     | 描述                 | 约束                      |
| ------------------------- | ------------ | -------------------- | ------------------------- |
| id                        | UUID         | ID（主键）           | PRIMARY KEY               |
| high_school_code          | VARCHAR(20)  | 高中学校代码（外键） | REFERENCES schools(code)  |
| district                  | VARCHAR(50)  | 区县名称             | NOT NULL                  |
| total_admission_score     | DECIMAL(5,1) | 平行志愿总分分数线   | NOT NULL                  |
| chinese_admission_score   | DECIMAL(5,1) | 语文分数线           |                           |
| math_admission_score      | DECIMAL(5,1) | 数学分数线           |                           |
| english_admission_score   | DECIMAL(5,1) | 英语分数线           |                           |
| physics_admission_score   | DECIMAL(5,1) | 物理分数线           |                           |
| chemistry_admission_score | DECIMAL(5,1) | 化学分数线           |                           |
| politics_admission_score  | DECIMAL(5,1) | 道法分数线           |                           |
| history_admission_score   | DECIMAL(5,1) | 历史分数线           |                           |
| year                      | INTEGER      | 年份                 | NOT NULL                  |
| created_at                | TIMESTAMP    | 创建时间             | DEFAULT CURRENT_TIMESTAMP |
| updated_at                | TIMESTAMP    | 更新时间             | DEFAULT CURRENT_TIMESTAMP |

#### 冗余字段说明
> 注：为了优化查询性能，建议在实际实现中根据具体查询场景，考虑使用视图或联合查询来获取关联数据，而不是完全依赖冗余字段。对于频繁查询的场景，可以保留必要的冗余字段以提高性能。

#### 用户表（users）
| 字段名               | 数据类型     | 描述                           | 约束                      |
| -------------------- | ------------ | ------------------------------ | ------------------------- |
| id                   | UUID         | 用户ID（主键）                 | PRIMARY KEY               |
| username             | VARCHAR(50)  | 用户名                         | UNIQUE NOT NULL           |
| email                | VARCHAR(100) | 邮箱                           | UNIQUE NOT NULL           |
| email_verified       | BOOLEAN      | 邮箱验证状态                   | DEFAULT FALSE             |
| password_hash        | VARCHAR(100) | 密码哈希                       | NOT NULL                  |
| password_reset_token | VARCHAR(100) | 密码重置令牌                   |                           |
| login_attempts       | INTEGER      | 登录尝试次数                   | DEFAULT 0                 |
| last_login_at        | TIMESTAMP    | 最后登录时间                   |                           |
| created_at           | TIMESTAMP    | 创建时间                       | DEFAULT CURRENT_TIMESTAMP |
| updated_at           | TIMESTAMP    | 更新时间                       | DEFAULT CURRENT_TIMESTAMP |
| refresh_token_hash   | VARCHAR(100) | 刷新令牌哈希                   |                           |
| token_expires_at     | TIMESTAMP    | 令牌过期时间                   |                           |
| active_sessions      | JSONB        | 活跃会话信息（多设备登录管理） |                           |

##### 6.1a 安全字段修正建议
- 认证令牌签名应使用服务端全局密钥管理（不建议为每个用户存储`jwt_secret`）
- 刷新令牌应存储哈希而非明文：用`refresh_token_hash`替换`refresh_token`
- 多设备会话建议记录设备指纹与最近活跃时间，并支持撤销单设备会话

#### 学生信息表（student_profiles）
| 字段名             | 数据类型     | 描述                   | 约束                            |
| ------------------ | ------------ | ---------------------- | ------------------------------- |
| id                 | UUID         | 学生信息ID（主键）     | PRIMARY KEY                     |
| user_id            | UUID         | 用户ID（外键）         | REFERENCES users(id) UNIQUE     |
| district           | VARCHAR(50)  | 所在区县               | NOT NULL                        |
| junior_type        | VARCHAR(20)  | 初中类型（公办、民办） | NOT NULL                        |
| middle_school_code | VARCHAR(20)  | 初中学校代码（外键）   | REFERENCES middle_schools(code) |
| stable_score       | DECIMAL(5,1) | 稳定分                 | NOT NULL                        |
| high_score         | DECIMAL(5,1) | 上限分                 | NOT NULL                        |
| low_score          | DECIMAL(5,1) | 下限分                 | NOT NULL                        |
| created_at         | TIMESTAMP    | 创建时间               | DEFAULT CURRENT_TIMESTAMP       |
| updated_at         | TIMESTAMP    | 更新时间               | DEFAULT CURRENT_TIMESTAMP       |

#### 目标学校表（target_schools）
| 字段名      | 数据类型     | 描述                 | 约束                         |
| ----------- | ------------ | -------------------- | ---------------------------- |
| id          | UUID         | 目标ID（主键）       | PRIMARY KEY                  |
| user_id     | UUID         | 用户ID（外键）       | REFERENCES users(id)         |
| school_code | VARCHAR(20)  | 学校代码（外键）     | REFERENCES schools(code)     |
| school_name | VARCHAR(100) | 学校名称（冗余存储） | NOT NULL                     |
| created_at  | TIMESTAMP    | 创建时间             | DEFAULT CURRENT_TIMESTAMP    |
| updated_at  | TIMESTAMP    | 更新时间             | DEFAULT CURRENT_TIMESTAMP    |
|             |              |                      | UNIQUE(user_id, school_code) |

#### 模考记录表（mock_exams）
| 字段名          | 数据类型     | 描述           | 约束                      |
| --------------- | ------------ | -------------- | ------------------------- |
| id              | UUID         | 模考ID（主键） | PRIMARY KEY               |
| user_id         | UUID         | 用户ID（外键） | REFERENCES users(id)      |
| name            | VARCHAR(100) | 模考名称       | NOT NULL                  |
| exam_date       | DATE         | 考试日期       | NOT NULL                  |
| chinese_score   | DECIMAL(5,1) | 语文成绩       |                           |
| math_score      | DECIMAL(5,1) | 数学成绩       |                           |
| english_score   | DECIMAL(5,1) | 英语成绩       |                           |
| physics_score   | DECIMAL(5,1) | 物理成绩       |                           |
| chemistry_score | DECIMAL(5,1) | 化学成绩       |                           |
| politics_score  | DECIMAL(5,1) | 道法成绩       |                           |
| history_score   | DECIMAL(5,1) | 历史成绩       |                           |
| total_score     | DECIMAL(5,1) | 总分           | NOT NULL                  |
| created_at      | TIMESTAMP    | 创建时间       | DEFAULT CURRENT_TIMESTAMP |
| updated_at      | TIMESTAMP    | 更新时间       | DEFAULT CURRENT_TIMESTAMP |

### 6.2 数据库索引

| 表名                      | 索引字段                                   | 索引类型   | 用途                   |
| ------------------------- | ------------------------------------------ | ---------- | ---------------------- |
| schools                   | district, type                             | 复合索引   | 优化按区域和类型的查询 |
| score_lines               | school_code, district, year                | 复合索引   | 优化多条件查询         |
| score_lines               | year                                       | 单字段索引 | 优化按年份的查询       |
| middle_schools            | district                                   | 单字段索引 | 优化按区域的查询       |
| school_seats              | middle_school_code, high_school_code, year | 复合索引   | 优化多条件查询         |
| district_seats            | district, high_school_code, year           | 复合索引   | 优化多条件查询         |
| parallel_admission_scores | high_school_code, district, year           | 复合索引   | 优化多条件查询         |
| users                     | email, username                            | 唯一索引   | 优化登录查询           |
| student_profiles          | user_id                                    | 唯一索引   | 确保一对一关系         |
| student_profiles          | middle_school_code                         | 单字段索引 | 优化按初中学校的查询   |
| target_schools            | user_id, school_code                       | 复合索引   | 优化查询               |
| target_schools            | user_id, school_code                       | 唯一索引   | 确保用户目标学校唯一性 |
| mock_exams                | user_id, exam_date                         | 复合索引   | 优化按用户和时间的查询 |
| mock_exams                | total_score                                | 单字段索引 | 优化按分数的查询       |

### 6.3 数据库关系

```mermaid
erDiagram
    USERS ||--o{ STUDENT_PROFILES : has (CASCADE)
    USERS ||--o{ TARGET_SCHOOLS : has (CASCADE)
    USERS ||--o{ MOCK_EXAMS : has (CASCADE)
    STUDENT_PROFILES }o--|| MIDDLE_SCHOOLS : attends (SET NULL)
    TARGET_SCHOOLS }o--|| SCHOOLS : targets (SET NULL)
    MOCK_EXAMS }o--|| USERS : belongs_to (CASCADE)
    SCHOOLS ||--o{ SCORE_LINES : has (CASCADE)
    SCHOOLS ||--o{ SCHOOL_SEATS : has (CASCADE)
    SCHOOLS ||--o{ DISTRICT_SEATS : has (CASCADE)
    SCHOOLS ||--o{ PARALLEL_ADMISSION_SCORES : has (CASCADE)
    MIDDLE_SCHOOLS ||--o{ SCHOOL_SEATS : provides (CASCADE)
```

#### 外键约束级联操作说明
| 外键关系                            | 级联操作 | 说明                                             |
| ----------------------------------- | -------- | ------------------------------------------------ |
| users → student_profiles            | CASCADE  | 用户删除时，关联的学生信息也删除                 |
| users → target_schools              | CASCADE  | 用户删除时，关联的目标学校也删除                 |
| users → mock_exams                  | CASCADE  | 用户删除时，关联的模考记录也删除                 |
| middle_schools → student_profiles   | SET NULL | 初中学校删除时，学生信息中的初中学校代码设为NULL |
| schools → target_schools            | SET NULL | 高中学校删除时，目标学校中的学校代码设为NULL     |
| users → mock_exams                  | CASCADE  | 用户删除时，关联的模考记录也删除                 |
| schools → score_lines               | CASCADE  | 高中学校删除时，关联的分数线也删除               |
| schools → school_seats              | CASCADE  | 高中学校删除时，关联的到校名额也删除             |
| schools → district_seats            | CASCADE  | 高中学校删除时，关联的到区名额也删除             |
| schools → parallel_admission_scores | CASCADE  | 高中学校删除时，关联的平行志愿分数线也删除       |
| middle_schools → school_seats       | CASCADE  | 初中学校删除时，关联的到校名额也删除             |

## 6. API接口设计
### 6.0 API风格与命名规范（AI友好）

1. 路径与版本
   - 统一前缀：`/api/v1`
   - REST资源命名使用复数英文：`/schools`、`/mock-exams`
   - 子资源：`/schools/{id}/score-lines`

2. 字段与格式
   - ID统一使用UUID（字符串）
   - 时间统一ISO 8601（UTC，e.g. `2026-01-28T12:00:00Z`）
   - 数值类型保持精度（分数使用`number`/DECIMAL），不传字符串数字
   - 字段命名统一使用`snake_case`在后端，前端映射为`camelCase`

3. 请求与响应
   - 成功响应统一包裹为纯数据对象或数组（无多余包装）
   - 错误响应统一采用：`{ "error": { "code": <int>, "message": <string>, "details": <object|null>, "timestamp": <string> } }`
   - 分页规范：`?page=1&size=20`，响应返回`X-Total-Count`与`Link`头（RFC 5988）
   - 过滤与排序：查询参数统一使用`district=...&type=...&sort=score:desc`

4. 认证与权限
   - 统一使用`Authorization: Bearer <JWT>`，后端中间件校验
   - 401/403错误不重试，由前端统一处理并重定向登录

5. OpenAPI约定（FastAPI）
   - 所有入参/出参使用`Pydantic`模型，并声明`response_model`
   - 按资源分`tags`，为每个接口提供`summary`与`description`
   - 启用`/docs`与`/openapi.json`，前端使用代码生成工具（如`openapi-typescript`）生成类型

6. 前端类型绑定
   - 前端请求统一走Fetcher（4.7.1），类型引用OpenAPI生成的TS接口
   - 严禁页面内定义与后端不一致的临时类型

#### 6.0.1 错误码字典（稳定约束）
- 4001 AUTH_ERROR：未登录/令牌无效/过期
- 4002 PERMISSION_ERROR：权限不足
- 4003 VALIDATION_ERROR：参数校验失败（字段/格式/范围）
- 4004 RESOURCE_NOT_FOUND：资源不存在或已删除
- 4005 BUSINESS_ERROR：业务不满足（如重复、冲突）
- 4006 NETWORK_ERROR：网络/超时/连接失败（由前端归类）
- 429 RATE_LIMITED：超过速率限制（返回`Retry-After`）
- 5001 SERVER_ERROR：服务器内部错误
- 5002 PLUGIN_ERROR：插件执行错误

错误响应示例：
```
{ "error": { "code": 4003, "message": "参数校验失败", "details": { "field": "email", "reason": "invalid_format" }, "timestamp": "2026-01-28T12:00:00Z" } }
```

#### 6.0.2 分页与链接头（固定格式）
- 请求：`?page=<int>&size=<int>&sort=<field>:<asc|desc>`
- 响应头：
  - `X-Total-Count: <int>`
  - `Link: <url>; rel="next", <url>; rel="prev", <url>; rel="first", <url>; rel="last"`
- 响应体：返回当前页数据数组（不包裹分页信息）

#### 6.0.3 过滤与排序约束
- 过滤字段：`district`、`type`、`year`、`school_id` 等明确枚举
- 操作符：仅支持等值、集合（`in` 用逗号分隔）、范围（`year_min/year_max`）
- 排序字段：默认`score`或`created_at`；方向`asc|desc`

#### 6.0.4 OpenAPI生成与命名规则
- `tags`按资源：`Auth`、`Schools`、`ScoreLines`、`Targets`、`Mocks`、`Eval`
- `operationId`命名：`authLogin`、`schoolsList`、`scoreLinesBySchool`、`targetsCreate`、`mocksUpdate` 等
- 路径参数统一：`{id}`、`{school_id}`；不混用大小写或缩写
- 前端使用`openapi-typescript`生成`types`与`client`，文件位于`src/lib/types.ts`

#### 6.0.5 认证中间件契约
- 认证头：`Authorization: Bearer <access_token>`
- 过期与刷新：`/api/v1/auth/refresh`使用`refresh_token`返回新`access_token`
- 401处理：前端清令牌与重定向登录；保留原路径以便回跳

#### 6.0.6 幂等与请求ID
- GET/HEAD为幂等，默认可重试
- POST/PUT/DELETE默认不重试；支持可选`Idempotency-Key`头保证服务端幂等（业务场景需要时启用）



| API路径                      | 方法     | 模块/文件                       | 类型     | 功能描述          | 请求体 (JSON)                                            | 成功响应 (200 OK)                                                                                           | 认证要求 | 速率限制  |
| ---------------------------- | -------- | ------------------------------- | -------- | ----------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | -------- | --------- |
| `/api/v1/auth/register`      | `POST`   | `core/api/v1/auth/route.ts`     | `Router` | 用户注册          | `{"username": "...", "email": "...", "password": "..."}` | `{"id": "...", "username": "...", "email": "...", "access_token": "...", "token_type": "bearer"}`           | 否       | 10次/分钟 |
| `/api/v1/auth/login`         | `POST`   | `core/api/v1/auth/route.ts`     | `Router` | 用户登录          | `{"email": "...", "password": "..."}`                    | `{"access_token": "...", "token_type": "bearer", "user": {"id": "...", "username": "...", "email": "..."}}` | 否       | 10次/分钟 |
| `/api/v1/auth/logout`        | `POST`   | `core/api/v1/auth/route.ts`     | `Router` | 用户登出          | N/A                                                      | `{"message": "Successfully logged out"}`                                                                    | 是       | 无限制    |
| `/api/v1/auth/me`            | `GET`    | `core/api/v1/auth/route.ts`     | `Router` | 获取当前用户信息  | N/A                                                      | `{"id": "...", "username": "...", "email": "...", "email_verified": true, "role": "user"}`                  | 是       | 无限制    |
| `/api/v1/auth/refresh`       | `POST`   | `core/api/v1/auth/route.ts`     | `Router` | 刷新JWT令牌       | `{"refresh_token": "..."}`                               | `{"access_token": "...", "token_type": "bearer"}`                                                           | 是       | 无限制    |
| `/api/v1/auth/verify`        | `POST`   | `core/api/v1/auth/route.ts`     | `Router` | 验证JWT令牌有效性 | `{"token": "..."}`                                       | `{"valid": true, "user_id": "..."}`                                                                         | 是       | 无限制    |
| `/api/v1/auth/sessions`      | `GET`    | `core/api/v1/auth/route.ts`     | `Router` | 获取活跃会话列表  | N/A                                                      | `[{"id": "...", "device": "...", "ip": "...", "last_active": "..."}]`                                       | 是       | 无限制    |
| `/api/v1/auth/sessions/{id}` | `DELETE` | `core/api/v1/auth/route.ts`     | `Router` | 注销指定会话      | N/A                                                      | `{"message": "Session deleted"}`                                                                            | 是       | 无限制    |
| `/api/v1/plugins`            | `GET`    | `core/api/v1/plugins/route.ts`  | `Router` | 获取插件列表      | N/A                                                      | `[{"id": "targets", "name": "目标管理", "version": "1.0.0", "status": "active"}]`                           | 是       | 无限制    |
| `/api/v1/plugins/{id}`       | `GET`    | `core/api/v1/plugins/route.ts`  | `Router` | 获取插件详情      | N/A                                                      | `{"id": "targets", "name": "目标管理", "version": "1.0.0", "status": "active", "routes": [...]}`            | 是       | 无限制    |
| `/api/v1/auth/2fa/setup`     | `POST`   | `core/api/v1/auth/2fa/route.ts` | `Router` | 设置双因素认证    | N/A                                                      | `{"secret": "...", "qr_code": "..."}`                                                                       | 是       | 5次/分钟  |
| `/api/v1/auth/2fa/verify`    | `POST`   | `core/api/v1/auth/2fa/route.ts` | `Router` | 验证双因素认证码  | `{"code": "..."}`                                        | `{"verified": true}`                                                                                        | 是       | 10次/分钟 |
| `/api/v1/auth/2fa/disable`   | `POST`   | `core/api/v1/auth/2fa/route.ts` | `Router` | 禁用双因素认证    | `{"password": "..."}`                                    | `{"disabled": true}`                                                                                        | 是       | 5次/分钟  |

### 6.2 插件API接口

插件API接口采用动态路由方式，格式为 `/api/v1/plugins/{plugin}/{...path}`，具体插件的API路由由插件自身定义。以下是各插件的API接口示例：

#### 学生信息插件
| API路径                           | 方法  | 模块/文件                           | 类型     | 功能描述     | 请求体 (JSON)                                                                                                                    | 成功响应 (200 OK)                                                                                                                                               | 认证要求 | 速率限制  |
| --------------------------------- | ----- | ----------------------------------- | -------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------- |
| `/api/v1/plugins/student/profile` | `GET` | `plugins/student/backend/routes.ts` | `Router` | 获取学生信息 | N/A                                                                                                                              | `{"id": "...", "user_id": "...", "district": "...", "junior_type": "...", "middle_school_id": "...", "stable_score": 690, "high_score": 705, "low_score": 675}` | 是       | 无限制    |
| `/api/v1/plugins/student/profile` | `PUT` | `plugins/student/backend/routes.ts` | `Router` | 更新学生信息 | `{"district": "...", "junior_type": "...", "middle_school_id": "...", "stable_score": 690, "high_score": 705, "low_score": 675}` | `{"id": "...", "user_id": "...", "district": "...", "junior_type": "...", "middle_school_id": "...", "stable_score": 690, "high_score": 705, "low_score": 675}` | 是       | 20次/分钟 |

#### 学校插件
| API路径                                           | 方法  | 模块/文件                          | 类型     | 功能描述                         | 请求体 (JSON)                      | 成功响应 (200 OK)                                                                                                                                                                                         | 认证要求 | 速率限制 |
| ------------------------------------------------- | ----- | ---------------------------------- | -------- | -------------------------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- |
| `/api/v1/plugins/school/schools`                  | `GET` | `plugins/school/backend/routes.ts` | `Router` | 获取学校列表，支持筛选           | N/A (查询参数: `district`, `type`) | `[{"id": "...", "name": "...", "code": "...", "district": "...", "type": "...", "full_type": "..."}]`                                                                                                     | 是       | 无限制   |
| `/api/v1/plugins/school/schools/{id}`             | `GET` | `plugins/school/backend/routes.ts` | `Router` | 获取学校详情                     | N/A                                | `{"id": "...", "name": "...", "code": "...", "district": "...", "type": "...", "full_type": "...", "address": "...", "phone": "...", "email": "...", "features": "...", "faculty": "...", "note": "..."}` | 是       | 无限制   |
| `/api/v1/plugins/school/schools/{id}/score-lines` | `GET` | `plugins/school/backend/routes.ts` | `Router` | 获取学校分数线                   | N/A (查询参数: `district`, `year`) | `[{"id": "...", "school_id": "...", "school_name": "...", "district": "...", "score": 700, "score_upper": 710, "score_lower": 690, "year": 2025}]`                                                        | 是       | 无限制   |
| `/api/v1/plugins/school/middle-schools`           | `GET` | `plugins/school/backend/routes.ts` | `Router` | 获取初中学校列表，支持按区县筛选 | N/A (查询参数: `district`)         | `[{"id": "...", "name": "...", "district": "...", "type": "..."}]`                                                                                                                                        | 是       | 无限制   |

#### 目标学校插件
| API路径                                | 方法     | 模块/文件                           | 类型     | 功能描述         | 请求体 (JSON)          | 成功响应 (200 OK)                                                                                  | 认证要求 | 速率限制  |
| -------------------------------------- | -------- | ----------------------------------- | -------- | ---------------- | ---------------------- | -------------------------------------------------------------------------------------------------- | -------- | --------- |
| `/api/v1/plugins/targets/targets`      | `GET`    | `plugins/targets/backend/routes.ts` | `Router` | 获取目标学校列表 | N/A                    | `[{"id": "...", "user_id": "...", "school_id": "...", "school_name": "...", "created_at": "..."}]` | 是       | 无限制    |
| `/api/v1/plugins/targets/targets`      | `POST`   | `plugins/targets/backend/routes.ts` | `Router` | 添加目标学校     | `{"school_id": "..."}` | `{"id": "...", "user_id": "...", "school_id": "...", "school_name": "...", "created_at": "..."}`   | 是       | 20次/分钟 |
| `/api/v1/plugins/targets/targets/{id}` | `DELETE` | `plugins/targets/backend/routes.ts` | `Router` | 删除目标学校     | N/A                    | `{"message": "Target school deleted"}`                                                             | 是       | 20次/分钟 |
| `/api/v1/plugins/targets/targets`      | `DELETE` | `plugins/targets/backend/routes.ts` | `Router` | 清空目标学校     | N/A                    | `{"message": "All target schools deleted"}`                                                        | 是       | 10次/分钟 |

#### 模考记录插件
| API路径                                  | 方法     | 模块/文件                         | 类型     | 功能描述         | 请求体 (JSON)                                                                                                                                                                                       | 成功响应 (200 OK)                                                                                                                                                                                                                                                             | 认证要求 | 速率限制  |
| ---------------------------------------- | -------- | --------------------------------- | -------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------- |
| `/api/v1/plugins/mocks/mock-exams`       | `GET`    | `plugins/mocks/backend/routes.ts` | `Router` | 获取模考记录列表 | N/A                                                                                                                                                                                                 | `[{"id": "...", "user_id": "...", "name": "一模", "exam_date": "2025-01-01", "chinese_score": 130, "math_score": 140, "english_score": 135, "physics_score": 65, "chemistry_score": 45, "politics_score": 28, "history_score": 27, "total_score": 670, "created_at": "..."}]` | 是       | 无限制    |
| `/api/v1/plugins/mocks/mock-exams`       | `POST`   | `plugins/mocks/backend/routes.ts` | `Router` | 添加模考记录     | `{"name": "一模", "exam_date": "2025-01-01", "chinese_score": 130, "math_score": 140, "english_score": 135, "physics_score": 65, "chemistry_score": 45, "politics_score": 28, "history_score": 27}` | `{"id": "...", "user_id": "...", "name": "一模", "exam_date": "2025-01-01", "chinese_score": 130, "math_score": 140, "english_score": 135, "physics_score": 65, "chemistry_score": 45, "politics_score": 28, "history_score": 27, "total_score": 670, "created_at": "..."}`   | 是       | 20次/分钟 |
| `/api/v1/plugins/mocks/mock-exams/{id}`  | `PUT`    | `plugins/mocks/backend/routes.ts` | `Router` | 更新模考记录     | `{"name": "一模", "exam_date": "2025-01-01", "chinese_score": 130, "math_score": 140, "english_score": 135, "physics_score": 65, "chemistry_score": 45, "politics_score": 28, "history_score": 27}` | `{"id": "...", "user_id": "...", "name": "一模", "exam_date": "2025-01-01", "chinese_score": 130, "math_score": 140, "english_score": 135, "physics_score": 65, "chemistry_score": 45, "politics_score": 28, "history_score": 27, "total_score": 670, "created_at": "..."}`   | 是       | 20次/分钟 |
| `/api/v1/plugins/mocks/mock-exams/{id}`  | `DELETE` | `plugins/mocks/backend/routes.ts` | `Router` | 删除模考记录     | N/A                                                                                                                                                                                                 | `{"message": "Mock exam deleted"}`                                                                                                                                                                                                                                            | 是       | 20次/分钟 |
| `/api/v1/plugins/mocks/mock-exams/stats` | `GET`    | `plugins/mocks/backend/routes.ts` | `Router` | 获取模考统计数据 | N/A                                                                                                                                                                                                 | `{"n": 3, "mean": 675, "std": 15, "min": 660, "max": 690, "median": 675}`                                                                                                                                                                                                     | 是       | 无限制    |

#### 评估分析插件
| API路径                                       | 方法  | 模块/文件                        | 类型     | 功能描述               | 请求体 (JSON)               | 成功响应 (200 OK)                                                                                                                                              | 认证要求 | 速率限制 |
| --------------------------------------------- | ----- | -------------------------------- | -------- | ---------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- |
| `/api/v1/plugins/eval/evaluation/targets`     | `GET` | `plugins/eval/backend/routes.ts` | `Router` | 获取目标学校评估结果   | N/A                         | `[{"id": "...", "school_id": "...", "school_name": "...", "probability": 0.85, "category": "保", "score_threshold": 700, "mean_score": 690, "std_score": 15}]` | 是       | 无限制   |
| `/api/v1/plugins/eval/evaluation/probability` | `GET` | `plugins/eval/backend/routes.ts` | `Router` | 计算特定学校的录取概率 | N/A (查询参数: `school_id`) | `{"school_id": "...", "school_name": "...", "probability": 0.85, "category": "保", "score_threshold": 700, "mean_score": 690, "std_score": 15}`                | 是       | 无限制   |

## 7. 前端与后端交互

### 7.1 交互流程图

```mermaid
sequenceDiagram
    participant Client as 前端
    participant FrontendPlugins as 前端插件
    participant Core as 核心层
    participant BackendPlugins as 后端插件
    participant API as Next.js API Routes
    participant DB as 数据库

    Client->>Core: POST /api/auth/login (email, password)
    Core->>DB: SELECT * FROM users WHERE email = ?
    alt 用户存在且密码正确
        DB-->>Core: 返回用户信息
        Core->>Core: 生成JWT令牌
        Core-->>Client: 200 OK { "access_token": "...", "user": {...} }
        Client->>Client: 存储JWT令牌
        
        Client->>Core: 加载目标管理插件
        Core->>FrontendPlugins: 初始化目标管理插件
        FrontendPlugins->>API: GET /api/plugins/targets/targets (Authorization: Bearer ...)
        API->>BackendPlugins: 加载目标管理插件后端逻辑
        BackendPlugins->>DB: SELECT * FROM target_schools WHERE user_id = ?
        DB-->>BackendPlugins: 返回目标学校列表
        BackendPlugins-->>API: 处理结果
        API-->>FrontendPlugins: 200 OK [{ "id": "...", "school_id": "...", "school_name": "...", ... }]
        FrontendPlugins-->>Client: 展示目标学校列表
        
        Client->>FrontendPlugins: 添加目标学校
        FrontendPlugins->>API: POST /api/plugins/targets/targets (Authorization: Bearer ...) { "school_id": "..." }
        API->>BackendPlugins: 处理添加目标学校请求
        BackendPlugins->>DB: INSERT INTO target_schools (user_id, school_id, school_name) VALUES (?, ?, ?)
        DB-->>BackendPlugins: 返回插入结果
        BackendPlugins-->>API: 处理结果
        API-->>FrontendPlugins: 201 Created { "id": "...", "user_id": "...", "school_id": "...", ... }
        FrontendPlugins-->>Client: 更新目标学校列表
        
        Client->>Core: 加载模考记录插件
        Core->>FrontendPlugins: 初始化模考记录插件
        FrontendPlugins->>API: GET /api/plugins/mocks/mock-exams (Authorization: Bearer ...)
        API->>BackendPlugins: 加载模考记录插件后端逻辑
        BackendPlugins->>DB: SELECT * FROM mock_exams WHERE user_id = ?
        DB-->>BackendPlugins: 返回模考记录列表
        BackendPlugins-->>API: 处理结果
        API-->>FrontendPlugins: 200 OK [{ "id": "...", "name": "一模", "exam_date": "2025-01-01", ... }]
        FrontendPlugins-->>Client: 展示模考记录列表
        
        Client->>FrontendPlugins: 添加模考记录
        FrontendPlugins->>API: POST /api/plugins/mocks/mock-exams (Authorization: Bearer ...) { "name": "一模", ... }
        API->>BackendPlugins: 处理添加模考记录请求
        BackendPlugins->>BackendPlugins: 计算总分
        BackendPlugins->>DB: INSERT INTO mock_exams (...) VALUES (...)
        DB-->>BackendPlugins: 返回插入结果
        BackendPlugins-->>API: 处理结果
        API-->>FrontendPlugins: 201 Created { "id": "...", "name": "一模", "total_score": 670, ... }
        FrontendPlugins-->>Client: 更新模考记录列表
        
        Client->>Core: 加载评估分析插件
        Core->>FrontendPlugins: 初始化评估分析插件
        FrontendPlugins->>API: GET /api/plugins/eval/evaluation/targets (Authorization: Bearer ...)
        API->>BackendPlugins: 加载评估分析插件后端逻辑
        BackendPlugins->>DB: 获取目标学校列表
        BackendPlugins->>DB: 获取模考统计数据
        BackendPlugins->>DB: 获取学校分数线
        BackendPlugins->>BackendPlugins: 计算录取概率
        BackendPlugins-->>API: 处理结果
        API-->>FrontendPlugins: 200 OK [{ "id": "...", "school_id": "...", "probability": 0.85, ... }]
        FrontendPlugins-->>Client: 展示评估分析结果
    else 用户不存在或密码错误
        DB-->>Core: 返回空
        Core-->>Client: 401 Unauthorized { "detail": "Incorrect email or password" }
    end
```

### 7.2 数据传输格式

采用JSON格式进行数据传输，主要包括以下格式：

1. **请求格式**：
   - 认证请求：`{"email": "...", "password": "..."}`
   - 学生信息请求：`{"district": "...", "junior_type": "...", "middle_school_id": "...", "stable_score": 690, "high_score": 705, "low_score": 675}`
   - 模考记录请求：`{"name": "一模", "exam_date": "2025-01-01", "chinese_score": 130, "math_score": 140, "english_score": 135, "physics_score": 65, "chemistry_score": 45, "politics_score": 28, "history_score": 27}`

2. **响应格式**：
   - 成功响应：`{"id": "...", "name": "...", ...}`
   - 错误响应：`{"detail": "..."}`
   - 列表响应：`[{"id": "...", "name": "...", ...}]`

### 7.3 统一异常处理机制

#### 7.3.1 错误类型定义

| 错误类型           | 错误码 | 描述                           | 处理方式               |
| ------------------ | ------ | ------------------------------ | ---------------------- |
| AUTH_ERROR         | 4001   | 认证错误（如无效令牌、未登录） | 重定向到登录页         |
| PERMISSION_ERROR   | 4002   | 权限不足                       | 显示权限不足提示       |
| VALIDATION_ERROR   | 4003   | 数据验证错误                   | 显示字段验证错误提示   |
| RESOURCE_NOT_FOUND | 4004   | 资源不存在                     | 显示资源不存在提示     |
| BUSINESS_ERROR     | 4005   | 业务逻辑错误                   | 显示业务错误提示       |
| NETWORK_ERROR      | 4006   | 网络错误                       | 显示网络连接失败提示   |
| SERVER_ERROR       | 5001   | 服务器内部错误                 | 显示服务器内部错误提示 |
| PLUGIN_ERROR       | 5002   | 插件错误                       | 显示插件错误提示       |

#### 7.3.2 后端错误处理

1. **错误处理中间件**：
   - 实现全局错误处理中间件，捕获所有未处理的异常
   - 对不同类型的错误进行分类处理
   - 统一错误响应格式

2. **错误响应格式**：
   ```json
   {
     "error": {
       "code": 4001,
       "message": "认证失败",
       "details": "无效的访问令牌",
       "timestamp": "2026-01-28T12:00:00Z"
     }
   }
   ```

3. **自定义异常类**：
   - 实现`AppException`基类，继承自`Error`
   - 实现具体异常类，如`AuthException`、`ValidationException`等
   - 每个异常类包含错误码、错误消息和详细信息

4. **错误日志记录**：
   - 使用结构化日志记录错误信息
   - 记录错误发生的时间、位置、请求信息、错误详情等
   - 对不同级别的错误使用不同的日志级别

5. **错误监控**：
   - 集成错误监控服务，如Sentry
   - 配置错误告警机制，当错误率超过阈值时发送告警
   - 定期分析错误日志，识别和解决常见错误

#### 7.3.3 前端错误处理

1. **错误处理服务**：
   - 实现全局错误处理服务，统一处理所有API错误
   - 拦截API响应，检测错误状态码和错误格式
   - 根据错误类型调用相应的处理函数

2. **错误显示组件**：
   - 实现`ErrorBoundary`组件，捕获React渲染错误
   - 实现`ErrorMessage`组件，显示错误提示
   - 实现`Toast`组件，显示非阻塞式错误提示

3. **错误处理流程**：
   - 网络请求错误：显示网络连接失败提示
   - 401错误：清除本地令牌，重定向到登录页
   - 403错误：显示权限不足提示，引导用户联系管理员
   - 404错误：显示资源不存在提示，引导用户返回上一页
   - 400错误：显示表单验证错误或业务逻辑错误提示
   - 500错误：显示服务器内部错误提示，提供重试按钮
   - 插件错误：显示插件错误提示，尝试重新加载插件

4. **用户友好的错误提示**：
   - 使用简洁明了的语言描述错误
   - 提供具体的错误原因和解决方法
   - 对于复杂错误，提供联系支持的方式
   - 使用适当的视觉反馈（如错误图标、颜色）增强用户体验

5. **错误恢复机制**：
   - 对于网络错误，提供自动重试机制
   - 对于插件错误，提供重新加载插件的选项
   - 对于服务器错误，提供稍后重试的选项

#### 7.3.4 插件错误处理

1. **插件错误隔离**：
   - 确保插件错误不会影响核心系统和其他插件
   - 实现插件错误边界，捕获和处理插件内部错误

2. **插件错误处理流程**：
   - 前端插件错误：显示插件错误提示，尝试禁用或重新加载插件
   - 后端插件错误：返回插件错误响应，前端显示相应提示

3. **插件错误日志**：
   - 单独记录插件错误日志，便于插件开发者调试
   - 包含插件ID、版本、错误详情等信息

#### 7.3.5 错误处理最佳实践

1. **前端最佳实践**：
   - 始终处理Promise的reject状态
   - 使用try-catch捕获同步代码错误
   - 实现全局错误边界，防止应用崩溃
   - 提供用户友好的错误提示，避免技术术语

2. **后端最佳实践**：
   - 不要在错误响应中暴露敏感信息
   - 对所有输入进行验证，避免恶意输入导致的错误
   - 实现适当的错误重试机制
   - 定期清理和分析错误日志，识别系统性问题

3. **测试最佳实践**：
   - 编写错误处理相关的单元测试
   - 模拟各种错误场景，确保系统能够正确处理
   - 测试错误边界情况，确保系统稳定性

## 8. 部署与集成

### 8.1 部署架构

#### 8.1.1 传统服务器端部署架构

```mermaid
flowchart TD
    Client[用户浏览器] --> Nginx[Nginx反向代理]
    Nginx --> NextApp[Next.js应用]
    NextApp --> APIRoutes[API Routes]
    APIRoutes --> NodeProcess[Node.js进程 (PM2管理)]
    NodeProcess --> PythonProcess[Python进程]
    
    subgraph 数据库层
        LocalDB[本地PostgreSQL] --> |开发/测试| APIRoutes
        SupabaseDB[Supabase (PostgreSQL)] --> |生产| APIRoutes
    end
    
    APIRoutes --> External[外部服务]
```

#### 8.1.2 Vercel云部署架构

```mermaid
flowchart TD
    Client[用户浏览器] --> Vercel[Vercel平台]
    Vercel --> NextApp[Next.js应用]
    NextApp --> APIRoutes[API Routes]
    APIRoutes --> PythonFunctions[Python Serverless Functions]
    
    subgraph 数据库层
        LocalDB[本地PostgreSQL] --> |开发/测试| APIRoutes
        SupabaseDB[Supabase (PostgreSQL)] --> |生产| APIRoutes
    end
    
    APIRoutes --> External[外部服务]
```

### 8.2 部署步骤

#### 8.2.1 本地开发环境设置

1. **克隆代码仓库**：
   ```bash
   git clone <repository-url>
   cd shanghai_high_school_admission
   ```

2. **安装依赖**：
   ```bash
   npm install
   ```

3. **配置环境变量**：
   - 创建 `.env.local` 文件
   - 设置PostgreSQL连接信息：
     ```
     DATABASE_URL="postgresql://username:password@localhost:5432/shanghai_high_school_admission?schema=public"
     ```

4. **初始化数据库**：
   ```bash
   npx prisma migrate dev
   ```

5. **启动开发服务器**：
   ```bash
   npm run dev
   ```

#### 8.2.1a 后端（FastAPI）本地运行
1. 创建并激活虚拟环境：
   ```bash
   cd backend
   python3 -m venv .venv
   source .venv/bin/activate
   pip install -r requirements.txt
   ```
2. 配置环境变量：
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/shanghai_high_school_admission"
   JWT_SECRET="<your-global-secret>"
   ```
3. 数据库初始化（如使用Alembic）：
   ```bash
   alembic upgrade head
   ```
4. 启动服务：
   ```bash
   uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
   ```
5. 前端本地联调：
   - 将前端 `NEXT_PUBLIC_API_BASE_URL` 或等效配置指向 `http://localhost:8000/api/v1`

#### 8.2.2 传统服务器端部署

1. **服务器准备**：
   - 安装Node.js 18+：
     ```bash
     curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
     apt-get install -y nodejs
     ```
   - 安装PostgreSQL：
     ```bash
     apt-get install -y postgresql postgresql-contrib
     ```
   - 安装Nginx：
     ```bash
     apt-get install -y nginx
     ```
   - 安装PM2：
     ```bash
     npm install -g pm2
     ```

2. **部署应用**：
   - 克隆代码仓库：
     ```bash
     git clone <repository-url>
     cd shanghai_high_school_admission
     ```
   - 安装依赖：
     ```bash
     npm install
     ```
   - 配置环境变量：
     - 创建 `.env.production` 文件
     - 设置数据库连接信息和其他必要的环境变量
   - 构建应用：
     ```bash
     npm run build
     ```
   - 启动应用：
     ```bash
     pm2 start npm --name "shanghai-high-school-admission" -- run start
     ```
   - 设置PM2开机自启：
     ```bash
     pm2 startup
     pm2 save
     ```

3. **Nginx配置**：
   - 创建Nginx配置文件：
     ```bash
     nano /etc/nginx/sites-available/shanghai-high-school-admission
     ```
   - 配置内容：
     ```nginx
     server {
       listen 80;
       server_name example.com;
       
       location / {
         proxy_pass http://localhost:3000;
         proxy_http_version 1.1;
         proxy_set_header Upgrade $http_upgrade;
         proxy_set_header Connection 'upgrade';
         proxy_set_header Host $host;
         proxy_cache_bypass $http_upgrade;
       }
     }
     ```
   - 启用配置：
     ```bash
     ln -s /etc/nginx/sites-available/shanghai-high-school-admission /etc/nginx/sites-enabled/
     nginx -t
     systemctl restart nginx
     ```

4. **SSL证书配置**（可选）：
   - 使用Let's Encrypt获取SSL证书：
     ```bash
     apt-get install -y certbot python3-certbot-nginx
     certbot --nginx -d example.com
     ```

5. **Python依赖配置**：
   - 安装Python依赖：
     ```bash
     pip3 install -r frontend/python/requirements.txt
     ```

#### 8.2.3 Vercel云部署

1. **登录Vercel账号**：
   ```bash
   vercel login
   ```

2. **初始化Vercel项目**：
   ```bash
   vercel
   ```

3. **配置环境变量**：
   - 在Vercel控制台设置数据库连接信息（默认PostgreSQL或Supabase）和其他必要的环境变量

4. **部署项目**：
   ```bash
   vercel --prod
   ```

#### 8.2.4 数据库配置

1. **默认生成环境（PostgreSQL）**：
   - 安装PostgreSQL：
     ```bash
     # macOS
     brew install postgresql
     
     # Ubuntu/Debian
     apt-get install -y postgresql postgresql-contrib
     
     # CentOS/RHEL
     yum install -y postgresql-server postgresql-contrib
     postgresql-setup --initdb
     systemctl start postgresql
     systemctl enable postgresql
     ```
   - 创建数据库：
     ```bash
     sudo -u postgres psql
     CREATE DATABASE shanghai_high_school_admission;
     CREATE USER username WITH PASSWORD 'password';
     GRANT ALL PRIVILEGES ON DATABASE shanghai_high_school_admission TO username;
     \q
     ```
   - 配置连接字符串：
     ```
     DATABASE_URL="postgresql://username:password@localhost:5432/shanghai_high_school_admission?schema=public"
     ```

2. **Supabase（可选，生产环境推荐）**：
   - 登录Supabase控制台：https://app.supabase.com
   - 创建新项目
   - 获取数据库连接字符串：在项目设置 → 数据库 → 连接字符串
   - 配置环境变量：
     ```
     DATABASE_URL="<supabase-connection-string>"
     ```

#### 8.2.5 Capacitor移动应用打包

1. **安装Capacitor依赖**：
   ```bash
   npm install @capacitor/core @capacitor/cli @capacitor/ios @capacitor/android
   ```

2. **初始化Capacitor**：
   ```bash
   npx cap init
   ```
   - 按照提示填写应用名称、ID等信息

3. **构建前端应用**：
   ```bash
   npm run build
   ```

4. **同步Capacitor**：
   ```bash
   npx cap sync
   ```

5. **添加平台**：
   ```bash
   # 添加iOS平台
   npx cap add ios
   
   # 添加Android平台
   npx cap add android
   ```

6. **生成移动应用**：
   ```bash
   # 打开iOS项目（需要Xcode）
   npx cap open ios
   
   # 打开Android项目（需要Android Studio）
   npx cap open android
   ```

7. **配置Capacitor**：
   - 在 `capacitor.config.ts` 文件中配置应用信息和插件
   - 配置网络请求：确保API请求指向正确的后端服务
   - 配置权限：根据需要添加相机、位置等权限

8. **移动应用特性**：
   - 离线访问：配置PWA支持，实现部分功能离线访问
   - 推送通知：集成Capacitor Push Notifications插件
   - 原生存储：使用Capacitor Storage插件存储本地数据
   - 应用更新：实现应用内更新检查和提示

9. **发布移动应用**：
   - iOS：通过Xcode打包，提交到App Store
   - Android：通过Android Studio打包，提交到Google Play Store

### 8.3 集成方案

1. **第三方服务集成**：
   - 邮件服务：用于用户验证和通知，可使用Vercel的集成或第三方服务如SendGrid
   - 云存储服务：用于文件导出，可使用Supabase Storage
   - 数据分析服务：用于高级分析，可使用Supabase的Analytics功能

2. **API集成**：
   - 提供开放API，支持与其他系统集成
   - 实现API文档，可使用Next.js的API Routes文档功能
   - 配置API密钥和访问控制，可使用Supabase的Auth功能

3. **Supabase集成**：
   - 使用Supabase Auth进行用户认证
   - 使用Supabase Database进行数据存储
   - 使用Supabase Storage进行文件存储
   - 使用Supabase Realtime进行实时数据更新

### 8.4 监控与维护

1. **系统监控**：
   - 实现应用性能监控
   - 配置错误日志和告警机制
   - 定期生成系统运行报告

2. **维护计划**：
   - 制定定期维护计划
   - 实现自动化测试和部署
   - 建立故障响应和处理流程

## 9. 项目管理与开发计划

### 9.1 开发阶段

| 阶段                 | 时间 | 任务                                                                     |
| -------------------- | ---- | ------------------------------------------------------------------------ |
| 阶段一：基础架构搭建 | 2周  | 前端项目初始化和组件库搭建，后端API框架搭建，数据库设计和初始化          |
| 阶段二：核心功能开发 | 4周  | 学生信息管理功能，学校数据管理和查询，目标学校管理功能，模考记录管理功能 |
| 阶段三：评估系统开发 | 3周  | 概率计算模型实现，评估结果展示，数据可视化功能                           |
| 阶段四：优化与测试   | 2周  | 性能优化，兼容性测试，用户体验优化，安全测试                             |
| 阶段五：部署与上线   | 1周  | 系统部署，数据迁移，上线前检查，正式上线                                 |

### 9.2 团队分工

| 角色       | 人数 | 职责                                                       |
| ---------- | ---- | ---------------------------------------------------------- |
| 前端开发   | 2人  | 负责前端界面开发，实现用户交互功能，优化前端性能和用户体验 |
| 后端开发   | 2人  | 负责后端API开发，实现数据处理和计算模型，数据库设计和优化  |
| 数据分析师 | 1人  | 负责数据收集和处理，优化概率计算模型，提供数据分析支持     |
| 测试工程师 | 1人  | 负责系统测试，编写测试用例，确保系统质量                   |
| 产品经理   | 1人  | 负责产品规划和需求管理，协调团队工作，与用户沟通和反馈收集 |

### 9.3 开发工具与流程

1. **版本控制**：Git + GitHub
2. **项目管理**：Jira + Confluence
3. **代码质量**：ESLint + Prettier + Black + Flake8
4. **测试框架**：Jest + Pytest
5. **CI/CD**：GitHub Actions
6. **开发环境**：Docker + Docker Compose

## 10. 面向AI的约束规则

### 10.1 数据隐私保护

1. **敏感数据处理**：
   - 学生个人信息加密存储
   - 成绩数据脱敏处理
   - 遵循数据最小化原则

2. **隐私政策**：
   - 明确告知用户数据收集和使用方式
   - 获得用户明确授权
   - 提供数据删除和导出功能

### 10.2 算法透明度

1. **模型解释**：
   - 清晰说明概率计算模型的原理
   - 提供模型参数的调整说明
   - 解释评估结果的含义和局限性

2. **结果展示**：
   - 展示原始数据和计算过程
   - 提供多种评估角度
   - 避免过度简化或误导性展示

### 10.3 系统稳定性

1. **错误处理**：
   - 完善的错误处理机制
   - 友好的错误提示
   - 系统故障恢复能力

2. **性能保障**：
   - 优化算法性能，确保快速响应
   - 实现请求限流和负载均衡
   - 定期系统维护和监控

### 10.4 数据质量

1. **数据验证**：
   - 输入数据的有效性验证
   - 数据一致性检查
   - 异常数据处理

2. **数据更新**：
   - 定期更新学校和分数线数据
   - 确保数据的时效性和准确性
   - 提供数据版本控制

### 10.5 用户体验

1. **易用性**：
   - 直观的用户界面
   - 简化的操作流程
   - 详细的使用指南和帮助信息

2. **个性化**：
   - 基于用户数据提供个性化推荐
   - 记忆用户偏好设置
   - 适应不同用户的使用习惯

### 10.6 UI确定性规范（AI友好）
1. 组件与命名
   - 组件使用PascalCase命名；文件名与组件名一致
   - props统一为显式类型定义；禁止`any`
   - 事件命名统一`onXxx`，回调参数为明确类型（不传`Event`本体）
2. 结构与职责
   - 页面组件仅负责布局与数据装配；展示组件无副作用
   - 表单统一使用受控组件；校验规则与错误消息集中定义
   - 列表统一支持分页（可选）、排序与空态占位
3. 样式与主题
   - Tailwind原子类组合用于布局；复杂样式抽象为`cn()`组合函数
   - shadcn/ui用于交互组件，组件变体统一在项目级配置
   - 深浅色模式统一通过`data-theme`实现
4. 路由与状态
   - React Router按路由分组；受保护路由统一封装
   - 全局状态通过Context + Reducer；页面状态局部化
5. 数据请求
   - 一律通过统一Fetcher（4.7.1）；禁止直接`fetch/axios`
   - 查询/提交使用React Query；缓存与失效遵循4.5策略
6. 可测试性
   - 每个组件提供最小可运行示例（Storybook）；关键逻辑提供Jest测试
   - 交互组件提供ARIA属性与测试选择器

#### 10.6.1 shadcn/ui 组件白名单与变体锁定
1. 组件白名单（统一从`src/components/ui`导出）
   - 按钮：`Button`（variants: `default`/`secondary`/`ghost`/`link`/`destructive`；sizes: `sm`/`md`）
   - 输入：`Input`、`Textarea`
   - 选择：`Select`（含`SelectItem`），`Checkbox`，`RadioGroup`
   - 切换：`Switch`
   - 反馈：`Toast`（全局`Toaster`）、`Tooltip`
   - 弹层：`Dialog`、`Drawer(Sheet)`、`Popover`
   - 菜单：`DropdownMenu`
   - 导航：`Tabs`
   - 列表与表格：`Table`（基础表格组件 + 空态/加载态内置）
   - 骨架：`Skeleton`

2. 变体与交互锁定
   - `Button`
     - `default`：主行动（如保存、提交）
     - `secondary`：次行动（如取消、返回）
     - `destructive`：危险行动（如删除）；必须二次确认（Dialog）
     - `ghost/link`：轻量行动或文字链接；不可用于关键提交
     - loading：统一左侧`Spinner`，内容保持不抖动；禁用同时设置`disabled`
   - `Input/Select`
     - label位于上方，必填显示`*`；错误信息置于组件下方
     - 提示文案使用`helpText`约定；禁用态与错误态颜色统一
   - `Dialog/Drawer`
     - 必须包含标题、说明、主/次行动；默认`ESC`可关闭，危险操作需显式确认
     - 焦点陷阱与键盘导航启用；移动端优先`Drawer`
   - `Toast`
     - 成功：绿色；失败：红色；信息：蓝色；默认3秒；错误来自统一错误解析
   - `Table`
     - 统一表头排序图标；空态占位与重试按钮；分页置于底部右侧

3. 设计与主题
   - 所有组件遵循统一主题变量（颜色、圆角、间距）；通过项目级`theme`配置集中管理
   - 深浅色模式对比度符合可访问性；禁用自定义内联颜色覆盖主题

4. 可访问性与测试
   - ARIA属性按组件类型强制添加；`aria-label/aria-describedby`与`id`关联
   - 提供`data-testid`前缀规范（如`btn-save`、`dlg-confirm`）

5. 使用规范
   - 禁止直接从`radix-ui`或`shadcn`源路径引入，统一从`src/components/ui`复用项目封装
   - 新增组件需在`src/components/ui`注册并加入白名单；未经注册组件不得在页面使用

#### 10.6.2 Shared组件集（锁定最小集，强制拼积木）

目录与组件清单（仅允许下列组件构建新页面）：

```
src/components/ui/shared/
  AppShell.tsx
  TabShell.tsx
  TabPanel.tsx
  PageHeader.tsx
  SectionCard.tsx
  FilterBar.tsx
  DataTableShell.tsx
  FormSection.tsx
  FormField.tsx
  ConfirmDialog.tsx
  states/
    LoadingSkeleton.tsx
    EmptyState.tsx
    ErrorState.tsx
```

组件用途与约束：
- AppShell：页面容器（max-width、统一左右/上下内边距）；所有页面必须包裹于此
- TabShell/TabPanel：统一标签页导航与内容承载；禁止自定义标签样式
- PageHeader：页面标题区（Title/Subtitle/Actions）；禁止页面内自定义字号/间距
- SectionCard：分区卡片（标题/说明/内容/divider/gap）；作为唯一的页面分区容器
- FilterBar：筛选栏容器（含搜索/选择器/重置/应用动作区）；统一间距与对齐
- DataTableShell：表格外层（列定义、排序、分页、加载与空态集成）；协作统一Fetcher与React Query
- FormSection：表单分区容器（标题/说明/提交区）；禁用页面自定义分区样式
- FormField：字段行（label/required/helpText/error）；统一错误展示与布局
- ConfirmDialog：确认对话框（危险/关键行动）；必须显式主/次行动与说明
- states/LoadingSkeleton：加载态骨架；列表/表格/表单加载统一使用
- states/EmptyState：空态占位；列表与表格空数据统一使用，文案走i18n
- states/ErrorState：错误提示；统一解析错误并给出重试入口

统一间距与样式：
- 间距令牌：`xs(8px)/sm(12px)/md(16px)/lg(24px)`；页面禁止直接使用`mt-?/mb-?`
- 深浅色与主题变量统一；禁止内联覆盖主题；所有组件遵循白名单变体

强制约束：
- 新页面必须由 AppShell + PageHeader + SectionCard/FilterBar/DataTableShell/FormSection + 白名单输入组件拼装
- 禁止引入非白名单的交互组件与自定义布局容器；新增Shared组件需评审并入清单

#### 10.6.3 Shared组件属性契约（最小可用集）
- AppShell
  - `maxWidth: "sm"|"md"|"lg"|"xl"|"2xl"`（默认`"xl"`）
  - `padded: boolean`（默认`true`）
  - `header/footer: ReactNode`
- PageHeader
  - `title: string`；`subtitle?: string`；`actions?: ReactNode`
- SectionCard
  - `title?: string`；`description?: string`；`divider?: boolean`；`gap?: "xs"|"sm"|"md"|"lg"`
- FilterBar
  - `children: ReactNode`（仅放置白名单输入组件）；`onReset?: () => void`；`onApply?: () => void`
- DataTableShell
  - `columns: Array<{ key: string; header: string; sortable?: boolean }>`
  - `data: any[]`；`loading: boolean`；`emptyText?: string`
  - `page: number`；`pageSize: number`；`total: number`；`onPageChange: (p:number)=>void`；`onSortChange?: (k:string,dir:"asc"|"desc")=>void`
- FormSection
  - `title?: string`；`description?: string`；`onSubmit: () => void`；`onCancel?: () => void`
- FormField
  - `label: string`；`required?: boolean`；`helpText?: string`；`error?: string`；`children: ReactNode`
- ConfirmDialog
  - `title: string`；`description?: string`；`open: boolean`；`onConfirm: () => void`；`onCancel: () => void`
- states/LoadingSkeleton
  - `variant?: "list"|"table"|"form"`；`rows?: number`
- states/EmptyState
  - `title: string`；`description?: string`；`primaryAction?: { label:string; onClick:()=>void }`；`secondaryAction?: { label:string; onClick:()=>void }`
- states/ErrorState
  - `message: string`；`onRetry?: () => void`

#### 10.6.4 文案与国际化键规范
- 键命名：`ui.page.title.*`、`ui.section.*`、`ui.table.*`、`ui.form.*`、`ui.states.*`
- 空态文案统一：`ui.states.empty.default`；错误统一：`ui.states.error.default`
- 动作统一：`ui.action.save/cancel/delete/confirm/apply/reset`

### 10.7 API确定性规范（AI友好）
1. 资源与动作
   - 统一REST风格：`GET/POST/PUT/DELETE`，避免语义不清的自定义动作
   - 复杂动作采用子资源或动作资源：`/mock-exams/{id}/recalculate`
2. 入参与出参
   - 所有入参/出参均有Pydantic模型；禁止自由结构
   - 响应一律2xx返回数据；非2xx返回统一错误结构（见6.0）
3. 过滤与分页
   - 过滤参数走查询字符串；分页与排序格式固定（见6.0）
4. 一致性与演进
   - 字段增量兼容策略：仅增加可选字段，避免破坏类型
   - 版本管理通过`/api/v{n}`；跨版本变更提供迁移说明
5. 文档与生成
   - OpenAPI自动生成；前端类型与SDK通过OpenAPI生成，禁止手写偏差

## 11. 结论与建议

上海中考择校系统是一款结合了数据科学和教育领域专业知识的智能工具，通过科学的数据分析和AI算法，为上海中考学生和家长提供个性化的择校推荐和录取概率分析，帮助用户做出更加明智的升学决策。

### 建议

1. **持续更新数据**：定期更新学校数据、分数线数据和招生政策，确保系统信息的准确性和时效性。

2. **优化算法模型**：不断优化录取概率计算模型，考虑更多因素，提高预测准确性。

3. **丰富功能模块**：根据用户反馈，逐步添加更多实用功能，如志愿填报指导、学习计划推荐等。

4. **加强用户教育**：提供更多关于中考政策、学校选择和志愿填报的教育内容，帮助用户更好地理解和使用系统。

5. **建立社区互动**：建立用户社区，促进家长和学生之间的经验分享和交流。

6. **扩展数据来源**：整合更多数据源，如学校办学特色、师资力量、校园环境等信息，为用户提供更全面的学校评估。

7. **开发移动应用**：推出移动端应用，方便用户随时随地使用系统。

8. **提供付费增值服务**：针对有更高需求的用户，提供个性化咨询、详细分析报告等付费增值服务。

通过不断的迭代和优化，上海中考择校系统将成为上海中考家庭的重要工具，帮助更多学生实现理想的升学目标。
