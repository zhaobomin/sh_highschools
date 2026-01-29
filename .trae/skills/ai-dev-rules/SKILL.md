---
name: "ai-dev-rules"
description: "为本项目AI编程提供强约束与流程。需AI生成/修改代码或文档时调用，确保遵循统一Fetcher、命名规范、查询键、UI白名单、错误与API契约。"
---

# Trae AI 编程规则（项目约束）

本技能用于约束AI在本仓库内的编程与文档生成行为，所有自动化改动必须遵循本规则。规则来源于技术设计文档的“AI友好”约束与项目规范，链接见“参考来源”。

## 适用范围与调用时机
- 任何让AI编写/修改前端、后端、文档、测试的场景
- 需要新增接口、组件、状态、缓存、国际化、部署说明
- 代码评审或重构中要求对齐项目统一约束

## 行为总则
- 严格遵循技术设计文档；不得引入与文档冲突的模式或库
- 修改现有代码时必须沿用所在文件的既有风格与工具
- 不得泄露或记录敏感信息；不输出或提交任何密钥
- 仅对必要文件做最小改动；保持模块职责清晰
- 变更需可验证：补充最小测试用例或运行示例（如适用）

## 前端网络与缓存
- 统一Fetcher：所有请求必须通过`lib/api.ts`统一Fetcher发起
  - 禁止直接使用`fetch/axios`
  - 路径使用相对路径，禁止手动拼接`baseURL`
  - 遵循超时、重试、错误解析与认证头注入
- React Query缓存：查询/提交必须结合React Query进行
  - 失效/预热/键设计按技术设计文档“4.5”执行

## 命名与查询键
- 方法命名采用“动词+资源”，保持一致语义
- 查询键遵循固定命名与结构，禁止自由命名
- 示例
  - 列表：`listSchools`，查询键：`["schools:list", params]`
  - 详情：`getSchoolById`，查询键：`["schools:detail", id]`

## UI与组件约束
- 组件来源限定：使用项目封装的`src/components/ui`白名单组件
- 新页面必须由 Shared 组件拼装（AppShell、PageHeader、SectionCard 等）
- 样式以 Tailwind 原子类与项目主题变量为准；禁止内联覆盖主题
- 表单受控；统一错误消息展示；提供ARIA与测试选择器

## 路由与状态
- 路由按分组与受保护路由封装；未登录自动重定向
- 全局状态通过 Context + Reducer；页面状态局部化

## 错误与异常
- 前端统一错误解析：网络/认证/权限/业务/插件/服务器类型化处理
- 401/403不重试；清令牌并重定向登录，保留回跳路径
- 统一错误展示组件与Toast样式；必要时提供重试入口

## API契约与类型
- 统一REST风格与路径前缀`/api/v1`；资源使用复数
- 入参与出参一律有Pydantic模型；响应2xx返回数据，非2xx返回统一错误结构
- OpenAPI生成前端类型与SDK；禁止手写偏差类型
- 分页/过滤/排序参数格式固定；返回头包含总数与链接导航

## 国际化与文案
- 所有用户可见文案必须走i18n键；键命名按约定前缀分类
- 中文为默认，英文可选；支持切换

## 数据隐私与透明
- 敏感数据最小化与加密/脱敏；不得在日志/错误提示中泄露
- 评估算法透明与可解释；展示必要数据与计算依据

## 可测试性与验证
- 关键逻辑补充最小单元测试或组件Story
- 提供最小可运行示例（如适用）；交互组件具备ARIA与测试选择器

## 提交前检查清单
- 是否使用统一Fetcher与规范的查询键
- 是否使用白名单UI组件与 Shared 组件拼装
- 是否遵循错误与API统一契约
- 是否补充必要类型/测试/文案/i18n键
- 是否避免泄露与引入未批准依赖

## 示例片段

### 统一Fetcher（查询）
```ts
// src/lib/api.ts 已提供 fetcher；页面仅调用方法并绑定 React Query
const { data, isLoading, error } = useQuery({
  queryKey: ["schools:list", { district, type }],
  queryFn: () => api.get("/schools", { timeoutMs: 10000, idempotent: true }),
});
```

### 方法命名与查询键
```ts
// 方法：动词+资源
export async function listSchools(params: { district?: string; type?: string }) {
  return api.get("/schools", { params });
}
// 键：统一前缀与结构
useQuery({ queryKey: ["schools:list", params], queryFn: () => listSchools(params) });
```

### i18n键约定
```ts
t("ui.page.title.targets"); // 页面标题
t("ui.action.save");        // 动作按钮
t("ui.states.error.default"); // 统一错误文案
```

## 参考来源（技术设计文档片段）
- 统一Fetcher设计：[TECHNICAL_DESIGN.md 4.7.1](file:///Users/zhaobomin/Documents/projects/sh_highschools/PRD_SPEC/TECHNICAL_DESIGN.md#L458-L504)
- 前端请求方法命名与查询键规范：[TECHNICAL_DESIGN.md 4.7.2](file:///Users/zhaobomin/Documents/projects/sh_highschools/PRD_SPEC/TECHNICAL_DESIGN.md#L505-L517)
- 数据获取与缓存机制：[TECHNICAL_DESIGN.md 4.5](file:///Users/zhaobomin/Documents/projects/sh_highschools/PRD_SPEC/TECHNICAL_DESIGN.md#L343-L397)
- 组件化与UI白名单/Shared组件集与属性契约：[TECHNICAL_DESIGN.md 10.6~10.6.3](file:///Users/zhaobomin/Documents/projects/sh_highschools/PRD_SPEC/TECHNICAL_DESIGN.md#L1557-L1694)
- 文案与国际化键规范：[TECHNICAL_DESIGN.md 10.6.4](file:///Users/zhaobomin/Documents/projects/sh_highschools/PRD_SPEC/TECHNICAL_DESIGN.md#L1695-L1699)
- API风格与命名/错误结构/分页过滤/OpenAPI约定：[TECHNICAL_DESIGN.md 6.0~6.0.5](file:///Users/zhaobomin/Documents/projects/sh_highschools/PRD_SPEC/TECHNICAL_DESIGN.md#L820-L890)
- 错误码字典（稳定约束）：[TECHNICAL_DESIGN.md 6.0.1](file:///Users/zhaobomin/Documents/projects/sh_highschools/PRD_SPEC/TECHNICAL_DESIGN.md#L852-L862)
- 前后端错误处理机制（统一异常）：[TECHNICAL_DESIGN.md 7.3](file:///Users/zhaobomin/Documents/projects/sh_highschools/PRD_SPEC/TECHNICAL_DESIGN.md#L1045-L1158)
- 认证保护与路由分组：[TECHNICAL_DESIGN.md 4.4、4.3.1](file:///Users/zhaobomin/Documents/projects/sh_highschools/PRD_SPEC/TECHNICAL_DESIGN.md#L299-L342)
- 数据隐私/算法透明/系统稳定性等AI约束：[TECHNICAL_DESIGN.md 10.1~10.5](file:///Users/zhaobomin/Documents/projects/sh_highschools/PRD_SPEC/TECHNICAL_DESIGN.md#L1497-L1556)

