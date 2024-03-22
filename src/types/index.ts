import React, { PropsWithChildren } from "react";
import { IApod } from "../utils/interfaces";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type TodayImageProps = PropsWithChildren<{
    Apod: IApod;
}>;

export type LastFiveDaysImagesProps = {
    Apods: IApod[];
};

export type PostImageProps = PropsWithChildren<{
    Apod: IApod;
}>;

export type RootStackParams = {
    Home: undefined;
    Detail: IApod;
}

export type PostImageNavigationProps = NativeStackNavigationProp<RootStackParams, 'Detail'>;