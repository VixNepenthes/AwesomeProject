//TODO: todo Component

import React from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AddTask from '../components/AddTask';
import {useEffect} from 'react';
import {fetchTaskRequest} from '../redux/actions/task.actions';

const TodoPage = () => {
  const dispatch = useDispatch();
  const {tasks, loading, error} = useSelector(state => state.task);

  console.log(tasks);
  useEffect(() => {
    dispatch(fetchTaskRequest());
  }, [dispatch]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }
  if (!tasks || tasks.length === 0) {
    return <Text style={styles.messageText}>No tasks available.</Text>;
  }

  return (
    <View style={styles.container}>
      <AddTask />
      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Text style={styles.taskItem}>{item.taskName || 'Unnamed task'}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    padding: 16,
  },
  messageText: {
    textAlign: 'center',
    padding: 16,
  },
  taskItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default TodoPage;
