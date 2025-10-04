DELETE FROM
	addresses AS a
WHERE
	a.id % 2 = 0
		AND
	POSITION('r' IN LOWER(a.street)) <> 0;