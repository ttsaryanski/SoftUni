SELECT
	p.id AS id,
	p.title,
	p_i.duration AS duration,
	ROUND(p_i.budget, 1) AS budget,
	TO_CHAR(p_i.release_date, 'MM-YY') AS release_date
FROM
	productions AS p
JOIN
	productions_info AS p_i
ON
	p.production_info_id = p_i.id
WHERE
	p_i.budget > 1500000.00
		AND
	EXTRACT(YEAR FROM p_i.release_date) IN (2023,2024)
ORDER BY
	budget,
	duration DESC,
	id
LIMIT 3;