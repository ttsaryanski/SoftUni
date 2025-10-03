SELECT
	a.name AS address,
	CASE
		WHEN EXTRACT(HOUR FROM co.start) BETWEEN 6 AND 20 THEN 'Day'
		ELSE 'Night'
	END AS day_time,
	co.bill,
	cl.full_name,
	car.make,
	car.model,
	cat.name AS category_name
FROM
	courses AS co
JOIN
	cars AS car
ON
	car.id = co.car_id
JOIN
	clients AS cl
ON
	cl.id = co.client_id
JOIN
	addresses AS a
ON
	co.from_address_id = a.id
JOIN
	categories AS cat
ON
	car.category_id = cat.id
ORDER BY
	co.id;