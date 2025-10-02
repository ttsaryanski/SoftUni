UPDATE
	productions_info
SET
	duration = duration + CASE
		WHEN id < 15 THEN 15
		WHEN id >= 20 THEN 20
		ELSE 0
		END
WHERE
	synopsis IS NULL;