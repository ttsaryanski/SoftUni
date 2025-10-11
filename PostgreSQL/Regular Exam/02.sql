INSERT INTO
	items (name, quantity, price, description, brand_id, classification_id)
SELECT
	CONCAT('Item', created_at),
	customer_id,
	rating * 5,
	NULL,
	item_id,
	(SELECT MIN(item_id) FROM reviews)
FROM
	reviews
ORDER BY
	item_id
LIMIT 10;