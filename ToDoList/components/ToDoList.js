import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask'

const ToDoList = ({ initValues }) => {


    const [tasks, setTask] = useState(initValues.map((taskTitle) => ({id: uuidv4() , title: taskTitle })));


    const addToDo = (newTitle) => {
        setTask((prevTasks) =>
                [...prevTasks, {id: uuidv4(), title: newTitle}]
        )
    }


    const removeToDo = (id) => {
        setTask((prevTasks) =>
           prevTasks.filter((task) => task.id !== id)
        )
    }


    return (
        <View style={styles.todoListContainer}>
            {tasks.map((item) => (
                    <View key={item.id}>
                        <Text style={styles.text}> TASK: {item.title} </Text>
                            <Button title="REMOVE" onPress={() => {removeToDo(item.id)}}/>
                    </View>
                )
                )
            }
            <AddTask onAddTask={addToDo} />
        </View>
    )
}

AddTask.defaultProps = {
    initValues: [],
};

const styles = StyleSheet.create({
    todoListContainer: {
    margin: 10,
    },
    todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    },
});


export default ToDoList;



