

<style>
    .Animation {
        display: block;
    }
</style>
<script>
    jQuery(window).load(function () {
		//出現等待秒數
		var animationBody = "animation_delay0p5 Animation";
        var animationTop = "animation_delay1 Animation";
        var animationDown = "animation_delay1p5 Animation";
		
        // 機器本體1(Front)
        $("#edge_anatomy_kn8164v_front_KN8164V_front").attr("data-animation", "fadeIn").addClass(animationBody);
		// 機器本體1(Front) - line_top
        $("#edge_anatomy_kn8164v_front_Description_Top").attr("data-animation", "fadeInUp2").addClass(animationTop);
		// 機器本體1(Front) - line_bottom
        $("#edge_anatomy_kn8164v_front_Description_Bottom").attr("data-animation", "fadeInDown2").addClass(animationDown);
		
        // 機器本體1(Rear)
        $("#edge_anatomy_kn8164v_rear_KN8164V_rear").attr("data-animation", "fadeIn").addClass(animationBody);
		// 機器本體1(Rear) - line_top
        $("#edge_anatomy_kn8164v_rear_Description_Top").attr("data-animation", "fadeInUp2").addClass(animationTop);
		// 機器本體1(Rear) - line_top
        $("#edge_anatomy_kn8164v_rear_Description_Bottom").attr("data-animation", "fadeInDown2").addClass(animationDown);
		
        // 機器本體2(Front)
        $("#edge_anatomy_kn8132v_front_KN8164V_front").attr("data-animation", "fadeIn").addClass(animationBody);
        $("#edge_anatomy_kn8132v_front_Description_Top").attr("data-animation", "fadeInUp2").addClass(animationTop);
        $("#edge_anatomy_kn8132v_front_Description_Bottom").attr("data-animation", "fadeInDown2").addClass(animationDown);
		
        // 機器本體2(Rear)
        $("#edge_anatomy_kn8132v_rear_KN8164V_rear").attr("data-animation", "fadeIn").addClass(animationBody);
        $("#edge_anatomy_kn8132v_rear_Description_Top").attr("data-animation", "fadeInUp2").addClass(animationTop);
        $("#edge_anatomy_kn8132v_rear_Description_Bottom").attr("data-animation", "fadeInDown2").addClass(animationDown);

    });

    if ($.isIE() != 8 && $.isIE() != 7) {
        var SectionList = ["KN8164V", "KN8132V"];
        $.SectionSpy(SectionList);

        AdobeEdge.loadComposition('anatomy_kn8132v_front', 'anatomy_kn8132v_front', {
            scaleToFit: "width",
            centerStage: "horizontal",
            minW: "null",
            maxW: "1200px",
            width: "1200px",
            height: "800px",
            htmlRoot: "edge_animation/anatomy/"
        }, {"dom": []}, {
            dom: [
            ],
            style: {
                '${symbolSelector}': {
                    isStage: true,
                    rect: [undefined, undefined, '1920px', '1100px'],
                    fill: ["rgba(255,255,255,1)"]
                }
            }
        });

        AdobeEdge.loadComposition('anatomy_kn8132v_rear', 'anatomy_kn8132v_rear', {
            scaleToFit: "width",
            centerStage: "horizontal",
            minW: "null",
            maxW: "1200px",
            width: "1200px",
            height: "800px",
            htmlRoot: "edge_animation/anatomy/"
        }, {"dom": []}, {
            dom: [
            ],
            style: {
                '${symbolSelector}': {
                    isStage: true,
                    rect: [undefined, undefined, '1920px', '1100px'],
                    fill: ["rgba(255,255,255,1)"]
                }
            }
        });

        AdobeEdge.loadComposition('anatomy_kn8164v_front', 'anatomy_kn8164v_front', {
            scaleToFit: "width",
            centerStage: "horizontal",
            minW: "null",
            maxW: "1200px",
            width: "1200px",
            height: "800px",
            htmlRoot: "edge_animation/anatomy/"
        }, {"dom": []}, {
            dom: [
            ],
            style: {
                '${symbolSelector}': {
                    isStage: true,
                    rect: [undefined, undefined, '1920px', '1100px'],
                    fill: ["rgba(255,255,255,1)"]
                }
            }
        });

        AdobeEdge.loadComposition('anatomy_kn8164v_rear', 'anatomy_kn8164v_rear', {
            scaleToFit: "width",
            centerStage: "horizontal",
            minW: "null",
            maxW: "1200px",
            width: "1200px",
            height: "800px",
            htmlRoot: "edge_animation/anatomy/"
        }, {"dom": []}, {
            dom: [
            ],
            style: {
                '${symbolSelector}': {
                    isStage: true,
                    rect: [undefined, undefined, '1920px', '1100px'],
                    fill: ["rgba(255,255,255,1)"]
                }
            }
        });

    }

</script>
<section id="section_1" style="position:relative; z-index:9997;" class="noEdge">
    <div id="myCarousel3" class="carousel slide" style="margin-bottom:0px; " data-interval="false">

        <div class="swipe-wrap">
            <div class="bg" style="height:1500px; background-color:#40484a; background-image: radial-gradient(ellipse farthest-corner at 50% 81% , #697172 0%, #131B1D 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(10%,#373f40), color-stop(100%,#697172)); /* Chrome,Safari4+ */ background: -webkit-linear-gradient(top, #373f40 10%,#767e7f 100%); /* Chrome10+,Safari5.1+ */ "> </div>
        </div>
        <!-- Carousel items -->
        <div class="carousel-inner" style="height:1100px\9">



            <!--第一幕--class=active >> active 判斷為第一幕-->
            <div class="active item sub_feature1">

                <div class="container" style="position:relative; z-index:9998; ">


                    <!-- 下方 menu_extrab --扣掉每一頁第一個 Section 上方,被 Menu 吃掉的背景內容高度,共用不可刪除  -->   
                    <div class="menu_extrab"></div>

                    <div class="section_block">
                        <div class="row-fluid" style="position: relative;z-index: 9999;">
                            <div class="span12 page_title color_orange_2 wordscale " style="text-align:center\9; margin:0px auto\9;">
                                <span>KN8164V 前視圖</span>
                            </div>
                        </div>
                        <div class="row-fluid" style="position: relative;z-index: 9999;">
                            <div class="span12 imgEdge edgeBlock" style="position: relative;z-index: 9999;">
                                <!--edge 崁在這裡 !!-->
                                <div id="edge_anatomy_kn8164v_front" class="anatomy_kn8164v_front"></div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            <!--第一幕-end-->




            <!--第二幕-->
            <div class="item sub_feature2">
                <div class="container" style="position:relative; z-index:9998; ">


                    <!-- 下方 menu_extrab --扣掉每一頁第一個 Section 上方,被 Menu 吃掉的背景內容高度,共用不可刪除  -->   
                    <div class="menu_extrab"></div>


                    <div class="section_block">
                        <div class="row-fluid" style="position: relative;z-index: 9999;">
                            <div class="span12 page_title color_orange_2 wordscale " style="text-align:center\9; margin:0px auto\9;">
                                <span>KN8164V 後視圖</span>
                            </div>
                        </div>
                        <div class="row-fluid" style="position: relative;z-index: 9999;">
                            <div class="span12 imgEdge edgeBlock" style="position: relative;z-index: 9999;">
                                <!--edge 崁在這裡 !!-->
                                <div id="edge_anatomy_kn8164v_rear" class="anatomy_kn8164v_rear"></div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <!--第二幕_end-->
        </div>

        <!-- arrow_start 箭頭 --> <a style="z-index:9998;" class="carousel-control left" href="#myCarousel3" data-slide="prev"><img src="images/arrow-left.png"></a> <a style="z-index:9998;" class="carousel-control right" href="#myCarousel3" data-slide="next"><img src="images/arrow-right.png"></a> <!-- arrow_end 箭頭 -->
    </div>
</section>

<section id="section_2" style="position:relative; z-index:9997;" class="noEdge">
    <div id="myCarousel2" class="carousel slide" style="margin-bottom:0px; " data-interval="false">

        <div class="swipe-wrap">
            <div class="bg" style="height:1500px; background-color:#40484a; background-image: radial-gradient(ellipse farthest-corner at 50% 81% , #697172 0%, #131B1D 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(10%,#373f40), color-stop(100%,#697172)); /* Chrome,Safari4+ */ background: -webkit-linear-gradient(top, #373f40 10%,#767e7f 100%); /* Chrome10+,Safari5.1+ */ "> </div>
        </div>
        <!-- Carousel items -->
        <div class="carousel-inner" style="height:1100px\9">



            <!--第一幕--class=active >> active 判斷為第一幕-->
            <div class="active item sub_feature1">

                <div class="container" style="position:relative; z-index:9998; ">




                    <div class="section_block">
                        <div class="row-fluid" style="position: relative;z-index: 9999;">
                            <div class="span12 page_title color_orange_2 wordscale " style="text-align:center\9; margin:0px auto\9;">
                                <span>KN8132V 前視圖</span>
                            </div>
                        </div>
                        <div class="row-fluid" style="position: relative;z-index: 9999;">
                            <div class="span12 imgEdge edgeBlock" style="position: relative;z-index: 9999;">
                                <!--edge 崁在這裡 !!-->
                                <div id="edge_anatomy_kn8132v_front" class="anatomy_kn8132v_front"></div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            <!--第一幕-end-->




            <!--第二幕-->
            <div class="item sub_feature2">
                <div class="container" style="position:relative; z-index:9998; ">





                    <div class="section_block">
                        <div class="row-fluid" style="position: relative;z-index: 9999;">
                            <div class="span12 page_title color_orange_2 wordscale " style="text-align:center\9; margin:0px auto\9;">
                                <span>KN8132V 後視圖</span>
                            </div>
                        </div>
                        <div class="row-fluid" style="position: relative;z-index: 9999;">
                            <div class="span12 imgEdge edgeBlock" style="position: relative;z-index: 9999;">
                                <!--edge 崁在這裡 !!-->
                                <div id="edge_anatomy_kn8132v_rear" class="anatomy_kn8132v_rear"></div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <!--第二幕_end-->
        </div>

        <!-- arrow_start 箭頭 --> <a style="z-index:9998;" class="carousel-control left" href="#myCarousel2" data-slide="prev"><img src="images/arrow-left.png"></a> <a style="z-index:9998;" class="carousel-control right" href="#myCarousel2" data-slide="next"><img src="images/arrow-right.png"></a> <!-- arrow_end 箭頭 -->
    </div>
</section>







<script>
    $(function () {
    });
</script>