import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { trasa1Day } from './contents/trasa/trasa1Day';
import { trasa2Day } from './contents/trasa/trasa2Day'; 
import { trasa3Day } from './contents/trasa/trasa3Day';
import { trasa4Day } from './contents/trasa/trasa4Day';
import { trasa5Day } from './contents/trasa/trasa5Day';
import { trasa6Day } from './contents/trasa/trasa6Day';
import { trasa7Day } from './contents/trasa/trasa7Day';
import { trasa8Day } from './contents/trasa/trasa8Day';
import { trasa9Day } from './contents/trasa/trasa9Day';

const MAP_KEY = 'selectedMap';

const DayTab = ({ day, onPress, isSelected }) => (
  <TouchableOpacity style={styles.tab} onPress={onPress}>
    <Text style={[styles.tabText, isSelected && styles.selectedTabText]}>{day}</Text>
  </TouchableOpacity>
);

const DayContent = ({ children, isVisible }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <View style={styles.content}>
      {children.split('\n').map((line, index) => (
        <Text key={index} style={styles.contentText}>
          {line}
        </Text>
      ))}
    </View>
  );
};

const Trasa = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [loadingA, setLoadingA] = useState(true);
  const [loadingB, setLoadingB] = useState(true);

  const handlePress = (day) => {
    setSelectedDay(selectedDay === day ? null : day);
  };

  const dayContents = {
    'Dzień I – 17.08 (sobota) ': trasa1Day,
    'Dzień II – 18.08 (niedziela) ': trasa2Day,
    'Dzień III – 19.08 (poniedziałek) ': trasa3Day,
    'Dzień IV – 20.08 (wtorek)': trasa4Day,
    'Dzień V – 21.08 (środa) ': trasa5Day,
    'Dzień VI – 22.08 (czwartek)': trasa6Day,
    'Dzień VII – 23.08 (piątek) ': trasa7Day,
    'Dzień VIII – 24.08 (sobota)': trasa8Day,
    'Dzień IX – 25.08 (niedziela) ': trasa9Day,
  };

  const openMapLink = async (url) => {
    try {
      await AsyncStorage.setItem(MAP_KEY, url);
      Linking.openURL(url);
    } catch (error) {
      console.error('Failed to save the map link');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => openMapLink('https://www.google.com/maps/d/u/1/viewer?mid=1_XC6eKbZ9RZgqE7dvAybTUZqdWmgz00&ll=50.40533406621355%2C20.04202919999998&z=8')}>
        {loadingA && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
        <WebView 
          source={{ uri: 'https://www.google.com/maps/d/u/1/viewer?mid=1_XC6eKbZ9RZgqE7dvAybTUZqdWmgz00&ll=50.40533406621355%2C20.04202919999998&z=8' }}
          style={styles.map}
          onLoad={() => setLoadingA(false)}
          onError={() => setLoadingA(false)}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openMapLink('https://www.google.com/maps/d/u/1/viewer?mid=1Vthu9r7dtM4HYVLyy6l5kmmktEC7Wng&ll=50.38403975713024%2C20.04202919999998&z=8')}>
        {loadingB && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
        <WebView 
          source={{ uri: 'https://www.google.com/maps/d/u/1/viewer?mid=1Vthu9r7dtM4HYVLyy6l5kmmktEC7Wng&ll=50.38403975713024%2C20.04202919999998&z=8' }}
          style={styles.map}
          onLoad={() => setLoadingB(false)}
          onError={() => setLoadingB(false)}
        />
      </TouchableOpacity>
      {Object.keys(dayContents).map((day) => (
        <View key={day}>
          <DayTab
            day={day}
            onPress={() => handlePress(day)}
            isSelected={selectedDay === day}
          />
          <DayContent isVisible={selectedDay === day}>
            {dayContents[day]}
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
  map: {
    height: 400, // Adjust the height as needed
    marginVertical: 10,
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
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});

export default Trasa;
