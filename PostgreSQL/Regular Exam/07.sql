SELECT
	i.name,
	CONCAT(UPPER(b.name), '/', LOWER(c.name)) AS promotion,
	CASE
		WHEN i.description IS NOT NULL THEN CONCAT('On sale: ', i.description)
		ELSE 'On sale: '
	END AS description,
	i.quantity
FROM
	items AS i
JOIN
	brands AS b
ON
	b.id = i.brand_id
JOIN
	classifications AS c
ON
	c.id = i.classification_id
WHERE
	i.id NOT IN (SELECT item_id FROM orders_items)
ORDER BY
	i.quantity DESC,
	i.name;