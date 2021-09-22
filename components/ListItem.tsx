import React from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';

type ListItemProps = {
  children?: React.ReactNode;
  style?: ViewStyle;
  onPress?: Function;
};

export default function ListItem(props: ListItemProps) {
  function handlePress() {
    if (props.onPress) {
      props.onPress();
    }
  }

  return (
    <Pressable
      style={{ ...styles.container, ...props.style }}
      onPress={handlePress}
    >
      {props.children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C4C4C4',
  },
});
