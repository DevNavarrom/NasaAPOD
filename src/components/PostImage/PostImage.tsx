import React, { FC, ReactNode } from 'react'
import { Text, View } from 'react-native';
import { PostImageProps } from '../../types';

const PostImage: FC<PostImageProps> = ({ Apod }: PostImageProps): ReactNode => {
  return (
    <View>
        <Text>{Apod.title}</Text>
    </View>
  )
}

export default PostImage;