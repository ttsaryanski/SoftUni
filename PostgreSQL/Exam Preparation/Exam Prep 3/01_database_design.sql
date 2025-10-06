CREATE TABLE categories (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name VARCHAR(50) NOT NULL
);

CREATE TABLE addresses (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	street_name VARCHAR(100) NOT NULL,
	street_number INT NOT NULL CHECK (street_number > 0),
	town VARCHAR(30) NOT NULL,
	country VARCHAR(50) NOT NULL,
	zip_code INT NOT NULL CHECK (zip_code > 0)
);

CREATE TABLE publishers (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name VARCHAR(30) NOT NULL,
	address_id INT NOT NULL,
	website VARCHAR(40),
	phone VARCHAR(20),
	CONSTRAINT addresses_publishers_fkey
		FOREIGN KEY (address_id)
		REFERENCES addresses (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE
);

CREATE TABLE players_ranges (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	min_players INT NOT NULL CHECK (min_players > 0),
	max_players INT NOT NULL CHECK (max_players > 0)
);

CREATE TABLE creators (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	email VARCHAR(30) NOT NULL
);

CREATE TABLE board_games (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name VARCHAR(30) NOT NULL,
	release_year INT NOT NULL CHECK (release_year > 0),
	rating NUMERIC(4,2) NOT NULL,
	category_id INT NOT NULL,
	publisher_id INT NOT NULL,
	players_range_id INT NOT NULL,
	CONSTRAINT categories_board_games_fkey
		FOREIGN KEY (category_id)
		REFERENCES categories (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE,
	CONSTRAINT publishers_board_games_fkey
		FOREIGN KEY (publisher_id)
		REFERENCES publishers (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE,
	CONSTRAINT players_ranges_board_games_fkey
		FOREIGN KEY (players_range_id)
		REFERENCES players_ranges (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE
);

CREATE TABLE creators_board_games (
	creator_id INT NOT NULL,
	board_game_id INT NOT NULL,
	CONSTRAINT creators_creators_board_games_fkey
		FOREIGN KEY (creator_id)
		REFERENCES creators (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE,
	CONSTRAINT board_games_creator_board_games_fkey
		FOREIGN KEY (board_game_id)
		REFERENCES board_games (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE
);