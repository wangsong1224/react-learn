
export default {

  namespace: 'example',

  // 表示model的数据状态,操作的时候每次都要当做不可变数据来对待,保证每次都是全新对象,
  // 没有引用关系,这样才能保证state的独立性,便于测试和追踪变化
  state: {},

  // 是一种从 源 获取数据的方法,来自于elm
  // subscription语义是订阅,用于订阅一个数据源,然后根据条件dispatch需要的actiion
  // 数据源可以使当前的时间,副武器的websocket链接 keyboard输入 history路由变化等
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  // 异步操作,底层引入了redux-sagas做异步流程控制,将异步转换成同步写法
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  // 之前被累积的结果和当前要被累积的值,该函数把集合归并成一个单值
  // 必须是纯函数
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
