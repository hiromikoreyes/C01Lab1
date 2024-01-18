import React, {useState} from "react";
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTask = ({ onAddTask }) => {
    
    const [initValue, setInitValue] = useState('');

    const handleAddTask = () =>{
        if(initValue.trim() !== '') {
            onAddTask(initValue);
            setInitValue('');
        }
    };

    return(
        <View style={styles.addTodoForm}>
            <TextInput
                style={styles.input}
                placeholder="enter task to do"
                value={initValue}
                onChangeText={(text) => setInitValue(text)}
                keyboardType="default"
                returnKeyType="done"
            />
            <Button title="Add Task" onPress={handleAddTask}/>
        </View>
    );
};

const styles = StyleSheet.create({
    addTodoForm: {
      margin: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
});

export default AddTask;