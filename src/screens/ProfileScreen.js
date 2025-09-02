import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { OneVideo } from '../components/OneVideo';
import { FlashList } from '@shopify/flash-list';
import { getStyles } from '../styles/styles';
import { videoData } from '../data';
import { CustomButton } from '../components/CustomButton';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const styles = getStyles();
  const [data, setData] = useState(
    videoData.second.map(item => {
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

  const setPausedAll = paused => {
    const newData = data.map(it => {
      return { ...it, isPaused: paused };
    });
    setData(newData);
  };

  const onGo = () => {
    //setPausedAll(true);
    navigation.goBack();
  };

  const renderVideos = ({ item }) => {
    return (
      <OneVideo
        item={item}
        setData={setData}
        setPaused={paused => setPaused(paused, item)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <CustomButton title="Main" onPress={onGo} />
      <FlashList
        estimatedItemSize={500}
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderVideos}
      />
    </View>
  );
}
