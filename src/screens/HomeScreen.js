import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { OneVideo } from '../components/OneVideo';
import { FlashList } from '@shopify/flash-list';
import { getStyles } from '../styles/styles';
import { videoData } from '../data';
import { CustomButton } from '../components/CustomButton';

export default function HomeScreen() {
  const navigation = useNavigation();
  const styles = getStyles();
  const [data, setData] = useState(
    videoData.first.map(item => {
      return { ...item, isPaused: true };
    }),
  );

  const setPaused = (paused, item = { id: '' }) => {
    const newData = data.map(it => {
      if (item.id !== it.id) return it;
      else return { ...it, isPaused: paused };
    });
    setData(newData);
  };

  const renderVideos = ({ item }) => {
    return (
      <OneVideo
        item={item}
        setData={setData}
        setPaused={(paused) => setPaused(paused, item)}
      />
    );
  };

  const onGo = () => {
    navigation.navigate('Page2');
  };


  return (
    <View style={styles.container}>
      <CustomButton title="Page 2" onPress={onGo} />
      <FlashList
        estimatedItemSize={500}
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderVideos}
        viewabilityConfig={{
          waitForInteraction: true,
          itemVisiblePercentThreshold: 30,
          minimumViewTime: 100,
        }}
      />
    </View>
  );
}
