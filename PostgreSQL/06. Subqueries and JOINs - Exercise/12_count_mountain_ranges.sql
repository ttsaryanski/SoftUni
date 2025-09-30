SELECT
	m_c.country_code,
	COUNT(m.mountain_range) AS mountain_range_count
FROM
	mountains AS m
JOIN
	mountains_countries AS m_c
ON
	m_c.mountain_id = m.id
WHERE
	m_c.country_code IN ('US', 'RU', 'BG')
GROUP BY
	m_c.country_code
ORDER BY
	mountain_range_count DESC;