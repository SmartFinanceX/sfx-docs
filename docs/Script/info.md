##  说明

以下均使用MySQL建表
## 创建数据库

测试环境
```shell
sudo docker run -itd --name sfx-db -p 9980:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql
```

## 用户及权限系统

创建数据库 `sfx_user`

### 创建用户表





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

### 索引库



- 创建基础信息索引库

```json
PUT /inc
{
  "mappings": {
    "properties": {
      "ticker":{
        "type": "keyword",
        "copy_to": "all"
      },
      "stockName":{
        "type": "text",
        "analyzer": "ik_max_word",
        "copy_to": "all"
      },
      "fullName":{
        "type": "text",
        "analyzer": "ik_max_word",
        "copy_to": "all"
      },      
      "description":{
        "type": "text",
        "analyzer": "ik_max_word",
        "copy_to": "all"
      },
      "listDate":{
        "type": "date"
      },
      "industryClass":{
        "type": "keyword"
      },
      "all":{
        "type":"text",
        "analyzer": "ik_max_word"
      }
    }
  }
}
```



### 财务信息表

- 根据不同种类的财务数值和公司代码，将获取的财务信息按照json格式存储。

```sql
CREATE TABLE `inc_finc_info` (
  `ticker` varchar(16) DEFAULT NULL COMMENT '股票代码',
  `category` smallint DEFAULT NULL COMMENT '类型编号',
  `finanace_data` json DEFAULT NULL COMMENT '财报'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

