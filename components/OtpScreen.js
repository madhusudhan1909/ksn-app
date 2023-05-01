import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const OtpScreen = ({ navigation }) => {
  const [otp, setOtp] = useState('');
  const refInputs = useRef([]);

  const handleOtpChange = (index, value) => {
    // Make sure the OTP value doesn't exceed 4 digits
    if (index < 4) {
      // Copy the existing OTP value into a new array
      const otpArray = [...otp];

      // Update the digit at the specified index with the new value
      otpArray[index] = value;

      // Join the array back into a single string and update the state
      setOtp(otpArray.join(''));

      // Move focus to the next input box, if there is one
      if (refInputs.current[index + 1]) {
        refInputs.current[index + 1].focus();
      }

      // Navigate to the next screen if OTP value is "1234"
      if (otpArray.join('') === '1234') {
        navigation.navigate('Main');
    }
  }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>KSN Sweets & Savories</Text>
      <Text style={styles.subtitle}>Submit the 4-digit code you got on your </Text>
      <Text style={styles.subtitle}>provided number </Text>
      <View style={styles.otpContainer}>
        {/* Use an array to generate the OTP input boxes */}
        {[0, 1, 2, 3].map((index) => (
          <TextInput
            key={index}
            style={styles.otpBox}
            value={otp[index] || ''}
            keyboardType="numeric"
            maxLength={1}
            autoFocus={index === 0}
            onSubmitEditing={() => {
              if (index === 3) {
                // Handle OTP verification when the user enters the last digit
                console.log('OTP entered:', otp);
              }
            }}
            onChangeText={(value) => handleOtpChange(index, value)}
            ref={(ref) => {
              refInputs.current[index] = ref;
            }}
          />
        ))}
      </View>
      <View style={styles.verifyButton}>
        <Text style={styles.verifyText}>Verify</Text>
      </View>
      <Text style={styles.resendText}>Didn't receive an OTP? Resend</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 150,
    marginTop:100,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 0,
    marginTop:2,
    
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpBox: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginTop: 80,
    marginHorizontal: 10,
    padding: 10,
    fontSize: 24,
    textAlign: 'center',
    width: 50,
  },
  resendText: {
    marginTop: 20,
    fontSize: 16,
    color: 'brown',
    textDecorationLine: 'underline',
  },
  verifyButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  verifyText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default OtpScreen;