CREATE OR REPLACE PROCEDURE sp_animals_with_owners_or_not (
	animal_name VARCHAR(30),
	OUT result VARCHAR
) AS
$$
BEGIN
	SELECT
		COALESCE(o.name, 'For adoption')
	INTO
		result
	FROM
		animals AS a
	LEFT JOIN
		owners AS o
	ON
		a.owner_id = o.id
	WHERE
		a.name = animal_name;
	RAISE NOTICE '%', result;
END;
$$
LANGUAGE plpgsql;