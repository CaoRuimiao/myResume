<style scoped>
    #my-skill-page{}
    #my-skill-page ul{padding-top:.5rem;padding-bottom:.5rem;}
    #my-skill-page ul li{line-height:1.6rem;}
</style>
<template>
    <div id="my-skill-page">
        <div class="top">
            <div class="back" @click="clockRouter">
                <img src="../images/back.png" alt="">
            </div>
            {{bigTitle}}
        </div>
        <ul id="content">
            <li>
                1.利用html css实现前端页面的代码重构、包括响应式页面;
            </li>
            <li>
                2.利用js、jquery等实现页面的交互效果;
            </li>
            <li>
                3.利用ajax调取接口;
            </li>
            <li>
                4.利用angularjs实现数据的双向绑定;
            </li>
            <li>
                5.利用vue1.0及vue2.0实现数据的双向绑定;
            </li>
            <li>
                6.基于nodejs利用webpack实现代码的压缩合并;
            </li>
            <li> 
                7.与产品经理、设计师、后台工程师紧密工作在一起，负责公司各产品易用性改进、界面技术优化和网站性能优化;
            </li>
            <li>
                8.web前沿技术研究和新技术调研; 
            </li> 
        </ul>
    </div>
</template>
<script>
    export default{
        data:function(){
            return {bigTitle:"My Skills"}
        },
        mounted:function(){
            SetRouterViewFullScreen($('#my-skill-page'));
        },
        methods:{
            clockRouter(){
                this.$router.go(-1);
            }
        }
    }
</script>