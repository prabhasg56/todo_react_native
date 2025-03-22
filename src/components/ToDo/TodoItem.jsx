import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { dangerBtnColor, primaryColor } from '../../styles/GlobalStyles';

const TodoItem = ({ item, onToggle, onDelete, onEdit }) => {
  return (
    <TouchableOpacity onPress={() => onToggle(item.id)} style={styles.container}>
      <Text numberOfLines={1} ellipsizeMode="tail" style={[styles.text, item.completed && styles.completed]}>
        {item.title}
      </Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => onEdit(item.id)}>
          <AntDesign name="edit" size={18} color={primaryColor} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <AntDesign name="delete" size={18} color={dangerBtnColor} style={styles.icon} />
        </TouchableOpacity>
      </View>
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
    marginTop: 12,
    marginHorizontal: 10,
  },
  text: {
    flex: 1,
    fontSize: 16,
    maxWidth: '70%',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  icon: {
    marginLeft: 10,
  },
});
