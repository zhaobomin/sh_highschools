## 目标与信息架构
- 以需求文档的4个核心页面为一级信息架构：目标管理、学校筛选、模考记录、评估分析。
- 底部固定4个TAB作为主导航；每个TAB对应一个独立路由（支持深链、刷新不丢页面）。

## 路由与布局
- 调整 React Router 路由表：
  - `/` 重定向到 `/targets`
  - `/targets` 目标管理页
  - `/filter` 学校筛选页
  - `/mocks` 模考记录页
  - `/eval` 评估分析页
  - 额外保留 `/demo` 指向现有 DemoPage（便于对照/回归）
  - 增加兜底 `*` 404 页面
- 新增一个“带底部TAB的主布局”组件（使用现有 AppShell + BottomTabs 视觉框架）：
  - Tabs 仅负责导航高亮（value 来自当前 pathname，切换时 navigate）
  - 页面内容通过 `<Outlet />` 渲染，实现“路由级Tab”而非“组件级TabsContent”

## 数据与Mock策略（不依赖后端）
- 新增 `src/mocks/`：内置学校、分数线、初中学校的最小示例数据（可覆盖16区、3类高中）。
- 新增一层轻量“数据访问函数”（不引入新依赖）：
  - 先尝试用统一 fetcher 请求 `/api/v1/...`
  - 若失败或启用 `VITE_USE_MOCKS=1`，回退到本地 mock（保持返回结构与 ApiResponse 一致）
- 用户侧数据（画像/目标/模考）先用 localStorage 持久化，保证跨TAB可用：
  - `studentProfile`
  - `targets`
  - `mockExams`

## 四个页面的前端实现（按PRD拆板块）
- 目标管理页 `/targets`
  - 目标学校列表：卡片/表格展示（名称、区、类型、参考分数线、当前概率等级占位/计算值）
  - 志愿录取说明：SectionCard 放置说明文字（可后续替换为更完整内容/流程图）
  - 个人信息设置：区县、初中类型、初中学校下拉
  - 成绩预估设置：稳定分/上限分/下限分
  - 入口动作：跳转到学校筛选页添加目标；支持从列表移除目标
- 学校筛选页 `/filter`
  - FilterBar：关键字、区县、学校类型筛选
  - 学校列表：展示基础信息与“加入目标”按钮；加入后给出Toast反馈
- 模考记录页 `/mocks`
  - 模考列表：表格展示，支持新增/编辑/删除（Dialog表单）
  - 自动计算总分
  - 统计分析：平均/最高/最低/标准差（SectionCard + 指标卡）
- 评估分析页 `/eval`
  - 以目标学校为维度计算录取概率：
    - 均值/方差来自模考总分统计；若样本不足则用“成绩预估”推导一个默认标准差
    - 分数线取学校最新年份或mock默认值
  - 概率等级：保(≥75%) / 稳(40–75%) / 冲(<40%)，用颜色与进度条展示，并给出简短解释

## i18n 与文案规范
- 扩充 `src/i18n.ts` 的翻译键：`ui.page.title.*`、`ui.section.*`、`ui.action.*`、`ui.states.*`，将新增页面可见文案收口到翻译表。

## 现有组件与一致性对齐
- 复用现有 Shared 组件：AppShell、PageHeader、SectionCard、FormSection、FormField、FilterBar、LoadingSkeleton、ErrorState、BottomTabs。
- 必要时补齐缺失的“空态组件”（如 EmptyState）以满足列表/表格空数据的可读性。

## 验证与交付
- 本地验证：确保路由切换、刷新深链、底部TAB高亮、localStorage持久化、TypeScript 编译通过。
- 交付物：新增页面/布局/数据mock相关文件；更新 App 路由与顶部导航链接。