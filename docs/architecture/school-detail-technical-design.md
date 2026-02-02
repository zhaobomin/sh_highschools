# 学校详情模块技术设计方案

## 1. 设计概述

### 1.1 设计背景

根据PRD文档，学校详情模块需要进行需求迭代，以提供更全面的学校信息展示，包括基本信息、招生情况和学校介绍，并解决iOS端页面头部遮挡的问题。本技术设计方案详细说明如何实现这些需求。

### 1.2 设计目标

- 实现学校基本信息的完整展示
- 实现学校最近一年招生情况的展示
- 实现学校介绍板块的展示
- 解决iOS端页面头部遮挡的问题
- 确保方案的可扩展性和可维护性

### 1.3 技术栈

| 类别   | 技术/框架    | 版本 | 用途           |
| ------ | ------------ | ---- | -------------- |
| 前端   | React        | 18.x | 构建用户界面   |
| 前端   | TypeScript   | 5.x  | 类型安全       |
| 前端   | Tailwind CSS | 4.x  | 样式管理       |
| 前端   | React Query  | 5.x  | 数据获取和缓存 |
| 后端   | Flask        | 2.x  | API服务        |
| 数据库 | PostgreSQL   | 14.x | 数据存储       |
| 移动端 | Capacitor    | 5.x  | 跨平台移动应用 |

## 2. 前端设计

### 2.1 页面结构

| 组件名称                  | 功能描述           | 位置                                                          | 变更类型 |
| ------------------------- | ------------------ | ------------------------------------------------------------- | -------- |
| SchoolDetailPage          | 学校详情页面主组件 | src/features/schools/SchoolDetailPage.tsx                     | 修改     |
| SchoolHeaderSection       | 学校头部信息组件   | src/features/schools/components/SchoolHeaderSection.tsx       | 修改     |
| SchoolEnrollmentSection   | 学校招生情况组件   | src/features/schools/components/SchoolEnrollmentSection.tsx   | 新增     |
| SchoolIntroductionSection | 学校介绍组件       | src/features/schools/components/SchoolIntroductionSection.tsx | 新增     |
| StateContainer            | 状态容器组件       | src/components/Shared/states/StateContainer.tsx               | 修改     |

### 2.2 组件设计

#### 2.2.1 SchoolDetailPage

**功能**：学校详情页面主组件，整合各个信息板块

**修改内容**：
- 添加SchoolEnrollmentSection和SchoolIntroductionSection组件的导入和使用
- 调整页面布局，确保各个板块合理排列
- 优化页面加载性能

**核心代码**：
```tsx
// 修改后
import SchoolEnrollmentSection from '@/features/schools/components/SchoolEnrollmentSection';
import SchoolIntroductionSection from '@/features/schools/components/SchoolIntroductionSection';

// 在返回的JSX中添加
<SchoolEnrollmentSection stats={stats} />
<SchoolIntroductionSection school={school} />
```

#### 2.2.2 SchoolHeaderSection

**功能**：展示学校基本信息

**修改内容**：
- 添加备注信息的显示
- 优化布局，确保信息展示清晰

**核心代码**：
```tsx
// 修改后
{school.note && (
  <div className="flex items-center gap-2">
    <span className="text-xs font-medium text-muted-foreground">备注信息：</span>
    <span className="text-sm">{school.note}</span>
  </div>
)}
```

#### 2.2.3 SchoolEnrollmentSection（新增）

**功能**：展示学校最近一年的招生情况

**实现方案**：
- 创建新组件，接收招生数据作为props
- 展示自招、到区、到校的总人数
- 提供数据加载和错误状态的处理

**核心代码**：
```tsx
interface SchoolEnrollmentSectionProps {
  stats?: {
    quotaAutonomous?: number | null;
    quotaToDistrict?: number | null;
    quotaToSchool?: number | null;
  };
}

export default function SchoolEnrollmentSection({ stats }: SchoolEnrollmentSectionProps) {
  return (
    <ProfileSectionCard title="最近一年招生情况">
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-2xl font-bold">{stats?.quotaAutonomous || 0}</div>
          <div className="text-xs text-muted-foreground">自招人数</div>
        </div>
        <div>
          <div className="text-2xl font-bold">{stats?.quotaToDistrict || 0}</div>
          <div className="text-xs text-muted-foreground">到区人数</div>
        </div>
        <div>
          <div className="text-2xl font-bold">{stats?.quotaToSchool || 0}</div>
          <div className="text-xs text-muted-foreground">到校人数</div>
        </div>
      </div>
    </ProfileSectionCard>
  );
}
```

#### 2.2.4 SchoolIntroductionSection（新增）

**功能**：展示学校介绍内容

**实现方案**：
- 创建新组件，接收学校数据作为props
- 当没有介绍数据时，显示默认填充内容
- 提供清晰的布局和样式

**核心代码**：
```tsx
interface SchoolIntroductionSectionProps {
  school: {
    name: string;
    introduction?: string;
  };
}

export default function SchoolIntroductionSection({ school }: SchoolIntroductionSectionProps) {
  const defaultIntroduction = `
    ${school.name}是一所位于上海市的高中学校，致力于为学生提供优质的教育资源和学习环境。
    学校拥有一支高素质的教师队伍，注重学生的全面发展，培养学生的创新能力和实践能力。
    学校设施齐全，为学生提供良好的学习和生活条件。
  `;

  return (
    <ProfileSectionCard title="学校介绍">
      <div className="text-sm text-foreground/80 leading-relaxed">
        {school.introduction || defaultIntroduction}
      </div>
    </ProfileSectionCard>
  );
}
```

#### 2.2.5 StateContainer

**功能**：状态容器组件，提供一致的页面布局

**修改内容**：
- 优化iOS端页面头部显示，解决遮挡问题
- 添加适当的padding和安全区域设置

**核心代码**：
```tsx
// 修改后
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function StateContainer({ children }: StateContainerProps) {
  const insets = useSafeAreaInsets();
  
  return (
    <div 
      className="min-h-screen bg-background" 
      style={{
        paddingTop: `${insets.top}px`,
        paddingBottom: `${insets.bottom}px`,
      }}
    >
      <div className="container mx-auto px-4 py-6">
        {children}
      </div>
    </div>
  );
}
```

### 2.3 数据流设计

**数据获取流程**：
1. SchoolDetailPage通过useQuery调用getSchoolDetail API获取学校详情数据
2. 获取的数据传递给各个子组件
3. 子组件根据数据展示相应内容

**状态管理**：
- 使用React Query管理服务器状态
- 使用React的useState管理本地UI状态

**数据缓存**：
- 利用React Query的缓存机制，减少重复请求
- 设置合理的缓存过期时间

## 3. 后端设计

### 3.1 API设计

| API路径                     | 方法 | 功能描述                   | 模块                  | 变更类型 |
| --------------------------- | ---- | -------------------------- | --------------------- | -------- |
| /schools/{school_id}/detail | GET  | 获取学校详情所有数据       | app/api/v1/schools.py | 新增     |
| /schools/{school_id}        | GET  | 获取学校详情（兼容旧接口） | app/api/v1/schools.py | 保留     |

#### 3.1.1 GET /schools/{school_id}/detail

**功能**：获取学校详情所有数据，包括基本信息、招生情况、录取分数线等

**实现方案**：
```python
@schools_bp.route("/<string:school_id>/detail", methods=["GET"])
def get_school_detail_endpoint(school_id):
    """
    获取学校详情所有数据的API端点
    
    Args:
        school_id: 学校ID
        
    Returns:
        JSON响应，包含学校详情所有数据
    """
    year = request.args.get("year", type=int)
    try:
        detail_data = get_school_detail_all(db, school_id, year)
        return api_response(detail_data)
    except Exception as e:
        return api_response(None, error=str(e), status_code=500)
```

#### 3.1.2 GET /schools/{school_id}（兼容旧接口）

**功能**：获取学校详情信息（兼容旧接口）

**实现方案**：
```python
@schools_bp.route("/<string:school_id>", methods=["GET"])
def get_school_endpoint(school_id):
    """
    获取学校详情信息的API端点（兼容旧接口）
    
    Args:
        school_id: 学校ID
        
    Returns:
        JSON响应，包含学校详情信息（兼容旧接口格式）
    """
    try:
        detail_data = get_school_detail(db, school_id)
        return api_response(detail_data)
    except Exception as e:
        return api_response(None, error=str(e), status_code=500)
```



### 3.2 服务层设计

| 服务方法              | 功能描述                   | 模块                            | 变更类型 |
| --------------------- | -------------------------- | ------------------------------- | -------- |
| get_school_detail_all | 获取学校详情所有数据       | app/services/schools_service.py | 新增     |
| get_school_detail     | 获取学校详情（兼容旧接口） | app/services/schools_service.py | 保留     |

#### 3.2.1 get_school_detail_all

**功能**：获取学校详情所有数据，包括基本信息、招生情况、录取分数线等

**实现方案**：
```python
def get_school_detail_all(db, school_id, year=None):
    """
    获取学校详情所有数据，使用JOIN操作一次性查询所有相关数据，减少数据库查询次数
    
    Args:
        db: 数据库连接对象
        school_id: 学校ID
        year: 年份，默认为最近一年
        
    Returns:
        包含学校详情所有数据的字典
    """
    # 获取最近一年
    if not year:
        year_result = db.select(
            "district_seats",
            ["MAX(year) as max_year"],
            {"high_school_code": school_id}
        )
        year = year_result[0]["max_year"] if year_result else datetime.datetime.now().year - 1
    
    # 使用JOIN操作和子查询一次性查询所有相关数据
    # 1. 查询学校基本信息
    school = db.select(
        "schools",
        ["code", "name", "district", "type", "full_type", "note"],
        {"code": school_id}
    )[0]
    
    # 2. 查询招生数据和分数线数据（使用子查询和聚合函数，减少数据库查询次数）
    combined_data = db.execute("""
        SELECT 
            -- 招生数据
            COALESCE((SELECT SUM(seats) FROM district_seats WHERE high_school_code = %s AND year = %s), 0) as to_district_seats,
            COALESCE((SELECT SUM(seats) FROM school_seats WHERE high_school_code = %s AND year = %s), 0) as to_school_seats,
            
            -- 分数线数据（获取最低和最高值作为区间）
            COALESCE((SELECT MIN(total_admission_score) FROM district_seats WHERE high_school_code = %s AND year = %s), 0) as to_district_score_min,
            COALESCE((SELECT MAX(total_admission_score) FROM district_seats WHERE high_school_code = %s AND year = %s), 0) as to_district_score_max,
            COALESCE((SELECT MIN(total_admission_score) FROM school_seats WHERE high_school_code = %s AND year = %s), 0) as to_school_score_min,
            COALESCE((SELECT MAX(total_admission_score) FROM school_seats WHERE high_school_code = %s AND year = %s), 0) as to_school_score_max,
            COALESCE((SELECT AVG(total_admission_score) FROM parallel_admission_scores WHERE high_school_code = %s AND year = %s), 0) as parallel_score
        """, 
        [school_id, year, school_id, year, school_id, year, school_id, year, school_id, year, school_id, year, school_id, year]
    )[0]
    
    # 3. 生成默认学校介绍
    introduction = f"{school['name']}是一所位于上海市{school['district']}的{school['type']}，致力于为学生提供优质的教育资源和学习环境。学校拥有一支高素质的教师队伍，注重学生的全面发展，培养学生的创新能力和实践能力。学校设施齐全，为学生提供良好的学习和生活条件。"
    
    # 4. 计算录取概率（示例逻辑）
    probability = 75  # 实际项目中需要根据学生成绩和学校分数线计算
    
    return {
        "id": school["code"],
        "name": school["name"],
        "code": school["code"],
        "district": school["district"],
        "type": school["type"],
        "fullType": school["full_type"],
        "note": school["note"],
        "introduction": introduction,
        "enrollment": {
            "autonomous": 0,  # 自主招生数据，后续将从self_enrollment_quota表中查询
            "toDistrict": combined_data["to_district_seats"],
            "toSchool": combined_data["to_school_seats"],
            "year": year
        },
        "scores": {
            "toDistrict": [combined_data["to_district_score_min"], combined_data["to_district_score_max"]],  # 到区分数线区间（最低值，最高值）
            "toSchool": [combined_data["to_school_score_min"], combined_data["to_school_score_max"]],    # 到校分数线区间（最低值，最高值）
            "unified": combined_data["to_district_score_max"],  # 统一分数线使用最高值
            "parallel": combined_data["parallel_score"]
        },
        "probability": probability
    }
```

#### 3.2.2 get_school_detail

**功能**：获取学校详情信息（兼容旧接口）

**实现方案**：
```python
def get_school_detail(db, school_id):
    # 内部调用新的get_school_detail_all函数获取数据
    detail_data = get_school_detail_all(db, school_id)
    
    # 转换为旧接口的返回格式
    return {
        "id": detail_data["id"],
        "name": detail_data["name"],
        "code": detail_data["code"],
        "district": detail_data["district"],
        "type": detail_data["type"],
        "fullType": detail_data["fullType"],
        "accommodation": detail_data["accommodation"],
        "note": detail_data["note"],
        "stats": {
            "quotaAutonomous": detail_data["enrollment"]["autonomous"],
            "quotaToDistrict": detail_data["enrollment"]["toDistrict"],
            "quotaToSchool": detail_data["enrollment"]["toSchool"]
        }
    }
```

### 3.3 数据库设计

#### 3.3.1 现有表结构

| 表名                      | 描述                   | 路径           |
| ------------------------- | ---------------------- | -------------- |
| schools                   | 高中学校表             | db/db_init.sql |
| district_seats            | 到区名额及录取分数线表 | db/db_init.sql |
| school_seats              | 到校名额及录取分数线表 | db/db_init.sql |
| parallel_admission_scores | 平行志愿录取分数线表   | db/db_init.sql |

#### 3.3.2 数据存储说明

- 学校基本信息：存储在schools表中
- 招生情况数据：
  - 到区名额：存储在district_seats表中
  - 到校名额：存储在school_seats表中
  - 平行志愿分数线：存储在parallel_admission_scores表中
  - 自主招生名额：后续将添加self_enrollment_quota表
- 学校介绍：使用默认填充内容，暂不存储在数据库中

#### 3.3.3 数据库查询优化

为了提高性能，减少数据库查询次数，我们采用以下优化策略：

1. **使用子查询和聚合函数**：将多个查询合并为一个查询，使用子查询获取招生数据和分数线数据
2. **使用COALESCE函数**：处理可能的NULL值，确保返回数据的一致性
3. **索引优化**：确保查询中使用的字段都有适当的索引
4. **批量查询**：一次性获取所有需要的数据，避免多次数据库往返
5. **最小化数据传输**：只查询需要的字段，减少网络传输开销

**优化后的完整查询方案**：

1. **获取学校基本信息和所有相关数据的单一查询**：
```sql
-- 1. 首先获取学校基本信息
SELECT code, name, district, type, full_type, note 
FROM schools 
WHERE code = ?;

-- 2. 然后使用单一子查询获取所有招生和分数线数据
SELECT 
    -- 招生数据
    COALESCE((SELECT SUM(seats) FROM district_seats WHERE high_school_code = ? AND year = ?), 0) as to_district_seats,
    COALESCE((SELECT SUM(seats) FROM school_seats WHERE high_school_code = ? AND year = ?), 0) as to_school_seats,
    
    -- 分数线数据（获取最低和最高值作为区间）
    COALESCE((SELECT MIN(total_admission_score) FROM district_seats WHERE high_school_code = ? AND year = ?), 0) as to_district_score_min,
    COALESCE((SELECT MAX(total_admission_score) FROM district_seats WHERE high_school_code = ? AND year = ?), 0) as to_district_score_max,
    COALESCE((SELECT MIN(total_admission_score) FROM school_seats WHERE high_school_code = ? AND year = ?), 0) as to_school_score_min,
    COALESCE((SELECT MAX(total_admission_score) FROM school_seats WHERE high_school_code = ? AND year = ?), 0) as to_school_score_max,
    COALESCE((SELECT AVG(total_admission_score) FROM parallel_admission_scores WHERE high_school_code = ? AND year = ?), 0) as parallel_score
```

2. **获取最近一年的查询**：
```sql
SELECT MAX(year) as max_year 
FROM district_seats 
WHERE high_school_code = ?;
```

3. **索引优化建议**：
   - 确保`district_seats`表的`high_school_code`和`year`字段有索引
   - 确保`school_seats`表的`high_school_code`和`year`字段有索引
   - 确保`parallel_admission_scores`表的`high_school_code`和`year`字段有索引

4. **性能优化效果**：
   - 减少数据库查询次数：从多次查询减少到2次查询
   - 减少网络往返：一次性获取所有需要的数据
   - 提高响应速度：避免多次数据库连接和查询开销
   - 确保数据一致性：使用单一查询获取相关数据，避免数据不一致的情况

## 4. 移动端适配

### 4.1 iOS端页面头部遮挡问题

**问题原因**：
iOS设备的刘海屏和状态栏导致页面内容被遮挡。

**解决方案**：
1. 使用react-native-safe-area-context库获取安全区域Insets
2. 在StateContainer组件中应用安全区域padding
3. 确保所有页面内容都在安全区域内显示

**实现步骤**：
1. 安装依赖：`npm install react-native-safe-area-context`
2. 在App.tsx中添加SafeAreaProvider
3. 在StateContainer组件中使用useSafeAreaInsets
4. 为页面添加适当的padding

### 4.2 响应式设计

**设计原则**：
- 移动优先：优先考虑移动设备的显示效果
- 弹性布局：使用Tailwind CSS的弹性布局类
- 断点设计：根据不同屏幕尺寸调整布局

**实现方案**：
- 使用Tailwind CSS的响应式类（sm:, md:, lg:）
- 为不同屏幕尺寸设置合理的布局
- 确保在小屏幕设备上内容清晰可读

## 5. 性能优化

### 5.1 前端优化

**优化策略**：
1. **代码分割**：使用React.lazy和Suspense实现组件懒加载
2. **图片优化**：使用适当尺寸的图片，考虑使用WebP格式
3. **缓存策略**：合理使用React Query的缓存机制
4. **减少重渲染**：使用React.memo和useMemo优化组件渲染
5. **网络优化**：使用HTTP/2，考虑使用CDN

**具体实现**：
- 对大型组件使用React.lazy
- 设置合理的React Query缓存策略
- 优化API响应时间

### 5.2 后端优化

**优化策略**：
1. **数据库索引**：为频繁查询的字段添加索引
2. **查询优化**：减少不必要的查询，使用JOIN优化多表查询
3. **缓存机制**：使用Redis缓存热点数据
4. **异步处理**：对耗时操作使用异步处理
5. **连接池**：使用数据库连接池管理数据库连接

**具体实现**：
- 为school_introductions表添加school_code索引
- 优化get_school_detail函数的查询逻辑
- 考虑使用Redis缓存学校详情数据

## 6. 测试计划

### 6.1 前端测试

| 测试类型   | 测试内容               | 工具                        | 优先级 |
| ---------- | ---------------------- | --------------------------- | ------ |
| 单元测试   | 组件功能测试           | Jest, React Testing Library | 高     |
| 集成测试   | 页面集成测试           | Cypress                     | 中     |
| E2E测试    | 端到端测试             | Cypress                     | 中     |
| 性能测试   | 页面加载性能           | Lighthouse                  | 低     |
| 兼容性测试 | 不同设备和浏览器兼容性 | BrowserStack                | 中     |

### 6.2 后端测试

| 测试类型   | 测试内容       | 工具         | 优先级 |
| ---------- | -------------- | ------------ | ------ |
| 单元测试   | API功能测试    | pytest       | 高     |
| 集成测试   | 服务层集成测试 | pytest       | 中     |
| 性能测试   | API响应性能    | Apache Bench | 低     |
| 数据库测试 | 数据库操作测试 | pytest       | 中     |

### 6.3 移动端测试

| 测试类型   | 测试内容          | 工具              | 优先级 |
| ---------- | ----------------- | ----------------- | ------ |
| 功能测试   | 移动端功能测试    | Appium            | 高     |
| 兼容性测试 | 不同iOS设备兼容性 | 真机测试          | 高     |
| 性能测试   | 移动端性能测试    | Xcode Instruments | 低     |

## 7. 部署计划

### 7.1 前端部署

**部署步骤**：
1. 构建前端应用：`npm run build`
2. 部署到静态文件服务器
3. 配置CDN加速
4. 验证部署结果

**环境配置**：
- NODE_ENV: production
- VITE_API_URL: https://api.example.com

### 7.2 后端部署

**部署步骤**：
1. 安装依赖：`pip install -r requirements.txt`
2. 配置环境变量
3. 启动API服务
4. 配置负载均衡
5. 验证部署结果

**环境配置**：
- FLASK_ENV: production
- DATABASE_URL: postgresql://user:password@localhost:5432/dbname
- SECRET_KEY: your-secret-key

### 7.3 数据库部署

**部署步骤**：
1. 创建数据库和表结构
2. 导入初始数据
3. 配置数据库连接
4. 验证数据完整性

**数据迁移**：
- 使用数据库迁移工具（如Alembic）管理数据库结构变更
- 确保数据迁移的安全性和可靠性

## 8. 风险评估

| 风险项        | 影响程度 | 发生概率 | 缓解措施                            |
| ------------- | -------- | -------- | ----------------------------------- |
| iOS端适配问题 | 高       | 中       | 充分测试不同iOS设备，使用安全区域库 |
| 数据缺失问题  | 中       | 高       | 实现默认数据填充，确保系统稳定性    |
| 性能问题      | 中       | 中       | 优化前后端代码，使用缓存机制        |
| 兼容性问题    | 低       | 中       | 测试不同浏览器和设备                |
| 安全问题      | 低       | 低       | 实现适当的安全措施，如输入验证      |

## 9. 结论

本技术设计方案基于PRD文档，详细说明了学校详情模块的实现方案，包括前端设计、后端设计、移动端适配、性能优化、测试计划和部署计划。方案考虑了可扩展性和可维护性，确保系统能够满足当前需求并为未来的功能扩展做好准备。

通过实施本方案，学校详情模块将能够：
- 完整展示学校基本信息
- 展示学校最近一年的招生情况
- 展示学校介绍内容
- 解决iOS端页面头部遮挡的问题
- 提供良好的用户体验

方案的实施需要前端、后端和移动端开发人员的协作，确保各个部分能够无缝集成，共同实现学校详情模块的功能需求。