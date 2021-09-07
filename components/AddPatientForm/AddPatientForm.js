import React, { useContext, useState } from "react";
import { RecordsContext } from "../../context/PatientsContext/PatientsContext";
import { globalStyles } from "../../styles/globalStyles";
import GenderCheckboxes from "../GenderCheckboxes/GenderCheckboxes";
import { TextInput, Text, View, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { savePatient } from "../../store/actions/patients.actions";


export default AddPatientForm = () => {
  // const { addPatient, patientsList } = useContext(RecordsContext);
  const dispatch = useDispatch();
  const patientsList = useSelector(state => state.patientsRecords.list)

  const [maleSelected, setMaleSelection] = useState(false);
  const [femaleSelected, setFemaleSelection] = useState(false);
  const [inputText, setInputText] = useState("");
  const [nameError, setNameError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [gender, setGender] = useState("");
  const [duplicateRecordError, setDuplicateRecordError] = useState("");

  const handleChangeText = (text) => {
    setInputText(text);
    setNameError("");
    setDuplicateRecordError("");
  };

  const handleAddItem = () => {
    if (
      patientsList.find(
        (patient) => patient.name === inputText && patient.gender === gender
      )
    ) {
      setInputText("");
      setNameError("");
      setGender("");
      setGenderError("");
      setMaleSelection(false);
      setFemaleSelection(false);
      return setDuplicateRecordError("Patient is already in the records");
    }
    if (inputText && (gender == "male" || gender == "female")) {
      dispatch(savePatient(
        {
          id: Math.random().toString(),
          name: inputText,
          gender: gender,
        }
      ))

      setInputText("");
      setNameError("");
      setGender("");
      setGenderError("");
      setMaleSelection(false);
      setFemaleSelection(false);
    } else if (!inputText && (gender == "male" || gender == "female")) {
      setNameError("Name Required");
      setGenderError("");
    } else if (inputText && gender != "male" && gender != "female") {
      setNameError("");
      setGenderError("Gender Required");
    } else if (!inputText && gender != "male" && gender != "female") {
      setNameError("Name required");
      setGenderError("Gender required");
    }
  };
  function handleMaleCheckbox() {
    if (maleSelected) {
      setMaleSelection(false);
      setGender("");
    } else {
      setMaleSelection(true);
      setFemaleSelection(false);
      setGender("male");
      setGenderError("");
    }
    femaleSelected && setFemaleSelection(false);
  }
  function handleFemaleCheckbox() {
    if (femaleSelected) {
      setFemaleSelection(false);
      setGender("");
    } else {
      setFemaleSelection(true);
      setMaleSelection(false);
      setGender("female");
      setGenderError("");
    }

    maleSelected && setMaleSelection(false);
  }

  return (
    <View>
      <View style={globalStyles.inputContainer}>
        <Text style={globalStyles.blackBoldText}>Name:</Text>
        <TextInput
          placeholder="Patient Name"
          style={globalStyles.input}
          onChangeText={handleChangeText}
          value={inputText}
        />
      </View>
      {nameError != "" && (
        <Text style={globalStyles.nameError}>{nameError}</Text>
      )}
      <GenderCheckboxes
        maleSelected={maleSelected}
        femaleSelected={femaleSelected}
        handleMaleCheckbox={handleMaleCheckbox}
        handleFemaleCheckbox={handleFemaleCheckbox}
      />
      {genderError != "" && (
        <Text style={globalStyles.genderError}>{genderError}</Text>
      )}
      <View style={globalStyles.addButtonContainer}>
        <TouchableOpacity
          onPress={handleAddItem}
          style={globalStyles.addButton}
        >
          <Text style={globalStyles.whiteBoldText}>Add Patient</Text>
        </TouchableOpacity>
      </View>
      {duplicateRecordError != "" && (
        <Text style={globalStyles.genderError}>{duplicateRecordError}</Text>
      )}
    </View>
  );
};
