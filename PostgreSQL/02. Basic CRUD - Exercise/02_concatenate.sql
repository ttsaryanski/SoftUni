SELECT
	name || ' ' || state AS cities_information,
	area AS area_km2
FROM
	cities;

-- SELECT
-- 	CONCAT(name, ' ', state) AS cities_information,
-- 	area AS area_km2
-- FROM
-- 	cities;