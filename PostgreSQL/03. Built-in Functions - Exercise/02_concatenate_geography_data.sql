CREATE VIEW view_continents_countries_currencies_details
AS
SELECT
	CONCAT(cont.continent_name, ': ', cont.continent_code) AS continent_details,
	CONCAT(countr.country_name, ' - ', countr.capital, ' - ', countr.area_in_sq_km, ' - km2') AS country_information,
	CONCAT(cur.description, ' (', cur.currency_code, ')') AS currencies
FROM
	continents AS cont, countries AS countr, currencies AS cur
WHERE
	countr.continent_code = cont.continent_code
		AND
	cur.currency_code = countr.currency_code
ORDER BY
	country_information,
	currencies;

-- CREATE VIEW view_continents_countries_currencies_details
-- AS
-- SELECT
-- 	CONCAT(cont.continent_name, ': ', cont.continent_code) AS continent_details,
-- 	CONCAT(countr.country_name, ' - ', countr.capital, ' - ', countr.area_in_sq_km, ' - km2') AS country_information,
-- 	CONCAT(cur.description, ' (', cur.currency_code, ')') AS currencies
-- FROM
-- 	continents AS cont
-- JOIN
-- 	countries AS countr
-- ON
-- 	countr.continent_code = cont.continent_code
-- JOIN
-- 	currencies AS cur
-- ON
-- 	cur.currency_code = countr.currency_code
-- ORDER BY
-- 	country_information,
-- 	currencies;