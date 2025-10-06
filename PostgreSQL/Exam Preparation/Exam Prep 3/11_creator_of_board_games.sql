CREATE OR REPLACE FUNCTION fn_creator_with_board_games(
	creator_first_name VARCHAR(30)
) RETURNS INT AS
$$
DECLARE
	total_count INT;
BEGIN
	SELECT
		COUNT(*)
	INTO
		total_count
	FROM
		creators AS c
	JOIN
		creators_board_games AS cbg
	ON
		c.id = cbg.creator_id
	WHERE
		c.first_name = creator_first_name;
	RETURN total_count;
END;
$$
LANGUAGE plpgsql;