<style scoped>
     #my-work-page {}
     /*#my-work-page ul{padding:0 3%;background:#fff;font-size:.75rem;}*/
     #my-work-page ul li{height:2.575rem;line-height:2.575rem;border-bottom:1px dashed #dae0ed;}
     #my-work-page ul li:last-of-type{border-bottom:none;}
</style>
<template>
    <div id="my-work-page">
        <div class="top">
            <router-link class="block" to="/">
                <div class="back">
                    <img src="../images/back.png" alt="">
                </div>
            </router-link>
            {{bigTitle}}
        </div>
        <ul id="content">
            <li class="item">
                <router-link class="block" to="/PSAAI">PS and AI</router-link>
            </li>
            <!--<li class="item">
                <router-link class="block" to="/PS">PS</router-link>
            </li>
            <li class="item">
                <router-link class="block" to="/AI">AI</router-link>
            </li>-->
            <li class="item">
                <router-link class="block" to="/Web">Web</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
    export default{
        data:function(){
            return {
                bigTitle:"My Works"
            }
        },
        mounted:function(){
            this.$nextTick(function(){
                SetRouterViewFullScreen($('#my-work-page'));
            })
        },
        methods:{
            backIndex(){
                this.$router.go({path: '/'});
            }
        }
    }
</script>