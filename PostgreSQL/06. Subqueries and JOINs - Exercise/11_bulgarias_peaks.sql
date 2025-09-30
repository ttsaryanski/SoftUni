SELECT
	m_c.country_code,
	m.mountain_range,
	p.peak_name,
	p.elevation
FROM
	mountains AS m
JOIN
	mountains_countries AS m_c
ON
	m.id = m_c.mountain_id
JOIN
	peaks AS p
ON
	p.mountain_id = m.id
WHERE
	m_c.country_code = 'BG'
		AND
	p.elevation > 2835
ORDER BY
	elevation DESC;