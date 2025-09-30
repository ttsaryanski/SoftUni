SELECT
	COUNT(*) AS countries_without_mountains
FROM
	countries AS c
LEFT JOIN
	mountains_countries AS m_c
USING
	(country_code)
WHERE
 m_c.mountain_id IS NULL;