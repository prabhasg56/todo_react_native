import React from 'react';
import { TouchableOpacity, Text, Button, StyleSheet, View } from 'react-native';
import { primaryColor } from '../../styles/GlobalStyles';

const TodoItem = ({ item, onToggle, onDelete }) => {
  return (
    <TouchableOpacity onPress={() => onToggle(item.id)} style={styles.container}>
      <Text style={[styles.text, item.completed && styles.completed]}>{item.title}</Text>
      <Button title="Delete" color={primaryColor} onPress={() => onDelete(item.id)} />
    </TouchableOpacity>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop:12,
    marginHorizontal:10
  },
  text: {
    flex: 1,
    fontSize: 16,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});
