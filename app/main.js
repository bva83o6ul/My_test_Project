import Vue from "vue";
//引入vuex
import Vuex from "vuex";
import app from "./app.vue";
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// 路由
import VueRouter from "vue-router";
//VUE使用路由
Vue.use(VueRouter);
//引入路由接口

//登陆
import entry from "./components/entry/index.vue";
//家
import home from "./components/homepage/homepage.vue";
//新闻
import hotnews from "./components/hotnews/index.vue";
//商城
import shop from "./components/shop/index.vue";
//个人用户设置
import mine from "./components/mine/index.vue";
//创建路由的数组
const routes = [
    { path: "/entry", component: entry },
    { path: "/home", component: home },
    { path: "/hotnews", component: hotnews}, 
    { path: "/shop", component: shop },
    {path:"/mine",component:mine},

    //路由重定向
    {path:"*",redirect:"/hotnews"}
];
//创建路由的对象
const router = new VueRouter({
    routes
})

Vue.use(iView);
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        "content": [
            {
                "id": "0001",
                "Head": "<Avatar icon='person' size='large' />",
                "name": "傻二狗",
                "value": "你好啊！",
                "like": 100,
                "Collection": 100,
                "discuss": 123,
                "Forward": 987,
                "Time":"2015-12-1",
                
            }
        ]
    },
    mutations:{
        release(state,payload){
            //重新搞一个obj去接收传过来的json
            var key;
            var obj={};
            for( key in payload){
                obj[key]=payload[key]
            }
            this.state.content.unshift(obj);
        },
        addlike(state, payload){
            
        }
    },
    actions:{

    }
})
new Vue({
    el:"#app",
    store,
    router,
    render:h=>h(app)
})