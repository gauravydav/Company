import { configureStore } from '@reduxjs/toolkit';
import teachersReducer from './features/teachers/teachersSlice';

export default configureStore({
  reducer: {
    teachers: teachersReducer,
  },
});
