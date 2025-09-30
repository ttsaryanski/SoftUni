CREATE VIEW
	continent_currency_usage
AS
SELECT
	rank_by_con.continent_code,
	rank_by_con.currency_code,
	rank_by_con.currency_usage
FROM (
	SELECT
		usage_by_con.continent_code,
		usage_by_con.currency_code,
		usage_by_con.currency_usage,
		DENSE_RANK() OVER (PARTITION BY usage_by_con.continent_code ORDER BY usage_by_con.currency_usage DESC) AS currency_rank_by_con
	FROM (
		SELECT
			continent_code,
			currency_code,
			COUNT(currency_code) AS currency_usage
		FROM 
			countries
		GROUP BY
			continent_code,
			currency_code
		HAVING 
			COUNT(currency_code) > 1
	) AS usage_by_con
) AS rank_by_con
WHERE
	rank_by_con.currency_rank_by_con = 1
ORDER BY
	rank_by_con.currency_usage DESC;