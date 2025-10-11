CREATE OR REPLACE FUNCTION udf_classification_items_count(
	classification_name VARCHAR(30)
) RETURNS VARCHAR AS
$$
DECLARE
	result_string VARCHAR;
	result_count INT;
BEGIN
	SELECT
		COUNT(i.id) INTO result_count
	FROM
		items AS i
	JOIN
		classifications AS cl
	ON
		i.classification_id = cl.id
	WHERE
		cl.name = classification_name;
	IF
		result_count <> 0 THEN result_string := 'Found ' || result_count || ' items.';
		ELSE result_string := 'No items found.';
	END IF;
	RETURN result_string;
END;
$$
LANGUAGE plpgsql;