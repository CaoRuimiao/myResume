//0.如果使用模块化机制编程，引入Vue和VueRouter,要调用Vue.use(VueRouter);
import Vue from "../../library/vue.min.js";
import VueRouter from "../../library/vue-router.min.js";
Vue.use(VueRouter);
//1.定义（路由）组件。
//可以从其他文件import进来
// const MySkill={
//     template:'<div><h2>项目一</h2><router-link to="/firstDetails1">项目一详情页1</router-link><router-link to="/firstDetails2">项目一详情页2</router-link><router-view></router-view></div>'
// };
// const FirstDetails1={template:'<div>项目一详情页1</div>'};
// const FirstDetails2={template:'<div>项目一详情页2</div>'};
// const MyWork={template:'<div><h2>项目二</h2></div>'};
// const SecondDetails={template:'<div>项目二详情页2</div>'};


import MySkill from "../components/MySkill.vue";
import MyWork from "../components/MyWork.vue";
import PSAAI from "../components/PSAAI.vue";
import PS from "../components/PS.vue";
import AI from "../components/AI.vue";
import Web from "../components/Web/Web.vue";
import Project from "../components/Web/Project.vue";
import Practice from "../components/Web/Practice.vue";
import ContactMe from "../components/ContactMe.vue";


//2.定义路由
//每个路由应该映射一个组件。其中“component”可以是通过Vue.extend()创建的组件构造器，或者，只是一个组件配置对象。
// const routes=[
//     {path:'/MySkill',component:MySkill},
//     {path:'/MyWork',component:MyWork}
// ]
//3.创建router实例，然后传‘routes’配置
const router=new VueRouter({
    //routes (缩写)相当于routes:routes
    routes :[
        {path:'/MySkill',component:createView(MySkill)},
        {path:'/MyWork',component:createView(MyWork),
            children:[
                {path:'/PSAAI',component:createView(PSAAI)},
                {path:'/PS',component:createView(PS)},
                {path:'/AI',component:createView(AI)},
                {path:'/Web',component:createView(Web),
                    children:[
                        {path:'/Project',component:createView(Project)},
                        {path:'/Practice',component:createView(Practice)}
                    ]
                }
            ]
        },
        {path:'/ContactMe',component:createView(ContactMe)}
    ]
})
//4.创建和挂载根实例。
//记得要通过router配置参数注入路由，从而让整个应用都有路由
const app=new Vue({
    router
}).$mount('#app');
//现在，应用已经启动了


function createView(_component) {
  return {
    render(createElement) {
      return createElement(_component);
    }
  }
}

