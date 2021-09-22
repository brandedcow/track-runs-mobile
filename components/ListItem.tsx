import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

type ListItemProps = {
  children?: React.ReactNode;
  style?: ViewStyle;
};

export default function ListItem(props: ListItemProps) {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C4C4C4',
  },
});
