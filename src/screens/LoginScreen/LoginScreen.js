import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {styles} from './LoginScreen.style';
import images from '../../constants/images';
import TextInputField from '../../components/TextInput';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);

  const loginHandler = () => {
    let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailReg.test(email)) {
      //   Alert.alert('Error', 'Please enter a valid email');
      setError(true);
      return;
    } else {
      setError(false);
    }

    if (password.length < 6) {
      //   Alert.alert('Error', 'Password must be at least 6 characters');
      setError2(true);
      return;
    } else {
      setError2(false);
    }

    console.log('loginHandler');
    console.log(email);
    console.log(password);
  };

  return (
    <SafeAreaView style={styles.keyboardView}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.logoView}>
          <Image source={images.login} style={styles.logo} />
        </View>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Welcome to WhatsApp!</Text>
        </View>
        <View style={styles.contentView}>
          <View style={styles.formView}>
            <View style={{marginTop: 10}}>
              <TextInputField
                style={styles.input}
                label="Email"
                onChangeText={() => setEmail(email)}
                error={error ? {message: 'Please enter a valid email'} : false}
                keyboardType="email-address"
                secureTextEntry={false}
              />
            </View>
            <View style={{marginTop: 10}}>
              <TextInputField
                style={styles.input}
                label="Password"
                onChangeText={() => setPassword(password)}
                error={
                  error2
                    ? {message: 'Password must be at least 6 characters'}
                    : false
                }
                keyboardType="default"
                secureTextEntry={false}
              />
            </View>
            <TouchableOpacity style={styles.button} onPress={loginHandler}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
