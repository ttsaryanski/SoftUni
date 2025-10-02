SELECT
	*
FROM
	countries AS c
WHERE
	c.continent = 'South America'
		AND
	(c.currency LIKE 'P%'
		OR
	c.currency LIKE 'U%')
ORDER BY
	c.currency DESC,
	c.id ASC;