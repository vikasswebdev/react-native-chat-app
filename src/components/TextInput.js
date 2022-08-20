import {View, TextInput, StyleSheet, Text} from 'react-native';
import React from 'react';
import {theme} from '../theme';

const TextInputField = ({
  onChangeText,
  error,
  keyboardType,
  secureTextEntry,
  label,
  value,
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={error ? styles.errorInputStyle : styles.inputStyle}
        accessibilityLabel={label}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        value={value}
        autoCapitalize="none"
        autoComplete={false}
        autoCorrect={false}
      />
      {error && <Text style={styles.errorLabel}>{error.message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  textViewError: {
    borderWidth: 1,
    borderColor: theme['color-danger-900'],
    borderRadius: 4,
    marginTop: 8,
  },
  label: {
    color: theme['text-basic-color'],
    fontSize: theme['font-size-medium'],
    fontWeight: theme['font-medium'],
    paddingBottom: 6,
  },
  errorLabel: {
    color: theme['color-danger-900'],
    textAlign: 'left',
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: theme['text-primary-size'],
  },

  inputStyle: {
    fontSize: theme['input-font-size'],
    color: theme['text-basic-color'],
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: theme['color-basic-focus-border'],
    height: 48,
  },

  errorInputStyle: {
    fontSize: theme['input-font-size'],
    color: theme['text-basic-color'],
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: theme['color-danger-900'],
    height: 48,
  },
});

export default TextInputField;
