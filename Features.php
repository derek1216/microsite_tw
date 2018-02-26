<style>
    #section_1 .bg{
        opacity: 0;
    }

    .banner_screen{
        opacity: 0;
    }

    .iconnev{
        opacity:0.5;
        cursor: pointer;
    }

    .fast_switching{
        opacity: 0;
    }
</style>
<script>
if (!$.ismobile() && $.isIE() != 8&& $.isIE() != 7) {
    AdobeEdge.loadComposition('compariso_video', 'compariso_video', {
        scaleToFit: "width",
        centerStage: "none",
        minW: "1200px",
        maxW: "undefined",
        width: "1200px",
        height: "330px",
        htmlRoot: "edge_animation/features/"
    }, {dom: []}, {dom: []});
}
</script>
<script src="js/counter.js"></script>

<section id="section_1" class="noEdge">

    <div class="swipe-wrap Animation-hard visible-desktop">
        <div class="bg" style="opacity:1;background-color: #000; height:2000px;; background-repeat:repeat-x;"> </div>
        <div class="bg Animation-hard1" style="background-color: #000; height:2000px;background-image: url('images/Features/bg2_banner.jpg'); background-repeat:repeat-x;"> </div>
        <div class="bg Animation-hard0 fadeIn animated" style="background-color: #000; height:1400px;background-image: url('images/Features/bg1_banner.jpg'); background-repeat:repeat-x;"> </div>
    </div>


    <div class="swipe-wrap Animation-hard hidden-desktop">
        <div class="bg" style="opacity:1;background-color: #000; height:2000px;; background-repeat:repeat-x;"> </div>
        <div class="bg Animation-hard1" style="background-color: #000; height:2000px;background-image: url('images/Features/bg2_banner_mobile.jpg'); background-repeat:repeat-x;"> </div>
        <div class="bg Animation-hard0 fadeIn animated" style="background-color: #000; height:1400px;background-image: url('images/Features/bg1_banner_mobile.jpg'); background-repeat:repeat-x;"> </div>
    </div>



    <div class="container">
        <!-- 下方 menu_extrab --扣掉每一頁第一個 Section 上方,被 Menu 吃掉的背景內容高度,共用不可刪除  -->   
        <div class="menu_extrab"></div>
        <!-- 下方 banner_extrab -- banner 內容上方,距離 Menu基本高度,特殊調整使用  --> 
        <div class="banner_extrab"></div> 
        <!-- 下方 banner_block 可視情形調整  -->
        <div class="section_block banner_block">
            <div class="row-fluid">
                <div class="">
                    <div class="span12 text-center banner_content" style="">

                        <div data-Animation="fadeInUp" class="banner_title Animation animation_delay0p5 wordscale color_white" style="">
                            <!--
                   <span class="page_title_bigs3 color_orange_2" style="font-weight:300;">Connect</span>
                    <br>
                   <span class="page_titles2 color_white">Impossible Possibilities</span>
                            -->
                            <span class="page_title_bigs4 color_orange_2" style="font-weight:300; text-shadow:0px 0px 20px rgba(4,4,4, 0.7);">連接不可能的挑戰</span>
                            <br>
                            <span class="page_titles color_white" style="font-weight:400; text-shadow:0px 0px 10px rgba(4,4,4, 0.7);">實現更多可能性</span>           

                        </div>

                        <div data-Animation="zoomIn2" class="Animation animation_delay1 features_banner">      
                            <img src="images/Features/kn8164v_banner.png" />
                        </div>

                        <div data-Animation="fadeInDown" class="banner_arrow Animation animation_delay1p5" style="">      
                            <img data-Animation="floating" class="Animation animation_delay1p5" src="images/Features/arrow_down.png" />
                        </div>

                        <!--
                        <div  class="">      
                        <a data-Animation="zoomIn3" class="Animation animation_delay2 wordscale  page_txt color_grayl_2 Button_lineW Button_black2" href="#" target="_self"><span style="opacity:0.75;">Enter a world of new possibilites</span> </a>
                        </div>
                        -->

                    </div>  
                </div>  
            </div>
        </div>
    </div>  
</section>

<section id="nevSpy" class="noChgHeight ie8_hide" style="position:relative; z-index:9995; ">
    <div id="pmenu_box" class="navbar">
        <div class="container">
            <div class="row">
                <span class="span4 goto highLineTitle page_stitle2 color_white visible-desktop" data-target="4">清晰</span>
                <span class="span4 goto highLineTitle page_stitle2 color_white visible-desktop" data-target="5">高速</span>
                <span class="span4 goto highLineTitle page_stitle2 color_white visible-desktop" data-target="6">安全</span>

                <!--
                <span class="span12 goto highLineTitle page_stitle2 color_white visible-phone mobileTitle">How</span>
                -->

            </div>
        </div><!--pmenu_content-end --> 
    </div><!--pmenu_box-end --> 
</section>






<section id="section_3" class="noEdge" style="position:relative; z-index:9990;">
    <div class="swipe-wrap">
        <!--
            <div class="bg" style="
                 background-color: #00000; height:2000px;height:2000px\9; 
                 background: url('images/bg_features_2.jpg') no-repeat fixed 50% 0% / cover ;
                 background-image: url('images/bg_features_2.jpg');background-position: 50% 0%\9; 
                 background-repeat:repeat-x\9;
                 ">
            </div>
        -->    

        <div class="bg" style="
             background-color: #f34a00; height:2000px;height:2000px\9; 
             ">
        </div>
    </div>

    <div class="container">
        <div class="section_block">
            <div class="row-fluid">

                <div data-Animation="fadeIn" class="Animation span7 wordscale wordblock" style="position: relative;z-index: 9999; padding:0 2% 0 2%;">
                    <div data-Animation="fadeIn" class="Animation animation_delay0 page_titles3 color_white" style="margin-bottom:10px;"><span style="font-weight:300;">新時代已來臨</span></div>

                    <div data-Animation="fadeIn" class="Animation animation_delay0p5 page_txt color_white"><span style="opacity:0.8;">ATEN KN8 系列第 4<sup style="font-size:17px; padding-left:2px;"></sup> 代 KVM 多電腦切換器，具備高畫質視訊品質、穩固的安全性，以及超乎想像的超快速虛擬媒體傳輸。<br><br></span>
                    </div>
                </div> 


                <div class="span4 offset1 wordbutton visible-desktop" style="vertical-align:middle;">      
                    <a data-Animation="zoomIn3" class="Animation animation_delay1 wordscale  Button_lineW Button_white goto" data-target="3" href="#"><span style="">進入充滿嶄新可能性的世界</span> </a></div>

            </div>
        </div>
    </div>
</section>








<section id="section_2" class="visible-desktop ie8_hide" style="position: relative;z-index: 9990;">
    <div style="width:100%;">
        <div class="imgBlock goto" data-target="4">
            <div class="pic">
                <img src="images/Features/s_what.jpg">

                <figcaption>
                    <div class="caption-content">
                        <a class="single_image" href="img/large/02.jpg">
                            <i class="fa fa-search"></i><br>
                            <p></p>
                        </a>
                    </div>
                </figcaption>
            </div>
            <div class="imgBlockTitle page_title_bigs3 color_white wordscale" style="text-shadow:0px 0px 20px rgba(4,4,4, 0.8);">
                清晰
                <div class="imgBlockSubTitle page_stitle3 color_white" style="opacity:0.8; text-shadow:0px 0px 20px rgba(4,4,4, 0.7);">
                令人驚艷的視覺體驗
                </div>
            </div>

        </div>
        <div class="imgBlock goto" data-target="5">
            <div class="pic">
                <img src="images/Features/s_why.jpg">
                <figcaption>
                    <div class="caption-content">
                        <a class="single_image" href="img/large/02.jpg">
                            <i class="fa fa-search"></i><br>
                            <p></p>
                        </a>
                    </div>
                </figcaption>
            </div> 
            <div class="imgBlockTitle page_title_bigs3 color_white wordscale" style="text-shadow:0px 0px 20px rgba(4,4,4, 0.8);">
                高速
                <div class="imgBlockSubTitle page_stitle3 color_white" style="opacity:0.8; text-shadow:0px 0px 20px rgba(4,4,4, 0.7);">
                    超快速虛擬媒體</div>
            </div>
        </div>
        <div class="imgBlock goto" data-target="6">
            <div class="pic">
                <img src="images/Features/s_how.jpg">
                <figcaption>
                    <div class="caption-content">
                        <a class="single_image" href="img/large/02.jpg">
                            <i class="fa fa-search"></i><br>
                            <p></p>
                        </a>
                    </div>
                </figcaption>
            </div>
            <div class="imgBlockTitle page_title_bigs3 color_white wordscale" style="text-shadow:0px 0px 20px rgba(4,4,4, 0.8);">
                安全
                <div class="imgBlockSubTitle page_stitle3 color_white" style="opacity:0.8; text-shadow:0px 0px 20px rgba(4,4,4, 0.7);">
                    牢不可破的安全性</div>
            </div>
        </div>
        <div style="clear: both;"></div>
    </div>
</section>









<section id="section_4" class="noEdge" style="position: relative;z-index: 9990;">
    <div class="swipe-wrap">

        <div class="bg mask" style="background-color: #000000; height:2000px;z-index: 9995;opacity: 0">
        </div>

        <!--圖片背景  
         <div class="bg" style="
              background-color: #ffffff; height:2000px;height:2000px\9; 
              ">
         </div>        
 
         <div class="bg vidopic" style="
              background-color: #ffffff; height:2000px;height:2000px\9; 
              background: url('images/Features/video_bg.jpg') no-repeat 50% 0% ;
              background-image: url('images/Features/video_bg.jpg');background-position: 50% 0%\9; 
              background-repeat:no-repeat\9;
              ">
         </div>
        -->




        <!--影片背景  -->
        <div class="bg" style="height:2200px;background-color: #ffffff;">

        </div>


    </div>
    <div  class="container">
        <div class="section_block" style="opacity: 1">
            <div class="row-fluid">

                <div class="span12 wordscale text-center" style="text-align:center\9;">
                    <div style="margin-bottom: 20px;" data-animation="fadeIn" class="Animation animation_delay0 page_title color_black"><span>令人驚艷的視覺體驗</span>
                    </div>

                    <div data-animation="fadeIn" class="Animation animation_delay0p5 page_txt color_gray"><span style="opacity:0.85;">KN8 系列內建更新更強大的 FPGA 繪圖處理器，讓您擁有獨一無二的桌面視覺體驗。 本機和遠端主控台現在能以驚人的 1920 x 1200 解析度顯示伺服器 UI， 搭載了 KN8 系列，靜態圖形能夠鮮明逼真地顯示，沒有任何模糊或變形的情況，且視訊效能也相當流暢無延遲。</span>
                    </div>
                </div> 


                

            </div>
            
            
            <div class="row-fluid">
            
            
           <!--
            <div class="videoBG span12" style=" text-align: center;">
            <video id="videoClip" style="" poster="images/Features/compariso.mp4" autoplay src="images/Features/compariso.mp4"></video>
             </div>
           -->
                
                
                   <!-- 手機不直接播影片 -->         
                   <div data-animation="fadeIn" class="visible-desktop span12 videoBG text-center Animation animation_delay1" style=" text-align: center;">
                    <div id="Stage" class="compariso_video">
                    </div>
                </div>
                
                
                <!-- 手機另跳播影片 --> 
                  <div data-animation="fadeIn" class="hidden-desktop VideoIcon span12 text-center Animation animation_delay1p5" style="margin-top:50px;">
                  
<a href="https://youtu.be/U-ySWUcsdVE" target="_blank">                  
       <div class="app_icon2">
         <div><img src="images/Features/movie_icon.png" alt="Compare Movie" border="0" /></div>
       </div>

       <div class="page_txt2 color_orange_2">
         <span style="font-weight:400;">觀賞影片 <span style="font-size:30px; font-weight:300; position:relative; top:3px;">&#8250;</span></span>
       </div>
</a>       
              </div>
                
                
                
            </div>    
            
            
            
        </div>
    </div>
</section>






<section id="section_5" style="position:relative; z-index:9990" class="noEdge ReCssAnimate">
    <div class="swipe-wrap">

        <!-- 單色灰背景
               <div class="bg" style="height:2000px;
                    background: #e4e7ed;
                    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e4e7ed', endColorstr='#e4e7ed',GradientType=1 );
                    ">
               </div>
        -->  


        <!-- 藍灰色背景
                 <div class="bg" style="height:2000px;
                     background: #b7c0c9;
                     background: -moz-radial-gradient(center, ellipse cover, #ffffff 0%, #c9ced5 84%);
                     background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,#ffffff), color-stop(84%,#c9ced5));
                     background: -webkit-radial-gradient(center, ellipse cover, #ffffff 0%,#c9ced5 84%);
                     background: -o-radial-gradient(center, ellipse cover, #ffffff 0%,#c9ced5 84%);
                     background: -ms-radial-gradient(center, ellipse cover, #ffffff 0%,#c9ced5 84%);
                     background: radial-gradient(ellipse at center, #ffffff 0%,#c9ced5 84%);
                     filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#c9ced5',GradientType=1 );
                     ">
                </div> 
        -->   


        <div class="bg" style="height:2000px;
             background: #b7c0c9;
             background: -moz-radial-gradient(center, ellipse cover, #ffffff 0%, #c9ced5 84%);
             background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,#ffffff), color-stop(84%,#c9ced5));
             background: -webkit-radial-gradient(center, ellipse cover, #ffffff 0%,#c9ced5 84%);
             background: -o-radial-gradient(center, ellipse cover, #ffffff 0%,#c9ced5 84%);
             background: -ms-radial-gradient(center, ellipse cover, #ffffff 0%,#c9ced5 84%);
             background: radial-gradient(ellipse at center, #ffffff 0%,#c9ced5 84%);
             filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#c9ced5',GradientType=1 );
             ">
        </div> 


    </div>
    <div class="container">
        <div class="section_block" >
            <div class="row-fluid" >
                <div style="" class="span5 wordscale wordRight" >
                    <div data-Animation="fadeIn" class="Animation animation_delay0 page_title color_black" style="margin-bottom:20px;"><span>超快速虛擬媒體</span></div>

                    <!--
                    <div data-Animation="fadeIn" class="Animation animation_delay0p5 page_stitle color_greeng2" style="margin-bottom:20px;"><span style="margin-top:30px;">View All Four Computers at Once</span></div>
                    -->


                    <div data-Animation="fadeIn" class="Animation animation_delay0p5 page_txt color_grayl2"><span style="opacity:0.85;">ATEN KN8 系列極快的虛擬媒體傳輸能力，快到連您都無法相信。 不費吹灰之力就能勝過同業，KN8 系列支援更快速的 2x 傳輸速度，並將等待時間降到最低，讓使用者發揮最高工作效率。</span>
                    </div>
                </div>
                <div class="span5 imgLeft">

                    <ul class="file-trans ">
                        <li>
                            <div class="circle_trans">
                                <svg viewBox="-10 -10 220 220">
                                <g fill="none" stroke-width="6" transform="translate(100,100)">
                                <path d="M 0,-100 A 100,100 0 0,1 86.6,-50" stroke="url(#cl1)"/>
                                <path d="M 86.6,-50 A 100,100 0 0,1 86.6,50" stroke="url(#cl2)"/>
                                <path d="M 86.6,50 A 100,100 0 0,1 0,100" stroke="url(#cl3)"/>
                                <path d="M 0,100 A 100,100 0 0,1 -86.6,50" stroke="url(#cl4)"/>
                                <path d="M -86.6,50 A 100,100 0 0,1 -86.6,-50" stroke="url(#cl5)"/>
                                <path d="M -86.6,-50 A 100,100 0 0,1 0,-100" stroke="url(#cl6)"/>
                                </g>
                                </svg>
                                <svg viewBox="-10 -10 220 220">
                                <path class="fast" d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z" stroke-dashoffset="629"></path>


                                <!-- 秒數 -->
                                <span data-Animation="bounceRed"  class="secword color_black Animation animation_delay3"><span class="page_title_bigs3 fastword" style="line-height:35px;">0</span><br/>
                                    <span class="page_titles3" style="font-weight:100; line-height:47px;">%</span></span>

                                </svg>
                            </div>

                            <div data-Animation="fadeInUp" class="Animation animation_delay0p5" style="margin-top:20px;">
                                <div class="text-center" style="opacity:0.65; position:relative; top:5px;"><img data-Animation="" class="Animation animation_delay2" src="images/Features/features_2_arrow_up.png"/></div>   
                                <div class="page_txtbold2 color_white color_blockRound">KN8 系列 <br> 傳輸速度</div>

                            </div>

                        </li>
                        <li class="slow">
                            <div class="circle_trans">
                                <svg viewBox="-10 -10 220 220">
                                <g fill="none" stroke-width="6" transform="translate(100,100)">
                                <path d="M 0,-100 A 100,100 0 0,1 86.6,-50" stroke="url(#cl1)"/>
                                <path d="M 86.6,-50 A 100,100 0 0,1 86.6,50" stroke="url(#cl2)"/>
                                <path d="M 86.6,50 A 100,100 0 0,1 0,100" stroke="url(#cl3)"/>
                                <path d="M 0,100 A 100,100 0 0,1 -86.6,50" stroke="url(#cl4)"/>
                                <path d="M -86.6,50 A 100,100 0 0,1 -86.6,-50" stroke="url(#cl5)"/>
                                <path d="M -86.6,-50 A 100,100 0 0,1 0,-100" stroke="url(#cl6)"/>
                                </g>
                                </svg>
                                <svg viewBox="-10 -10 220 220">
                                <path class="slow" d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z" stroke-dashoffset="314"></path>


                                <!-- 秒數 -->
                                <span class="secword"><span class="page_title_bigs3 color_black slowword" style="line-height:35px; opacity:0.7;">0</span><br/>

                                    <span class="page_titles3 color_black" style="font-weight:100; line-height:47px;">%</span>
                                </span>
                                </svg></div>

                            <div data-Animation="fadeInUp" class="Animation animation_delay1" style="margin-top:20px;">
                                <div class="text-center" style="opacity:0.65; position:relative; top:5px;"><img data-Animation="" class="Animation animation_delay2" src="images/Features/features_2_arrow_up.png"/></div> 
                                <div class="page_txtbold2 color_white color_blockRound">同業 <br> 傳輸速度</div>
                            </div>


                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="section_6" class="noEdge" style="position:relative; z-index:9990;">


    <div class="swipe-wrap">
        <div class="bg" style="

             height:2000px;
             height:2000px\9; 
             

             background-position: 50% 0%\9; 
             background-repeat:repeat-x\9;
             ">
        </div>
    </div>

    <div  class="container">
        <div class="section_block">
            <div class="row-fluid">
                <div data-animation="fadeInDown2" class="span10 offset1 wordscale color_block Animation animation_delay0p5 banner_content text-center" style="text-align:center\9;">
                    <div class="page_title color_orange_2" style="margin-bottom: 20px;"><span>牢不可破的安全性</span>
                    </div>
                    <div data-animation="fadeIn" class="Animation animation_delay0p5 page_txt color_white">
                        <span style="opacity:0.75; margin-bottom:25px;">ATEN KN8 系列執行嚴格的安全標準，提供符合政府安全性規範的安全遠端驗證及存取。 本系列符合美國聯邦政府安全性需求的 FIPS 140-2 規範， 其中 56 位元 DES、168 位元 3DES、256 位元 AES 及 128 位元 RC4 加密方式供您選擇，提供 360&deg; 資料防護並確保完整隱私。<br><br></span>
                    </div>
                    <!--
                    <div data-animation="fadeIn" class="features_fast_switching Animation animation_delay1">
                        <img style="position: absolute" src="images/Features/features_fast_switching_0.png" alt="Fast Switching">
                        <img class="fast_switching features_fast_switching1" style="position: absolute;" src="images/Features/features_fast_switching_1.png" alt="Fast Switching">
                        <img class="fast_switching features_fast_switching2" style="position: absolute;" src="images/Features/features_fast_switching_2.png" alt="Fast Switching">
                        <img class="fast_switching features_fast_switching0" style="position: relative;" src="images/Features/features_fast_switching_3.png" alt="Fast Switching">
                    </div> 
                    -->
                </div> 
            </div> 
        </div>
    </div>
</section>



<!-- secword 跑秒數漸層圓顏色  Defining Angle Gradient Colors  --> 
<svg width="0" height="0">
<defs>
<linearGradient id="cl1" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
<stop stop-color="#f13901"/>
<stop offset="100%" stop-color="#f13901"/>
</linearGradient>
<linearGradient id="cl2" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="0" y2="1">
<stop stop-color="#f13901"/>
<stop offset="100%" stop-color="#ffba00"/>
</linearGradient>
<linearGradient id="cl3" gradientUnits="objectBoundingBox" x1="1" y1="0" x2="0" y2="1">
<stop stop-color="#ffba00"/>
<stop offset="100%" stop-color="#ff6d00"/>
</linearGradient>
<linearGradient id="cl4" gradientUnits="objectBoundingBox" x1="1" y1="1" x2="0" y2="0">
<stop stop-color="#ff6d00"/>
<stop offset="100%" stop-color="#ff6d00"/>
</linearGradient>
<linearGradient id="cl5" gradientUnits="objectBoundingBox" x1="0" y1="1" x2="0" y2="0">
<stop stop-color="#ff6d00"/>
<stop offset="100%" stop-color="#ffba00"/>
</linearGradient>
<linearGradient id="cl6" gradientUnits="objectBoundingBox" x1="0" y1="1" x2="1" y2="0">
<stop stop-color="#ffba00"/>
<stop offset="100%" stop-color="#f13901"/>
</linearGradient>
</defs>
</svg>


<script>
    jQuery(window).load(function () {

    });



    $(function () {
        if ($.isIE() != 8 && $.isIE() != 7) {
            $(".Animation-hard").attr("AnimationHard-index", "0");
            $.AnimationHard("Animation-hard", "fadeIn", 2, 5000, "delay");
        }

        var fastword = $(".fastword");
        fastword.counter({
            autoStart: false,
            duration: 3000,
            countTo: 100,
            placeholder: 0,
            easing: "easeOutCubic",
            onStart: function () {
                $(".secword").removeClass("color_orange_dark");
            },
            onComplete: function () {
                $(".secword").addClass("color_orange_dark");
            }
        });

        var slowword = $(".slowword");
        slowword.counter({
            autoStart: false,
            duration: 7000,
            countTo: 50,
            placeholder: 0,
            easing: "easeOutCubic",
            onStart: function () {
                //document.getElementById("trigger").innerHTML = "Running.."
            },
            onComplete: function () {
                //document.getElementById("trigger").innerHTML = "Restart counting!"
            }
        });


        var fixed = false;
        $(".noChgHeight #pmenu_box").hide();
        var targetindex = 0;
        //var myVideo = document.getElementById("videoClip");
        //myVideo.pause();
        var headHeight = $("#section_1").height() + $("#section_2").height() + $("#section_3").height() - 200;//console.log(headHeight);console.log($(this).scrollTop() );
        $(window).scroll(function () {

            $.each($("section"), function (i, v) {
                if (i > 2) {
                    if ($.isScrolledIntoViewOverWindow($(this), 0)) {
                        if (targetindex != i) {
                            $(".highLineActive").removeClass("highLineActive");
                            switch (i) {
                                case 4:
                                    //myVideo.currentTime = '0';
                                    //myVideo.play();
                                    $(".file-trans").removeClass("progressbar");
                                    // 影片遮罩-透明度 & 秒數
                                    $(".mask").animate({
                                        opacity: 0
                                    }, 5000, function () {
                                        // Animation complete.
                                    });

                                    $("#section_4 .section_block").animate({
                                        opacity: 1
                                    }, 5000, function () {
                                        // Animation complete.
                                    });


                                    $(".mask").addClass('animated');
                                    $("#section_3 .mobileTitle").html("WHAT");
                                    $(".highLineTitle:eq(0)").addClass("highLineActive");
                                    break;
                                case 5:
                                    //myVideo.pause();

                                    $(".file-trans").addClass("progressbar");


                                    slowword.counter("start");
                                    fastword.counter("start");
//                                    var cnt = 0;
//                                    var slowword = setInterval(function () {
//                                        cnt++;
//                                        $('.slowword').text(cnt);
//                                        if (cnt > 29) {
//                                            clearInterval(slowword);
//                                        }
//                                    }, 200);
//                                    var cnt2 = 0;
//                                    var fastword = setInterval(function () {
//                                        cnt2++;
//                                        $('.fastword').text(cnt2);
//                                        if (cnt2 > 5) {
//                                            clearInterval(fastword);
//                                        }
//                                    }, 400);



                                    $("#section_3 .mobileTitle").html("WHY");
                                    $(".highLineTitle:eq(1)").addClass("highLineActive");
                                    break;
                                case 6:
                                    //myVideo.pause();
                                    $(".file-trans").removeClass("progressbar");
                                    $("#section_3 .mobileTitle").html("HOW");
                                    $(".highLineTitle:eq(2)").addClass("highLineActive");
                                    break;
                            }

                            targetindex = i;
                        }
                        return false;
                    }
                }
            });


            if ($(this).scrollTop() > headHeight) {
                if (!fixed) {
                    fixed = true;
                    $(".noChgHeight #pmenu_box").show().addClass("fixedTop").addClass("mouseZoomIn").css({"top": "69px"});
                }
            } else {
                fixed = false;
                $(".noChgHeight #pmenu_box").hide().removeClass("mouseZoomIn").removeClass("fixedTop");

            }
        });

        $(".goto").click(function () {
            var targetIndex = $(this).attr("data-target");
            $('html, body').animate({
                scrollTop: $("section").eq(targetIndex).offset().top - 64
            }, 1000);
        });

        function secWord() {

        }
    });
</script>