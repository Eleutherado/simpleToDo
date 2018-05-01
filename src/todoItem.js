import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class ListView extends React.Component {
  render() {
    return (
      <View style={styles.todoItem}>
        <Text style={styles.todoItemText}>{this.props.description}</Text>
        <TouchableOpacity
          onPress={this.props.deleteMethod}
          style={styles.deleteButton}
        >
          <Text style={styles.deleteButtonText}>X</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todoItem: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    backgroundColor: '#b8e1ed',
    padding: 5,
    elevation: 10,
    justifyContent: 'center'
  },
  todoItemText: {
    flex: 8,
    fontSize: 18,
    paddingLeft: 10
  },
  deleteButton: {
    flex: 1,
    backgroundColor: '#e23f36',
    justifyContent: 'center',
    alignItems: 'center'
  },
  deleteButtonText: {
    fontSize: 24,
    color: '#fff'
  }
});
