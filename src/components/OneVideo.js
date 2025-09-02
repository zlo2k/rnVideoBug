import React, { useRef } from 'react';
import { getStyles } from '../styles/styles';
import Video, { ResizeMode } from 'react-native-video';
import { View } from 'react-native';
import { PlayButton } from './PLayButton';

export const OneVideo = ({ item, setPaused}) => {
  const videoRef = useRef(null);
  const styles = getStyles();

  const handlePlayPress = () => {
    setPaused(!item.isPaused);
  };

  return (
    <View style={{...styles.videoContainer, height: item.height}}>
      <Video
        ref={videoRef}
        controls={false}
        disableFocus
        //poster={item.poster}
        source={{ uri: item.videoUrl }}
        style={{ ...styles.video, height: item.height || 300 }}
        resizeMode={ResizeMode.COVER}
        playInBackground={true}
        paused={item.isPaused}
        onEnd={() => {
          setPaused(true);
        }}
        ignoreSilentSwitch="obey"
      />
      <PlayButton
        title={item.isPaused ? 'Play' : 'Pause'}
        onPress={handlePlayPress}
      />
    </View>
  );
};
