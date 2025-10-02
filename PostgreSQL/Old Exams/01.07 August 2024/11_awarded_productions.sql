CREATE PROCEDURE udp_awarded_production(production_title VARCHAR(70))
LANGUAGE plpgsql
AS
$$
	BEGIN
		UPDATE
			actors
		SET
			awards = awards + 1
		WHERE
			actors.id IN (
				SELECT
					a.id
				FROM
					actors AS a
				JOIN
					productions_actors AS pa
				ON
					a.id=pa.actor_id
				JOIN
					productions AS p
				ON
					pa.production_id=p.id
				WHERE
					p.title = production_title);
	END;
$$;