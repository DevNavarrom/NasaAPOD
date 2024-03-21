import { PropsWithChildren } from "react";
import { IApod } from "../utils/interfaces";

export type TodayImageProps = PropsWithChildren<{
    Apod: IApod;
}>;

export type LastFiveDaysImagesProps = PropsWithChildren<{
    Apods: IApod[];
}>;

export type PostImageProps = PropsWithChildren<{
    Apod: IApod;
}>;