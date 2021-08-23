import React, { useState, createContext } from "react";

export const RecordsContext = createContext();

const PatientsContext = (props) => {
  const [patientsList, setPatientsList] = useState([]);

  function addPatient(patientRecord) {
    const medicalRecord = patientsList.find(
      (patient) => patient.name === patientRecord.name
    );
    if (!medicalRecord) {
      setPatientsList([...patientsList, patientRecord]);
    }
  }

  return (
    <RecordsContext.Provider
      value={{
        addPatient,
        patientsList,
        setPatientsList,
      }}
    >
      {props.children}
    </RecordsContext.Provider>
  );
};

export default PatientsContext;
