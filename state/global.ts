import { createState } from '@hookstate/core';
import { GeoPosition } from 'react-native-geolocation-service';

export type GlobalStateProps = {
  currentRun: Array<GeoPosition>;
  currentPauses: Array<Array<Number>>;
};

const globalState = createState<GlobalStateProps>({
  currentRun: [],
  currentPauses: [],
});

export default globalState;
