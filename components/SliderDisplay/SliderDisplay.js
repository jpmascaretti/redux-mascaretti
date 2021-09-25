import Slider from "@react-native-community/slider";
import React, {useState} from "react";
import { globalStyles } from "../../styles/globalStyles";
import { View, Text } from "react-native";

const SliderDisplay = ({switchEnabled, minValue, maxValue, unit, sliderValue, setSliderValue}) => {

    return (
        <>
        <Slider
          style={{ width: 250, height: 40 }}
          minimumValue={minValue}
          maximumValue={maxValue}
          step={0.5}
          minimumTrackTintColor={switchEnabled ? "#DD41E0" : "#C4C4C4"}
          maximumTrackTintColor={switchEnabled ? "#EEA0F0" : "#C4C4C4"}
          thumbTintColor={switchEnabled ? "#DD41E0" : "#C4C4C4"}
          value={sliderValue}
          disabled={switchEnabled ? false : true}
          onValueChange={(value) => setSliderValue(value)}
        />
        <View
          style={
            switchEnabled
              ? globalStyles.sliderBubble
              : globalStyles.sliderBubbleOff
          }
        >
          {switchEnabled && (
            <Text style={globalStyles.sliderBubbleText}>
              {sliderValue } {unit}
            </Text>
          )}
        </View>
        </>
    )
}

export default SliderDisplay
