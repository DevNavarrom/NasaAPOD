import React, { FC, ReactNode } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { PostImageProps } from '../../types';

const PostImage: FC<PostImageProps> = ({ Apod }: PostImageProps): ReactNode => {
  return (
    <View style={styles.container}>
        <Text>{Apod.title}</Text>
        <Text>{Apod.date}</Text>
        <View>
            <Button title='View' />
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#122771'
    }
});

export default PostImage;