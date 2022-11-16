import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useForm, Controller } from 'react-hook-form'
import { useDispatch } from "react-redux";
import { email } from "../../../redux/actions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import login from "../../../assets/images/login.webp";
import Button from "../../atoms/Button/Button";
import TextBox from "../../atoms/TextInput/TextBox";
import TextAtom from "../../atoms/Text/TextAtom";
import ecart from '../../../assets/images/ecart.png'
import ImageLocal from "../../atoms/Image/ImageLocal";
import { colors } from "../../../shared/styles/colors";
import { fonts } from "../../../shared/styles/fonts";
const FormContainer = ({ navigation }) => {
  const dispatch = useDispatch();
  const { control, handleSubmit, register, setValue, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    dispatch(email(data.email))
    AsyncStorage.setItem('emailId', JSON.stringify(data.email))
    setValue('email', '')
    navigation.reset({
      index: 0,
      routes: [{ name: "drawerscreen" }],
    });
  }

  const handleSkipButton = async () => {
    dispatch(email('Guest'))
    AsyncStorage.setItem('emailId', JSON.stringify('Guest'))
    navigation.reset({
      index: 0,
      routes: [{ name: 'drawerscreen' }]
    })
  }

  return (
    <View>
      <ImageLocal source={ecart} imageStyle={styles.ecart} />
      <View style={[styles.container, { backgroundColor: 'white' }]}>
        <View style={styles.loginImgContainer}>
          <ImageLocal source={login} imageStyle={styles.loginImage} />
        </View>
        <View style={styles.loginContainer}>
          <TextAtom textStyle={styles.welcome} content="Welcome to Ecart" />
          <View>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  placeholder="Email Id"
                  placeholderTextColor="grey"
                  style={styles.input}
                  onChangeText={value => { onChange(value) }}
                  value={value}
                  {...register("email", {
                    required: {
                      value: true,
                      message: 'Email ID required'
                    }, pattern: {
                      value: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/,
                      message: 'Enter valid Email Id'
                    }
                  })}
                />

              )}
            />
          </View>
          <View style={styles.errorView}>
            {
              errors.email && <View style={styles.errorView}><TextAtom textStyle={styles.error} content={errors.email.message} /></View>
            }
          </View>
          <View style={styles.btns}>
            <Button title="Sign In" onPress={handleSubmit(onSubmit)} textStyle={styles.signIn} buttonStyle={styles.signInButton} />
            <Button title="Skip" onPress={handleSkipButton} textStyle={styles.signIn} buttonStyle={styles.signInButton} />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ecart: {
    height: 140,
  },
  container: {
    display: 'flex',
    height: 800,
    textAlign: 'left',
  },
  loginContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  input: {
    fontSize: 22,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 5,
    color: colors.black,
    fontFamily: fonts.RobotoMedium
  },
  signIn: {
    fontSize: 25,
    color: colors.black,
    fontFamily: fonts.RobotoMedium,
  },
  signInButton: {
    backgroundColor: colors.pattensBlue,
    border: 'none',
    borderRadius: 20,
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'center',
    padding: 10,
    width: 140,
  },
  btns: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  loginImgContainer: {
    margin: 30,
    alignItems: 'center',
  },
  error: {
    color: colors.crimson,
    fontSize: 20,
    marginLeft: 10,
    padding: 10,
    fontFamily: fonts.RobotoMedium
  },
  loginImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  welcome: {
    color: colors.black,
    fontSize: 25,
    margin: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    lineHeight: 30
  }
})

export default FormContainer;
