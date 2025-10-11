SELECT
	id,
	last_name,
	loyalty_card
FROM
	customers
WHERE
	(last_name LIKE '%m%'
		OR
	last_name LIKE '%M%')
		AND
	loyalty_card = TRUE
ORDER BY
	last_name DESC,
	id;