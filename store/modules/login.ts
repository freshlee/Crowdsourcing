const login = (state = [], action:any) => { // 这里使用ES6的语法，如果state是undefined的话，给state设置一个默认值；为什么要这样？因为reducer和store创建的时候会默认的发送初始化的action和用于检测的action；如果state是undefined，而reducer里又没有处理，直接返回了，就会在控制台里报错
    switch (action.type) {
        /**
         * 添加customItem
         */
        case 'ADD_CUSTOM_ITEM_ACTION':
            // 返回一个新对象
            const newCustomItem = {
                completed: false,    // 是否完成
                id: action.id,  // id
                text: action.text  // 文本内容
            };
            // 复制一份state的副本，永远不要修改state，而是返回state的一份副本
            const newState: object[] = [...state];
            // console.log('newState', newState);
            newState.push(newCustomItem);   // 把新的习惯项添加到副本中
            return newState;    // 返回
        /**
         * 修改习惯项完成状态Action
         */
        case 'CHANGE_CUSTOM_ITEM_COMPLETION_STATUS_ACTION':
            // 遍历state(这里得到的state是customList，是一个数组)，返回一个新数组
            return state.map((customItem) => {
                // 对每一项再调用customItemReducer
                return customItem
                // return customItemReducer(customItem, action);
            });
        default:
            return state;
    }
};

export default login;