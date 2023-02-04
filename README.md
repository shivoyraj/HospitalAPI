# HospitalAPI
Tech Stack: Node.js &amp; Mongo DB

There are 2 types of Users
- Doctors
- Patients

- Doctors can log in
- Each time a patient visits, the doctor will follow 2 steps
    -- Register the patient in the app
    -- create a Report

- Patient Report will have the following fields
    -- Created by doctor
    -- Status Can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine,Positive-Admit]
    -- Date

- Available routes
    - /doctors/register → with username and password and return success msg response
    - /doctors/login → returns the JWT to be used on successful login
    - /patients/register → register with name and unique phoneNumber
    - /patients/:id/create_report → create report with status of a particular patient
    - /patients/:id/all_reports → List all the reports of a patient oldest to latest
    - /reports/:status → List all the reports of all the patients filtered by a specific status