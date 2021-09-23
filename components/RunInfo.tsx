import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type RunInfoProps = {
  currentPace: Number;
  averagePace: Number;
  currentTime: Number;
  distance: Number;
};

export default function RunInfo(props: RunInfoProps) {
  return (
    <>
      <View style={styles.paceContainer}>
        <View style={styles.paceSection}>
          <Text>Current Pace</Text>
          <Text style={styles.pace}>{props.currentPace}</Text>
        </View>
        <View style={styles.paceSection}>
          <Text>Average Pace</Text>
          <Text style={styles.pace}>{props.averagePace}</Text>
        </View>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{props.currentTime}</Text>
      </View>
      <View style={styles.distanceContainer}>
        <Text>Miles</Text>
        <Text style={styles.distance}>{props.distance}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
});
