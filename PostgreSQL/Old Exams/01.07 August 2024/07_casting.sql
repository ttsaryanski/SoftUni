SELECT
	CONCAT_WS(' ', a.first_name, a.last_name) AS full_name,
	CONCAT(LOWER(LEFT(a.first_name, 1)), RIGHT(a.last_name, 2), CHAR_LENGTH(a.last_name), '@sm-cast.com') AS email,
	a.awards
FROM
	actors AS a
WHERE
	a.id NOT IN (SELECT actor_id FROM productions_actors)
ORDER BY
	awards DESC,
	id;