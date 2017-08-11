window.onload=function() {

    // var option00, myChart00 = echarts.init(document.getElementById('chart_year'));
    //
    // option00 = {
    //     tooltip: {
    //         trigger: 'item'
    //     },
    //     grid: {
    //         top: "20%"
    //     },
    //     xAxis: {
    //         axisLabel: { show: false },
    //         splitLine: { show: false },
    //         axisLine: { show: false },
    //         axisTick: { show: false },
    //     },
    //     yAxis: [{
    //         data: ['2015年', '2016年', '2017年'],
    //         axisLabel: { inside: true, textStyle: { color: '#03a9f4' } },
    //         axisLine: { show: false, lineStyle: { color: 'rgba(96, 236, 236)', type: 'dashed' } },
    //         splitLine: { show: false },
    //         axisTick: { show: false },
    //         axisLabel: {
    //             show: false
    //         }
    //     }],
    //     series: [{
    //         name: '年度供水量',
    //         type: 'bar',
    //         stack: '总量',
    //         barMaxWidth: 17,
    //         label: {
    //             normal: {
    //                 show: true,
    //                 position: ['-0%', '-110%'],
    //                 formatter: '{b}',
    //                 textStyle: {
    //                     color: '#0093d3'
    //                 }
    //             },
    //
    //         },
    //         data: [320, 302, 341],
    //         itemStyle: {
    //             normal: {
    //                 color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
    //                     offset: 1,
    //                     color: '#00d2af'
    //                 }, {
    //                     offset: 0,
    //                     // color: '#2294E4'
    //                     color: '#0093d3'
    //                 }]),
    //                 // shadowColor: 'rgba(35,149,229,0.8)',
    //                 // shadowBlur: 20,
    //             },
    //         },
    //         z: 10
    //     },
    //
    //         {
    //             type: 'bar',
    //             itemStyle: {
    //                 normal: {
    //                     color: '#161a1f'
    //                 }
    //             },
    //             silent: true,
    //             barMaxWidth: 17,
    //             barGap: '-100%',
    //             data: [400, 400, 400]
    //         }
    //     ]
    // };
    // myChart00.setOption(option00);
    // window.onresize = function() {
    //     myChart00.resize();
    // };

    //年度供水量
    var option2015, option2016, option2017, myChart01 = echarts.init(document.getElementById('chart_month'));

    option2015 = {
        textStyle:{
            color:"#fff"
        },
        grid: {
            x: '3%',
            y: '3%',
            bottom:19

        },
        tooltip: {
            trigger: 'item'
        },
        xAxis: [{
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            axisLabel: {
                textStyle: {
                    color: '#03a9f4'
                }
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }, {
            // 辅助 x 轴
            show: false,
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        }],
        yAxis: {
            max: 180,
            axisLine: {
                show: false
            },
            show: false
        },
        series: [{
            // 辅助系列
            type: 'bar',
            silent: true,
            xAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: '#161a1f'
                }
            },
            barMaxWidth: 30,
            data: [180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180]
        }, {
            name: '供水量',
            type: 'bar',
            data: [50.0, 56, 70, 66, 75, 76.7, 85, 102.2, 62.6, 82.0, 64, 90],
            barMaxWidth: 30,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00d2af'
                    }, {
                        offset: 1,
                        // color: '#2294E4'
                        color: '#0093d3'
                    }]),
                }
            },
        }]
    };
    option2016 = {
        grid: {
            x: '3%',
            y: '3%',
            bottom:19
        },
        tooltip: {
            trigger: 'item'
        },
        xAxis: [{
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            axisLabel: {
                textStyle: {
                    color: '#03a9f4'
                }
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }, {
            // 辅助 x 轴
            show: false,
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        }],
        yAxis: {
            max: 180,
            axisLine: {
                show: false
            },
            show: false
        },
        series: [{
            // 辅助系列
            type: 'bar',
            silent: true,
            xAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: '#161a1f'
                }
            },
            barMaxWidth: 30,
            data: [180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180]
        }, {
            name: '供水量',
            type: 'bar',
            data: [50.0, 56, 70, 66, 75, 76.7, 85, 52.2, 62.6, 82.0, 64, 90],
            barMaxWidth: 30,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00d2af'
                    }, {
                        offset: 1,
                        // color: '#2294E4'
                        color: '#0093d3'
                    }]),
                }
            },
        }]
    };
    option2017 = {
        grid: {
            x: '3%',
            y: '3%',
            bottom:19
        },
        tooltip: {
            trigger: 'item'
        },
        xAxis: [{
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            axisLabel: {
                textStyle: {
                    color: '#03a9f4'
                }
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }, {
            // 辅助 x 轴
            show: false,
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        }],
        yAxis: {
            max: 180,
            axisLine: {
                show: false
            },
            show: false
        },
        series: [{
            // 辅助系列
            type: 'bar',
            silent: true,
            xAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: '#161a1f'
                }
            },
            barMaxWidth: 30,
            data: [180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180]
        }, {
            name: '供水量',
            type: 'bar',
            data: [50.0, 56, 70, 66, 75, 76.7, 85, 102.2, 62.6, 32.0, 64, 90],
            barMaxWidth: 30,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00d2af'
                    }, {
                        offset: 1,
                        // color: '#2294E4'
                        color: '#0093d3'
                    }]),
                }
            },
        }]
    };
    myChart01.setOption(option2015);
var btns=document.querySelectorAll("#chart_year button");

for(var i=0;i<btns.length;i++){
    btns[i].onclick=function(e){


        for(var i=0;i<btns.length;i++){
            btns[i].className="";
        }

        var that=e.target;
        console.log(that.tagName);
        if(that.tagName==="BUTTON"){
            that.className="gradient";
            if (that.innerHTML == '2017年') {
                myChart01.setOption(option2017);

            }
            if (that.innerHTML == '2016年') {
                myChart01.setOption(option2016);
            }
            if (that.innerHTML == '2015年') {
                myChart01.setOption(option2015);
            }

        }

    }
}

    // myChart00.on('click', function(params) {
    //     if (params.name == '2017年') {
    //         console.log(1)
    //         myChart01.setOption(option2017);
    //     }
    //     if (params.name == '2016年') {
    //         myChart01.setOption(option2016);
    //     }
    //     if (params.name == '2015年') {
    //         myChart01.setOption(option2015);
    //     }
    //     console.log(params.name)
    // });


    //液位

    var option05, myChart06 = echarts.init(document.getElementById('chart_barrel'));
    option05 = {

        series: [{
            type: 'liquidFill',
            data: [0.7, 0.6],
            center:['50%','50%'],
            radius:'80%',
            itemStyle: {
                normal: {
                    shadowBlur: 0
                }
            },
            //水颜色
            color: ['#1B628C', '#2A8DC6' ],

            //背景
            backgroundStyle: {
                color: '#252C36'
            },



            label: {
                normal: {
                    formatter: '1223m',
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            outline: {
                borderDistance: 0,
                itemStyle: {
                    borderWidth: 5,
                    borderColor: '#16C7DE',
                    shadowBlur: false

                }
            }
        }]
    }

    myChart06.setOption(option05);
console.log(option05.series[0].label.normal.formatter);
    setInterval(function() {
        option05.series[0].label.normal.formatter=( Math.round(Math.random() * 1500)+"m");
        myChart06.setOption(option05);
    }, 1000);



    //压力
    var myChart03 = echarts.init(document.getElementById("chart_pressure"));
    var option03 = {

        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['进水厂压力','出水厂压力'],
            textStyle:{
                color:"#fff",
            },
            left:'70%',
            itemWidth:18,
            itemHeight:18,

        },
        toolbox: {
            show:false,
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            top:28,
            bottom: 0,
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                axisLine:{
                    lineStyle:{
                        color:'#767A81',
                        width:3,

                    }
                },
                boundaryGap : false,
                data : (function() {
                    var now = new Date();
                    var res = [];
                    var len = 7;
                    while (len--) {
                        res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                        now = new Date(now - 2000);
                    }
                    return res;
                })(),

            }
        ],
        yAxis : [
            {
                axisLine:{
                    lineStyle:{
                        color:'#767A81',
                            width:3,
                    }
                },
                type : 'value',
                data:[
                    {
                        value:"压力",
                        textStyle:{
                            color:'#fff'
                        }
                    }
                ],
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:'#2C3441',
                        width: 1,
                        type:'dashed'
                    }
                },
                nameTextStyle:{
                    color:"#fff"
                }
            }
        ],
        series : [
            //第二条
            {
                name:'进水厂压力',
                symbolSize:5,
                symbol:'rect',
                type:'line',
                stack: '压力',
                areaStyle: {normal: {
                    color:"#252C36",
                    opacity:0
                }},
                itemStyle:{
                    normal:{
                        color:"#42B6E1"
                    }
                },
                lineStyle:{
                    normal:{
                        color:"#41B2DC"
                    }
                },
                data:[1, 0.6, 1.5, 0.9,0.8,0.88,1.2]
            },
            // 第一条
            {
                name:'出水厂压力',
                type:'line',
                symbolSize:5,
                symbol:"rect",
                stack: '压力',
                areaStyle: {normal: {
                    color:"#2F596E",
                    opacity:0

                }},
                itemStyle:{
                    normal:{
                        color:"#9E7AFE"
                    }
                },
                lineStyle:{
                    normal:{
                        color:"#8067CE"
                    }
                },
                data:[0.7, 0.5, 1.5, 0.3,0.4,1.0,1.3]
            }
        ],
        textStyle:{
            color:"fff"
        }
    };

    myChart03.setOption(option03);

    setInterval(function() {
        var axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');
        var data0 = option03.series[0].data;
        var data1 = option03.series[1].data;
        data0.shift();
        data0.push( Math.round(Math.random() * 3));
        data1.shift();
        data1.push(Math.round(Math.random() * 3));

        option03.xAxis[0].data.shift();
        option03.xAxis[0].data.push(axisData);

        myChart03.setOption(option03);
    }, 3000);

    //测量统计
    var myChart04 = echarts.init(document.getElementById("chart_measure"));
    var option04 = {

        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['进水厂流量','出水厂流量'],
            textStyle:{
                color:"#fff",
            },
            left:'70%',
            itemWidth:18,
            itemHeight:18,

        },
        toolbox: {
            show:false,
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            top:28,
            bottom: 0,
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                axisLine:{
                    lineStyle:{
                        color:'#767A81',
                        width:3,

                    }
                },
                boundaryGap : false,
                data : (function() {
                    var now = new Date();
                    var res = [];
                    var len = 7;
                    while (len--) {
                        res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                        now = new Date(now - 2000);
                    }
                    return res;
                })(),

            }
        ],
        yAxis : [
            {
                axisLine:{
                    lineStyle:{
                        color:'#767A81',
                        width:3,
                    }
                },
                type : 'value',
                data:[
                    {
                        value:"压力",
                        textStyle:{
                            color:'#fff'
                        }
                    }
                ],
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:'#2C3441',
                        width: 1,
                        type:'dashed'
                    }
                },
                nameTextStyle:{
                    color:"#fff"
                }
            }
        ],
        series : [
            //第二条
            {
                name:'进水厂流量',
                symbolSize:5,
                symbol:'rect',
                type:'line',
                stack: '流量',
                areaStyle: {normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#448CA0'},
                            {offset: 1, color: '#273B46'}
                        ]
                    ),
                    opacity:.8
                }},
                itemStyle:{
                    normal:{
                        color:"#42B6E1"
                    }
                },
                lineStyle:{
                    normal:{
                        color:"#41B2DC"
                    }
                },
                data:[160, 520, 600,800,500,600,300]
            },
            // 第一条
            {
                name:'出水厂流量',
                type:'line',
                symbolSize:5,
                symbol:"rect",
                stack: '流量',
                areaStyle: {normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#3F7591'},
                            {offset: 1, color: '#272F3A'}
                        ]
                    ),
                    opacity:.8

                }},
                itemStyle:{
                    normal:{
                        color:"#9E7AFE"
                    }
                },
                lineStyle:{
                    normal:{
                        color:"#8067CE"
                    }
                },
                data:[360, 450, 460, 630,100,800,600]
            }
        ],
        textStyle:{
            color:"fff"
        }
    };
    myChart04.setOption(option04);
    setInterval(function() {
        var axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');
        var data0 = option04.series[0].data;
        var data1 = option04.series[1].data;
        data0.shift();
        data0.push( Math.round(Math.random() * 1500));
        data1.shift();
        data1.push(Math.round(Math.random() * 1500));

        option04.xAxis[0].data.shift();
        option04.xAxis[0].data.push(axisData);

        myChart04.setOption(option04);
    }, 3000);
    //供水总量与耗电量统计

// 基于准备好的dom，初始化echarts实例
    var myChart08 = echarts.init(document.getElementById('chart_make_water'));
    var  option08 = {
        tooltip: {
            trigger: 'axis'
        },
        textStyle:{
            color:"fff"
        },
        legend: {
            data:['降水量','折线'],
            left:'70%',
            top:'-2%',
            itemWidth:18,
            itemHeight:18,
        },
        grid:{
            bottom:20,
            top:20,
        },
        xAxis: [
            {
                type: 'category',
                axisLine: {
                    lineStyle: {
                        color: '#767A81',
                        width: 3,

                    }
                },
                data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
            }
        ],
        yAxis: [
            {
                axisLine:{
                    lineStyle:{
                        color:'#767A81',
                        width:3,
                    }
                },
                type : 'value',
                data:[
                    {
                        value:"压力",
                        textStyle:{
                            color:'#fff'
                        }
                    }
                ],
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:'#2C3441',
                        width: 1,
                        type:'dashed'
                    }
                },
                nameTextStyle:{
                    color:"#fff"
                }
            }
        ],
        series: [

            {
                name:'降水量',
                type:'bar',
                /*itemStyle: {
                 normal: {
                 color: new echarts.graphic.LinearGradient(
                 0, 0, 0, 1,
                 [
                 {offset: 0, color: '#fe6262'},
                 {offset: 0.5, color: '#fe4141'},
                 {offset: 1, color: '#fe1818'}
                 ]
                 ),
                 },
                 emphasis: {
                 color: new echarts.graphic.LinearGradient(
                 0, 0, 0, 1,
                 [
                 {offset: 0, color: '#fe6262'},
                 {offset: 0.5, color: '#fe4141'},
                 {offset: 1, color: '#fe1818'}
                 ]
                 )
                 }
                 },*/

                /*设置柱状图颜色*/
                itemStyle: {
                    normal: {
                        color: "#42B7E2",
                        /*信息显示方式*/
                        label: {
                            show: false,
                            position: 'top',
                            formatter: '{b}\n{c}'
                        }
                    }
                },




                data:[50, 75, 100, 150, 200, 250, 150, 100, 95, 160, 50, 45]
            },
            {
                name:'折线',
                type:'line',
                symbol:"rect",
                itemStyle:{
                    normal:{
                        color:"#FFE64E"
                    }
                },
                lineStyle:{
                    normal:{
                        color:"#DCC74A"
                    }
                },
                data:[50, 75, 100, 150, 200, 250, 150, 100, 95, 160, 50, 45]
            }
        ]
    };
    var  option_day = {
        tooltip: {
            trigger: 'axis'
        },
        textStyle:{
            color:"fff"
        },
        legend: {
            data:['降水量','折线'],
            left:'70%',
            top:'-2%',
            itemWidth:18,
            itemHeight:18,
            textStyle:{color:"#fff"}
        },
        grid:{
            bottom:20,
            top:25,
        },
        xAxis: [
            {
                type: 'category',
                axisLine: {
                    lineStyle: {
                        color: '#767A81',
                        width: 3,

                    }
                },
                data: [
                    "10.3",
                    "10.4",
                    "10.5",
                    "10.6",
                    "10.7",
                    "10.8",
                    "10.9",
                ]
            }
        ],
        yAxis: [
            {
                axisLine:{
                    lineStyle:{
                        color:'#767A81',
                        width:3,
                    }
                },
                type : 'value',
                data:[
                    {
                        value:"压力",
                        textStyle:{
                            color:'#fff'
                        }
                    }
                ],
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:'#2C3441',
                        width: 1,
                        type:'dashed'
                    }
                },
                nameTextStyle:{
                    color:"#fff"
                }
            }
        ],
        series: [

            {
                name:'降水量',
                type:'bar',
                /*itemStyle: {
                 normal: {
                 color: new echarts.graphic.LinearGradient(
                 0, 0, 0, 1,
                 [
                 {offset: 0, color: '#fe6262'},
                 {offset: 0.5, color: '#fe4141'},
                 {offset: 1, color: '#fe1818'}
                 ]
                 ),
                 },
                 emphasis: {
                 color: new echarts.graphic.LinearGradient(
                 0, 0, 0, 1,
                 [
                 {offset: 0, color: '#fe6262'},
                 {offset: 0.5, color: '#fe4141'},
                 {offset: 1, color: '#fe1818'}
                 ]
                 )
                 }
                 },*/

                /*设置柱状图颜色*/
                itemStyle: {
                    normal: {
                        color: "#42B7E2",
                        /*信息显示方式*/
                        label: {
                            show: false,
                            position: 'top',
                            formatter: '{b}\n{c}'
                        }
                    }
                },




                data:[50, 75, 100, 150, 200, 250, 150]
            },
            {
                name:'折线',
                type:'line',
                symbol:"rect",
                itemStyle:{
                    normal:{
                        color:"#FFE64E"
                    }
                },
                lineStyle:{
                    normal:{
                        color:"#DCC74A"
                    }
                },
                data:[ 250, 150, 100, 95, 160, 50, 45]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart08.setOption(option_day);
    var bt=document.querySelectorAll("#main_6 p button");
    for(var d=0;d<bt.length;d++){
        console.log(bt[d]);
        bt[d].onclick=function(e){

        console.log("1");
            for(var d=0;d<bt.length;d++){
                bt[d].className="";
            }

            var that=e.target;
            console.log(that.tagName);
            if(that.tagName==="BUTTON") {
                that.className = "btnbg";
                if (that.innerHTML == '七天') {
                    myChart08.setOption(option_day);

                }
                if (that.innerHTML == '月') {
                    myChart08.setOption(option08);
                }

            }

        }
    }


    var resizeTimer = null;
    $(window).on('resize', function() {
        if (resizeTimer) {
            clearTimeout(resizeTimer)
        }
        resizeTimer = setTimeout(function() {
            myChart08.resize();
            myChart01.resize();
            myChart03.resize();
            myChart04.resize();
            myChart06.resize();
        }, 100);
    });

};
