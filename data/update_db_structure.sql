-- 上海中考考试数据表结构更新脚本
-- 生成日期：2026-02-01
-- 基于上海中考考试科目和分值：150（语文）+150（数学）+150（外语）+60（道法）+60（历史）+150（综合测试）+30（体育）=750 分

-- 开始事务
START TRANSACTION;

-- 1. 更新模考记录表（mock_exams）
-- 添加体育成绩字段
ALTER TABLE mock_exams
ADD COLUMN IF NOT EXISTS pe_score DECIMAL(5,1);

-- 删除不需要的物理和化学成绩字段
ALTER TABLE mock_exams
DROP COLUMN IF EXISTS physics_score;

ALTER TABLE mock_exams
DROP COLUMN IF EXISTS chemistry_score;

-- 修改字段注释，添加体育成绩字段注释
COMMENT ON COLUMN mock_exams.pe_score IS '体育成绩';

-- 2. 更新到校名额及录取分数线表（school_seats）
-- 添加体育分数线字段
ALTER TABLE school_seats
ADD COLUMN IF NOT EXISTS pe_admission_score DECIMAL(5,1);

-- 删除不需要的物理和化学分数线字段
ALTER TABLE school_seats
DROP COLUMN IF EXISTS physics_admission_score;

ALTER TABLE school_seats
DROP COLUMN IF EXISTS chemistry_admission_score;

-- 修改字段注释，添加体育分数线字段注释
COMMENT ON COLUMN school_seats.pe_admission_score IS '体育分数线';

-- 3. 更新到区名额及录取分数线表（district_seats）
-- 添加体育分数线字段
ALTER TABLE district_seats
ADD COLUMN IF NOT EXISTS pe_admission_score DECIMAL(5,1);

-- 删除不需要的物理和化学分数线字段
ALTER TABLE district_seats
DROP COLUMN IF EXISTS physics_admission_score;

ALTER TABLE district_seats
DROP COLUMN IF EXISTS chemistry_admission_score;

-- 修改字段注释，添加体育分数线字段注释
COMMENT ON COLUMN district_seats.pe_admission_score IS '体育分数线';

-- 4. 更新平行志愿录取分数线表（parallel_admission_scores）
-- 添加体育分数线字段
ALTER TABLE parallel_admission_scores
ADD COLUMN IF NOT EXISTS pe_admission_score DECIMAL(5,1);

-- 删除不需要的物理和化学分数线字段
ALTER TABLE parallel_admission_scores
DROP COLUMN IF EXISTS physics_admission_score;

ALTER TABLE parallel_admission_scores
DROP COLUMN IF EXISTS chemistry_admission_score;

-- 修改字段注释，添加体育分数线字段注释
COMMENT ON COLUMN parallel_admission_scores.pe_admission_score IS '体育分数线';

-- 5. 更新学生信息表（student_profiles）
-- 可以考虑添加体育相关的成绩字段，以更全面地记录学生信息
-- 这里暂时不添加，如需添加可以取消下面的注释

/*
ALTER TABLE student_profiles
ADD COLUMN IF NOT EXISTS pe_stable_score DECIMAL(5,1),
ADD COLUMN IF NOT EXISTS pe_high_score DECIMAL(5,1),
ADD COLUMN IF NOT EXISTS pe_low_score DECIMAL(5,1);

COMMENT ON COLUMN student_profiles.pe_stable_score IS '体育稳定分';
COMMENT ON COLUMN student_profiles.pe_high_score IS '体育上限分';
COMMENT ON COLUMN student_profiles.pe_low_score IS '体育下限分';
*/

-- 6. 更新索引（如果需要）
-- 这里暂时不需要更新索引，如需添加可以取消下面的注释

/*
-- 如需为体育成绩添加索引，可以使用以下语句
CREATE INDEX IF NOT EXISTS idx_mock_exams_pe_score ON mock_exams(pe_score);
*/

-- 提交事务
COMMIT;

-- 结束更新
SELECT 'Database structure updated successfully!' AS message;