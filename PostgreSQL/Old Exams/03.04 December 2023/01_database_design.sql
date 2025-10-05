CREATE TABLE countries (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE customers (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	first_name VARCHAR(25) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    gender CHAR(1) CHECK (gender IN ('M', 'F')),
    age INTEGER NOT NULL CHECK (age > 0),
    phone_number CHAR(10) NOT NULL,
    country_id INTEGER NOT NULL,
    CONSTRAINT countries_customers_fkey
        FOREIGN KEY (country_id)
        REFERENCES countries (id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

CREATE TABLE products (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name VARCHAR(25) NOT NULL,
	description VARCHAR(250),
	recipe TEXT,
	price NUMERIC(10,2) NOT NULL CHECK (price > 0)
);

CREATE TABLE feedbacks (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	description VARCHAR(255),
	rate NUMERIC(4,2) CHECK (rate BETWEEN 0 AND 10),
	product_id INT NOT NULL,
	customer_id INT NOT NULL,
	CONSTRAINT products_feedbacks_fkey
		FOREIGN KEY (product_id)
		REFERENCES products (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE,
	CONSTRAINT customers_feedbacks_fkey
		FOREIGN KEY (customer_id)
		REFERENCES customers (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE
);

CREATE TABLE distributors (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name VARCHAR(25) UNIQUE NOT NULL,
	address VARCHAR(30) NOT NULL,
	summary VARCHAR(200) NOT NULL,
	country_id INT NOT NULL,
	CONSTRAINT countries_distributors_fkey
		FOREIGN KEY (country_id)
		REFERENCES countries (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE
);

CREATE TABLE ingredients (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name VARCHAR(30) NOT NULL,
	description VARCHAR(200),
	country_id INT NOT NULL,
	distributor_id INT NOT NULL,
	CONSTRAINT countries_ingredients_fkey
		FOREIGN KEY (country_id)
		REFERENCES countries (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE,
	CONSTRAINT distributors_ingredients_fkey
		FOREIGN KEY (distributor_id)
		REFERENCES distributors (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE
);

CREATE TABLE products_ingredients (
	product_id INT,
	ingredient_id INT,
	CONSTRAINT products_products_ingredients_fkey
		FOREIGN KEY (product_id)
		REFERENCES products (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE,
	CONSTRAINT ingredients_products_ingredients_fkey
		FOREIGN KEY (ingredient_id)
		REFERENCES ingredients (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE
);