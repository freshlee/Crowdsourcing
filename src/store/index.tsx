import {combineReducers} from 'redux';  // 需要调用redux中的combineReducers这个合并reducer的方法
import { createStore } from 'redux';
import customList from './modules/customList'; // 引入习惯列表Reducer
import meta from './modules/meta';

// 合并Reducer
export const appReducer = combineReducers({
    customList,   // 这里把state中的customList字段与customListReducer对应起来，相当于customListReducer就只在乎customList这个字段就行了
    meta
});

export const store = createStore(appReducer)
// 导出一个最终的appReducer