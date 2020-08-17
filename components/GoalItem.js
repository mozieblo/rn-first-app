import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItems}>
                <Text>{props.value}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItems: {
        fontWeight: 'bold',
        marginVertical: 10,
        padding: 10,
        borderColor: 'black',
        backgroundColor: 'grey'
    }
})

export default GoalItem;