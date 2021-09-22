import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function CurrentRunScreen() {
  function handleStart() {
    console.log('start');
  }

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.paceContainer}>
          <View style={styles.paceSection}>
            <Text>Current Pace</Text>
            <Text style={styles.pace}>0:00</Text>
          </View>
          <View style={styles.paceSection}>
            <Text>Average Pace</Text>
            <Text style={styles.pace}>0:00</Text>
          </View>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>30:00</Text>
        </View>
        <View style={styles.distanceContainer}>
          <Text>Miles</Text>
          <Text style={styles.distance}>0.00</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="start" onPress={handleStart} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    flex: 1,
    height: '100%',
  },
  paceContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  paceSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pace: {
    fontSize: 48,
  },
  timeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    fontSize: 80,
  },
  distanceContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  distance: {
    fontSize: 80,
  },
  buttonContainer: {
    paddingVertical: '10%',
  },
});
