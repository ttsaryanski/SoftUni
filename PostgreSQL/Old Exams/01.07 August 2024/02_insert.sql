INSERT INTO
	actors (first_name, last_name, birthdate, height, awards, country_id)
SELECT
	REVERSE(first_name) AS first_name,
	REVERSE(last_name) AS last_name,
	birthdate - INTERVAL '2 day' AS birthdate,
	COALESCE(height, 0) + 10 AS height,
	country_id AS awards,
	(SELECT id FROM countries WHERE name = 'Armenia') AS country_id
FROM
	actors
WHERE
	id BETWEEN 10 AND 20;