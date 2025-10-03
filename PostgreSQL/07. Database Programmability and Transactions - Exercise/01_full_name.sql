CREATE OR REPLACE FUNCTION fn_full_name (first_name VARCHAR(20), last_name VARCHAR(20))
RETURNS TEXT
LANGUAGE plpgsql
AS
$$
	DECLARE
		result TEXT;
	BEGIN
		result := CASE
			WHEN first_name IS NULL AND last_name IS NOT NULL THEN INITCAP(last_name)
			WHEN first_name IS NOT NULL AND last_name IS NULL THEN INITCAP(first_name)
			WHEN first_name IS NULL AND last_name IS NULL THEN NULL
			ELSE CONCAT(INITCAP(first_name), ' ', INITCAP(last_name))
		END;
		RETURN result;
	END;
$$;