SELECT
	username,
	gender,
	age
FROM
	accounts AS a
WHERE
	a.age >= 18
		AND
	LENGTH(a.username) > 9
ORDER BY
	a.age DESC,
	a.username;