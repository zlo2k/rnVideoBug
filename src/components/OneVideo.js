import React, { memo, useRef } from 'react';
import { getStyles } from '../styles/styles';
import Video, { ResizeMode } from 'react-native-video';
import { View } from 'react-native';
import { PlayButton } from './PLayButton';

export const OneVideo = memo(({ item, setPaused }) => {
  const videoRef = useRef(null);
  const styles = getStyles();

  const handlePlayPress = () => {
    setPaused(!item.isPaused);
  };

  return (
    <View style={{ ...styles.videoContainer, height: item.height }}>
      <Video
        ref={videoRef}
        controls={false}
        disableFocus
        bufferConfig={{
          minBufferMs: 1500,
          maxBufferMs: 3000,
          bufferForPlaybackMs: 1000,
          bufferForPlaybackAfterRebufferMs: 1500,
          cacheSizeMB: 0,
          live: {
            targetOffsetMs: 500,
          },
        }}
        poster={item.poster}
        source={{ uri: item.videoUrl }}
        style={{ ...styles.video, height: item.height || 300 }}
        resizeMode={ResizeMode.COVER}
        posterResizeMode={ResizeMode.COVER}
        playInBackground={false}
        paused={item.isPaused}
        onPlaybackStateChanged={({ isPlaying }) => {
          if (item.isPaused !== !isPlaying) setPaused(isPlaying);
        }}
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
});
