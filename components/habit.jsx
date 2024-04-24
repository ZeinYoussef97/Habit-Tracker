import CheckBox from "@react-native-community/checkbox";
import { Component, useState } from "react";
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Habit(props) {
    const [isCompleted, setCompleted] = useState(false);

    return (
        <View>
            <Text>{props.name}</Text>
            <CheckBox
                value={isCompleted}
                onValueChange={(newValue) => setCompleted(newValue)}
                style={styles.checkbox}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    checkboxContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: 'center',
    },
    label: {
      margin: 8,
    },
  });