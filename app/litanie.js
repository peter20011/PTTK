import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';
import { litania1 } from './contents/litanie/litania1';
import { litania2 } from './contents/litanie/litania2';
import { litania3 } from './contents/litanie/litania3';
import { litania4 } from './contents/litanie/litania4';
import { krakowiok_pielgrzymkowy } from './contents/litanie/krakowiok-pielgrzymkowy';
import { krakowiok_wedrowny } from './contents/litanie/krakowiok-wedrowny';

const KrakowiokWedrownyAudio = require('../assets/music/Krakowiok_wedrowny.mp3');
const KrakowiokPielgrzymkowyAudio = require('../assets/music/Krakowiok_literacki.mp3');

const formatTime = (millis) => {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const DayTab = ({ day, onPress, isSelected }) => (
  <TouchableOpacity style={styles.tab} onPress={onPress}>
    <Text style={[styles.tabText, isSelected && styles.selectedTabText]}>{day}</Text>
  </TouchableOpacity>
);

const DayContent = ({ children, isVisible, audio, isPlaying, onPlay, onPause, loading }) => {
  const [localIsPlaying, setLocalIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => {
      if (audio) {
        audio.unloadAsync();
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [audio]);

  useEffect(() => {
    if (!isPlaying && localIsPlaying) {
      setLocalIsPlaying(false);
    }
  }, [isPlaying]);

  const playPauseAudio = async () => {
    if (!localIsPlaying) {
      if (audio) {
        const status = await audio.playAsync();
        setDuration(status.durationMillis);
        onPlay(audio);
        startUpdateInterval(audio);
        setLocalIsPlaying(true);
      }
    } else {
      await audio.pauseAsync();
      onPause();
      setLocalIsPlaying(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  };

  const startUpdateInterval = (sound) => {
    intervalRef.current = setInterval(async () => {
      if (sound) {
        const status = await sound.getStatusAsync();
        if (status.isLoaded) {
          setPosition(status.positionMillis);
          setDuration(status.durationMillis);

          // Reset the audio when it reaches the end
          if (status.positionMillis >= status.durationMillis) {
            await sound.pauseAsync();
            await sound.setPositionAsync(0);
            setPosition(0);
            setLocalIsPlaying(false);
            onPause();
            clearInterval(intervalRef.current);
          }
        }
      }
    }, 1000);
  };

  const onSlidingComplete = async (value) => {
    if (audio) {
      const status = await audio.getStatusAsync();
      if (status.isLoaded) {
        await audio.setPositionAsync(value);
        setPosition(value);
      }
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <View style={styles.content}>
      {audio ? (
        <>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={duration}
            value={position}
            onSlidingComplete={onSlidingComplete}
            minimumTrackTintColor="#1EB1FC"
            maximumTrackTintColor="#1EB1FC"
            thumbTintColor="#1EB1FC"
          />
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{formatTime(position)}</Text>
            <Text style={styles.timeText}>{formatTime(duration)}</Text>
          </View>
          <TouchableOpacity onPress={playPauseAudio} style={styles.audioControl}>
            <Text style={styles.audioControlText}>{localIsPlaying ? 'PAUSE' : 'PLAY'}</Text>
          </TouchableOpacity>
        </>
      ) : loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : null}
      {children.split('\n').map((line, index) => (
        <Text key={index} style={styles.contentText}>
          {line}
        </Text>
      ))}
    </View>
  );
};

const Litanie = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [currentSound, setCurrentSound] = useState(null);
  const [playingDay, setPlayingDay] = useState(null);
  const [preloadedSounds, setPreloadedSounds] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preload audio files
    const preloadAudioFiles = async () => {
      const sounds = {
        'Krakowiok wędrowny': await Audio.Sound.createAsync(KrakowiokWedrownyAudio),
        'Krakowiok pielgrzymkowy': await Audio.Sound.createAsync(KrakowiokPielgrzymkowyAudio),
      };
      setPreloadedSounds(sounds);
      setLoading(false);
    };
    preloadAudioFiles();

    return () => {
      // Unload all preloaded sounds on component unmount
      Object.values(preloadedSounds).forEach(({ sound }) => {
        if (sound) {
          sound.unloadAsync();
        }
      });
    };
  }, []);

  const handlePress = async (day) => {
    if (selectedDay === day) {
      setSelectedDay(null);
      if (currentSound) {
        await currentSound.pauseAsync();
        setPlayingDay(null);
      }
    } else {
      setSelectedDay(day);
      if (currentSound && playingDay !== day) {
        await currentSound.stopAsync();
        setPlayingDay(null);
      }
    }
  };

  const handlePlay = async (sound, day) => {
    if (currentSound && currentSound !== sound) {
      await currentSound.stopAsync();
    }
    setCurrentSound(sound);
    setPlayingDay(day);
  };

  const handlePause = () => {
    setPlayingDay(null);
  };

  const dayContents = {
    'Krakowiok wędrowny': { text: krakowiok_wedrowny, audio: preloadedSounds['Krakowiok wędrowny']?.sound },
    'Krakowiok pielgrzymkowy': { text: krakowiok_pielgrzymkowy, audio: preloadedSounds['Krakowiok pielgrzymkowy']?.sound },
    'Litania do Matki Bożej Jasnogórskiej': { text: litania1, audio: null },
    'Litania do Najświętszego Serca Pana Jezusa': { text: litania2, audio: null },
    'Litania loretańska do Najświętszej Maryi Panny': { text: litania3, audio: null },
    'Litania do Anioła Stróża': { text: litania4, audio: null },
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {Object.keys(dayContents).map((day) => (
        <View key={day}>
          <DayTab
            day={day}
            onPress={() => handlePress(day)}
            isSelected={selectedDay === day}
          />
          <DayContent
            isVisible={selectedDay === day}
            audio={dayContents[day].audio}
            isPlaying={playingDay === day}
            onPlay={(sound) => handlePlay(sound, day)}
            onPause={handlePause}
            loading={loading && dayContents[day].audio !== null}
          >
            {dayContents[day].text}
          </DayContent>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: '4%',
    paddingHorizontal: '4%',
    paddingBottom: '5%',
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  tab: {
    justifyContent: 'center',
    padding: 20,
    borderBottomWidth: 1.5,
    borderBottomColor: '#000',
  },
  tabText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  selectedTabText: {
    color: '#444',
  },
  content: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  contentText: {
    fontSize: 18,
    textAlign: 'justify',
    lineHeight: 28,
    marginBottom: 10,
  },
  audioControl: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#2a3060',
    borderRadius: 5,
    alignItems: 'center',
  },
  audioControlText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  timeText: {
    fontSize: 14,
  },
});

export default Litanie;
