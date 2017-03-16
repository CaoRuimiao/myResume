<style scoped>
    #contact-me-page{}
    /*#contact-me-page ul{background:#fff;padding:0 3%;font-size:.75rem;}*/
    #contact-me-page ul li{height:2.575rem;line-height:2.575rem;border-bottom:1px dashed #dae0ed;}
    #contact-me-page ul li:last-of-type{border-bottom:none;}
</style>
<template>
    <div id="contact-me-page">
        <div class="top">
            <div class="back" @click="clockRouter">
                <img src="../images/back.png" alt="">
            </div>
            {{bigTitle}}
        </div>
        <ul id="content">
            <li>
                <span>电话：</span>
                <a href="tel:15135321538">15135321538</a>
            </li>
            <li>
                <span>邮箱：</span>
                <span>15135321538@163.com</span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data:function(){
            return {bigTitle:"Contact Me"}
        },
        mounted:function(){
            SetRouterViewFullScreen($('#contact-me-page'));
        },
        methods:{
            clockRouter (){
                this.$router.go(-1);
            }
        }
    }
</script>