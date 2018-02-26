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
                            id: 'KN8164V_rear',
                            type: 'image',
                            rect: ['52px', '344px', '1098px', '295px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"kn8132v_rear.png",'0px','0px']
                        },
                        {
                            id: 'Description_Bottom',
                            type: 'group',
                            rect: ['20', '462', '525', '331', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Gline_b4',
                                type: 'group',
                                rect: ['406px', '0px', '91', '145', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'linev_a4Copy25',
                                    type: 'rect',
                                    rect: ['56px', '41px', '60px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'linev_a4Copy24',
                                    type: 'rect',
                                    rect: ['-23px', '41px', '60px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'linev_a4Copy23',
                                    type: 'rect',
                                    rect: ['18px', '102px', '62px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'lineh_a1Copy7',
                                    type: 'rect',
                                    rect: ['auto', 'auto', '80px', '2px', '4px', '73px'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'round_line4Copy19',
                                    type: 'ellipse',
                                    rect: ['0px', '0px', '8px', '8px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,0)"],
                                    stroke: [2,"rgba(255,151,0,1.00)","solid"]
                                },
                                {
                                    id: 'round_line4Copy18',
                                    type: 'ellipse',
                                    rect: ['79px', '0px', '8px', '8px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,0)"],
                                    stroke: [2,"rgba(255,151,0,1.00)","solid"]
                                },
                                {
                                    id: 'round_4Copy13',
                                    type: 'ellipse',
                                    rect: ['43px', '133px', '12px', '12px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,1.00)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                }]
                            },
                            {
                                id: 'Text3Copy13',
                                type: 'text',
                                rect: ['385px', '157px', '150px', '42', 'auto', 'auto'],
                                text: "本機主控台連接埠",
                                align: "center",
                                font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [17, "px"], "rgba(255,255,255,1.00)", "300", "none", "normal", "break-word", ""],
                                textStyle: ["1px", "", "26px", ""]
                            },
                            {
                                id: 'Gline_b3',
                                type: 'group',
                                rect: ['292px', '0px', '12', '145', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'linev_a4Copy26',
                                    type: 'rect',
                                    rect: ['-56px', '73px', '125px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'round_line4Copy20',
                                    type: 'ellipse',
                                    rect: ['0px', '0px', '8px', '8px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,0)"],
                                    stroke: [2,"rgba(255,151,0,1.00)","solid"]
                                },
                                {
                                    id: 'round_4Copy14',
                                    type: 'ellipse',
                                    rect: ['0px', '133px', '12px', '12px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,1.00)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                }]
                            },
                            {
                                id: 'Text3Copy15',
                                type: 'text',
                                rect: ['290px', '157px', '75px', '89px', 'auto', 'auto'],
                                text: "序列埠",
                                align: "left",
                                font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [17, "px"], "rgba(255,255,255,1.00)", "300", "none", "normal", "break-word", ""],
                                textStyle: ["1px", "", "26px", ""]
                            },
                            {
                                id: 'Gline_b2',
                                type: 'group',
                                rect: ['253px', '0px', '12', '145', 'auto', 'auto'],
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
                                    rect: ['1px', '0px', '8px', '8px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,0)"],
                                    stroke: [2,"rgba(255,151,0,1.00)","solid"]
                                },
                                {
                                    id: 'round_4Copy5',
                                    type: 'ellipse',
                                    rect: ['1px', '133px', '12px', '12px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,1.00)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                }]
                            },
                            {
                                id: 'Text3Copy3',
                                type: 'text',
                                rect: ['171px', '157px', '100px', '89px', 'auto', 'auto'],
                                text: "主要 LAN 埠",
                                align: "right",
                                font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [17, "px"], "rgba(255,255,255,1.00)", "300", "none", "normal", "break-word", ""],
                                textStyle: ["1px", "", "26px", ""]
                            },
                            {
                                id: 'Gline_b1',
                                type: 'group',
                                rect: ['104px', '0px', '89', '214', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'linev_a4Copy21',
                                    type: 'rect',
                                    rect: ['54px', '41px', '60px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'linev_a4Copy20',
                                    type: 'rect',
                                    rect: ['-23px', '41px', '60px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'lineh_a1Copy6',
                                    type: 'rect',
                                    rect: ['auto', 'auto', '75px', '2px', '6px', '142px'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'linev_a4Copy19',
                                    type: 'rect',
                                    rect: ['-22px', '139px', '135px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'round_line4Copy16',
                                    type: 'ellipse',
                                    rect: ['0px', '0px', '8px', '8px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,0)"],
                                    stroke: [2,"rgba(255,151,0,1.00)","solid"]
                                },
                                {
                                    id: 'round_line4Copy15',
                                    type: 'ellipse',
                                    rect: ['77px', '0px', '8px', '8px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,0)"],
                                    stroke: [2,"rgba(255,151,0,1.00)","solid"]
                                },
                                {
                                    id: 'round_4Copy11',
                                    type: 'ellipse',
                                    rect: ['39px', '202px', '12px', '12px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,1.00)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                }]
                            },
                            {
                                id: 'Text3Copy16',
                                type: 'text',
                                rect: ['0px', '255px', '300px', '52px', 'auto', 'auto'],
                                opacity: '0.60975609756098',
                                text: "（有 Lok-U-Plug 鎖你頭線材固定器的專用孔）",
                                align: "center",
                                font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [13, "px"], "rgba(255,255,255,1.00)", "300", "none", "normal", "break-word", ""],
                                textStyle: ["1px", "", "19px", ""]
                            },
                            {
                                id: 'Text3Copy11',
                                type: 'text',
                                rect: ['87px', '222px', '125px', '52px', 'auto', 'auto'],
                                text: "電源插座",
                                align: "center",
                                font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [17, "px"], "rgba(255,255,255,1.00)", "300", "none", "normal", "break-word", ""],
                                textStyle: ["1px", "", "26px", ""]
                            }]
                        },
                        {
                            id: 'Description_Top',
                            type: 'group',
                            rect: ['-10', '58', '1109', '334', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Gline_t6',
                                type: 'group',
                                rect: ['552px', '53px', '557', '255', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'linev_a4Copy2',
                                    type: 'rect',
                                    rect: ['521px', '189px', '60px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'linev_a4Copy',
                                    type: 'rect',
                                    rect: ['-24px', '189px', '60px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'lineh_a1',
                                    type: 'rect',
                                    rect: ['auto', 'auto', '547px', '2px', '5px', '95px'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'linev_a4',
                                    type: 'rect',
                                    rect: ['200px', '85px', '148px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'round_line4',
                                    type: 'ellipse',
                                    rect: ['0px', '220px', '8px', '8px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,0)"],
                                    stroke: [2,"rgba(255,151,0,1.00)","solid"]
                                },
                                {
                                    id: 'round_line4Copy',
                                    type: 'ellipse',
                                    rect: ['545px', '220px', '8px', '8px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,0)"],
                                    stroke: [2,"rgba(255,151,0,1.00)","solid"]
                                },
                                {
                                    id: 'round_4',
                                    type: 'ellipse',
                                    rect: ['268px', '0px', '12px', '12px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,1.00)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                }]
                            },
                            {
                                id: 'Text3',
                                type: 'text',
                                rect: ['665px', '3px', '327px', '42', 'auto', 'auto'],
                                text: "KVM 埠",
                                align: "center",
                                font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [17, "px"], "rgba(255,255,255,1.00)", "300", "none", "normal", "break-word", ""],
                                textStyle: ["1px", "", "26px", ""]
                            },
                            {
                                id: 'Gline_t5',
                                type: 'group',
                                rect: ['364px', '79px', '12', '255', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'linev_a4Copy22',
                                    type: 'rect',
                                    rect: ['-110px', '126px', '232px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'round_line4Copy17',
                                    type: 'ellipse',
                                    rect: ['0px', '243px', '8px', '8px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,0)"],
                                    stroke: [2,"rgba(255,151,0,1.00)","solid"]
                                },
                                {
                                    id: 'round_4Copy12',
                                    type: 'ellipse',
                                    rect: ['0px', '0px', '12px', '12px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,1.00)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                }]
                            },
                            {
                                id: 'Text3Copy12',
                                type: 'text',
                                rect: ['357px', '0px', '195px', '77px', 'auto', 'auto'],
                                text: "遠端主控台連接埠<br>預留孔位",
                                align: "left",
                                font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [17, "px"], "rgba(255,255,255,1.00)", "300", "none", "normal", "break-word", ""],
                                textStyle: ["1px", "", "26px", ""]
                            },
                            {
                                id: 'Gline_t4',
                                type: 'group',
                                rect: ['318px', '161px', '12', '125', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'linev_a4Copy18',
                                    type: 'rect',
                                    rect: ['-48px', '60px', '107px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'round_line4Copy14',
                                    type: 'ellipse',
                                    rect: ['0px', '113px', '8px', '8px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,0)"],
                                    stroke: [2,"rgba(255,151,0,1.00)","solid"]
                                },
                                {
                                    id: 'round_4Copy10',
                                    type: 'ellipse',
                                    rect: ['0px', '0px', '12px', '12px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,1.00)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                }]
                            },
                            {
                                id: 'Text3Copy10',
                                type: 'text',
                                rect: ['280px', '96px', '91px', '42', 'auto', 'auto'],
                                text: "PON <br>埠",
                                align: "center",
                                font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [17, "px"], "rgba(255,255,255,1.00)", "300", "none", "normal", "break-word", ""],
                                textStyle: ["1px", "", "26px", ""]
                            },
                            {
                                id: 'Gline_t3',
                                type: 'group',
                                rect: ['280px', '79px', '12', '207', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'linev_a4Copy17',
                                    type: 'rect',
                                    rect: ['-87px', '103px', '186px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'round_line4Copy5',
                                    type: 'ellipse',
                                    rect: ['0px', '195px', '8px', '8px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,0)"],
                                    stroke: [2,"rgba(255,151,0,1.00)","solid"]
                                },
                                {
                                    id: 'round_4Copy4',
                                    type: 'ellipse',
                                    rect: ['0px', '0px', '12px', '12px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,1.00)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                }]
                            },
                            {
                                id: 'Text3Copy9',
                                type: 'text',
                                rect: ['214px', '2px', '140px', '42', 'auto', 'auto'],
                                text: " 次要 <br>LAN 埠",
                                align: "center",
                                font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [17, "px"], "rgba(255,255,255,1.00)", "300", "none", "normal", "break-word", ""],
                                textStyle: ["1px", "", "26px", ""]
                            },
                            {
                                id: 'Gline_t2',
                                type: 'group',
                                rect: ['175px', '79px', '12', '206', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'linev_a4Copy3',
                                    type: 'rect',
                                    rect: ['-87px', '102px', '186px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'round_line4Copy3',
                                    type: 'ellipse',
                                    rect: ['0px', '194px', '8px', '8px', 'auto', 'auto'],
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
                                rect: ['109px', '2px', '140px', '42', 'auto', 'auto'],
                                text: "電源開關",
                                align: "center",
                                font: ['Roboto, "Segoe UI", "Segoe UI Light", "Myriad Set Pro", NotoSansHant, Microsoft JhengHei, 微軟正黑體, Heiti TC, Microsoft YaHei, 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, メイリオ, ＭＳ Ｐゴシック, Malgun Gothic, Dotum, Gulim, Trebuchet MS, Lucida Grande, Verdana, Arial, sans-serif', [17, "px"], "rgba(255,255,255,1.00)", "300", "none", "normal", "break-word", ""],
                                textStyle: ["1px", "", "26px", ""]
                            },
                            {
                                id: 'Gline_t1',
                                type: 'group',
                                rect: ['63px', '79px', '27', '247', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'linev_a4Copy6',
                                    type: 'rect',
                                    rect: ['-108px', '125px', '230px', '2px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'lineh_a1Copy5',
                                    type: 'rect',
                                    rect: ['auto', 'auto', '10px', '2px', '11px', '5px'],
                                    fill: ["rgba(255,255,255,0.43)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'round_line4Copy4',
                                    type: 'ellipse',
                                    rect: ['15px', '235px', '8px', '8px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,0)"],
                                    stroke: [2,"rgba(255,151,0,1.00)","solid"]
                                },
                                {
                                    id: 'round_4Copy2',
                                    type: 'ellipse',
                                    rect: ['0px', '0px', '12px', '12px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(255,151,0,1.00)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                }]
                            },
                            {
                                id: 'Text3Copy4',
                                type: 'text',
                                rect: ['0px', '2px', '140px', '42', 'auto', 'auto'],
                                text: "接地端子",
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("anatomy_kn8132v_rear_edgeActions.js");
})("anatomy_kn8132v_rear");

