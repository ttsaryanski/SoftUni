SELECT
	SUBSTRING("River information", '([0-9]{1,4})') AS river_length
FROM
	view_river_info;