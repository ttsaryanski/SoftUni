SELECT
	c.id AS customer_id,
	CONCAT_WS(' ', c.first_name, c.last_name) AS full_name,
	COUNT(c.id) AS total_orders,
	CASE
		WHEN c.loyalty_card = TRUE THEN 'Loyal Customer'
		ELSE 'Regular Customer'
	END AS loyalty_status
FROM
	customers AS c
JOIN
	orders AS o
ON
	o.customer_id = c.id
WHERE
	c.id IN (SELECT customer_id FROM orders)
		AND
	c.id NOT IN (SELECT customer_id FROM reviews)
GROUP BY
	c.id
ORDER BY
	total_orders DESC,
	customer_id;