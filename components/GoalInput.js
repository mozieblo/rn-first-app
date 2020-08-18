import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View, Modal} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const handleChangedText = (enteredText) => {
        setEnteredGoal(enteredText)
    };

    const addGaolHandler = () => {
        enteredGoal ? props.addGoalHandler(enteredGoal) : props.addGoalHandler() ;
        setEnteredGoal('')
    };

    return (
        <Modal
            visible={props.visible}
            animationType="slide"
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.inputText}
                    onChangeText={handleChangedText}
                    value={enteredGoal}
                />
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <Button
                            title="ADD"
                            onPress={addGaolHandler}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            color="red"
                            title="CANCEL"
                            onPress={addGaolHandler}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputText: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 10,
        width: '50%'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '50%'
    },
    button: {
        width: '40%'
    }
})

export default GoalInput;


