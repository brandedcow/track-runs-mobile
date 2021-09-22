import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs';

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  TrackTab: undefined;
  RunsTab: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    MaterialTopTabScreenProps<RootTabParamList, Screen>,
    StackScreenProps<RootStackParamList>
  >;
