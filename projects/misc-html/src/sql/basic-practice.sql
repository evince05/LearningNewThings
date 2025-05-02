/* SELECT * FROM patients*/

/*
  Start by selecting a question by pressing 'Start' or 'View All Questions'.
  Use the resources and information about the database from the left panel to help.
  Press the run button to execute the query.
  Question is automatically validated every time you execute the query.
  Make your output match the expected output.
 
 
  Keybinds:
    [ctrl + enter]: Execute the SQL
    [ctrl + q]: Auto-format the SQL
*/

--SELECT first_name, last_name, gender from patients WHERE gender = 'M';
--UPDATE patients SET allergies="NKA" WHERE allergies is NULL;
--SELECT CONCAT(first_name, " ", last_name) as full_name FROM patients;

-- Joins the province name based on the relational id, province id
/*
SELECT patients.first_name, patients.last_name, province_names.province_name
	from patients JOIN province_names on province_names.province_id = patients.province_id;
*/  
-- SELECT COUNT(YEAR(birth_date) = 2010) from patients; incorrect
--SELECT Max(height) as maxHeight from patients;
SELECT first_name, last_name, height from patients WHERE height= (select MAX(height) from patients);

-- You can nest select statements!