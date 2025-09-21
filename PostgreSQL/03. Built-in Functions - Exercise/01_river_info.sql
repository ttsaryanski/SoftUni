CREATE VIEW view_river_info
AS
SELECT
	-- CONCAT('The river', ' ', river_name, ' ', 'flows into the', ' ', outflow, ' ', 'and is', ' ', length, ' ', 'kilometers long.') AS "River information"
	CONCAT_WS(' ', 'The river', river_name, 'flows into the', outflow, 'and is', "length", 'kilometers long.') AS "River information"
FROM
	rivers
ORDER BY
	river_name;