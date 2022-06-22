var chartDom = document.getElementById('chart01');
var myChart = echarts.init(chartDom);
var option;

option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      data: [
        '面议'
      ],
      left: 10,
      top: 10,
    },
    series: [
      {
        name: '视力残疾分级',
        type: 'pie',
        selectedMode: 'single',
        radius: ['10%', '30%'],
        label: {
          position: 'inner',
          fontSize: 14,
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 34, name: '一级', selected: true },
          { value: 41, name: '二级' },
          { value: 89, name: '三级' },
          { value: 277, name: '四级' }
        ]
      },
      {
        name: '薪资分布',
        type: 'pie',
        radius: ['45%', '65%'],
        labelLine: {
          length: 30
        },
        itemStyle: {
          borderRadius: 5,
        },
        label: {
          formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
          backgroundColor: '#F6F8FC',
          borderColor: '#8C8D8E',
          borderWidth: 1,
          borderRadius: 4,
          rich: {
            a: {
              color: '#6E7079',
              lineHeight: 22,
              align: 'center'
            },
            hr: {
              borderColor: '#8C8D8E',
              width: '100%',
              borderWidth: 1,
              height: 0
            },
            b: {
              color: '#4C5058',
              fontSize: 14,
              fontWeight: 'bold',
              lineHeight: 33
            },
            per: {
              color: '#fff',
              backgroundColor: '#4C5058',
              padding: [3, 4],
              borderRadius: 4
            }
          }
        },
        data: [
          { value: 16, name: '1千~2千' },
          { value: 76, name: '2千~3千' },
          { value: 89, name: '3千~4.5千' },
          { value: 48, name: '4.5千~6千' },
          { value: 25, name: '6千~8千' },
          { value: 9, name: '8千~1万' },
          { value: 5, name: '1万~1.5万元' },
          { value: 7, name: '1.5万元及以上' },
          { value: 81, name: '面议' }
        ]
      }
    ]
  };
  
option && myChart.setOption(option);

var chartDom = document.getElementById('chart02');
var myChart = echarts.init(chartDom);
var option;
option = {
    tooltip: {
    trigger: 'item'
    },
    
    series: [
    {
    type: 'pie',
    radius: ['50%', '70%'],
    avoidLabelOverlap: false,
    itemStyle: {
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 2
    },
    label: {
    show: true,
    position: 'center',
    color:'#fff'
    },
    emphasis: {
    label: {
    show: true,
    fontSize: '40',
    fontWeight: 'bold',
    color:'#fff',
    textBorderWidth: 2,
    textBorderColor: '#000'
    }
    },
    labelLine: {
    show: false
    },
    data: [
    { value: 90, name: '90%的的视障人士认为\n\ \n\他们的生活中需要互联网' },
    { value: 10 }
    ]
    }
    ]
    };
    option && myChart.setOption(option);

var chartDom = document.getElementById('chart03');
var myChart = echarts.init(chartDom);
var option;
option = {
    tooltip: {
    trigger: 'item'
    },
    
    series: [
    {
    type: 'pie',
    radius: ['50%', '70%'],
    avoidLabelOverlap: false,
    itemStyle: {
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 2
    },
    label: {
    show: true,
    position: 'center',
    color:'#fff'
    },
    emphasis: {
    label: {
    show: true,
    fontSize: '40',
    fontWeight: 'bold',
    color:'#fff',
    textBorderWidth: 2,
    textBorderColor: '#000'
    }
    },
    labelLine: {
    show: false
    },
    data: [
    { value: 58, name: '58%的的视障人士对当前互联网不同场景的\n\ \n\信息无障碍程度感到不满意' },
    { value: 42 }
    ]
    }
    ]
    };
    option && myChart.setOption(option);

var chartDom = document.getElementById('chart04');
var myChart = echarts.init(chartDom);
var option;
option = {
    tooltip: {
    trigger: 'item'
    },
    legend: {
    top: '5%',
    left: 'center'
    },
    series: [
    {
    name: '视障人士互联网无障碍使用五大难点',
    type: 'pie',
    radius: ['50%', '70%'],
    avoidLabelOverlap: false,
    itemStyle: {
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 2
    },
    label: {
    show: false,
    position: 'center',
    color:'#fff'
    },
    emphasis: {
    label: {
    show: true,
    fontSize: '40',
    fontWeight: 'bold',
    color:'#fff',
    textBorderWidth: 2,
    textBorderColor: '#000'
    }
    },
    labelLine: {
    show: false
    },
    data: [
    { value: 59, name: '59%的视障读屏软件难以读出全部内容' },
    { value: 52, name: '软件间难以完全兼容' },
    { value: 50, name: '图片信息难以被获取' },
    { value: 42, name: '验证码验证难以操作' },
    { value: 35, name: '软件升级后无障碍功能难以使用' }
    ]
    }
    ]
    };
    option && myChart.setOption(option);