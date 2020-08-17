import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from "react-native";

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const handleChangedText = (enteredText) => {
        setEnteredGoal(enteredText)
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Course Goal"
                style={styles.inputText}
                onChangeText={handleChangedText}
                value={enteredGoal}
            />
            <Button
                title="Add"
                onPress={props.addGoalHandler.bind(this, enteredGoal)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    inputText: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 10,
        width: 200
    },
})

export default GoalInput;


