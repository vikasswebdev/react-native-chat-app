import {View, StyleSheet, TextInput, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {theme} from '../../../theme';

const ReplyBox = () => {
  const [isPrivate, setIsPrivate] = useState(false);
  const [message, setMessage] = useState('');

  const onNewMessageChnage = text => {
    setMessage(text);

    if (text.charAt(0) === '/') {
      const query = text.substring(1).toLowerCase();
    }
  };

  const onBlur = () => {
    console.log('onBlur:- Noting to do...');
  };

  const onFocus = () => {
    console.log('onFocus:- Typing...');
  };

  return (
    <View style={isPrivate ? styles.privateView : styles.replyView}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type a message..."
          placeholderTextColor={theme['text-basic-color']}
          multiline={true}
          onChangeText={onNewMessageChnage}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  privateView: {
    padding: 8,
    paddingHorizontal: 14,
    backgroundColor: theme['color-background-private-light'],
    borderTopColor: theme['color-border'],
    borderTopWidth: 1,
  },
  inputContainer: {
    backgroundColor: 'white',
  },
  textInput: {
    fontSize: theme['font-size-medium'],
    color: theme['text-basic-color'],
    borderRadius: 16,
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    textAlignVertical: 'top',
    textAlign: 'left',
    maxHeight: 160,
  },
});

export default ReplyBox;
