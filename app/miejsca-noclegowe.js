import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import {day1Shelter} from './contents/noclegowe/day1Shelter';
import {day2Shelter} from './contents/noclegowe/day2Shelter';
import {day3Shelter} from './contents/noclegowe/day3Shelter';
import {day4Shelter} from './contents/noclegowe/day4Shelter';
import {day5Shelter} from './contents/noclegowe/day5Shelter';
import {day6Shelter} from './contents/noclegowe/day6Shelter';
import {day7Shelter} from './contents/noclegowe/day7Shelter';
import {day8Shelter} from './contents/noclegowe/day8Shelter';



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

const MiejscaNoclegowe = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const handlePress = (day) => {
    setSelectedDay(selectedDay === day ? null : day);
  };

  const dayContents = {
    'Dzień 1': day1Shelter,
    'Dzień 2': day2Shelter,
    'Dzień 3': day3Shelter,
    'Dzień 4': day4Shelter,
    'Dzień 5': day5Shelter,
    'Dzień 6': day6Shelter,
    'Dzień 7': day7Shelter,
    'Dzień 8': day8Shelter,
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
    backgroundColor: '#FFFFFF',  // Zmienione tło na białe
  },
  contentText: {
    fontSize: 18,  // Zwiększona czcionka
    textAlign: 'justify',  // Wyjustowanie tekstu
    lineHeight: 28, // Zwiększona wysokość linii
    marginBottom: 10, // Dodanie odstępu między liniami
  },
});

export default MiejscaNoclegowe;
