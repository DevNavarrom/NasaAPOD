import React, { FC, ReactNode } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { PostImageNavigationProps, PostImageProps } from '../../types';
import { useNavigation } from '@react-navigation/native';


const PostImage: FC<PostImageProps> = ({ Apod }: PostImageProps): ReactNode => {

  const { navigate } = useNavigation<PostImageNavigationProps>();

  const handleViewPress = () => {
    navigate('Detail', Apod);
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>{Apod.title}</Text>
        <Text style={styles.date}>{Apod.date}</Text>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleViewPress}>
              <Text style={styles.textButton}>View</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#122771',
        borderRadius: 20,
        marginBottom: 12,
        padding: 16,
    },
    title: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 12,
    },
    date: {
      color: '#FFF',
    },
    buttonContainer: {
      alignItems: 'flex-end'
    },
    button: {
      alignItems: 'center',
      padding: 10,
    },
    textButton: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: '500'
    }
});

export default PostImage;