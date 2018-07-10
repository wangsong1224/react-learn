import React from 'react'
// dynamic-imports 对 require.ensure 进行了改进,基于原生的 Promise 对象进行了重新实现
// 采用了 import() 作为资源家在方法,将其看作一个分割点并将其请求的 module 打包为一个独立的 chunk
// import() 以模块名称作为参数并返回一个 promise 对象
// https://webpack.docschina.org/guides/code-splitting/
// 这里封装一个高阶组件,来实现将普通的组件转换成动态组件
// https://segmentfault.com/a/1190000011765141
const AsyncCompnent = loadCompnent => {
    return class AsyncCompnent extends React.Component {
        state = {
            Component: null
        }
        componentDidMount() {
            if (this.hasLoadedComponent()) 
								return
            loadCompnent()
                .then(module => {
									return module.default
								})
                .then((Component) => {
                    this.setState({Component})
                })
                .catch(err => {
                    console.log('Cannot load component in <AsyncComponent />')
                    throw err
                })
        }
        hasLoadedComponent() {
            return this.state.Component !== null
        }
        render() {
            const {Component} = this.state
            return (Component
                ? <Component {...this.props}/>
                : null)
        }
    }
}

export default AsyncCompnent
