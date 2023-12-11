import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    // Add your authentication logic here if needed
    // For now, just navigate to the Home screen
    navigation.navigate('Home');
  };

  return (
    <ImageBackground
      source={require('../assets/images/lady.png')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10 }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 10 }}>
              <ArrowLeftIcon size={30} color="white" font="bold" />
            </TouchableOpacity>
          </View>
          {/* The Image component is removed as it's now the background */}
          <View style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50, flex: 1, backgroundColor: 'transparent', paddingHorizontal: 20, paddingTop: 20 }}>
            <View style={{ marginBottom: 20, marginTop: 25 }}>
              <Text style={styles.label}>Email Address</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter email"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  secureTextEntry
                  placeholder="Enter Password"
                  value={password}
                  onChangeText={setPassword}
                />
              </View>
            </View>
            <TouchableOpacity onPress={handleLoginPress} style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
              <Text style={styles.secondaryText}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.SigningupText}> Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}

const styles = {
  label: {
    color: 'violet',
    marginLeft: 10,
  },
  inputContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
  },
  input: {
    padding: 10,
    color: 'white',
  },
  button: {
    paddingVertical: 10,
    backgroundColor: 'violet',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  secondaryText: {
    color: 'white',
    fontWeight: 'bold',
  },
  SigningupText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
};
