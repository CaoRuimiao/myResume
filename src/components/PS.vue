<style scoped>
    #ps-page{}
    #ps-page ul#container{font-size: 0;}
    #ps-page ul#container li{width: 6rem;border: 1px solid #b4b0b0;margin-bottom: .2rem;}
    #ps-page ul#container li img{max-width:100%;}
</style>
<template>
    <div id="ps-page">
        <div class="top">
            <router-link to="/MyWork">
                <div class="back">
                    <img src="../images/back.png" alt="">
                </div>
            </router-link>
            PS作品
        </div>
        <ul id="container">
            <li class="box">
                <img src="../images/works/PS/001.jpg">
                <!--<p>描述描述</p>-->
            </li>
            <li class="box">
                <img src="../images/works/PS/002.jpg">
            </li>
            <li class="box">
                <img src="../images/works/PS/003.jpg">
            </li>
            <li class="box">
                <img src="../images/works/PS/004.jpg">
            </li>
            <li class="box">
                <img src="../images/works/PS/005.jpg">
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){

        },
        mounted:function(){
             this.$nextTick(function(){
                SetRouterViewFullScreen($('#ps-page'));
                // 流式布局
                $(function(){
                    $('#container').masonry({
                        itemSelector : '.box',
                        gutter: 10,   //内容块之间的距离是 10 像素
                        // isAnimated: true,  //打开动画选项
                    });
                });
      
            })
        },
        methods:{
            // clockRouter(){
            //     this.$router.go(-1);
            // }
        }
    }
</script>