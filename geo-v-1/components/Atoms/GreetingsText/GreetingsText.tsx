import React from 'react';
import { Text } from 'react-native';
import styles from './GreetingsTextStyles'

const GreetingText: React.FC = () => {
  const findGreet = () => {
    const currentTime = new Date().getHours();
    if (currentTime >= 5 && currentTime < 8) {
      return "Early bird!";
    } else if (currentTime >= 8 && currentTime < 12) {
      return "Good Morning!";
    } else if (currentTime >= 12 && currentTime < 18) {
      return "Good Afternoon!";
    } else if (currentTime >= 18 && currentTime < 22) {
      return "Good Evening!";
    } else {
      return "Time to sleep!";
    }
  };

  return (
    <Text style={styles.greetingText}>{findGreet()}</Text>
  );
};

export default GreetingText;