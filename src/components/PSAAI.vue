<style scoped>
    #ps-ai-page{}
    #ps-ai-page .section {padding: .5rem;background:#fff;}
    .line{visibility: hidden;margin-top:2rem;}
    .boxF, .boxS, .boxT{ width: 6rem;height: 5.2rem;overflow: hidden;}
    .boxF, .boxS{visibility: hidden;}
    .boxF{transform: rotate(120deg);margin-left: .25rem;-webkit-transform: rotate(120deg);}
    .boxS{transform: rotate(-60deg);-webkit-transform: rotate(-60deg);}
    .boxT {transform: rotate(-60deg);background: no-repeat 50% top;background-size: 125% auto;-webkit-transform: rotate(-60deg);visibility: visible;}

    .big-img{width:100%;height:100%;position:fixed;top:0;left:0;right:0;bottom:0;margin:auto;background: rgba(0,0,0,.8);display: none ;}
    .big-img #wrapper{height:100%;}
    .big-img #wrapper .aiItem{width:20rem;height:100%;position:relative;}
    .big-img img{width:80%;position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;}
    img[src=""]{opacity: 0;}

</style>
<template>
    <div id="ps-ai-page">
        <div class="top">
            <router-link to="/MyWork">
                <div class="back">
                    <img src="../images/back.png" alt="">
                </div>
            </router-link>
            PS and AI作品
        </div>
        <div class="section clearfix">
            <!--第一行(lineFirst)-->
            <div class="line fleft">
                <div class="boxF fleft">
                    <div class="boxS">
                        <img class="boxT" data="img1" src="../images/works/PSAAI/001.jpg" alt="" @click="showBigImg($event)">
                        <!--<div class="boxT" style="background-image: url(./src/images/works/PSAAI/001.jpg);"></div>-->
                    </div>
                </div>
                <div class="boxF fleft">
                    <div class="boxS">
                        <img class="boxT" data="img2" src="../images/works/PSAAI/002.jpg" alt="" @click="showBigImg($event)">
                        <!--<div class="boxT" style="background-image: url(./src/images/works/PSAAI/002.jpg);"></div>-->
                    </div>
                </div>
                <div class="boxF fleft">
                    <div class="boxS">
                        <img class="boxT" data="img3" src="../images/works/PSAAI/003.jpg" alt="" @click="showBigImg($event)">
                        <!--<div class="boxT" style="background-image: url(./src/images/works/PSAAI/003.jpg);"></div>-->
                    </div>
                </div>
            </div>
            <!--第二行(lineSecond)-->
            <div class="line fleft">
                <div class="boxF fleft">
                    <div class="boxS">
                        <img class="boxT" data="img4" src="../images/works/PSAAI/004.jpg" alt="" @click="showBigImg($event)">
                        <!--<div class="boxT" style="background-image: url(./src/images/works/PSAAI/004.jpg);"></div>-->
                    </div>
                </div>
                <div class="boxF fleft">
                    <div class="boxS">
                        <img class="boxT" data="img5" src="../images/works/PSAAI/005.jpg" alt="" @click="showBigImg($event)">
                        <!--<div class="boxT" style="background-image: url(./src/images/works/PSAAI/005.jpg);"></div>-->
                    </div>
                </div>
                <div class="boxF fleft">
                    <div class="boxS">
                        <img class="boxT" data="img6" src="../images/works/PSAAI/006.jpg" alt="" @click="showBigImg($event)">
                        <!--<div class="boxT" style="background-image: url(./src/images/works/PSAAI/006.jpg);"></div>-->
                    </div>
                </div>
            </div>
            <!--第三行(lineThird)-->
            <div class="line fleft">
                <div class="boxF fleft">
                    <div class="boxS">
                        <img class="boxT" data="img7" src="../images/works/PSAAI/007.jpg" alt="" @click="showBigImg($event)">
                        <!--<div class="boxT" style="background-image: url(./src/images/works/PSAAI/007.jpg);"></div>-->
                    </div>
                </div>
                <div class="boxF fleft">
                    <div class="boxS">
                        <img class="boxT" data="img8" src="../images/works/PSAAI/008.jpg" alt="" @click="showBigImg($event)">
                        <!--<div class="boxT" style="background-image: url(./src/images/works/PSAAI/008.jpg);"></div>-->
                    </div>
                </div>
                <div class="boxF fleft">
                    <div class="boxS">
                        <img class="boxT" data="img9" src="../images/works/PSAAI/009.jpg" alt="" @click="showBigImg($event)">
                        <!--<div class="boxT" style="background-image: url(./src/images/works/PSAAI/009.jpg);"></div>-->
                    </div>
                </div>
            </div>
        </div>
        <!--大图显示区域-->
        <div class="big-img" @click="hideBigImg">
            <ul class="clearfix" id="wrapper">
                <li class="aiItem fleft" v-for="bigImg in bigImgArr">
                    <img v-bind:src="bigImg"  />
                </li>
            </ul>
        </div> 
    </div>
</template>
<script>
    export default{
        data(){
            return{
                bigImgArr:[],
                index:0,
                lrFlag:true     //变换方向
            }
        },
        mounted:function(){
            // var oneTime=setTimeout(function(){location.reload();clearTimeout(oneTime);},50);
            var _this=this;
            SetRouterViewFullScreen($('#ps-ai-page'));
            $("#ps-ai-page .section").height($(window).height()-$(".top").height()-$(".top").css("margin-bottom").slice(0,-2));
            _this.LoadBigImg();//加载大图
        },
        methods:{
            //显示大图区域
            showBigImg:function(tag){
                var _this=this;
                 $(".big-img").show(); //显示大图的区域显示出来

                //点击哪张小图，显示相对应的大图
                var str=tag.target.outerHTML.match(/img\d/g).toString();
                _this.index=str.slice(-1);
                // _this.index=$(tag).attr("src").slice(-7,-6);
                $("#wrapper").css("marginLeft",-20*(_this.index-1)+"rem");   
                _this.Slide(_this.index,_this.lrFlag);// 点第几个就从第几个开始轮播
            },
            //加载大图
            LoadBigImg:function(){
                var _this=this;
                //所有的小图先赋值给大图
                var imgSrc,imgArr=[];
                var imgCount=$(".boxT").length;
                for(var i=0;i<imgCount;i++){
                    // imgSrc=$(".boxT").eq(i).css("background-image").slice(5,-2);
                    imgSrc=$(".boxT").eq(i).attr("src")
                    imgArr.push(imgSrc);
                }
                _this.bigImgArr=imgArr;     //将大图存在bigImgArr数组中
                _this.$nextTick(function(){
                    $('#wrapper').css("width",$(".aiItem").outerWidth()*$(".aiItem").length);
                })
            },
            Slide:function(showBigImgId,lrFlag){ 
                var startX,startY,endX;
                $("#wrapper").get(0).addEventListener('touchstart',touch,false); 
                $("#wrapper").get(0).addEventListener('touchmove',touch,false); 
                $("#wrapper").get(0).addEventListener('touchend',touch,false); 
                touch($("#wrapper"));          
                function touch (event){ 
                    var event = event || window.event; 
                    switch(event.type){ 
                        case "touchstart": 
                            startX=event.touches[0].pageX;
                            startY=event.touches[0].pageY;
                            break;
                        case "touchmove": 
                            event.preventDefault(); 
                            endX=event.touches[0].pageX;
                            break; 
                        case "touchend": 
                            //向左滑东（开始的值大于结束的值）
                            if(startX > endX){ 
                                 //向右滑完，紧接着向左滑动，索引值的变化
                                if(!lrFlag){
                                    showBigImgId+=2;
                                    lrFlag=true;
                                }
                                //向左滑到头时返回第一张
                                if (showBigImgId >= $(".aiItem").length) {
                                    showBigImgId = 0;
                                }
                                //向左滑动的距离大于100时，wrapper向左移动
                                if ((startX - endX) > 100) {
                                    $("#wrapper").css("marginLeft",-20*showBigImgId+"rem");
                                    showBigImgId++;
                                }
                            }
                            // 向右滑动（结束的值大于开始的值）
                            if(startX < endX){ 
                                //向左滑完，紧接着向右滑动，索引值的变化
                                if(lrFlag){
                                    showBigImgId-=2;
                                    lrFlag=false;
                                }
                                //向右滑到头时返回最后一张
                                if (showBigImgId < 0) {
                                    showBigImgId = $(".aiItem").length-1;
                                }
                                //向右滑动的距离大于100时，wrapper向右移动
                                if ((endX - startX) > 100) {
                                    $("#wrapper").css("marginLeft",-20*showBigImgId+"rem");
                                    showBigImgId--;
                                }
                            }
                            break;  
                    } 
                }
            },
            //点击隐藏大图
            hideBigImg:function(){
                 $(".big-img").hide();
                 this.lrFlag=true;
            }


        }
    }
</script>