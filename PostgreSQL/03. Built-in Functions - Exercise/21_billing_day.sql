ALTER TABLE
	bookings
ADD COLUMN
	--billing_day TIMESTAMPTZ DEFAULT NOW();
	billing_day_2 TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP;

SELECT
	billing_day,
	TO_CHAR(billing_day, 'DD "Day" MM "Month" YYYY "Year" HH24:MI:SS') AS "Billing Day"
FROM
	bookings;