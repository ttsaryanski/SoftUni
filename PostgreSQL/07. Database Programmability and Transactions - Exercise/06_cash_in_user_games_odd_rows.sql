CREATE OR REPLACE FUNCTION fn_cash_in_users_games (
	game_name VARCHAR(50)
)
RETURNS TABLE (
	total_cash NUMERIC
)
AS
$$
BEGIN
	RETURN QUERY
	WITH 
		ranked_game_rows
	AS (
		SELECT
			ug.cash,
			ROW_NUMBER() OVER (ORDER BY ug.cash DESC)
		FROM
			users_games AS ug
		JOIN
			games AS g
		ON
			ug.game_id = g.id
		WHERE
			g.name = game_name
	)
	
	SELECT	
		ROUND(SUM(cash), 2) AS total_cash
	FROM	
		ranked_game_rows
	WHERE
		ROW_NUMBER % 2 <> 0;
END;
$$
LANGUAGE plpgsql;
