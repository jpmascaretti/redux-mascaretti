import AuthNavigator from "./AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import TabsNavigator from "./TabsNavigator";
import { useSelector, useDispatch } from "react-redux";
import { persistentAuthentication } from "../../store/actions/auth.actions";

const MainNavigator = () => {
  const userId = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(persistentAuthentication);
  }, []);

  return (
    <NavigationContainer>
      {userId ? <TabsNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;
