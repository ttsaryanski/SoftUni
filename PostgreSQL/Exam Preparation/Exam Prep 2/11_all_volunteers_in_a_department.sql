CREATE oR REPLACE FUNCTION fn_get_volunteers_count_from_department(
	searched_volunteers_department VARCHAR(30)
) RETURNS INT AS
$$
DECLARE
	v_count INT;
BEGIN
	SELECT
		COUNT(*) INTO v_count
	FROM
		volunteers AS v
	JOIN
		volunteers_departments AS vd
	ON
		vd.id = v.department_id
	WHERE
		vd.department_name = searched_volunteers_department;
	RETURN v_count;
END;
$$
LANGUAGE plpgsql;