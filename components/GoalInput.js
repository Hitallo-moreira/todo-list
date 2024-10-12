import { useState } from 'react'; 
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image source={require('../assets/goal.png')} style={styles.image} />
                <TextInput
                    style={styles.textContainer}
                    placeholder="Hello course"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
                    </View>
                    <View style={styles.button}>
                        <Button title="Add goal" onPress={addGoalHandler} color="#5e0acc" />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        backgroundColor: '#311b6b',
    },
    textContainer: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: "#e4d0ff",
        width: '100%',
        padding: 16,
        borderRadius: 8,
        color: '#120438',
        marginTop: 10,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    image: {
        height: 100,
        width: 100,
        margin: 0
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    }
})