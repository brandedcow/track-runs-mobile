import { useState, State } from '@hookstate/core';
import { GeoPosition } from 'react-native-geolocation-service';

import globalState, { GlobalStateProps } from './global';

const wrapState = (s: State<GlobalStateProps>) => ({
  getRun: () => s.currentRun.value,
  addPoint: (point: GeoPosition) => s.currentRun.merge([point]),
  clearRun: () => s.currentRun.set([]),

  getPauses: () => s.currentPauses.value,
  addPause: (interval: Array<Number>) => s.currentPauses.merge([interval]),
  clearPauses: () => s.currentPauses.set([]),
});

const useRunState = () => wrapState(useState(globalState));

export default useRunState;
