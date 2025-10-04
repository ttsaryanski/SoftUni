INSERT INTO
	addresses (street, town, country, account_id)
SELECT
	ac.username,
	ac.password,
	ac.ip,
	ac.age
FROM
	accounts AS ac
WHERE
	ac.gender = 'F';