import React, { FC } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { TodayImageProps } from "../../types";


const TodayImage: FC<TodayImageProps> = ({ Apod }: TodayImageProps) => {
  return (
    <View style={styles.container}>
        <Image source={{ uri: Apod.url }} style={styles.image} />
        <Text style={styles.title}>{Apod.title}</Text>
        <Text style={styles.date}>{Apod.date}</Text>
        <View style={styles.buttonContainer}>
            <Button title="View" />
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2C449D',
        marginVertical: 16,
        marginHorizontal: 24,
        borderRadius: 32,
        padding: 16,
    },
    image: {
        width: '100%',
        height: 190,
        borderRadius: 32,
        borderWidth: 2,
        borderColor: '#FFF'
    },
    title: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 12,
    },
    date: {
        color: '#FFF',
        fontSize: 16,
    },
    buttonContainer: {
        alignItems: 'flex-end',
    }
});


export default TodayImage;