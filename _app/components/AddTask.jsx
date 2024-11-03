import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addTaskRequest} from '../redux/actions/task.actions';

const AddTask = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const {loading, error} = useSelector(state => state.task);

  function handleAddTask() {
    dispatch(addTaskRequest({taskName: task, isChecked: false}));
    setTask('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={setTask}
        placeholder="Enter task"
      />
      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={handleAddTask}
        disabled={loading}>
        <Text style={styles.buttonText}>
          {loading ? 'Adding...' : 'Add Task'}
        </Text>
      </TouchableOpacity>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#999',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  errorText: {
    color: 'red',
    marginTop: 8,
  },
});

export default AddTask;
