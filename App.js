import React from 'react';
import TodoItem from './src/todoItem';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TextInput
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      typedText: ''
    };
  }

  hashCode(s) {
    var h = 0,
      l = s.length,
      i = 0;
    if (l > 0) while (i < l) h = ((h << 5) - h + s.charCodeAt(i++)) | 0;
    return h;
  }

  addNewTodo() {
    //append a todo into the todoList in the state. A todo will contain an id and a description
    const description = this.state.typedText;
    const newTodo = {
      id: this.hashCode(description) + this.state.todoList.length,
      description: description
    };
    //create new array containing newTodo and set typedText back empty string

    this.setState({ todoList: [...this.state.todoList, newTodo] });
    this.setState({ typedText: '' });
    //Alert.alert('You tapped the button!')
    Keyboard.dismiss();
    console.log(this.state.typedText);
    console.log(this.state.todoList);
  }

  deleteItem(id) {
    this.setState({
      todoList: this.state.todoList.filter(item => item.id !== id)
    });
  }

  render() {
    let todos = this.state.todoList.map(todo => {
      return (
        <TodoItem
          key={todo.id}
          deleteMethod={() => this.deleteItem(todo.id)}
          description={todo.description}
        />
      );
    });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Simple ToDos</Text>
        </View>

        <View style={styles.scrollContainer}>
          <ScrollView style={styles.todoDisplay}>{todos}</ScrollView>
        </View>

        <KeyboardAvoidingView
          style={styles.footer}
          behavior={(behavior = 'padding')}
        >
          <TextInput
            style={styles.todoInput}
            placeholder="> Enter ToDo"
            placeholderTextColor="#ddd"
            onChangeText={typedText => this.setState({ typedText })}
            value={this.state.typedText}
          />

          <TouchableOpacity
            onPress={this.addNewTodo.bind(this)}
            style={styles.addButton}
          >
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  header: {
    flex: 1,
    backgroundColor: '#2b92f2',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 5,
    borderBottomColor: '#bbb'
  },

  headerText: {
    fontSize: 24,
    color: 'white'
  },

  todoDisplay: {
    marginTop: 15,
    flex: 1
  },

  scrollContainer: {
    flex: 8
  },

  footer: {
    flex: 1,
    zIndex: 10,
    flexDirection: 'row',
    paddingBottom: 10
  },

  todoInput: {
    backgroundColor: '#000',
    flex: 7,
    alignSelf: 'stretch',
    padding: 10,
    borderTopWidth: 3,
    borderTopColor: '#ddd',
    color: '#ddd'
  },

  addButton: {
    flex: 1,
    backgroundColor: '#10bc6f',
    zIndex: 11,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10
  },
  addButtonText: {
    color: '#fff',
    fontSize: 20
  }
});
