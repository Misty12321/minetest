let teacherArr = [
    { name: '张小刚', tel: 13112345678, plan: '全职+课时责任制 (方式一)', sort: 0, UpdateTime: '2023/04/28 10:20', teacherStatus: '在职', Founder: '张三', Edit: '编辑', incumbency: '离职', id: 1 },
    { name: '张名', tel: 13105065678, plan: '全职+按到课人数 (方式一)', sort: 1, UpdateTime: '2023/04/28 10:20', teacherStatus: '在职', Founder: '张三', Edit: '编辑', incumbency: '离职', id: 2 },
    { name: '张刚', tel: 17302345678, plan: '全职+课时责任制 (方式一)', sort: 2, UpdateTime: '2023/04/28 10:20', teacherStatus: '离职', Founder: '张三', Edit: '编辑', incumbency: '复职', id: 3 },
    { name: '张小舫', tel: 15102081358, plan: '兼职+课时制 (方式一)', sort: 0, UpdateTime: '2023/04/28 10:20', teacherStatus: '在职', Founder: '张三', Edit: '编辑', incumbency: '离职', id: 4 },
    { name: '张兰', tel: 13708011049, plan: '全职+课时责任制 (方式一)', sort: 1, UpdateTime: '2023/04/28 10:20', teacherStatus: '离职', Founder: '张三', Edit: '编辑', incumbency: '复职', id: 5 },
    { name: '李刚', tel: 13305060804, plan: '全职+按到课人数 (方式一)', sort: 2, UpdateTime: '2023/04/28 10:20', teacherStatus: '在职', Founder: '张三', Edit: '编辑', incumbency: '离职', id: 6 },
    { name: '李春兰', tel: 17716589142, plan: '兼职+按到课人数 (方式一)', sort: 0, UpdateTime: '2023/04/28 10:20', teacherStatus: '离职', Founder: '张三', Edit: '编辑', incumbency: '复职', id: 7 },
]

let id = 7;
let count = 5;//每页的个数
let iNow = 1;//当前页
let disId = 0;
let editId = 0;
let oTbody = document.querySelector('tbody');
let oPages = document.querySelector('.pages');//span
let oPagination = document.querySelector('.pagination');//ul页码
let oPagesItem = document.querySelector('.pagesItem');//select
let oNavigation = document.querySelector('.navigation');//nav页码
let searchBtn = document.querySelector('.search-btn');//btn搜索
let searchCon1 = document.querySelector('.search-con1');//输入查询框
let searchCon2 = document.querySelector('.search-con2');//输入查询框
let searchCon3 = document.querySelector('.search-con3');//输入查询框

let disBtn = document.querySelector('.dis-btn');//流失按钮
let addBtn = document.querySelector('.add-btn');//添加按钮

let editBtn = document.querySelector('.edit-btn');
let editName = document.querySelector('.edit-name');
let editTel = document.querySelector('.edit-tel');
let editPlan = document.querySelector('.edit-plan');
let editSort = document.querySelector('.edit-sort');
let editSetTime = document.querySelector('.edit-setTime');
let editStatus = document.querySelector('.edit-status');
let editFounder = document.querySelector('.edit-founder');

// 日历
function setRangeText(start, end) {
    $('input[name="daterange"]').val(start.format('YYYY年MM月DD日') + ' - ' + end.format('YYYY年MM月DD日')).trigger('change');
}
$(function () {
    // 设置 Moment.js 的语言为中文
    moment.locale('zh-cn');

    $('input[name="daterange"]').daterangepicker({
        opens: 'center',
        showCustomRangeLabel: false,
        locale: {
            format: 'YYYY年MM月DD日',
            separator: ' - ',
            applyLabel: '确认',
            cancelLabel: '取消',
            fromLabel: '从',
            toLabel: '到',
            customRangeLabel: '自定义日期范围',
            weekLabel: 'W',
            daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
            monthNames: [
                '一月',
                '二月',
                '三月',
                '四月',
                '五月',
                '六月',
                '七月',
                '八月',
                '九月',
                '十月',
                '十一月',
                '十二月'
            ],
            firstDay: 1
        },
        startDate: moment().subtract(29, 'days'),
        endDate: moment(),
        ranges: {
            '最近一周': [moment().subtract(6, 'days'), moment()],
            '最近一个月': [moment().subtract(29, 'days'), moment()],
            '最近三个月': [moment().subtract(90, 'days'), moment()]
        },
        "alwaysShowCalendars": true,
        "startDate": "2023/05/06",
        "endDate": "2023/05/12"
    }, function (start, end, label) {
        console.log('开始日期: ' + start.format('YYYY年MM月DD日') + '; 结束日期: ' + end.format('YYYY年MM月DD日') + '; 预定义范围: ' + label);
    });

    // 添加单击事件监听器
    $('#today').on('click', function () {
        var dateRange = $('input[name="daterange"]').data('daterangepicker');
        dateRange.setStartDate(moment());
        dateRange.setEndDate(moment());
        $('input[name="daterange"]').val(dateRange.startDate.format('YYYY年MM月DD日') + ' - ' + dateRange.endDate.format('YYYY年MM月DD日')).trigger('change');
    });

    $('#yesterday').on('click', function () {
        var dateRange = $('input[name="daterange"]').data('daterangepicker');
        dateRange.setStartDate(moment().subtract(1, 'days'));
        dateRange.setEndDate(moment().subtract(1, 'days'));
        $('input[name="daterange"]').val(dateRange.startDate.format('YYYY年MM月DD日') + ' - ' + dateRange.endDate.format('YYYY年MM月DD日')).trigger('change');
    });

    $('#last-7-days').on('click', function () {
        var dateRange = $('input[name="daterange"]').data('daterangepicker');
        dateRange.setStartDate(moment().subtract(6, 'days'));
        dateRange.setEndDate(moment());
        $('input[name="daterange"]').val(dateRange.startDate.format('YYYY年MM月DD日') + ' - ' + dateRange.endDate.format('YYYY年MM月DD日')).trigger('change');
    });
    $('#last-30-days').on('click', function () {
        var dateRange = $('input[name="daterange"]').data('daterangepicker');
        dateRange.setStartDate(moment().subtract(29, 'days'));
        dateRange.setEndDate(moment());
        $('input[name="daterange"]').val(dateRange.startDate.format('YYYY年MM月DD日') + ' - ' + dateRange.endDate.format('YYYY年MM月DD日')).trigger('change');
    });
    $('#this-month').on('click', function () {
        var dateRange = $('input[name="daterange"]').data('daterangepicker');
        dateRange.setStartDate(moment().startOf('month'));
        dateRange.setEndDate(moment().endOf('month'));
        $('input[name="daterange"]').val(dateRange.startDate.format('YYYY年MM月DD日') + ' - ' + dateRange.endDate.format('YYYY年MM月DD日')).trigger('change');
    });

    $('#last-month').on('click', function () {
        var dateRange = $('input[name="daterange"]').data('daterangepicker');
        dateRange.setStartDate(moment().subtract(1, 'month').startOf('month'));
        dateRange.setEndDate(moment().subtract(1, 'month').endOf('month'));
        $('input[name="daterange"]').val(dateRange.startDate.format('YYYY年MM月DD日') + ' - ' + dateRange.endDate.format('YYYY年MM月DD日')).trigger('change');
    });
    // 获取输入框的 jQuery 对象
    var dateRangeInput = $('input[name="daterange"]');

    // 在文本框中显示默认日期范围
    dateRangeInput.val('开始日期 - 结束日期');
    // 当用户选择日期范围时，更新输入框的值
    $('input[name="daterange"]').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('YYYY年MM月DD日') + ' - ' + picker.endDate.format('YYYY年MM月DD日')).trigger('change');
    });

    // 当用户取消选择时，清空输入框
    $('input[name="daterange"]').on('cancel.daterangepicker', function (ev, picker) {
        $(this).val('开始日期 - 结束日期').trigger('change');
    });
});

//内容的渲染
//创建内容
function render(arr) {
    let str = '';
    let renderData = arr.slice((iNow - 1) * count, iNow * count);//页码内容渲染
    for (i = 0; i < renderData.length; i++) {
        str += `
        <tr>
        <td>${renderData[i].name}</td>
        <td>${renderData[i].tel}</td>
        <td>${renderData[i].plan}</td>
        <td>${renderData[i].sort}</td>
        <td>${renderData[i].UpdateTime}</td>
        <td>${renderData[i].teacherStatus}</td>
        <td>${renderData[i].Founder}</td>
        <td data-id="${renderData[i].id}">
            <span class="glyphicon glyphicon-pencil background"></span>
            &nbsp;
            <a class="edit" href="#" data-toggle="modal" data-target="#EditModal">${renderData[i].Edit}</a>
            <span class="glyphicon glyphicon-wrench background"></span>
            &nbsp;
            <a class="inc" href="#" data-toggle="modal" data-target="#incModal">${renderData[i].incumbency}</a>
        </td>
        </tr>
        `
    }
    oTbody.innerHTML = str;

    // 创建页码
    //页码数据计量
    let pageTotal = `
    共<a>${(Math.ceil(arr.length / count))}</a>页/<a>${arr.length}</a>条数据
    `
    oPages.innerHTML = pageTotal;
    let pagesLeft = `
    <li>
       <a class="left" href="#" aria-label="Previous">
           <span class="left" aria-hidden="true">&laquo;</span>
       </a>
    </li>
    `//渲染左跳转按钮
    let pagesRight = `
    <li>
       <a class="right" href="#" aria-label="Next">
           <span class="right" aria-hidden="true">&raquo;</span>
       </a>
    </li>
    `//渲染右跳转按钮
    let pagesStr = '';//声明装页面的容器
    //渲染页码
    for (let i = 1; i <= Math.ceil(arr.length / count); i++) {
        if (iNow == i) {
            pagesStr += `<li class="active"><a href="#">${i}</a></li>`
        } else {
            pagesStr += `<li><a href="#">${i}</a></li>`
        }
    }
    oPagination.innerHTML = pagesLeft + pagesStr + pagesRight;

}
render(teacherArr);
//分页点击功能
oPagination.addEventListener('click', function (e) {
    if (e.target.className === 'left') {//左

        if (iNow > 1) {
            iNow--;
        }
    } else if (e.target.className === 'right') {//右
        if (iNow < Math.ceil(teacherArr.length / 5)) {
            iNow++;
        }
    } else {//数字键
        iNow = e.target.innerText.trim();
    }
    render(teacherArr);
})
//搜索
searchBtn.addEventListener('click', function () {
    let filterArr = [];
    let str1 = searchCon1.value;
    let str2 = searchCon2.value;
    let str3 = searchCon3.value;
    for (let i = 0; i < teacherArr.length; i++) {
        if (str1 == teacherArr[i].name && str2 == teacherArr[i].tel && str3 == teacherArr[i].plan) {
            filterArr.push(teacherArr[i]);
        }
        if (str1 == teacherArr[i].name || str2 == teacherArr[i].tel || str3 == teacherArr[i].plan) {
            filterArr.push(teacherArr[i]);
        }
        if (str1 == '' && str2 == '' && str3 == '请选择计薪方式') {
            alert('请输入正确的搜索条件');
            return;
        }


    }
    oPages.innerHTML = `
 共<a>${(Math.ceil(filterArr.length / count))}</a>页/<a>${filterArr.length}</a>条数据
 `
    render(filterArr);

})
//搜索框变化时
searchCon1.addEventListener('change', function () {
    render(teacherArr)
})
searchCon2.addEventListener('change', function () {
    render(teacherArr)
})
searchCon3.addEventListener('change', function () {
    render(teacherArr)
})
//离职与复职加事件
oTbody.addEventListener('click', function (e) {
    if (e.target.className.includes('inc')) {
        disId = e.target.parentNode.dataset.id;//获取到要离职行的id，跳转到离职加禁用用编辑功能监听事件
    } else if (e.target.className.includes('edit')) {
        editName.value = e.target.parentNode.parentNode.children[0].innerText;
        editTel.value = e.target.parentNode.parentNode.children[1].innerText;
        editPlan.value = e.target.parentNode.parentNode.children[2].innerText;
        editSort.value = e.target.parentNode.parentNode.children[3].innerText;
        editSetTime.value = e.target.parentNode.parentNode.children[4].innerText;
        console.log(editSetTime.dataTime());
        console.log(e.target.parentNode.parentNode.children[4].innerText);
        editStatus.value = e.target.parentNode.parentNode.children[5].innerText;
        editFounder.value = e.target.parentNode.parentNode.children[6].innerText;
    }
})
