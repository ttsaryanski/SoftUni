DELETE FROM	countries AS c
WHERE c.id NOT IN (SELECT country_id FROM actors)
AND c.id NOT IN (SELECT country_id FROM productions);