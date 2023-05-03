##  说明

以下均使用MySQL建表

## 用户及权限系统

## 公司信息

### 基础信息

表名：`inc_basic_info`

:::details 创建公司基础信息表

```sql
CREATE TABLE `inc_basic_info` (
  `ticker` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '股票代码',
  `stock_name` varchar(64) NOT NULL COMMENT '股票名称',
  `full_name` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '公司全称',
  `list_date` date DEFAULT NULL COMMENT '上市日期',
  `industry_class` varchar(64) DEFAULT NULL COMMENT '行业分类',
  `description` text COMMENT '主营业务',
  PRIMARY KEY (`ticker`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

:::

#### 股票代码

- 字段名：`ticker`
- 类型：`String`
- 数据库存储类型：`varchar(16)`
- Primary key

#### 股票名称

- 字段名: `stock_name`
- 类型: `String`
- 数据库存储类型:`varchar(64)`
- 约束: not null

#### 公司名称

- 字段名: `full_name`
- 类型: `String`
- 数据库存储类型:`varchar(128)`
- 约束: not null

#### 上市日期

- 字段名: `list_date`
- 类型: `Date`
- 数据库存储类型:`date`

#### 业务类别

- 字段名: `industry_class`
- 类型: `String`
- 数据库存储类型:`varchar(64)`

#### 业务描述

- 字段名: `description`
- 类型: `String`
- 数据库存储类型:`text`

#### 



