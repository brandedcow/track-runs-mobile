import { createState } from '@hookstate/core';
import { GeoPosition } from 'react-native-geolocation-service';

export type GlobalStateProps = {
  currentRun: Array<GeoPosition>;
  currentPauses: Array<Array<Number>>;
  currentPace: Number;
  averagePace: Number;
  startTime: Number;
  distance: Number;
};

const globalState = createState<GlobalStateProps>({
  currentRun: [],
  currentPauses: [],
  currentPace: 0,
  averagePace: 0,
  startTime: 0,
  distance: 0,
});

export default globalState;
