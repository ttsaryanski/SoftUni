SELECT
	c.last_name,
	CEIL(AVG(bg.rating)) AS average_rating,
	p.name AS publisher_name
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
JOIN
	publishers AS p
ON
	p.id = bg.publisher_id
WHERE
	p.name = 'Stonemaier Games'
GROUP BY
	c.id,
	p.name
ORDER BY
	average_rating DESC,
	last_name;