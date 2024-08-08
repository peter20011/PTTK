import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { day1Content } from './contents/wieczorna/day1Content';
import { day2Content } from './contents/wieczorna/day2Content'; 
import { day3Content } from './contents/wieczorna/day3Content';
import { day4Content } from './contents/wieczorna/day4Content';
import { day5Content } from './contents/wieczorna/day5Content';
import { day6Content } from './contents/wieczorna/day6Content';
import { day7Content } from './contents/wieczorna/day7Content';
import { day8Content } from './contents/wieczorna/day8Content';


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

const ModlitwaWieczorna = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const handlePress = (day) => {
    setSelectedDay(selectedDay === day ? null : day);
  };

  const dayContents = {
    'Dzień I': day1Content,
    'Dzień II': day2Content,
    'Dzień III': day3Content,
    'Dzień IV': day4Content,
    'Dzień V': day5Content,
    'Dzień VI': day6Content,
    'Dzień VII': day7Content,
    'Dzień VIII': day8Content,
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

export default ModlitwaWieczorna;
