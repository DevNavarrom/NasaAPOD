import React, { FC } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { LastFiveDaysImagesProps } from '../../types';
import PostImage from '../PostImage';


const LastFiveDaysImages: FC<{Apods: LastFiveDaysImagesProps}> = ({ Apods }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Last 5 Days</Text>
        <ScrollView style={styles.content}>
            {Apods?.Apods?.length > 0 ? Apods?.Apods?.map(post => {
                <PostImage Apod={post} key={`post-image${post.title}`} />
            }): <Text>Hola</Text>}
        </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8,
    },
    title: {
        color: '#FFF',
        fontSize: 16,
        marginBottom: 18,
    },
    content: {
        paddingHorizontal: 24,
    }
});

export default LastFiveDaysImages;