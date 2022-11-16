import { StyleSheet, View } from "react-native";
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { email } from "../redux/actions";
import StackNavigation from "../navigation/StackNavigation";
import Loading from "./atoms/ActivityIndicator/Loading";

const Container = () => {
  const isDarkModes = useSelector(state => state.darkMode);
  const [initialRoute, setInitialRoute] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dispatch = useDispatch();

  const retrieveData = async () => {
    await AsyncStorage.getItem('emailId').then((res) => {
      const valParse = JSON.parse(res)
      if (valParse) {
        dispatch(email(valParse))
        setInitialRoute('drawerscreen')
      }
      else {
        setInitialRoute('form')
      }
    });
  }

  const checkDarkMode = async () => {
    await AsyncStorage.getItem('isDarkMode').then((res) => {
      const mode = JSON.parse(res)
      setIsDarkMode(mode)
    })
  }

  useEffect(() => {
    retrieveData();
  }, [])

  useEffect(() => {
    checkDarkMode();
  }, [isDarkModes])

  return (
    <>
      {
        initialRoute ?
          <NavigationContainer theme={(isDarkMode === true) ? DarkTheme : DefaultTheme}>
            <StackNavigation initialRoute={initialRoute} />
          </NavigationContainer>
          :
          <View style={styles.load}>
            <Loading />
          </View>
      }
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    textAlign: 'left',
    margin: 40,
  },
  load: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Container;
