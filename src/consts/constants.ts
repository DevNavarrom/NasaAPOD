import { Platform } from "react-native";
import { IApod } from "../utils/interfaces";


export const android = Platform.OS == 'android';

export const topMargin = android ? '50' : '';

export const APOD: IApod = {
    date: '',
    copyright: '',
    explanation: '',
    hdurl: '',
    media_type: '',
    service_version: '',
    title: '',
    url: ''
}