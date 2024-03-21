import React, { FC } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { LastFiveDaysImagesProps } from '../../types';
import PostImage from '../PostImage';


const LastFiveDaysImages: FC<LastFiveDaysImagesProps> = ({ Apods }: LastFiveDaysImagesProps) => {

  const renderApods = (): React.ReactNode => {
    return Apods?.map(post => {
        return <PostImage Apod={post} key={`post-image${post.title}`} />
    })
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Last 5 Days</Text>
        <ScrollView style={styles.content}>
            {renderApods()}
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