import React, { useContext, useState } from "react";
import { RecordsContext } from "../../context/PatientsContext/PatientsContext";
import { Searchbar } from "react-native-paper";
import { globalStyles } from "../../styles/globalStyles";
import { Text, View } from "react-native";

export default RecordSearch = () => {
  const { patientsList } = useContext(RecordsContext);

  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View>
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
    </View>
  );
};
