import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Geolocation, { GeoPosition } from 'react-native-geolocation-service';
import { useState } from '@hookstate/core';

import useRunState from '../state/useRunState';
import RunInfo from '../components/RunInfo';

export default function CurrentRunScreen() {
  const isTracking = useState(false);
  const isPaused = useState(false);
  const pauseInterval = useState<Array<Number>>([]);
  const lastLat = useState(-1);
  const lastLong = useState(-1);

  const runState = useRunState();

  // Check if the position is the same as the last, sometimes duplicates occur
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
    Geolocation.watchPosition(handlePositionChange, err => console.log(err), {
      accuracy: {
        android: 'high',
      },
      distanceFilter: 20,
      interval: 1000,
    });
  }

  function handlePause() {
    isPaused.set(true);
    pauseInterval.merge([Date.now()]);
  }

  function handleResume() {
    isPaused.set(false);
    pauseInterval.merge([Date.now()]);
    if (pauseInterval.get().length === 2) {
      runState.addPause(pauseInterval.get());
    }
    pauseInterval.set([]);
  }

  function handleStop() {
    Geolocation.stopObserving();
    isTracking.set(false);
    isPaused.set(false);
    runState.clearRun();
    runState.clearPauses();
  }

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <RunInfo currentPace={0} averagePace={0} currentTime={0} distance={0} />
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
