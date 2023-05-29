let studentArr = [
    { name: '张小刚', course: '幼儿舞蹈启蒙', hour: '124/240', reason: '心情不好,不想上课', submitTime: '2020-05-01 10:20', status: '待审核', operation: '-', id: 1 },
    { name: '李小红', course: '中国舞中级班', hour: '124/240', reason: '心情不好,不想上课', submitTime: '2020-05-01 10:20', status: '审核通过', operation: '管理员', id: 2 },
    { name: '卡维', course: '幼儿舞蹈启蒙', hour: '124/240', reason: '心情不好,不想上课', submitTime: '2020-05-01 10:20', status: '审核不通过', operation: '管理员', id: 3 },
    { name: '艾尔海森', course: '幼儿舞蹈启蒙', hour: '124/240', reason: '心情不好,不想上课', submitTime: '2020-05-01 10:20', status: '待审核', operation: '管理员', id: 4 },
    { name: '提那里', course: '幼儿舞蹈启蒙', hour: '124/240', reason: '心情不好,不想上课', submitTime: '2020-05-01 10:20', status: '待审核', operation: '-', id: 5 },
    { name: '魈', course: '幼儿舞蹈启蒙', hour: '124/240', reason: '心情不好,不想上课', submitTime: '2020-05-01 10:20', status: '审核通过', operation: '王老师', id: 6 },
    { name: '夜兰', course: '幼儿舞蹈启蒙', hour: '124/240', reason: '心情不好,不想上课', submitTime: '2020-05-01 10:20', status: '审核不通过', operation: '王老师', id: 7 },
    { name: '可莉', course: '幼儿舞蹈启蒙', hour: '124/240', reason: '心情不好,不想上课', submitTime: '2020-05-01 10:20', status: '待审核', operation: '-', id: 8 },
]
//获取
let oTbody = document.querySelector('tbody');
let oPagination = document.querySelector('.pagination')
let pg = document.querySelector('.pg')
let oNavigation = document.querySelector('.navigation')
let id = 7;
let count = 5;//每页的个数
let iNow = 1;//当前页

//编辑
let editName = document.querySelector('.edit-name');
console.log(1);
// let editCourse = document.querySelector('.edit-name');
// let edithour = document.querySelector('.edit-name');
// let editName = document.querySelector('.edit-name');
let editBtn = document.querySelector('.edit-btn');
let editstatus = document.querySelectorAll('.edit-status');
let editoperation = document.querySelector('.edit-operation')
let editId = 0;
//查询
let searchBtn = document.querySelector('.search-btn');
let studentNameCon = document.querySelector('.studentNameSelected');
let statusCon = document.querySelector('.statusSelected');

//日历
function setRangeText(start, end) {
    $('input[name="daterange"]').val(start.format('YYYY年MM月DD日') + ' - ' + end.format('YYYY年MM月DD日')).trigger('change');
}
$(function () {
    // 设置 Moment.js 的语言为中文
    moment.locale('zh-cn');

    $('input[name="daterange"]').daterangepicker({
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

function render(arr) {
    let str = '';
    let renderData = arr.slice((iNow - 1) * count, iNow * count);//页码内容渲染
    for (i = 0; i < renderData.length; i++) {
        str += `
        <tr>
        <td>${renderData[i].name}</td>
        <td>${renderData[i].course}</td>
        <td>${renderData[i].hour}</td>
        <td>${renderData[i].reason}</td>
        <td>${renderData[i].submitTime}</td>
        <td class="post">${renderData[i].status}</td>
        <td>${renderData[i].operation}</td>
        <td data-id="${renderData[i].id}">
            <span class="glyphicon glyphicon-cog background"></span>
            <a data-toggle="modal" data-target="#editModal" class="edit" href="#" >审核</a>&nbsp;
        </td>
        </tr>
        `
    }
    oTbody.innerHTML = str;
    col()
    // 创建页码
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
    for (let i = 1; i <= Math.ceil(studentArr.length / count); i++) {
        if (iNow == i) {
            pagesStr += `<li class="active"><a href="#">${i}</a></li>`
        } else {
            pagesStr += `<li><a href="#">${i}</a></li>`
        }
    }
    oPagination.innerHTML = pagesLeft + pagesStr + pagesRight;
}

//页码数据计量
// function renderTotal() {
//     let pageTotal = `
//  <span class="concen">共<a>${(Math.ceil(studentArr.length / count))}</a>页/<a>${studentArr.length}</a>条数据</span>
//  <select class="form-control form-inline sl">
//      <option>5条/每页</option>
//      <option>10条/每页</option>
//  </select>
//  `
//     oNavigation.insertAdjacentHTML('beforebegin', pageTotal)
// }
// renderTotal()
render(studentArr)
//分页点击功能
oPagination.addEventListener('click', function (e) {
    if (e.target.className === 'left') {//左

        if (iNow > 1) {
            iNow--;
        }
    } else if (e.target.className === 'right') {//右
        if (iNow < Math.ceil(studentArr.length / 5)) {
            iNow++;
        }
    } else {//数字键
        iNow = e.target.innerText.trim();
    }
    render(studentArr);
})

$(function () {
    // 监听查询按钮的点击事件
    $('#search-btn').on('click', function () {
        // 获取搜索框中的输入信息
        var searchName = $('#search-input').val();

        // 向服务器端发送 AJAX 请求以获取符合搜索条件的数据
        $.ajax({
            url: '/search',
            type: 'POST',
            data: { name: searchName },
            success: function (data) {
                // 将数据渲染到表格中
                $('#table-body').html(data);
            }
        });
    });
});

//给审核添加事件
oTbody.addEventListener('click', function (e) {
    if (e.target.className.includes('edit')) {
        // 显示编辑框，赋值
        if (e.target.parentNode.parentNode.children[6].innerText == '审核通过') {
            editstatus[0].checked = true;
        } else {
            editstatus[1].checked = true;
        }

        // 获取需要编辑的字段的原始值
        let originalStatus = e.target.parentNode.parentNode.children[6].innerText;
        let originalOperation = e.target.parentNode.parentNode.children[7].innerText;

        editId = e.target.parentNode.dataset.id;
    }
});

// 添加修改事件
editBtn.addEventListener('click', function () {
    for (let i = 0; i < studentArr.length; i++) {
        if (studentArr[i].id == editId) {
            // 获取新的状态和操作值
            let editedStatus = editstatus[0].checked == true ? '审核通过' : '审核不通过';
            let editedOperation = editoperation.value;

            // 将新值合并到原始对象中来创建一个新的 JSON 对象
            let updatedStudent = Object.assign({}, studentArr[i], { status: editedStatus, operation: editedOperation });

            // 用 splice() 方法替换原始数组中的对象
            studentArr.splice(i, 1, updatedStudent);

            break; // 找到匹配的 ID 后不再循环
        }
    }

    render(studentArr); // 渲染更新后的 studentArr
});
function col() {
    let post = document.querySelectorAll('.post')
    console.log(post);
    for (let i = 0; i < post.length; i++) {
        if (post[i].innerText == '待审核') {
            post[i].className = 'post1'
        } if (post[i].innerText == '审核通过') {
            post[i].className = 'post2'
        } if (post[i].innerText == '审核不通过') {
            post[i].className = 'post3'

        }
    }
}
col()

//查询
searchBtn.addEventListener('click', function () {
    let studentNameStr = String(studentNameCon.value);
    let statusStr = String(statusCon.value);

    let newArr = studentArr.filter(el => {
        let matched = true;
        if (studentNameCon.value !== '全部学生') {
            matched &= (el.name === studentNameStr);

        }
        console.log(1);
        if (statusCon.value !== '全部状态') {
            matched &= (el.status === statusStr);

        }
        return matched;
    });
    if (newArr.length === 0) {
        //没有搜到数据，提示查无数据
        alert('查无数据');
    } else {
        render(newArr);
    }
})