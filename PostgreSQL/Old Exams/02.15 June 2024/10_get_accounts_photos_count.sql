CREATE OR REPLACE FUNCTION udf_accounts_photos_count (
	account_username VARCHAR(30)
) RETURNS INT AS
$$
DECLARE
	photo_count INT;
BEGIN
	SELECT
		COUNT(*) INTO photo_count
	FROM
		accounts_photos AS ap
	JOIN
		accounts AS a
	ON
		ap.account_id = a.id
	WHERE
		a.username = account_username;
	RETURN photo_count;
END;
$$
LANGUAGE plpgsql;