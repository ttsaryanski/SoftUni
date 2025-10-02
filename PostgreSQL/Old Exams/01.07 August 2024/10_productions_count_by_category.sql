CREATE OR REPLACE FUNCTION udf_category_productions_count(category_name VARCHAR(50))
RETURNS TEXT
AS
$$
	DECLARE
		count_p INT;
		result_string TEXT;
	BEGIN
		SELECT
			COUNT(*) INTO count_p
		FROM
			productions AS p
		JOIN
			categories_productions AS cp
		ON
			p.id = cp.production_id
		JOIN
			categories AS c
		ON
			cp.category_id = c.id
		WHERE
			c.name = category_name;
		result_string := CONCAT('Found ', count_p, ' productions.');
		RETURN result_string;
	END;
$$
LANGUAGE plpgsql;