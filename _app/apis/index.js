//TODO: implement the API calls here
import axios from 'axios';
import {API_ROOT, API_TASK} from '../utils';

//TODO: including API_ROOT and API_TASK from constants.js

export async function fetchTaskAPI() {
  try {
    const response = await axios.get(`${API_ROOT}/${API_TASK}`);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function addTaskAPI(data) {
  try {
    const response = await axios.post(`${API_ROOT}/${API_TASK}`, data);
    return response;
  } catch (error) {
    throw error;
  }
}
