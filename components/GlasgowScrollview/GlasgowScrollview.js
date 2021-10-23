import React, {useState} from 'react'
import {
    Text,
    TouchableOpacity,
    ScrollView,
  } from "react-native";

  import { globalStyles } from '../../styles/globalStyles';

const GlasgowScrollview = ({responseArray, setValue}) => {

    const [selectedResponse, setSelectedResponse] = useState(null);

    return (
        <ScrollView
        horizontal={true}
        contentContainerStyle={globalStyles.scrollViewContainer}
      >
        {responseArray.map((resp, i) => (
          <TouchableOpacity
            key={i}
            style={
              selectedResponse === resp.response
                ? [
                    globalStyles.selectedGlasgowCard,
                    globalStyles.bottomShadow,
                  ]
                : [globalStyles.glasgowCard, globalStyles.bottomShadow]
            }
            onPress={() => {
              setSelectedResponse(resp.response),
                setValue(resp.responseVal);
            }}
          >
            <Text
              style={
                selectedResponse === resp.response
                  ? globalStyles.selectedGlasgowCardText
                  : globalStyles.glasgowCardText
              }
            >
              {resp.response}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

    )
}

export default GlasgowScrollview
