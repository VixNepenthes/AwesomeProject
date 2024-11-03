export const ADD_TASK_REQUEST = 'ADD_TASK_REQUEST';
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const ADD_TASK_FAILURE = 'ADD_TASK_FAILURE';
export const FETCH_TASK_REQUEST = 'FETCH_TASK_REQUEST';
export const FETCH_TASK_SUCCESS = 'FETCH_TASK_SUCCESS';
export const FETCH_TASK_FAILURE = 'FETCH_TASK_FAILURE';

//TODO: add task actions
export function addTaskRequest(task) {
  return {
    type: ADD_TASK_REQUEST,
    payload: task,
  };
}

export function addTaskSuccess(task) {
  return {
    type: ADD_TASK_SUCCESS,
    payload: task,
  };
}

export function addTaskFailure(error) {
  return {
    type: ADD_TASK_FAILURE,
    error,
  };
}

export function fetchTaskRequest() {
  return {
    type: FETCH_TASK_REQUEST,
  };
}

export function fetchTaskSuccess(tasks) {
  return {
    type: FETCH_TASK_SUCCESS,
    payload: tasks,
  };
}

export function fetchTaskFailure(error) {
  return {
    type: FETCH_TASK_FAILURE,
    error,
  };
}
