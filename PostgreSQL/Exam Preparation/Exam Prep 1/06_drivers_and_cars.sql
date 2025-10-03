SELECT
	d.first_name,
	d.last_name,
	ca.make,
	ca.model,
	ca.mileage
FROM
	cars AS ca
JOIN
	cars_drivers AS cd
ON
	ca.id = cd.car_id
JOIN
	drivers AS d
ON
	d.id = cd.driver_id
WHERE
	ca.mileage IS NOT NULL
ORDER BY
	ca.mileage DESC,
	d.first_name;