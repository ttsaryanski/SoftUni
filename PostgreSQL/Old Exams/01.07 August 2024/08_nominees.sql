SELECT
	c.name AS country_name,
	COUNT(p.country_id) AS productions_count,
	COALESCE(AVG(p_i.budget), 0) AS avg_budget
FROM
	countries AS c
JOIN
	productions AS p
ON
	c.id = p.country_id
JOIN
	productions_info AS p_i
ON
	p.production_info_id = p_i.id
GROUP BY
	c.name
ORDER BY
	productions_count DESC,
	country_name;