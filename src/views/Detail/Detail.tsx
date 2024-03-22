import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParams } from '../../types';
import Header from '../../components/Header';


const Detail = () => {

  const { params: {title, url, explanation, date} } = useRoute<NativeStackScreenProps<RootStackParams, 'Detail'>['route']>();

  return (
    <View style={styles.container}>
        <Header />
        <View style={styles.content}>
            <Image source={{ uri: url }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <ScrollView style={styles.explanationContainer}>
                <Text style={styles.explanation}>{explanation}</Text>
            </ScrollView>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#071A5D',
        paddingHorizontal: 16,
    },
    content: {
        backgroundColor: '#2C449D',
        borderRadius: 32,
        marginVertical: 24,
        padding: 16,
        flex: 1,
    },
    image: {
        width: '100%',
        height: '50%',
        borderRadius: 32,
        borderColor: '#FFF',
        borderWidth: 2,
        marginBottom: 16,
    },
    title: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    date: {
        color: '#FFF',
        fontSize: 16,
    },
    explanationContainer: {
        marginVertical: 16,
    },
    explanation: {
        color: '#C7C8C5',
    }
});

export default Detail;