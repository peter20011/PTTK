import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';
import {wstep} from './contents/nauka/wstep';
import {day1Study} from './contents/nauka/day1Study';
import {day2Study} from './contents/nauka/day2Study';
import {day3Study} from './contents/nauka/day3Study';
import {day4Study} from './contents/nauka/day4Study';
import {day5Study} from './contents/nauka/day5Study';
import {day6Study} from './contents/nauka/day6Study';
import {day7Study} from './contents/nauka/day7Study';
import {day8Study} from './contents/nauka/day8Study';
import {day9Study} from './contents/nauka/day9Study';

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
  
  const Nauka = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    const [currentSound, setCurrentSound] = useState(null);
    const [playingDay, setPlayingDay] = useState(null);
    const [preloadedSounds, setPreloadedSounds] = useState({});
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Preload audio files
      const preloadAudioFiles = async () => {
        const sounds = {
          'Dzień 1': await Audio.Sound.createAsync(require('../assets/lecturers/day1.mp3')),
          'Dzień 2': await Audio.Sound.createAsync(require('../assets/lecturers/day2.mp3')),
          'Dzień 3': await Audio.Sound.createAsync(require('../assets/lecturers/day3.mp3')),
          'Dzień 4': await Audio.Sound.createAsync(require('../assets/lecturers/day4.mp3')),
          'Dzień 5': await Audio.Sound.createAsync(require('../assets/lecturers/day5.mp3')),
          'Dzień 6': await Audio.Sound.createAsync(require('../assets/lecturers/day6.mp3')),
          'Dzień 7': await Audio.Sound.createAsync(require('../assets/lecturers/day7.mp3')),
          'Dzień 8': await Audio.Sound.createAsync(require('../assets/lecturers/day8.mp3')),
          'Dzień 9': await Audio.Sound.createAsync(require('../assets/lecturers/day9.mp3')),
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
      'Wstęp': { text: wstep, audio: null },
      'Dzień 1': { text: day1Study, audio: preloadedSounds['Dzień 1']?.sound },
      'Dzień 2': { text: day2Study, audio: preloadedSounds['Dzień 2']?.sound },
      'Dzień 3': { text: day3Study, audio: preloadedSounds['Dzień 3']?.sound },
      'Dzień 4': { text: day4Study, audio: preloadedSounds['Dzień 4']?.sound },
      'Dzień 5': { text: day5Study, audio: preloadedSounds['Dzień 5']?.sound },
      'Dzień 6': { text: day6Study, audio: preloadedSounds['Dzień 6']?.sound },
      'Dzień 7': { text: day7Study, audio: preloadedSounds['Dzień 7']?.sound },
      'Dzień 8': { text: day8Study, audio: preloadedSounds['Dzień 8']?.sound },
      'Dzień 9': { text: day9Study, audio: preloadedSounds['Dzień 9']?.sound },
    };
  
    return (
      <ScrollView style={styles.container}>
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
  
  export default Nauka;