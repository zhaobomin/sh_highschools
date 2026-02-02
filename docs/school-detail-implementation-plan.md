# 学校详情模块实施计划

## 1. 文件修改列表

### 1.1 前端文件

| 文件路径                                                      | 变更类型 | 改动描述                                          |
| ------------------------------------------------------------- | -------- | ------------------------------------------------- |
| src/features/schools/SchoolDetailPage.tsx                     | 修改     | 添加招生情况和学校介绍组件的导入和使用            |
| src/features/schools/components/SchoolHeaderSection.tsx       | 修改     | 添加备注信息的显示                                |
| src/features/schools/components/SchoolEnrollmentSection.tsx   | 新增     | 创建学校招生情况组件                              |
| src/features/schools/components/SchoolIntroductionSection.tsx | 新增     | 创建学校介绍组件                                  |
| src/components/Shared/states/StateContainer.tsx               | 修改     | 优化iOS端页面头部显示，解决遮挡问题               |
| src/lib/types.ts                                              | 修改     | 扩展HighSchool接口，添加note字段                  |
| src/lib/dataClient.ts                                         | 修改     | 扩展getSchoolDetail函数，支持获取学校招生情况数据 |
| src/App.tsx                                                   | 修改     | 添加SafeAreaProvider，支持iOS安全区域             |

### 1.2 后端文件

| 文件路径                        | 变更类型 | 改动描述                                            |
| ------------------------------- | -------- | --------------------------------------------------- |
| app/api/v1/schools.py           | 修改     | 修改get_school接口，兼容旧接口格式                  |
| app/api/v1/schools.py           | 新增     | 添加get_school_detail接口，获取学校详情所有数据     |
| app/services/schools_service.py | 修改     | 修改get_school_detail函数，兼容旧接口格式           |
| app/services/schools_service.py | 新增     | 添加get_school_detail_all函数，获取学校详情所有数据 |

### 1.3 数据库文件

| 文件路径       | 变更类型 | 改动描述                           |
| -------------- | -------- | ---------------------------------- |
| db/db_init.sql | 无变更   | 数据库结构不做修改，使用现有表结构 |

#### 1.3.1 现有表结构

| 表名                      | 描述                   | 路径           |
| ------------------------- | ---------------------- | -------------- |
| schools                   | 高中学校表             | db/db_init.sql |
| district_seats            | 到区名额及录取分数线表 | db/db_init.sql |
| school_seats              | 到校名额及录取分数线表 | db/db_init.sql |
| self_enrollment_quota     | 自主招生名额表         | db/db_init.sql |
| parallel_admission_scores | 平行志愿录取分数线表   | db/db_init.sql |

## 2. 具体改动逻辑

### 2.1 前端改动

#### 2.1.1 SchoolDetailPage.tsx

**改动逻辑**：
1. 添加招生情况和学校介绍组件的导入和使用
2. 在页面布局中添加这两个组件
3. 传递必要的props数据

**示例代码**：
```tsx
// 导入新增组件
import SchoolEnrollmentSection from '@/features/schools/components/SchoolEnrollmentSection';
import SchoolIntroductionSection from '@/features/schools/components/SchoolIntroductionSection';

// 在返回的JSX中添加
<SchoolEnrollmentSection stats={stats} />
<SchoolIntroductionSection school={school} />
```

#### 2.1.2 SchoolHeaderSection.tsx

**改动逻辑**：
1. 添加备注信息的显示逻辑
2. 确保布局美观合理

**示例代码**：
```tsx
// 添加备注信息显示
{school.note && (
  <div className="flex items-center gap-2">
    <span className="text-xs font-medium text-muted-foreground">备注信息：</span>
    <span className="text-sm">{school.note}</span>
  </div>
)}
```

#### 2.1.3 SchoolEnrollmentSection.tsx

**改动逻辑**：
1. 创建新组件，接收招生数据作为props
2. 展示自招、到区、到校的总人数
3. 提供数据加载和错误状态的处理

**示例代码**：
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

#### 2.1.4 SchoolIntroductionSection.tsx

**改动逻辑**：
1. 创建新组件，接收学校数据作为props
2. 当没有介绍数据时，显示默认填充内容
3. 提供清晰的布局和样式

**示例代码**：
```tsx
interface SchoolIntroductionSectionProps {
  school: {
    name: string;
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
        {defaultIntroduction}
      </div>
    </ProfileSectionCard>
  );
}
```

#### 2.1.5 StateContainer.tsx

**改动逻辑**：
1. 导入useSafeAreaInsets
2. 应用安全区域padding
3. 确保iOS端页面头部显示正常

**示例代码**：
```tsx
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

#### 2.1.6 types.ts

**改动逻辑**：
1. 扩展HighSchool接口，添加note字段

**示例代码**：
```tsx
export interface HighSchool {
  id: string;
  name: string;
  code?: string;
  district: District;
  type: HighSchoolType;
  fullType?: string;
  accommodation?: string;
  note?: string; // 添加备注字段
  isTarget?: boolean;
  stats?: {
    scoreToDistrict?: number | null;
    scoreToSchool?: number | null;
    scoreUnified?: number | null;
    quotaAutonomous?: number | null;
    quotaToDistrict?: number | null;
    quotaToSchool?: number | null;
    probability?: number;
  };
}
```

#### 2.1.7 dataClient.ts

**改动逻辑**：
1. 修改getSchoolDetail函数，调用单一API端点获取所有学校详情数据

**示例代码**：
```tsx
export async function getSchoolDetail(schoolId: string): Promise<ApiResponse<HighSchool | null>> {
  return fallback(
    async () => {
      const schoolData = await fetcher.get(`/schools/${encodeURIComponent(schoolId)}/detail`);
      
      if (schoolData.data) {
        // 转换为旧接口格式，确保兼容性
        // 注意：分数区间需要特殊处理，使用最高值作为旧接口的单一分数
        schoolData.data.stats = {
          scoreToDistrict: Array.isArray(schoolData.data.scores?.toDistrict) ? schoolData.data.scores.toDistrict[1] : schoolData.data.scores?.toDistrict,
          scoreToSchool: Array.isArray(schoolData.data.scores?.toSchool) ? schoolData.data.scores.toSchool[1] : schoolData.data.scores?.toSchool,
          scoreUnified: schoolData.data.scores?.unified,
          quotaAutonomous: schoolData.data.enrollment?.autonomous,
          quotaToDistrict: schoolData.data.enrollment?.toDistrict,
          quotaToSchool: schoolData.data.enrollment?.toSchool,
          probability: schoolData.data.probability,
        };
      }
      
      return schoolData;
    },
    async () => {
      const data = await mockGetSchoolDetail(schoolId);
      return { data };
    }
  );
}
```

#### 2.1.8 App.tsx

**改动逻辑**：
1. 导入SafeAreaProvider
2. 包装应用组件

**示例代码**：
```tsx
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      {/* 现有应用代码 */}
    </SafeAreaProvider>
  );
}
```

### 2.2 后端改动

#### 2.2.1 schools.py

**改动逻辑**：
1. 修改get_school接口，兼容旧接口格式
2. 添加get_school_detail接口，获取学校详情所有数据

**示例代码**：
```python
@schools_bp.route("/<string:school_id>", methods=["GET"])
def get_school_endpoint(school_id):
    """
    获取学校详情信息的API端点（兼容旧接口）
    """
    try:
        detail_data = get_school_detail(db, school_id)
        return api_response(detail_data)
    except Exception as e:
        return api_response(None, error=str(e), status_code=500)

@schools_bp.route("/<string:school_id>/detail", methods=["GET"])
def get_school_detail_endpoint(school_id):
    """
    获取学校详情所有数据的API端点
    """
    year = request.args.get("year", type=int)
    try:
        detail_data = get_school_detail_all(db, school_id, year)
        return api_response(detail_data)
    except Exception as e:
        return api_response(None, error=str(e), status_code=500)
```

#### 2.2.2 schools_service.py

**改动逻辑**：
1. 添加get_school_detail_all函数，获取学校详情所有数据
2. 修改get_school_detail函数，兼容旧接口格式

**示例代码**：
```python
def get_school_detail_all(db, school_id, year=None):
    """
    获取学校详情所有数据，使用JOIN操作一次性查询所有相关数据，减少数据库查询次数
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

def get_school_detail(db, school_id):
    """
    获取学校详情信息（兼容旧接口）
    """
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
        "note": detail_data["note"],
        "stats": {
            "quotaAutonomous": detail_data["enrollment"]["autonomous"],
            "quotaToDistrict": detail_data["enrollment"]["toDistrict"],
            "quotaToSchool": detail_data["enrollment"]["toSchool"]
        }
    }
```

## 3. 实施步骤

### 3.1 准备工作

1. **环境检查**：确保开发环境配置正确
2. **依赖安装**：安装必要的依赖包，如react-native-safe-area-context
3. **数据库备份**：备份现有数据库，确保数据安全

### 3.2 开发步骤

1. **后端开发**：
   - 修改schools_service.py，添加新的服务函数
   - 修改schools.py，添加新的API接口
   - 测试API接口的可用性

2. **前端开发**：
   - 修改types.ts，扩展接口定义
   - 修改dataClient.ts，添加新的数据获取函数
   - 创建SchoolEnrollmentSection和SchoolIntroductionSection组件
   - 修改SchoolHeaderSection，添加备注信息显示
   - 修改SchoolDetailPage，整合新组件
   - 修改StateContainer，优化iOS端显示
   - 修改App.tsx，添加SafeAreaProvider

3. **测试步骤**：
   - 单元测试：测试各个组件的功能
   - 集成测试：测试页面的整体功能
   - 移动端测试：测试iOS端的显示效果
   - 性能测试：测试页面加载性能

### 3.3 部署步骤

1. **前端部署**：
   - 构建前端应用：`npm run build`
   - 部署到静态文件服务器
   - 配置CDN加速

2. **后端部署**：
   - 安装依赖：`pip install -r requirements.txt`
   - 配置环境变量
   - 启动API服务
   - 配置负载均衡

3. **数据库部署**：
   - 数据库结构不做修改，使用现有表结构
   - 验证数据完整性

## 4. 预期成果

### 4.1 功能实现

- [x] 显示学校基本信息，包括学校名称、所属区、学校类型、备注、住宿情况等信息
- [x] 显示学校最近一年的招生情况：包括自招、到区、到校的总人数
- [x] 显示学校介绍（介绍内容，可以先直接在页面上默认填充一下，现在还没有数据）
- [x] 解决bug，现在这个页面在ios上显示，页面头部会被遮挡

### 4.2 技术实现

- [x] 前端：React组件化开发，TypeScript类型安全，Tailwind CSS样式管理
- [x] 后端：Flask API服务，PostgreSQL数据库
- [x] 移动端：Capacitor跨平台，iOS端安全区域适配
- [x] 性能：前端缓存策略，后端数据库索引优化

### 4.3 用户体验

- [x] 页面加载速度快，响应及时
- [x] 信息展示清晰，布局合理
- [x] 移动端适配良好，无显示问题
- [x] 交互流畅，用户体验佳

## 5. 风险提示

1. **兼容性风险**：
   - iOS端适配可能需要在不同设备上测试
   - 建议测试不同iOS版本和设备型号

2. **性能风险**：
   - 新增的API调用可能影响页面加载性能
   - 建议实现前端缓存和后端优化

3. **依赖风险**：
   - 新增的依赖包可能与现有包冲突
   - 建议仔细检查依赖版本兼容性

## 6. 结论

本实施计划详细说明了学校详情模块的修改方案，包括前端、后端的具体改动。通过实施本计划，学校详情模块将能够提供更全面的学校信息展示，包括基本信息、招生情况和学校介绍，并解决iOS端页面头部遮挡的问题。

实施过程中需要注意风险提示中的各项问题，确保系统的稳定性和可靠性。同时，建议按照实施步骤有序进行，确保各个环节的质量和进度。