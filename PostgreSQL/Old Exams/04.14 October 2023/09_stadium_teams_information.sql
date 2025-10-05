CREATE OR REPLACE FUNCTION fn_stadium_team_name(
	stadium_name VARCHAR(30)
) RETURNS TABLE (
	name VARCHAR
) AS
$$
BEGIN
	RETURN QUERY
	SELECT
		t.name
	FROM
		teams AS t
	 FULL JOIN
		stadiums AS s
	ON
		t.stadium_id = s.id
	WHERE
		s.name = stadium_name
	ORDER BY
		t.name;
END;
$$
LANGUAGE plpgsql;