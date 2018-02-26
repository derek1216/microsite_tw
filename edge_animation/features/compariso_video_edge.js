/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
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
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'movie_mask_retangle',
                            symbolName: 'movie_mask_retangle',
                            type: 'rect',
                            rect: ['4', '8', '1192', '315', 'auto', 'auto']
                        },
                        {
                            id: 'outline_left',
                            type: 'rect',
                            rect: ['4px', '8px', '544px', '311px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [2,"rgb(152, 152, 152)","solid"]
                        },
                        {
                            id: 'outline_right',
                            type: 'rect',
                            rect: ['648px', '8px', '544px', '311px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [2,"rgb(152, 152, 152)","solid"]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['552px', '0px', '96px', '330px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,0.00)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1200px', '330px', 'auto', 'auto'],
                            sizeRange: ['0px','1200px','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 11819,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "video_left": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '548px', '315px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'mask_left',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            autoplay: 'autoplay',
                            type: 'video',
                            source: ['images/compariso.mp4'],
                            id: 'source_video_left',
                            preload: 'auto',
                            loop: 'loop',
                            overflow: 'visible',
                            rect: ['-91px', '-316px', '1390px', '782px', 'auto', 'auto'],
                            tag: 'video'
                        },
                        {
                            rect: ['-9px', '264px', '1203px', '59px', 'auto', 'auto'],
                            id: 'word_bg_left',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            font: ['Roboto, \"Segoe UI\", \"Segoe UI Light\", \"Myriad Set Pro\", NotoSansHant, \'Microsoft JhengHei\', 微軟正黑體, \'Heiti TC\', \'Microsoft YaHei\', 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, \'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, \'ＭＳ Ｐゴシック\', \'Malgun Gothic\', Dotum, Gulim, \'Trebuchet MS\', \'Lucida Grande\', Verdana, Arial, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', '100', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'word_left',
                            text: 'KN8 Series 影片效能表現',
                            align: 'center',
                            rect: ['0px', '273px', '548px', '46px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '548px', '315px']
                        }
                    }
                },
                timeline: {
                    duration: 11819,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "video_right": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '548px', '315px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'mask_right',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            preload: 'auto',
                            type: 'video',
                            source: ['images/compariso.mp4'],
                            autoplay: 'autoplay',
                            id: 'source_video_right',
                            loop: 'loop',
                            rect: ['-733px', '-309px', '1374px', '773px', 'auto', 'auto'],
                            tag: 'video'
                        },
                        {
                            type: 'rect',
                            id: 'word_bg_right',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-649px', '264px', '1203px', '59px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '273px', '548px', '46px', 'auto', 'auto'],
                            id: 'word_right',
                            text: '競品影片效能表現',
                            align: 'center',
                            font: ['Roboto, \"Segoe UI\", \"Segoe UI Light\", \"Myriad Set Pro\", NotoSansHant, \'Microsoft JhengHei\', 微軟正黑體, \'Heiti TC\', \'Microsoft YaHei\', 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, \'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, \'ＭＳ Ｐゴシック\', \'Malgun Gothic\', Dotum, Gulim, \'Trebuchet MS\', \'Lucida Grande\', Verdana, Arial, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', '100', 'none', '', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '548px', '315px']
                        }
                    }
                },
                timeline: {
                    duration: 11779,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "video_allm": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            overflow: 'hidden',
                            id: 'Video_Mask_for_Edge',
                            rect: ['85px', '301px', '1200px', '330px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Video_Mask_for_Edge.png', '0px', '0px']
                        },
                        {
                            autoplay: 'autoplay',
                            type: 'video',
                            source: ['images/compariso.mp4'],
                            id: 'video_all',
                            preload: 'auto',
                            rect: ['0px', '0px', '1371px', '771px', 'auto', 'auto'],
                            volume: '0',
                            loop: 'loop',
                            tag: 'video'
                        },
                        {
                            type: 'rect',
                            id: 'word_bg',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['83px', '564px', '1203px', '59px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['89px', '580px', '548px', '46px', 'auto', 'auto'],
                            font: ['Roboto, \"Segoe UI\", \"Segoe UI Light\", \"Myriad Set Pro\", NotoSansHant, \'Microsoft JhengHei\', 微軟正黑體, \'Heiti TC\', \'Microsoft YaHei\', 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, \'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, \'ＭＳ Ｐゴシック\', \'Malgun Gothic\', Dotum, Gulim, \'Trebuchet MS\', \'Lucida Grande\', Verdana, Arial, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', '100', 'none', '', 'break-word', 'normal'],
                            id: 'word_left',
                            text: 'KN8 Series 影片效能表現',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['732px', '580px', '548px', '46px', 'auto', 'auto'],
                            font: ['Roboto, \"Segoe UI\", \"Segoe UI Light\", \"Myriad Set Pro\", NotoSansHant, \'Microsoft JhengHei\', 微軟正黑體, \'Heiti TC\', \'Microsoft YaHei\', 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, \'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, \'ＭＳ Ｐゴシック\', \'Malgun Gothic\', Dotum, Gulim, \'Trebuchet MS\', \'Lucida Grande\', Verdana, Arial, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', '100', 'none', '', 'break-word', 'normal'],
                            id: 'word_right',
                            text: '<p style=\"margin: 0px;\">競品影片效能表現</p>',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1371px', '771px']
                        }
                    }
                },
                timeline: {
                    duration: 11819,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "movie_mask_png": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            autoplay: 'autoplay',
                            type: 'video',
                            source: ['images/compariso.mp4'],
                            preload: 'auto',
                            id: 'compariso',
                            rect: ['-87px', '-300px', '1376px', '774px', 'auto', 'auto'],
                            loop: 'loop',
                            tag: 'video'
                        },
                        {
                            rect: ['0px', '0px', '1200px', '330px', 'auto', 'auto'],
                            type: 'image',
                            overflow: 'hidden',
                            id: 'Video_Mask_for_Edge2',
                            opacity: '1',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Video_Mask_for_Edge.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '263px', '1203px', '59px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'word_bg',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['2px', '279px', '548px', '46px', 'auto', 'auto'],
                            id: 'word_left',
                            text: 'KN8 Series 影片效能表現',
                            align: 'center',
                            font: ['Roboto, \"Segoe UI\", \"Segoe UI Light\", \"Myriad Set Pro\", NotoSansHant, \'Microsoft JhengHei\', 微軟正黑體, \'Heiti TC\', \'Microsoft YaHei\', 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, \'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, \'ＭＳ Ｐゴシック\', \'Malgun Gothic\', Dotum, Gulim, \'Trebuchet MS\', \'Lucida Grande\', Verdana, Arial, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', '100', 'none', '', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['646px', '279px', '548px', '46px', 'auto', 'auto'],
                            id: 'word_right',
                            text: '<p style=\"margin: 0px;\">競品影片效能表現</p>',
                            align: 'center',
                            font: ['Roboto, \"Segoe UI\", \"Segoe UI Light\", \"Myriad Set Pro\", NotoSansHant, \'Microsoft JhengHei\', 微軟正黑體, \'Heiti TC\', \'Microsoft YaHei\', 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, \'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, \'ＭＳ Ｐゴシック\', \'Malgun Gothic\', Dotum, Gulim, \'Trebuchet MS\', \'Lucida Grande\', Verdana, Arial, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', '100', 'none', '', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1200px', '330px']
                        }
                    }
                },
                timeline: {
                    duration: 11819,
                    autoPlay: true,
                    data: [
                        [
                            "eid5",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Video_Mask_for_Edge2}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "movie_mask_retangle": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            opacity: '1',
                            rect: ['0px', '0px', '548px', '315px', 'auto', 'auto'],
                            overflow: 'hidden',
                            display: 'none',
                            stroke: [0, 'rgba(0,0,0,0.00)', 'none'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'RectangleCopy',
                            opacity: '1',
                            rect: ['644px', '0px', '548px', '315px', 'auto', 'auto'],
                            overflow: 'hidden',
                            display: 'none',
                            stroke: [0, 'rgba(0,0,0,0.00)', 'none'],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            autoplay: 'autoplay',
                            type: 'video',
                            source: ['images/compariso.mp4'],
                            id: 'compariso',
                            preload: 'auto',
                            rect: ['-94px', '-308px', '1383px', '777px', 'auto', 'auto'],
                            volume: '0',
                            loop: 'loop',
                            tag: 'video'
                        },
                        {
                            rect: ['0px', '263px', '1203px', '59px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'word_bg',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['2px', '275px', '548px', '46px', 'auto', 'auto'],
                            id: 'word_left',
                            text: 'KN8 Series 影片效能表現',
                            align: 'center',
                            font: ['Roboto, \"Segoe UI\", \"Segoe UI Light\", \"Myriad Set Pro\", NotoSansHant, \'Microsoft JhengHei\', 微軟正黑體, \'Heiti TC\', \'Microsoft YaHei\', 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, \'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, \'ＭＳ Ｐゴシック\', \'Malgun Gothic\', Dotum, Gulim, \'Trebuchet MS\', \'Lucida Grande\', Verdana, Arial, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', '100', 'none', '', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['646px', '275px', '548px', '46px', 'auto', 'auto'],
                            id: 'word_right',
                            text: '<p style=\"margin: 0px;\">競品影片效能表現</p>',
                            align: 'center',
                            font: ['Roboto, \"Segoe UI\", \"Segoe UI Light\", \"Myriad Set Pro\", NotoSansHant, \'Microsoft JhengHei\', 微軟正黑體, \'Heiti TC\', \'Microsoft YaHei\', 微軟雅黑體, simhei, PMingLiU, 新細明體, Meiryo, \'ヒラギノ角ゴ Pro W3\', \'Hiragino Kaku Gothic Pro\', メイリオ, \'ＭＳ Ｐゴシック\', \'Malgun Gothic\', Dotum, Gulim, \'Trebuchet MS\', \'Lucida Grande\', Verdana, Arial, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', '100', 'none', '', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1192px', '315px']
                        }
                    }
                },
                timeline: {
                    duration: 11819,
                    autoPlay: true,
                    data: [
                        [
                            "eid7",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid6",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'none'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("compariso_video_edgeActions.js");
})("compariso_video");
