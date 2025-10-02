SELECT
	p.title AS title,
	CASE
		WHEN p_i.rating > 8.00 THEN 'excellent'
		WHEN p_i.rating > 3.50 AND p_i.rating <= 8.00 THEN 'good'
		ELSE 'poor'
	END AS rating,
	CASE
		WHEN p_i.has_subtitles THEN 'Bulgarian'
		ELSE 'N/A'
	END AS subtitles,
	COUNT(p_a.actor_id) AS actors_count
FROM
	productions AS p
JOIN
	productions_info AS p_i
ON
	p.production_info_id = p_i.id
JOIN
	productions_actors AS p_a
ON
	p.id = p_a.production_id
GROUP BY
	p.title,
    p_i.rating,
    p_i.has_subtitles
ORDER BY
	rating,
	actors_count DESC,
	title;