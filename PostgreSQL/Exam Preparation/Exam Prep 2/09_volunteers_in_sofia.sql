SELECT
	v.name AS volunteers,
	v.phone_number,
	REGEXP_REPLACE(v.address, '\s*Sofia\s*,?\s*', '') AS address
FROM
	volunteers AS v
JOIN
	volunteers_departments AS vd
ON
	vd.id = v.department_id
WHERE
	vd.department_name = 'Education program assistant'
		AND
	LTRIM(v.address) LIKE 'Sofia%'
ORDER BY
	v.name;