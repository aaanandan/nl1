import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
export default function EventsFeed() {
    const [todos, setTodos] = useState(null);
    useEffect(() => {
        fetch("../asset/data.json")
            .then(response => response.json())
            .then((data) => {
                console.log('data', data);
                setTodos(data);
            }).catch(error => {
                console.error('No data', error);
            });
    }, []);
    if (!todos) return;
    console.log(todos)
    return (
        <View style={styles.container}>
            <ScrollView>
                {todos.map(todo => (<View key={todo.id} style={styles.todo}>
                    <Text>{todo.title}</Text>
                </View>)
                )}
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    todo: {
        margin: 30,
        backgroundColor: 'yellow',
        color: 'white',
        fontSize: 30,
        padding: 30
    }
});