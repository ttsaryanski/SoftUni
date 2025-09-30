SELECT
	a.name,
	a.country,
	b.booked_at::DATE AS booked_at
FROM
	apartments AS a
LEFT JOIN
	bookings AS b
USING
	(booking_id)
LIMIT 10;