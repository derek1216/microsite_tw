<script src="/ext_libraries/js/jquery1.10.3/js/jquery-ui-1.10.3.custom.min.js"></script>

<style>

/* Menu 移動條狀 */
div#pmenu .highlights li.highline{
    /*background-color: #00b5dd;*/
	background-color: #ff7800;
    height: 4px;
    position: absolute;
}

</style>

<section id="section_1" class="" style="position: relative;z-index: 9990;">

    <div class="swipe-wrap">
        <div class="bg" style="background-color: #fff; height:2000px;height:2000px\9;"></div>
    </div>    

    <div class="container" style="background-color: #fff;">
<iframe src="http://eepurl.com/bwr9gf" style="width:100%;height:1000px;margin-top:40px; margin-bottom:50px;" ></iframe>
    </div>
</section>
<script>
    $(function(){
        $(".highlights li").not(".actived").mouseenter(function(){
            $(".highline").css("background-color","#fff");
        });
        $(".highlights li").not(".actived").mouseleave(function(){
            $(".highline").css("background-color","#ff7800");
        })
    });
    </script>
    
    
