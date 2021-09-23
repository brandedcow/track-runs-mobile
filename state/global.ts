import { createState } from '@hookstate/core';
import { GeoPosition } from 'react-native-geolocation-service';

export type GlobalStateProps = {
  currentRun: Array<GeoPosition>;
};

const globalState = createState<GlobalStateProps>({
  currentRun: [],
});

export default globalState;
