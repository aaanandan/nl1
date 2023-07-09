import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Cards from './HomeCards';

export default function HomeFeed() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("../asset/homeCardsData.json")
            .then(response => response.json())
            .then((data) => {
                console.log('data', data);
                setData(data);
            }).catch(error => {
                console.error('No data', error);
            });
    }, []);
    if (!data) return;
    return (
        <View style={styles.container}>
            <Cards data={data} />
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