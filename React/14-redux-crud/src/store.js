import { configureStore } from '@reduxjs/toolkit';
import DepartmentSlice from './slices/DepartmentSlice';

const store = configureStore({
    // 개발자가 직접 작성한 Slice 오브젝트들이 명시되어 있어야 한다.
    reducer: {
        DepartmentSlice: DepartmentSlice
    }
});

export default store;
