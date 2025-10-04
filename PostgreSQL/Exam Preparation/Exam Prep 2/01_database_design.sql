CREATE TABLE owners(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	phone_number VARCHAR(15) NOT NULL,
	address VARCHAR(50)
);

CREATE TABLE animal_types(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	animal_type VARCHAR(30) NOT NULL
);

CREATE TABLE cages(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	animal_type_id INT NOT NULL,
	CONSTRAINT animal_types_cages_fkey
		FOREIGN KEY (animal_type_id)
		REFERENCES animal_types (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE
);

CREATE TABLE animals(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name VARCHAR(30) NOT NULL,
	birthdate DATE NOT NULL,
	owner_id INT,
	animal_type_id INT NOT NULL,
	CONSTRAINT owners_animals_fkey
		FOREIGN KEY (owner_id)
		REFERENCES owners (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE,
	CONSTRAINT animal_types_animals_fkey
		FOREIGN KEY (animal_type_id)
		REFERENCES animal_types (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE
);


CREATE TABLE volunteers_departments (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	department_name VARCHAR(30) NOT NULL
);

CREATE TABLE volunteers (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	phone_number VARCHAR(15) NOT NULL,
	address VARCHAR(50),
	animal_id INT,
	department_id INT NOT NULL,
	CONSTRAINT animals_volunteers_fkey
		FOREIGN KEY (animal_id)
		REFERENCES animals (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE,
	CONSTRAINT volunteers_departments_volunteers_fkey
		FOREIGN KEY (department_id)
		REFERENCES volunteers_departments (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE
);

CREATE TABLE animals_cages (
	cage_id INT NOT NULL,
	animal_id INT NOT NULL,
	CONSTRAINT cages_animals_cages_fkey
		FOREIGN KEY (cage_id)
		REFERENCES cages (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE,
	CONSTRAINT animals_animals_cages_fkey
		FOREIGN KEY (animal_id)
		REFERENCES animals (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE
);