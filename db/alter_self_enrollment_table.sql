-- 自招表结构修改脚本
-- 生成日期：2026-02-03

-- 开始事务
START TRANSACTION;

-- 1. 为自招表添加到校总人数和到区总人数字段
ALTER TABLE IF EXISTS self_enrollment_quota
    ADD COLUMN IF NOT EXISTS to_school_total INTEGER DEFAULT 0,
    ADD COLUMN IF NOT EXISTS to_district_total INTEGER DEFAULT 0;

-- 2. 添加字段注释
COMMENT ON COLUMN self_enrollment_quota.to_school_total IS '到校总人数';
COMMENT ON COLUMN self_enrollment_quota.to_district_total IS '到区总人数';

-- 提交事务
COMMIT;

-- 结束修改
SELECT 'Self enrollment table alteration completed successfully!' AS message;