import { useState, State } from '@hookstate/core';
import { GeoPosition } from 'react-native-geolocation-service';

import globalState, { GlobalStateProps } from './global';

const wrapState = (s: State<GlobalStateProps>) => ({
  get: () => s.currentRun.value,
  addPoint: (point: GeoPosition) => s.currentRun.merge([point]),
  clear: () => s.currentRun.set([]),
});

const useRunState = () => wrapState(useState(globalState));

export default useRunState;
