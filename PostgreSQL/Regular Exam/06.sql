SELECT
	id,
	TO_CHAR(created_at, 'DD-MM-YYYY') as created_at,
	customer_id
FROM
	orders
WHERE
	customer_id BETWEEN 15 AND 30
		AND
	created_at > '01-01-2025' 
ORDER BY
	created_at,
	customer_id DESC,
	id
LIMIT 5;