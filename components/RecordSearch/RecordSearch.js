import React, { useState, useEffect} from "react";
import { Searchbar } from "react-native-paper";
import { globalStyles } from "../../styles/globalStyles";
import { Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getPatients } from "../../store/actions/patients.actions";

export default RecordSearch = () => {

  const dispatch = useDispatch();
  const userID = useSelector((state) => state.auth.userId);
  const patientsList = useSelector((state) => state.patientsRecords.list);

  useEffect(() => {
    dispatch(getPatients(userID))
  }, [])

  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      {!!patientsList && patientsList.length > 0 ? (
        <View style={globalStyles.searchBarContainer}>
          <Searchbar
            placeholder="Search Patient"
            onChangeText={onChangeSearch}
            value={searchQuery}
            icon="magnify"
            style={globalStyles.searchBar}
          />
        </View>
      ) : (
        <View style={globalStyles.noRecordsMessage}>
          <Text style={globalStyles.headline}>No patients found</Text>
          <Text style={globalStyles.headlineBottom}>
            Please add patients to medical records{" "}
          </Text>
        </View>
      )}
    </>
  );
};
