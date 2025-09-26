CREATE TABLE products(
	product_name VARCHAR(100) NOT NULL
);

INSERT INTO products(
	product_name
)
VALUES
	('Broccoli'),
	('Shampoo'),
	('Toothpaste'),
	('Candy');

ALTER TABLE products
ADD COLUMN
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL;