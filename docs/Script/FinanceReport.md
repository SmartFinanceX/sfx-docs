

## 财务信息收集

| 股票代码 | 类别                   | 日期     | 数值      |
| -------- | ---------------------- | -------- | --------- |
| 0000001  | 资产合计               | 2021-1-1 | 532000000 |
| 0000001  | 资产合计               | 2021-3-1 | 532000000 |
| 0000002  | 资产合计               | 2021-1-1 | 532000000 |
| 0000002  | 资产合计               | 2021-3-1 | 532000000 |
| 0000001  | 现金及存放中央银行款项 | 2021-1-1 | 532000000 |
| 0000002  | 现金及存放中央银行款项 | 2021-3-1 | 532000000 |

```pseudocode
for ticker in 公司
	for class in 科目
		for date in 年度
			insert  ticker,class,date,（原表[class][date]）
```

