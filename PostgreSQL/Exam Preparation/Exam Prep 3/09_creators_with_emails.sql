SELECT
	CONCAT_WS(' ', c.first_name, c.last_name) AS full_name,
	c.email,
	MAX(bg.rating) AS rating
FROM
	creators AS c
JOIN
	creators_board_games AS cbg
ON
	c.id = cbg.creator_id
JOIN
	board_games AS bg
ON
	bg.id = cbg.board_game_id
WHERE
	c.email LIKE '%.com'
GROUP BY
	c.id
ORDER BY
	full_name;