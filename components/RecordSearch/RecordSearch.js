import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { globalStyles } from "../../styles/globalStyles";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

export default RecordSearch = () => {

  const patientsList = useSelector(state => state.patientsRecords.list)

  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      {patientsList.length > 0 ? (
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
