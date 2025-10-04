SELECT
	a.name AS animal,
	EXTRACT('Year' FROM a.birthdate) AS birth_year,
	at.animal_type
FROM
	animals AS a
JOIN
	animal_types AS at
ON
	at.id = a.animal_type_id
WHERE
	a.owner_id IS NULL
		AND
	at.animal_type <> 'Birds'
		AND
	a.birthdate > DATE '2022-01-01' - INTERVAL '5 years'
ORDER BY
	animal;