<style scoped>
    #project-page{}
    /*#project-page ul{padding:0 3%;background:#fff;font-size:.75rem;}*/
    #project-page ul li{height:2.575rem;line-height:2.575rem;border-bottom:1px dashed #dae0ed;}
    /*#project-page ul li:last-of-type{border-bottom:none;}*/
</style>
<template>
    <div id="project-page">
        <div class="top">
            <router-link to="/Web">
                <div class="back">
                    <img src="../../images/back.png" alt="">
                </div>
            </router-link>
            {{bigTitle}}
        </div>
        <ul id="content">
            <li class="item">
                <!--以下两个链接仅限于在微信环境中-->
                <!--<a class="block" href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzAwMjk5MTIxMw==&scene=110#wechat_redirect">秀加加微信历史信息</a>-->
                <a class="block" href="http://www.showjiajia.com/UserCenter.html">秀加加微信公众号</a>
                <!-- @click="CallWX()"-->
            </li>
            <li class="item">
                <a class="block" href="http://www.silentwind.com.cn">秀加加官网</a>
            </li>
            <li class="item" @click="LookConfirm()">
                <a class="block" href="###">惠商项目(移动端html5页面)</a>
            </li>
            <li class="item" @click="LookConfirm()">
                <a class="block" href="###">BANANAIN响应式页面</a>
            </li>
            <li class="item" @click="LookConfirm()">
                <a class="block" href="###">PC版螃蟹秘密</a>
            </li>
            <li class="item" @click="LookConfirm()">
                <a class="block" href="###">中国移动10086积分商城</a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data:function(){
            return {
                bigTitle:"真实项目",
            }
        },
        mounted:function(){
            SetRouterViewFullScreen($('#project-page'));
            $("#project-page #content").height($(window).height()-$(".top").height()-$(".top").css("margin-bottom").slice(0,-2));
        },
        methods:{
            // CallWX:function(){
                // WeixinJSBridge.invoke("jumpToBizProfile",{"tousername":"showjj123"});//只能在微信环境中打开，但是2015年之后又屏蔽了接口，从此不能在访问
                // openAlert("请到微信中关注'秀加加'公众号")
            // },
            LookConfirm:function(){
                openAlert("死无葬身之地(⊙︿⊙)")
            }
        }
    }
</script>