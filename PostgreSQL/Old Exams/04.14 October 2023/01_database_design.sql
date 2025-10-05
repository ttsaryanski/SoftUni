CREATE TABLE towns (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name VARCHAR(45) NOT NULL
);

CREATE TABLE stadiums(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name VARCHAR(45) NOT NULL,
	capacity INT NOT NULL CHECK (capacity > 0),
	town_id INT NOT NULL,
	CONSTRAINT towns_stadiums_fkey
		FOREIGN KEY (town_id)
		REFERENCES towns (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE
);

CREATE TABLE teams (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name VARCHAR(45) NOT NULL,
	established DATE NOT NULL,
	fan_base INT NOT NULL DEFAULT 0 CHECK (fan_base >= 0),
	stadium_id INT NOT NULL,
	CONSTRAINT stadiums_teams_fkey
		FOREIGN KEY (stadium_id)
		REFERENCES stadiums (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE
);

CREATE TABLE coaches (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	first_name VARCHAR(10) NOT NULL,
	last_name VARCHAR(20) NOT NULL,
	salary NUMERIC(10,2) NOT NULL DEFAULT 0 CHECK (salary >= 0),
	coach_level INT NOT NULL DEFAULT 0 CHECK (coach_level >= 0)
);

CREATE TABLE skills_data (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	dribbling INT DEFAULT 0 CHECK (dribbling >= 0),
	pace INT DEFAULT 0 CHECK (pace >= 0),
	passing INT DEFAULT 0 CHECK (passing >= 0),
	shooting INT DEFAULT 0 CHECK (shooting >= 0),
	speed INT DEFAULT 0 CHECK (speed >= 0),
	strength INT DEFAULT 0 CHECK (strength >= 0)
);

CREATE TABLE players (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	first_name VARCHAR(10) NOT NULL,
	last_name VARCHAR(20) NOT NULL,
	age INT NOT NULL DEFAULT 0 CHECK (age >= 0),
	position CHAR(1) NOT NULL,
	salary NUMERIC(10,2) NOT NULL DEFAULT 0 CHECK (salary >= 0),
	hire_date TIMESTAMP,
	skills_data_id INT NOT NULL,
	team_id INT,
	CONSTRAINT skills_data_players_fkey
		FOREIGN KEY (skills_data_id)
		REFERENCES skills_data (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE,
	CONSTRAINT teams_players_fkey
		FOREIGN KEY (team_id)
		REFERENCES teams (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE
);

CREATE TABLE players_coaches (
	player_id INT,
	coach_id INT,
	CONSTRAINT players_players_coaches_fkey
		FOREIGN KEY (player_id)
		REFERENCES players (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE,
	CONSTRAINT coaches_players_coaches_fkey
		FOREIGN KEY (coach_id)
		REFERENCES coaches (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE
);