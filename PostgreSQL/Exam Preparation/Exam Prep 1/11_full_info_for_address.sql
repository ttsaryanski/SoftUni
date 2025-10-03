CREATE TABLE search_results (
    id SERIAL PRIMARY KEY,
    address_name VARCHAR(50),
    full_name VARCHAR(100),
    level_of_bill VARCHAR(20),
    make VARCHAR(30),
    condition CHAR(1),
    category_name VARCHAR(50)
);

CREATE OR REPLACE PROCEDURE sp_courses_by_address(
	address_name VARCHAR(100)
)
AS
$$
BEGIN
	TRUNCATE TABLE search_results;
	INSERT INTO
		search_results (address_name, full_name, level_of_bill, make, condition, category_name)
	SELECT
		a.name,
		cl.full_name,
		CASE
			WHEN co.bill <= 20 THEN 'Low'
			WHEN co.bill <= 30 THEN 'Medium'
			ELSE 'High'
		END AS level_of_bill,
		car.make,
		car.condition,
		cat.name AS category_name
	FROM
		addresses AS a
	JOIN
		courses AS co
	ON
		co.from_address_id = a.id
	JOIN
		cars AS car
	ON
		co.car_id = car.id
	JOIN
		categories AS cat
	ON
		car.category_id = cat.id
	JOIN
		clients AS cl
	ON
		cl.id = co.client_id
	WHERE
		a.name = address_name
	ORDER BY
		car.make,
		cl.full_name;
END;
$$
LANGUAGE plpgsql;