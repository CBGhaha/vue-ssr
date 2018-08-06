import Vue from 'vue'
import App from './App'
import creatRouter from './router'
import store from './store/index'
export default function creatApp(){
  let router=creatRouter()
  let app=new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  })
  return{app,router,store};
}
