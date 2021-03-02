CREATE USER api_admin WITH LOGIN PASSWORD 'ts';
ALTER USER api_admin CREATEDB;
SET ROLE api_admin;
CREATE DATABASE ts_api;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE mentors (
	mentor_id uuid DEFAULT uuid_generate_v4(),
	mentor_name VARCHAR NOT NULL CHECK (mentor_name <> ''),
	email VARCHAR NOT NULL CHECK (email <> ''),
	PRIMARY KEY (mentor_id)
);

--Can be replaced by POST with JSON--
INSERT INTO mentors (
    mentor_name,
    email
)
VALUES
    (
        'John Smith',
        'john.smith@example.com'
    ),
    (
        'Jane Maclaren',
        'jane.maclaren@example.com'
    ),
    (
        'Alex Quintero',
        'alex.quintero@example.com'
    );
GRANT SELECT ON mentors TO api_admin;
GRANT INSERT ON mentors TO api_admin;
GRANT DELETE ON mentors TO api_admin;
GRANT UPDATE ON mentors TO api_admin;
CREATE TABLE companies (
    company_id uuid DEFAULT uuid_generate_v4(),
    company_name VARCHAR NOT NULL CHECK (company_name <> ''),
    email VARCHAR NOT NULL CHECK (email <> ''),
    PRIMARY KEY (company_id)
);
INSERT INTO companies (company_name, email)
VALUES
    ('ABG', 'abg@gmail.com'),
    ('Tech', 'tech@gmail.com'),
    ('BigCom', 'bigc@gmail.com');
GRANT SELECT ON companies TO api_admin;
GRANT INSERT ON companies TO api_admin;
GRANT DELETE ON companies TO api_admin;
GRANT UPDATE ON companies TO api_admin;    
GRANT ALL PRIVILEGES ON DATABASE ts_admin TO api_admin;

CREATE TABLE mentor_survey (
    survey_id uuid DEFAULT uuid_generate_v4(),
    vote INTEGER,
    feedback TEXT,
    preference INTEGER,
    PRIMARY KEY (survey_id),
    mentor_id uuid REFERENCES mentors(mentor_id),
    company_id uuid REFERENCES companies(company_id)
);

GRANT SELECT ON mentor_survey TO api_admin;
GRANT INSERT ON mentor_survey TO api_admin;
GRANT DELETE ON mentor_survey TO api_admin;
GRANT UPDATE ON mentor_survey TO api_admin;

CREATE TABLE company_survey (
    survey_id uuid DEFAULT uuid_generate_v4(),
    vote INTEGER,
    feedback TEXT,
    preference INTEGER,
    PRIMARY KEY (survey_id),
    mentor_id uuid REFERENCES mentors(mentor_id),
    company_id uuid REFERENCES companies(company_id)
);