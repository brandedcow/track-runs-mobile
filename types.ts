import { GeoPosition } from 'react-native-geolocation-service';

export type Run = {
  id: Number;
  date: Date;
  points: Array<GeoPosition>;
  duration: Number;
};
