import React, { useState, createContext } from "react";

export const RecordsContext = createContext();

const PatientsContext = (props) => {
  const [patientState, setPatientState] = useState([]);

  function addPatient(patientRecord) {
    const medicalRecord = patientState.find(
      (patient) => patient.name === patientRecord.name
    );
    if (!medicalRecord) {
      setPatientState([...patient]);
    }
  }

  return (
    <RecordsContext.Provider
      value={{
        patientState,
        setPatientState,
        addPatient,
      }}
    >
      {props.children}
    </RecordsContext.Provider>
  );
};

export default PatientsContext;
