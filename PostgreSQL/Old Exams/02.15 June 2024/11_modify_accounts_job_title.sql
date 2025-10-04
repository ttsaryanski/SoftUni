CREATE OR REPLACE PROCEDURE udp_modify_account (
	address_street VARCHAR(30),
	address_town VARCHAR(30)
) AS
$$
BEGIN
	UPDATE
		accounts
	SET
		job_title = CONCAT('(Remote) ', job_title)
	WHERE
		id = (SELECT account_id FROM addresses AS a WHERE a.street = address_street AND a.town = address_town);
END;
$$
LANGUAGE plpgsql;