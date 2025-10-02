CREATE TABLE countries(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name VARCHAR(40) UNIQUE NOT NULL,
	continent VARCHAR(40) NOT NULL,
	currency VARCHAR(5) NULL
);

CREATE TABLE categories(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name VARCHAR(50) UNIQUE NOT NULL	
);

CREATE TABLE actors(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	birthdate DATE NOT NULL,
	height INT NULL,
	awards INTEGER NOT NULL DEFAULT 0 CHECK (awards >= 0),
	country_id INT NOT NULL,
	CONSTRAINT countries_actors_fkey
		FOREIGN KEY (country_id)
		REFERENCES countries (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE
);

CREATE TABLE productions_info(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	rating DECIMAL(4,2) NOT NULL,
	duration INT NOT NULL CHECK (duration > 0),
	budget DECIMAL(10,2) NULL,
	release_date DATE NOT NULL,
	has_subtitles BOOLEAN NOT NULL DEFAULT FALSE,
	synopsis TEXT NULL
);

CREATE TABLE productions(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	title VARCHAR(70) NOT NULL UNIQUE,
	country_id INT NOT NULL,
	production_info_id INT NOT NULL UNIQUE,
	CONSTRAINT countries_productions_fkey
		FOREIGN KEY (country_id)
		REFERENCES countries (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE,
	CONSTRAINT productions_info_productions_fkey
		FOREIGN KEY (production_info_id)
		REFERENCES productions_info (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE
);

CREATE TABLE productions_actors(
	production_id INT NOT NULL,
	actor_id INT NOT NULL,
	PRIMARY KEY (production_id, actor_id),
	CONSTRAINT productions_productions_actors_production_id_pkey
		FOREIGN KEY (production_id)
		REFERENCES productions (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE,
	CONSTRAINT actors_productions_actors_actor_id_pkey
		FOREIGN KEY (actor_id)
		REFERENCES actors (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE
);

CREATE TABLE categories_productions(
	category_id INT NOT NULL,
	production_id INT NOT NULL,
	PRIMARY KEY (category_id, production_id),
	CONSTRAINT categories_categories_productions_category_id_pkey
		FOREIGN KEY (category_id)
		REFERENCES categories (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE,
	CONSTRAINT actors_categories_productions_production_id_pkey
		FOREIGN KEY (production_id)
		REFERENCES productions (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE
);
