/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            '\'Segoe UI\', \'Lucida Grande\', Arial, \'Microsoft JhengHei\', 微軟正黑體, \'Microsoft YaHei\', 微軟雅黑體, Tahoma, PMingLiU, 新細明體, simhei, sans-serif, \'Trebuchet MS\', \'Lucida Sans Unicode\', Verdana': '',
            '"Segoe UI Light", "Segoe UI", \'Lucida Grande\', Arial, \'Microsoft JhengHei\', 微軟正黑體, \'Microsoft YaHei\', 微軟雅黑體, Tahoma, PMingLiU, 新細明體, simhei, sans-serif, \'Trebuchet MS\', \'Lucida Sans Unicode\', Verdana': '',
            'Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, \'Microsoft JhengHei\', 微軟正黑體, \'Heiti TC\', \'Microsoft YaHei\', 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, \'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, \'ＭＳ Ｐゴシック\', \'Malgun Gothic\', Dotum, Gulim, \'Trebuchet MS\', \'Lucida Grande\', Verdana, Arial, sans-serif': ''        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'KN8164V_front',
                            type: 'image',
                            rect: ['52px', '246px', '1100px', '451px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"kn8164v_front.png",'0px','0px']
                        },
                        {
                            id: 'Description_Bottom',
                            type: 'group',
                            rect: ['249', '482', '648', '252', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Gline_b5',
                                type: 'group',
                                rect: ['529px', '0px', '91', '145', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'linev_a4Copy16',
                                    type: 'rect',
                                    rect: ['56px', '41px', '60px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'linev_a4Copy15',
                                    type: 'rect',
                                    rect: ['-23px', '41px', '60px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'linev_a4Copy14',
                                    type: 'rect',
                                    rect: ['18px', '102px', '62px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'lineh_a1Copy4',
                                    type: 'rect',
                                    rect: ['auto', 'auto', '80px', '2px', '4px', '73px'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'round_line4Copy13',
                                    type: 'ellipse',
                                    rect: ['0px', '0px', '8px', '8px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,0)"],
                                    stroke: [2,"rgba(255,151,0,1.00)","solid"]
                                },
                                {
                                    id: 'round_line4Copy12',
                                    type: 'ellipse',
                                    rect: ['79px', '0px', '8px', '8px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,0)"],
                                    stroke: [2,"rgba(255,151,0,1.00)","solid"]
                                },
                                {
                                    id: 'round_4Copy9',
                                    type: 'ellipse',
                                    rect: ['43px', '133px', '12px', '12px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,1.00)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                }]
                            },
                            {
                                id: 'Text3Copy8',
                                type: 'text',
                                rect: ['508px', '163px', '140px', '42', 'auto', 'auto'],
                                text: "連接埠<br>切換按鈕",
                                align: "center",
                                font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [17, "px"], "rgba(255,255,255,1.00)", "300", "none", "normal", "break-word", ""],
                                textStyle: ["1px", "", "26px", ""]
                            },
                            {
                                id: 'Gline_b4',
                                type: 'group',
                                rect: ['441px', '0px', '50', '145', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'linev_a4Copy13',
                                    type: 'rect',
                                    rect: ['15px', '41px', '60px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'linev_a4Copy12',
                                    type: 'rect',
                                    rect: ['-23px', '41px', '60px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'linev_a4Copy11',
                                    type: 'rect',
                                    rect: ['-4px', '102px', '62px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'lineh_a1Copy2',
                                    type: 'rect',
                                    rect: ['auto', 'auto', '39px', '2px', '4px', '73px'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'round_line4Copy11',
                                    type: 'ellipse',
                                    rect: ['0px', '0px', '8px', '8px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,0)"],
                                    stroke: [2,"rgba(255,151,0,1.00)","solid"]
                                },
                                {
                                    id: 'round_line4Copy10',
                                    type: 'ellipse',
                                    rect: ['38px', '0px', '8px', '8px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,0)"],
                                    stroke: [2,"rgba(255,151,0,1.00)","solid"]
                                },
                                {
                                    id: 'round_4Copy8',
                                    type: 'ellipse',
                                    rect: ['21px', '133px', '12px', '12px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,1.00)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                }]
                            },
                            {
                                id: 'Text3Copy7',
                                type: 'text',
                                rect: ['407px', '163px', '125px', '42', 'auto', 'auto'],
                                text: "音訊埠",
                                align: "center",
                                font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [17, "px"], "rgba(255,255,255,1.00)", "300", "none", "normal", "break-word", ""],
                                textStyle: ["1px", "", "26px", ""]
                            },
                            {
                                id: 'Gline_b3',
                                type: 'group',
                                rect: ['334', '-41', '47', '186', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'linev_a4Copy7',
                                    type: 'rect',
                                    rect: ['-82px', '92px', '175px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'lineh_a1Copy3',
                                    type: 'rect',
                                    rect: ['auto', 'auto', '30px', '2px', '12px', '179px'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'round_line4Copy7',
                                    type: 'ellipse',
                                    rect: ['35px', '0px', '8px', '8px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,0)"],
                                    stroke: [2,"rgba(255,151,0,1.00)","solid"]
                                },
                                {
                                    id: 'round_4Copy6',
                                    type: 'ellipse',
                                    rect: ['0px', '174px', '12px', '12px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,1.00)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                }]
                            },
                            {
                                id: 'Text3Copy5',
                                type: 'text',
                                rect: ['253px', '163px', '177px', '42', 'auto', 'auto'],
                                text: "重置開關",
                                align: "center",
                                font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [17, "px"], "rgba(255,255,255,1.00)", "300", "none", "normal", "break-word", ""],
                                textStyle: ["1px", "", "26px", ""]
                            },
                            {
                                id: 'Gline_b2',
                                type: 'group',
                                rect: ['137px', '0px', '151', '145', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'linev_a4Copy10',
                                    type: 'rect',
                                    rect: ['116px', '41px', '60px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'linev_a4Copy9',
                                    type: 'rect',
                                    rect: ['-23px', '41px', '60px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'lineh_a1Copy',
                                    type: 'rect',
                                    rect: ['auto', 'auto', '140px', '2px', '4px', '73px'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'linev_a4Copy8',
                                    type: 'rect',
                                    rect: ['45px', '102px', '62px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'round_line4Copy9',
                                    type: 'ellipse',
                                    rect: ['0px', '0px', '8px', '8px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,0)"],
                                    stroke: [2,"rgba(255,151,0,1.00)","solid"]
                                },
                                {
                                    id: 'round_line4Copy8',
                                    type: 'ellipse',
                                    rect: ['139px', '0px', '8px', '8px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,0)"],
                                    stroke: [2,"rgba(255,151,0,1.00)","solid"]
                                },
                                {
                                    id: 'round_4Copy7',
                                    type: 'ellipse',
                                    rect: ['70px', '133px', '12px', '12px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,1.00)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                }]
                            },
                            {
                                id: 'Text3Copy6',
                                type: 'text',
                                rect: ['136px', '163px', '154px', '42', 'auto', 'auto'],
                                text: "USB 埠",
                                align: "center",
                                font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [17, "px"], "rgba(255,255,255,1.00)", "300", "none", "normal", "break-word", ""],
                                textStyle: ["1px", "", "26px", ""]
                            },
                            {
                                id: 'Gline_b1',
                                type: 'group',
                                rect: ['81px', '0px', '12', '145', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'linev_a4Copy5',
                                    type: 'rect',
                                    rect: ['-56px', '73px', '125px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'round_line4Copy6',
                                    type: 'ellipse',
                                    rect: ['0px', '0px', '8px', '8px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,0)"],
                                    stroke: [2,"rgba(255,151,0,1.00)","solid"]
                                },
                                {
                                    id: 'round_4Copy5',
                                    type: 'ellipse',
                                    rect: ['0px', '133px', '12px', '12px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,1.00)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                }]
                            },
                            {
                                id: 'Text3Copy3',
                                type: 'text',
                                rect: ['0px', '163px', '150px', '89px', 'auto', 'auto'],
                                text: "筆記型電腦 USB 主控台 (Laptop <br>USB Console, <br>LUC) 埠",
                                align: "center",
                                font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [17, "px"], "rgba(255,255,255,1.00)", "300", "none", "normal", "break-word", ""],
                                textStyle: ["1px", "", "26px", ""]
                            }]
                        },
                        {
                            id: 'Description_Top',
                            type: 'group',
                            rect: ['215', '63', '810', '179', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Gline_t3',
                                type: 'group',
                                rect: ['653px', '45px', '13', '134', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'linev_a4Copy4',
                                    type: 'rect',
                                    rect: ['-49px', '66px', '112px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'round_line4Copy2',
                                    type: 'ellipse',
                                    rect: ['1px', '122px', '8px', '8px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,0)"],
                                    stroke: [2,"rgba(255,151,0,1.00)","solid"]
                                },
                                {
                                    id: 'round_4Copy',
                                    type: 'ellipse',
                                    rect: ['0px', '0px', '12px', '12px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,1.00)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                }]
                            },
                            {
                                id: 'Text3Copy2',
                                type: 'text',
                                rect: ['511px', '0px', '299px', '42', 'auto', 'auto'],
                                text: "LAN LED",
                                align: "center",
                                font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [17, "px"], "rgba(255,255,255,1.00)", "300", "none", "normal", "break-word", ""],
                                textStyle: ["1px", "", "26px", ""]
                            },
                            {
                                id: 'Gline_t2',
                                type: 'group',
                                rect: ['171px', '45px', '417', '134', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'linev_a4Copy2',
                                    type: 'rect',
                                    rect: ['388px', '97px', '48px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'linev_a4Copy',
                                    type: 'rect',
                                    rect: ['-17px', '97px', '48px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'lineh_a1',
                                    type: 'rect',
                                    rect: ['auto', 'auto', '406px', '2px', '5px', '59px'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'linev_a4',
                                    type: 'rect',
                                    rect: ['183px', '42px', '62px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'round_line4',
                                    type: 'ellipse',
                                    rect: ['0px', '122px', '8px', '8px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,0)"],
                                    stroke: [2,"rgba(255,151,0,1.00)","solid"]
                                },
                                {
                                    id: 'round_line4Copy',
                                    type: 'ellipse',
                                    rect: ['405px', '122px', '8px', '8px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,0)"],
                                    stroke: [2,"rgba(255,151,0,1.00)","solid"]
                                },
                                {
                                    id: 'round_4',
                                    type: 'ellipse',
                                    rect: ['208px', '0px', '12px', '12px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,1.00)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                }]
                            },
                            {
                                id: 'Text3',
                                type: 'text',
                                rect: ['224px', '0px', '327px', '42', 'auto', 'auto'],
                                text: "連接埠 LED",
                                align: "center",
                                font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [17, "px"], "rgba(255,255,255,1.00)", "300", "none", "normal", "break-word", ""],
                                textStyle: ["1px", "", "26px", ""]
                            },
                            {
                                id: 'Gline_t1',
                                type: 'group',
                                rect: ['142px', '45px', '12', '134', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'linev_a4Copy3',
                                    type: 'rect',
                                    rect: ['-50px', '66px', '113px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'round_line4Copy3',
                                    type: 'ellipse',
                                    rect: ['0px', '122px', '8px', '8px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,0)"],
                                    stroke: [2,"rgba(255,151,0,1.00)","solid"]
                                },
                                {
                                    id: 'round_4Copy3',
                                    type: 'ellipse',
                                    rect: ['0px', '0px', '12px', '12px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,1.00)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                }]
                            },
                            {
                                id: 'Text3Copy',
                                type: 'text',
                                rect: ['0px', '0px', '299px', '42', 'auto', 'auto'],
                                text: "電源 LED",
                                align: "center",
                                font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [17, "px"], "rgba(255,255,255,1.00)", "300", "none", "normal", "break-word", ""],
                                textStyle: ["1px", "", "26px", ""]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1200px', '800px', 'auto', 'auto'],
                            sizeRange: ['null','1200px','undefined','undefined'],
                            overflow: 'hidden',
                            fill: ["rgba(14,15,15,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("anatomy_kn8164v_front_edgeActions.js");
})("anatomy_kn8164v_front");

