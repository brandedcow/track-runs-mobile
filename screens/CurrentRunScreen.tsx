import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Geolocation, { GeoPosition } from 'react-native-geolocation-service';
import { useState } from '@hookstate/core';

import useRunState from '../state/useRunState';

export default function CurrentRunScreen() {
  const isTracking = useState(false);
  const isPaused = useState(false);
  const lastLat = useState(-1);
  const lastLong = useState(-1);

  const runState = useRunState();

  function handlePositionChange(point: GeoPosition) {
    const { coords } = point;
    const { latitude, longitude } = coords;

    if (latitude !== lastLat.get() && longitude !== lastLong.get()) {
      runState.addPoint(point);
    }

    lastLat.set(latitude);
    lastLong.set(longitude);
  }

  function handleStart() {
    isTracking.set(true);
    Geolocation.watchPosition(
      isPaused.get() ? () => {} : handlePositionChange,
      err => console.log(err),
      {
        accuracy: {
          android: 'high',
        },
        distanceFilter: 20,
        interval: 1000,
      },
    );
  }

  function handlePause() {
    isPaused.set(true);
  }

  function handleResume() {
    isPaused.set(false);
  }

  function handleStop() {
    Geolocation.stopObserving();
    isTracking.set(false);
    isPaused.set(false);
    runState.clear();
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
        {!isTracking.get() && !isPaused.get() && (
          <Pressable style={styles.button} onPress={() => handleStart()}>
            <Text style={styles.buttonText}>start</Text>
          </Pressable>
        )}
        {isTracking.get() && (
          <>
            {isPaused.get() ? (
              <Pressable style={styles.button} onPress={handleResume}>
                <Text style={styles.buttonText}>resume</Text>
              </Pressable>
            ) : (
              <Pressable style={styles.button} onPress={handlePause}>
                <Text style={styles.buttonText}>pause</Text>
              </Pressable>
            )}
            <Pressable style={styles.button} onPress={handleStop}>
              <Text style={styles.buttonText}>stop</Text>
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    flex: 4,
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
    flex: 1,
    paddingVertical: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingVertical: 30,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 30,
  },
});
