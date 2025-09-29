SELECT
	t.town_id,
	t.name AS town_name,
	a.address_text
FROM
	towns AS t
JOIN
	addresses AS a
USING
	(town_id)
WHERE
	t.name IN ('San Francisco', 'Sofia', 'Carnation')
ORDER BY
	a.town_id,
	a.address_id;