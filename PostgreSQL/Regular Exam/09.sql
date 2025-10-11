SELECT
	i.name,
	ROUND(AVG(r.rating), 2) AS average_rating,
	COUNT(i.id) AS total_reviews,
	b.name AS brand_name,
	cl.name AS classification_name
FROM
	items AS i
JOIN
	reviews AS r
ON
	i.id = r.item_id
JOIN
	brands AS b
ON
	i.brand_id = b.id
JOIN
	classifications AS cl
ON
	cl.id = i.classification_id
GROUP BY
	i.name,
	b.name,
	cl.name
HAVING
	COUNT(i.id) >= 3
ORDER BY
	average_rating DESC,
	i.name
LIMIT 3;