import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { day1Intention } from './contents/intencja/day1Intention';
import { day2Intention } from './contents/intencja/day2Intention'; 
import { day3Intention } from './contents/intencja/day3Intention';
import { day4Intention } from './contents/intencja/day4Intention';
import { day5Intention } from './contents/intencja/day5Intention';
import { day6Intention } from './contents/intencja/day6Intention';
import { day7Intention } from './contents/intencja/day7Intention';
import { day8Intention } from './contents/intencja/day8Intention';

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

const IntencjaDnia = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const handlePress = (day) => {
    setSelectedDay(selectedDay === day ? null : day);
  };

  const dayContents = {
    'Dzień I': day1Intention,
    'Dzień II': day2Intention,
    'Dzień III': day3Intention,
    'Dzień IV': day4Intention,
    'Dzień V': day5Intention,
    'Dzień VI': day6Intention,
    'Dzień VII': day7Intention,
    'Dzień VIII': day8Intention
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

export default IntencjaDnia;