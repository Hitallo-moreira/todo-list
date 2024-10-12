import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.goalItems}>
            <Pressable android_ripple={{ color: '#dddddd' }} onPress={props.onDeleteItem.bind(this, props.id)}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItems: {
        margin: 8,
        backgroundColor: '#5e0acc',
        borderRadius: 6,
    },
    
    goalText: {
        color: 'white',
        padding: 8,
    }
})