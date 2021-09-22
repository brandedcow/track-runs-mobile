import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import ListItem from '../components/ListItem';

const RUN_OPTIONS = ['base', 'tempo', 'recovery'];

export default function TrackTabScreen() {
  const renderItem = ({ item }: { item: String }) => (
    <ListItem style={styles.listOption}>
      <Text style={styles.listOptionText}>{item}</Text>
    </ListItem>
  );

  return (
    <View style={styles.container}>
      <View style={styles.promptContainer}>
        <Text style={styles.prompt}>select run type</Text>
      </View>
      <FlatList
        data={RUN_OPTIONS}
        renderItem={renderItem}
        keyExtractor={(_, idx) => `run-option-${idx}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '8%',
  },
  promptContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '4%',
  },
  prompt: {
    fontSize: 40,
  },
  listOption: {
    marginBottom: '5%',
    paddingHorizontal: '8%',
    paddingVertical: '4%',
  },
  listOptionText: {
    fontSize: 40,
  },
});
