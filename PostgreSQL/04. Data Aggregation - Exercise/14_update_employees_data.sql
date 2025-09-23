UPDATE employees
SET
    salary = salary + CASE
        WHEN hire_date < '2015-01-16' THEN 2500
        WHEN hire_date < '2020-03-04' THEN 1500
        ELSE 0
    END,
    job_title = CASE
        WHEN hire_date < '2015-01-16' THEN 'Senior ' || job_title
        WHEN hire_date < '2020-03-04' THEN 'Mid-' || job_title
        ELSE job_title
    END;