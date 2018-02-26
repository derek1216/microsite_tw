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
            js+"jquery-2.0.3.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "width",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'pad_all',
                            type: 'group',
                            rect: ['0', '0', '900', '814', 'auto', 'auto'],
                            c: [
                            {
                                id: 'pad_shadow',
                                type: 'image',
                                rect: ['18px', '503px', '864px', '311px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"pad_shadow.png",'0px','0px']
                            },
                            {
                                id: 'pad_device',
                                type: 'image',
                                rect: ['0px', '0px', '900px', '700px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"pad_device.png",'0px','0px']
                            },
                            {
                                id: 'pic_slide_mask',
                                symbolName: 'pic_slide',
                                type: 'rect',
                                rect: ['58', '79', '785', '544', 'auto', 'auto'],
                                overflow: 'hidden'
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '900px', '814px', 'auto', 'auto'],
                            sizeRange: ['null','1200px','undefined','undefined'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "ui_slide_mask": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '785px', '544px', 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '785px', '544px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "pic_slide": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'slide_0',
                            type: 'group',
                            rect: ['0px', '0', '785', '544', 'auto', 'auto'],
                            c: [
                            {
                                id: 'pad_pic_1',
                                type: 'image',
                                rect: ['0px', '0px', '785px', '544px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/pad_pic_1.jpg', '0px', '0px']
                            }]
                        },
                        {
                            id: 'slide_1',
                            type: 'group',
                            rect: ['786px', '0px', '785', '544', 'auto', 'auto'],
                            c: [
                            {
                                id: 'pad_pic_2',
                                type: 'image',
                                rect: ['0px', '0px', '785px', '544px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/pad_pic_2.jpg', '0px', '0px']
                            }]
                        },
                        {
                            id: 'slide_2',
                            type: 'group',
                            rect: ['1571', '1', '785', '544', 'auto', 'auto'],
                            c: [
                            {
                                id: 'pad_pic_3',
                                type: 'image',
                                rect: ['0px', '0px', '785px', '544px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/pad_pic_3.jpg', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['0px', '0px', '786px', '545px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'screenlight',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/pad_screenlight.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '785px', '544px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("ui_pad_edgeActions.js");
})("ui_pad");
