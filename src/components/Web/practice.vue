<style scoped>
    #practice-page{}
    /*#practice-page ul#content{padding:0 3%;background:#fff;font-size:.75rem;overflow-x: hidden;overflow-y: auto;}*/
    #practice-page ul li{height:2.575rem;line-height:2.575rem;border-bottom:1px dashed #dae0ed;}
    /*#practice-page ul li:last-of-type{border-bottom:none;}*/
</style>
<template>
    <div id="practice-page">
        <div class="top">
            <router-link to="/Web">
                <div class="back">
                    <img src="../../images/back.png" alt="">
                </div>
            </router-link>
            {{bigTitle}}
        </div>
        <ul id="content">
            <li class="item" v-for="practiceList in practiceLists">
                <a v-bind:href="practiceList.Url">{{practiceList.Name}}</a>
            </li>
            <!--<li class="item">
                <a class="block" href="#">移动端vue2.0实例</a>
            </li>
            <li class="item">
                <a class="block" href="https://caoruimiao.github.io/dropFlower">烟花下落</a>
            </li>
            <li class="item">
                <a class="block" href="https://caoruimiao.github.io/smallCarousel">PC版轮播实例</a>
            </li>
            <li class="item">
                <a class="block" href="https://caoruimiao.github.io/cutHead">PC版截选头像</a>
            </li>
            <li class="item">
                <a class="block" href="https://caoruimiao.github.io/pic_Waterfall">PC版图片瀑布流</a>
            </li>
            <li class="item">
                <a class="block" href="https://caoruimiao.github.io/zoom">PC版放大镜</a>
            </li>
            <li class="item">
                <a class="block" href="https://caoruimiao.github.io/calendar">PC版日历</a>
            </li>
            <li class="item">
                <a class="block" href="https://caoruimiao.github.io/3d-box">PC版3D盒子</a>
            </li>
            <li class="item">
                <a class="block" href="https://caoruimiao.github.io/3d-image">PC版3D图片</a>
            </li>
            <li class="item">
                <a class="block" href="https://caoruimiao.github.io/3dlunbo">PC版3D轮播</a>
            </li>
            <li class="item">
                <a class="block" href="https://caoruimiao.github.io/newHuaBan">PC版画板</a>
            </li>
            <li class="item">
                <a class="block" href="https://caoruimiao.github.io/note">PC版记事本</a>
            </li>
            <li class="item">
                <a class="block" href="https://caoruimiao.github.io/newTyping">PC版打字游戏</a>
            </li>
            <li class="item">
                <a class="block" href="https://caoruimiao.github.io/poker">PC版poker</a>
            </li>
            <li class="item">
                <a class="block" href="https://caoruimiao.github.io/wuziqi">PC版五子棋</a>
            </li>
            <li class="item">
                <a class="block" href="https://caoruimiao.github.io/snakess">PC版贪吃蛇</a>
            </li>
            <li class="item">
                <a class="block" href="https://caoruimiao.github.io/tmall">PC版天猫</a>
            </li>
            <li class="item">
                <a class="block" href="https://caoruimiao.github.io/mi">PC版小米官网</a>
            </li>-->
        </ul>
    </div>
</template>
<script>
    export default{
        data:function(){
            return {
                bigTitle:"随手练习",
                practiceLists:[
                    {Name:'移动端vue2.0实例',Url:'#'},
                    {Name:'螃蟹秘密移动端页面',Url:'https://caoruimiao.github.io/pxmm'},
                    {Name:'下雪啦',Url:'https://caoruimiao.github.io/snow'},
                    {Name:'烟花下落',Url:'https://caoruimiao.github.io/dropFlower'},
                    {Name:'PC版轮播实例',Url:'https://caoruimiao.github.io/smallCarousel'},
                    {Name:'PC版截选头像',Url:'https://caoruimiao.github.io/cutHead'},
                    {Name:'PC版图片瀑布流',Url:'https://caoruimiao.github.io/pic_Waterfall'},
                    {Name:'PC版放大镜',Url:'https://caoruimiao.github.io/zoom'},
                    {Name:'PC版日历',Url:'https://caoruimiao.github.io/calendar'},
                    {Name:'PC版3D盒子',Url:'https://caoruimiao.github.io/3d-box'},
                    {Name:'PC版3D图片',Url:'https://caoruimiao.github.io/3d-image'},
                    {Name:'PC版3D轮播',Url:'https://caoruimiao.github.io/3dlunbo'},
                    {Name:'PC版画板',Url:'https://caoruimiao.github.io/newHuaBan'},
                    {Name:'PC版记事本',Url:'https://caoruimiao.github.io/note'},
                    {Name:'PC版打字游戏',Url:'https://caoruimiao.github.io/newTyping'},
                    {Name:'PC版poker',Url:'https://caoruimiao.github.io/poker'},
                    {Name:'PC版五子棋',Url:'https://caoruimiao.github.io/wuziqi'},
                    {Name:'PC版贪吃蛇',Url:'https://caoruimiao.github.io/snakess'},
                    {Name:'PC版天猫',Url:'https://caoruimiao.github.io/tmall'},
                    {Name:'PC版小米官网',Url:'https://caoruimiao.github.io/mi'}
                ]
            }
        },
        mounted:function(){
            SetRouterViewFullScreen($('#practice-page'));
            $("#practice-page #content").height($(window).height()-$(".top").height()-$(".top").css("margin-bottom").slice(0,-2));
        },
        methods:{
            
        }
    }
</script>