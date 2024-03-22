import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { format, sub } from 'date-fns';

import Header from '../../components/Header';
import TodayImage from '../../components/TodayImage';
import fetchApi from '../../utils/fetch';
import { IApod } from '../../utils/interfaces';
import { APOD } from '../../consts/constants';
import LastFiveDaysImages from '../../components/LastFiveDaysImages';


const Home = () => {

  const [todaysImage, setTodaysImage] = useState<IApod>(APOD);
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState<IApod[]>([]);

  useEffect(() => {
    const loadTodaysImage = async () => {
      try {
        const todaysImageResp = await fetchApi();
        setTodaysImage(todaysImageResp);
      } catch (error) {
        console.error(error);
        setTodaysImage(APOD);
      }
    }

    const loadLast5DaysImages = async () => {
      try {
        const date = new Date();
        const todaysDate = format(date, 'yyyy-MM-dd');
        const fiveDaysAgoDate = format(sub(todaysDate, {days: 5}), 'yyyy-MM-dd');

        const lastFiveDaysImageResponse = await fetchApi(
          `&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`
        );

        setLastFiveDaysImages(lastFiveDaysImageResponse);

      } catch (error) {
        console.error(error);
      }
    }

    loadTodaysImage().catch(null);
    loadLast5DaysImages().catch(null);
  }, []);

  return (
    <View style={styles.container}>
        <Header />
        <TodayImage Apod={todaysImage}/>
        <LastFiveDaysImages Apods={lastFiveDaysImages} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#071a5d',
  }
});


export default Home;