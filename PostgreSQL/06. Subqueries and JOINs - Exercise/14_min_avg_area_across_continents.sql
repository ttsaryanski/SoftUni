SELECT
	MIN(avg_area) AS min_average_area
FROM (
	SELECT
		AVG(c.area_in_sq_km) AS avg_area
	FROM
		countries AS c
	GROUP BY
		continent_code
) AS continent_avg_areas;