SELECT
	number || ' ' || street AS address,
	city_id
FROM addresses
WHERE id >= 20;

SELECT * FROM addresses;