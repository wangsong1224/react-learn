// 处理数据和逻辑 dva通过model的概念吧一个领域的模型管理起来 包含同步更新state的reducers 处理异步的effects
// 订阅数据源的subscriptions

export default {
    // 表示在全局state上的key
    namespace : 'products',
    // 是初始值
    state : [],
    // 等同于redux里的reducer,接收action,同步更新state
    reducers : {
        'delete' (state, {payload: id}) {
            return state.filter(item => item.id !== id)
        }
    }
}