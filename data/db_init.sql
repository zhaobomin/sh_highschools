-- 上海中考择校系统数据库初始化脚本
-- 生成日期：2026-01-30

-- 设置字符集和排序规则
-- PostgreSQL使用不同的字符集设置方式，在CREATE TABLE语句中指定

-- 开始事务
START TRANSACTION;

-- 1. 创建高中学校表（schools）
CREATE TABLE IF NOT EXISTS schools (
    code VARCHAR(20) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    district VARCHAR(50) NOT NULL,
    type VARCHAR(20) NOT NULL,
    ownership_type VARCHAR(10) NOT NULL,
    full_type VARCHAR(100),
    address VARCHAR(200),
    phone VARCHAR(20),
    email VARCHAR(100),
    features TEXT,
    faculty TEXT,
    note TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 添加高中学校表字段注释
COMMENT ON TABLE schools IS '高中学校表';
COMMENT ON COLUMN schools.code IS '学校代码（主键）';
COMMENT ON COLUMN schools.name IS '学校名称';
COMMENT ON COLUMN schools.district IS '所在区县';
COMMENT ON COLUMN schools.type IS '学校类型（市重点、区重点、一般高中）';
COMMENT ON COLUMN schools.ownership_type IS '办学性质（公办、民办）';
COMMENT ON COLUMN schools.full_type IS '完整学校类型描述';
COMMENT ON COLUMN schools.address IS '学校地址';
COMMENT ON COLUMN schools.phone IS '联系电话';
COMMENT ON COLUMN schools.email IS '电子邮箱';
COMMENT ON COLUMN schools.features IS '学校特色';
COMMENT ON COLUMN schools.faculty IS '师资力量';
COMMENT ON COLUMN schools.note IS '备注信息';
COMMENT ON COLUMN schools.created_at IS '创建时间';
COMMENT ON COLUMN schools.updated_at IS '更新时间';

-- 2. 创建初中学校表（middle_schools）
CREATE TABLE IF NOT EXISTS middle_schools (
    code VARCHAR(20) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    district VARCHAR(50) NOT NULL,
    type VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 添加初中学校表字段注释
COMMENT ON TABLE middle_schools IS '初中学校表';
COMMENT ON COLUMN middle_schools.code IS '学校代码（主键）';
COMMENT ON COLUMN middle_schools.name IS '初中学校名称';
COMMENT ON COLUMN middle_schools.district IS '所在区县';
COMMENT ON COLUMN middle_schools.type IS '学校类型（公办/民办）';
COMMENT ON COLUMN middle_schools.created_at IS '创建时间';
COMMENT ON COLUMN middle_schools.updated_at IS '更新时间';

-- 3. 创建用户表（users）
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    email_verified BOOLEAN DEFAULT FALSE,
    password_hash VARCHAR(100) NOT NULL,
    password_reset_token VARCHAR(100),
    login_attempts INTEGER DEFAULT 0,
    last_login_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    refresh_token_hash VARCHAR(100),
    token_expires_at TIMESTAMP,
    active_sessions JSONB
);

-- 添加用户表字段注释
COMMENT ON TABLE users IS '用户表';
COMMENT ON COLUMN users.id IS '用户ID（主键）';
COMMENT ON COLUMN users.username IS '用户名';
COMMENT ON COLUMN users.email IS '邮箱';
COMMENT ON COLUMN users.email_verified IS '邮箱验证状态';
COMMENT ON COLUMN users.password_hash IS '密码哈希';
COMMENT ON COLUMN users.password_reset_token IS '密码重置令牌';
COMMENT ON COLUMN users.login_attempts IS '登录尝试次数';
COMMENT ON COLUMN users.last_login_at IS '最后登录时间';
COMMENT ON COLUMN users.created_at IS '创建时间';
COMMENT ON COLUMN users.updated_at IS '更新时间';
COMMENT ON COLUMN users.refresh_token_hash IS '刷新令牌哈希';
COMMENT ON COLUMN users.token_expires_at IS '令牌过期时间';
COMMENT ON COLUMN users.active_sessions IS '活跃会话信息（多设备登录管理）';

-- 4. 生成分数线表（score_lines）
CREATE TABLE IF NOT EXISTS score_lines (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    school_code VARCHAR(20) NOT NULL,
    district VARCHAR(50) NOT NULL,
    score DECIMAL(5,1) NOT NULL,
    score_upper DECIMAL(5,1),
    score_lower DECIMAL(5,1),
    year INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (school_code) REFERENCES schools(code) ON DELETE CASCADE ON UPDATE CASCADE
);

-- 添加分数线表字段注释
COMMENT ON TABLE score_lines IS '分数线表';
COMMENT ON COLUMN score_lines.id IS '分数线ID（主键）';
COMMENT ON COLUMN score_lines.school_code IS '学校代码（外键）';
COMMENT ON COLUMN score_lines.district IS '区县名称';
COMMENT ON COLUMN score_lines.score IS '录取分数线';
COMMENT ON COLUMN score_lines.score_upper IS '分数上限（达成率判断依据）';
COMMENT ON COLUMN score_lines.score_lower IS '分数下限（达成率判断依据）';
COMMENT ON COLUMN score_lines.year IS '年份';
COMMENT ON COLUMN score_lines.created_at IS '创建时间';
COMMENT ON COLUMN score_lines.updated_at IS '更新时间';

-- 5. 创建到校名额及录取分数线表（school_seats）
CREATE TABLE IF NOT EXISTS school_seats (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    middle_school_code VARCHAR(20) NOT NULL,
    high_school_code VARCHAR(20) NOT NULL,
    seats INTEGER NOT NULL,
    year INTEGER NOT NULL,
    total_admission_score DECIMAL(5,1),
    chinese_admission_score DECIMAL(5,1),
    math_admission_score DECIMAL(5,1),
    english_admission_score DECIMAL(5,1),
    physics_admission_score DECIMAL(5,1),
    chemistry_admission_score DECIMAL(5,1),
    politics_admission_score DECIMAL(5,1),
    history_admission_score DECIMAL(5,1),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (middle_school_code) REFERENCES middle_schools(code) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (high_school_code) REFERENCES schools(code) ON DELETE CASCADE ON UPDATE CASCADE
);

-- 添加到校名额表字段注释
COMMENT ON TABLE school_seats IS '到校名额及录取分数线表';
COMMENT ON COLUMN school_seats.id IS '名额ID（主键）';
COMMENT ON COLUMN school_seats.middle_school_code IS '初中学校代码（外键）';
COMMENT ON COLUMN school_seats.high_school_code IS '高中学校代码（外键）';
COMMENT ON COLUMN school_seats.seats IS '到校名额数量';
COMMENT ON COLUMN school_seats.year IS '年份';
COMMENT ON COLUMN school_seats.total_admission_score IS '到校总分分数线';
COMMENT ON COLUMN school_seats.chinese_admission_score IS '语文分数线';
COMMENT ON COLUMN school_seats.math_admission_score IS '数学分数线';
COMMENT ON COLUMN school_seats.english_admission_score IS '英语分数线';
COMMENT ON COLUMN school_seats.physics_admission_score IS '物理分数线';
COMMENT ON COLUMN school_seats.chemistry_admission_score IS '化学分数线';
COMMENT ON COLUMN school_seats.politics_admission_score IS '道法分数线';
COMMENT ON COLUMN school_seats.history_admission_score IS '历史分数线';
COMMENT ON COLUMN school_seats.created_at IS '创建时间';
COMMENT ON COLUMN school_seats.updated_at IS '更新时间';

-- 6. 创建到区名额及录取分数线表（district_seats）
CREATE TABLE IF NOT EXISTS district_seats (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    district VARCHAR(50) NOT NULL,
    high_school_code VARCHAR(20) NOT NULL,
    seats INTEGER NOT NULL,
    year INTEGER NOT NULL,
    total_admission_score DECIMAL(5,1),
    chinese_admission_score DECIMAL(5,1),
    math_admission_score DECIMAL(5,1),
    english_admission_score DECIMAL(5,1),
    physics_admission_score DECIMAL(5,1),
    chemistry_admission_score DECIMAL(5,1),
    politics_admission_score DECIMAL(5,1),
    history_admission_score DECIMAL(5,1),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (high_school_code) REFERENCES schools(code) ON DELETE CASCADE ON UPDATE CASCADE
);

-- 添加到区名额表字段注释
COMMENT ON TABLE district_seats IS '到区名额及录取分数线表';
COMMENT ON COLUMN district_seats.id IS '名额ID（主键）';
COMMENT ON COLUMN district_seats.district IS '区县名称';
COMMENT ON COLUMN district_seats.high_school_code IS '高中学校代码（外键）';
COMMENT ON COLUMN district_seats.seats IS '到区名额数量';
COMMENT ON COLUMN district_seats.year IS '年份';
COMMENT ON COLUMN district_seats.total_admission_score IS '到区总分分数线';
COMMENT ON COLUMN district_seats.chinese_admission_score IS '语文分数线';
COMMENT ON COLUMN district_seats.math_admission_score IS '数学分数线';
COMMENT ON COLUMN district_seats.english_admission_score IS '英语分数线';
COMMENT ON COLUMN district_seats.physics_admission_score IS '物理分数线';
COMMENT ON COLUMN district_seats.chemistry_admission_score IS '化学分数线';
COMMENT ON COLUMN district_seats.politics_admission_score IS '道法分数线';
COMMENT ON COLUMN district_seats.history_admission_score IS '历史分数线';
COMMENT ON COLUMN district_seats.created_at IS '创建时间';
COMMENT ON COLUMN district_seats.updated_at IS '更新时间';

-- 7. 创建平行志愿录取分数线表（parallel_admission_scores）
CREATE TABLE IF NOT EXISTS parallel_admission_scores (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    high_school_code VARCHAR(20) NOT NULL,
    district VARCHAR(50) NOT NULL,
    total_admission_score DECIMAL(5,1) NOT NULL,
    chinese_admission_score DECIMAL(5,1),
    math_admission_score DECIMAL(5,1),
    english_admission_score DECIMAL(5,1),
    physics_admission_score DECIMAL(5,1),
    chemistry_admission_score DECIMAL(5,1),
    politics_admission_score DECIMAL(5,1),
    history_admission_score DECIMAL(5,1),
    year INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (high_school_code) REFERENCES schools(code) ON DELETE CASCADE ON UPDATE CASCADE
);

-- 添加平行志愿分数线表字段注释
COMMENT ON TABLE parallel_admission_scores IS '平行志愿录取分数线表';
COMMENT ON COLUMN parallel_admission_scores.id IS 'ID（主键）';
COMMENT ON COLUMN parallel_admission_scores.high_school_code IS '高中学校代码（外键）';
COMMENT ON COLUMN parallel_admission_scores.district IS '区县名称';
COMMENT ON COLUMN parallel_admission_scores.total_admission_score IS '平行志愿总分分数线';
COMMENT ON COLUMN parallel_admission_scores.chinese_admission_score IS '语文分数线';
COMMENT ON COLUMN parallel_admission_scores.math_admission_score IS '数学分数线';
COMMENT ON COLUMN parallel_admission_scores.english_admission_score IS '英语分数线';
COMMENT ON COLUMN parallel_admission_scores.physics_admission_score IS '物理分数线';
COMMENT ON COLUMN parallel_admission_scores.chemistry_admission_score IS '化学分数线';
COMMENT ON COLUMN parallel_admission_scores.politics_admission_score IS '道法分数线';
COMMENT ON COLUMN parallel_admission_scores.history_admission_score IS '历史分数线';
COMMENT ON COLUMN parallel_admission_scores.year IS '年份';
COMMENT ON COLUMN parallel_admission_scores.created_at IS '创建时间';
COMMENT ON COLUMN parallel_admission_scores.updated_at IS '更新时间';

-- 8. 创建学生信息表（student_profiles）
CREATE TABLE IF NOT EXISTS student_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL UNIQUE,
    district VARCHAR(50) NOT NULL,
    junior_type VARCHAR(20) NOT NULL,
    middle_school_code VARCHAR(20),
    stable_score DECIMAL(5,1) NOT NULL,
    high_score DECIMAL(5,1) NOT NULL,
    low_score DECIMAL(5,1) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (middle_school_code) REFERENCES middle_schools(code) ON DELETE SET NULL ON UPDATE CASCADE
);

-- 添加学生信息表字段注释
COMMENT ON TABLE student_profiles IS '学生信息表';
COMMENT ON COLUMN student_profiles.id IS '学生信息ID（主键）';
COMMENT ON COLUMN student_profiles.user_id IS '用户ID（外键）';
COMMENT ON COLUMN student_profiles.district IS '所在区县';
COMMENT ON COLUMN student_profiles.junior_type IS '初中类型（公办、民办）';
COMMENT ON COLUMN student_profiles.middle_school_code IS '初中学校代码（外键）';
COMMENT ON COLUMN student_profiles.stable_score IS '稳定分';
COMMENT ON COLUMN student_profiles.high_score IS '上限分';
COMMENT ON COLUMN student_profiles.low_score IS '下限分';
COMMENT ON COLUMN student_profiles.created_at IS '创建时间';
COMMENT ON COLUMN student_profiles.updated_at IS '更新时间';

-- 9. 创建目标学校表（target_schools）
CREATE TABLE IF NOT EXISTS target_schools (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    school_code VARCHAR(20),
    school_name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (user_id, school_code),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (school_code) REFERENCES schools(code) ON DELETE SET NULL ON UPDATE CASCADE
);

-- 添加目标学校表字段注释
COMMENT ON TABLE target_schools IS '目标学校表';
COMMENT ON COLUMN target_schools.id IS '目标ID（主键）';
COMMENT ON COLUMN target_schools.user_id IS '用户ID（外键）';
COMMENT ON COLUMN target_schools.school_code IS '学校代码（外键）';
COMMENT ON COLUMN target_schools.school_name IS '学校名称（冗余存储）';
COMMENT ON COLUMN target_schools.created_at IS '创建时间';
COMMENT ON COLUMN target_schools.updated_at IS '更新时间';

-- 10. 创建模考记录表（mock_exams）
CREATE TABLE IF NOT EXISTS mock_exams (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    name VARCHAR(100) NOT NULL,
    exam_date DATE NOT NULL,
    chinese_score DECIMAL(5,1),
    math_score DECIMAL(5,1),
    english_score DECIMAL(5,1),
    physics_score DECIMAL(5,1),
    chemistry_score DECIMAL(5,1),
    politics_score DECIMAL(5,1),
    history_score DECIMAL(5,1),
    total_score DECIMAL(5,1) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- 添加模考记录表字段注释
COMMENT ON TABLE mock_exams IS '模考记录表';
COMMENT ON COLUMN mock_exams.id IS '模考ID（主键）';
COMMENT ON COLUMN mock_exams.user_id IS '用户ID（外键）';
COMMENT ON COLUMN mock_exams.name IS '模考名称';
COMMENT ON COLUMN mock_exams.exam_date IS '考试日期';
COMMENT ON COLUMN mock_exams.chinese_score IS '语文成绩';
COMMENT ON COLUMN mock_exams.math_score IS '数学成绩';
COMMENT ON COLUMN mock_exams.english_score IS '英语成绩';
COMMENT ON COLUMN mock_exams.physics_score IS '物理成绩';
COMMENT ON COLUMN mock_exams.chemistry_score IS '化学成绩';
COMMENT ON COLUMN mock_exams.politics_score IS '道法成绩';
COMMENT ON COLUMN mock_exams.history_score IS '历史成绩';
COMMENT ON COLUMN mock_exams.total_score IS '总分';
COMMENT ON COLUMN mock_exams.created_at IS '创建时间';
COMMENT ON COLUMN mock_exams.updated_at IS '更新时间';

-- 11. 创建高中自招名额表（self_enrollment_quota）
CREATE TABLE IF NOT EXISTS self_enrollment_quota (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    school_code VARCHAR(20) NOT NULL,
    boarding_status VARCHAR(20) NOT NULL,
    total_quota INTEGER NOT NULL,
    sports_quota INTEGER NOT NULL,
    art_quota INTEGER NOT NULL,
    year INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (school_code) REFERENCES schools(code) ON DELETE CASCADE ON UPDATE CASCADE
);

-- 添加高中自招名额表字段注释
COMMENT ON TABLE self_enrollment_quota IS '高中自招名额表';
COMMENT ON COLUMN self_enrollment_quota.id IS '自招名额ID（主键）';
COMMENT ON COLUMN self_enrollment_quota.school_code IS '学校代码（外键）';
COMMENT ON COLUMN self_enrollment_quota.boarding_status IS '寄宿情况';
COMMENT ON COLUMN self_enrollment_quota.total_quota IS '合计名额';
COMMENT ON COLUMN self_enrollment_quota.sports_quota IS '市级优秀体育学生名额';
COMMENT ON COLUMN self_enrollment_quota.art_quota IS '市级艺术骨干学生名额';
COMMENT ON COLUMN self_enrollment_quota.year IS '年份';
COMMENT ON COLUMN self_enrollment_quota.created_at IS '创建时间';
COMMENT ON COLUMN self_enrollment_quota.updated_at IS '更新时间';

-- 12. 创建索引
-- 高中学校表索引
CREATE INDEX IF NOT EXISTS idx_schools_district_type ON schools(district, type);

-- 初中学校表索引
CREATE INDEX IF NOT EXISTS idx_middle_schools_district ON middle_schools(district);

-- 分数线表索引
CREATE INDEX IF NOT EXISTS idx_score_lines_school_district_year ON score_lines(school_code, district, year);
CREATE INDEX IF NOT EXISTS idx_score_lines_year ON score_lines(year);

-- 到校名额表索引
CREATE INDEX IF NOT EXISTS idx_school_seats_middle_high_year ON school_seats(middle_school_code, high_school_code, year);

-- 到区名额表索引
CREATE INDEX IF NOT EXISTS idx_district_seats_district_high_year ON district_seats(district, high_school_code, year);

-- 平行志愿分数线表索引
CREATE INDEX IF NOT EXISTS idx_parallel_scores_high_district_year ON parallel_admission_scores(high_school_code, district, year);

-- 学生信息表索引
CREATE INDEX IF NOT EXISTS idx_student_profiles_middle_school ON student_profiles(middle_school_code);

-- 目标学校表索引
CREATE INDEX IF NOT EXISTS idx_target_schools_user_school ON target_schools(user_id, school_code);

-- 模考记录表索引
CREATE INDEX IF NOT EXISTS idx_mock_exams_user_date ON mock_exams(user_id, exam_date);
CREATE INDEX IF NOT EXISTS idx_mock_exams_total_score ON mock_exams(total_score);

-- 高中自招名额表索引
CREATE INDEX IF NOT EXISTS idx_self_enrollment_school_year ON self_enrollment_quota(school_code, year);
CREATE INDEX IF NOT EXISTS idx_self_enrollment_year ON self_enrollment_quota(year);

-- 提交事务
COMMIT;

-- 结束初始化
SELECT 'Database initialization completed successfully!' AS message;
