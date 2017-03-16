<style scoped>
    #web-page{}
    /*#web-page ul{padding:0 3%;background:#fff;font-size:.75rem;}*/
    #web-page ul li{height:2.575rem;line-height:2.575rem;border-bottom:1px dashed #dae0ed;}
    #web-page ul li:last-of-type{border-bottom:none;}
</style>
<template>
    <div id="web-page">
        <div class="top">
            <router-link to="/MyWork">
                <div class="back">
                    <img src="../../images/back.png" alt="">
                </div>
            </router-link>
            {{bigTitle}}
        </div>
        <ul id="content">
            <li class="item">
                <router-link class="block" to="/Project">真实项目</router-link>
            </li>
            <li class="item">
                <router-link class="block" to="/Practice">随手练习</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
    export default{
        data:function(){
            return {bigTitle:"Web"}
        },
        mounted:function(){
            SetRouterViewFullScreen($('#web-page'));
            // $("#web-page #content").height($(window).height()-$(".top").height()-$(".top").css("margin-bottom").slice(0,-2));
        },
        methods:{
            
        }
    }
</script>