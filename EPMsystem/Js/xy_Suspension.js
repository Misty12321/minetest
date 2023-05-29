let studentArr = [
    { name: '张小刚', course: '幼儿舞蹈启蒙', date: '2020/01/20~2020/06/20', hours: 180, note: '心情不好,不想上课', submitTime: '2020-05-01 10:20', status: '待审核', operation: '-', id: 1 },
    { name: '李小红', course: '中国舞中级班', date: '2020/01/20~2020/06/20', hours: 180, note: '心情不好,不想上课', submitTime: '2020-05-01 10:20', status: '审核通过', operation: '管理员', id: 2 },
    { name: '卡维', course: '幼儿舞蹈启蒙', date: '2020/01/20~2020/06/20', hours: 180, note: '心情不好,不想上课', submitTime: '2020-05-01 10:20', status: '待审核', operation: '-', id: 3 },
    { name: '艾尔海森', course: '幼儿舞蹈启蒙', date: '2020/01/20~2020/06/20', hours: 180, note: '心情不好,不想上课', submitTime: '2020-05-01 10:20', status: '待审核', operation: '-', id: 4 },
    { name: '提那里', course: '幼儿舞蹈启蒙', date: '2020/01/20~2020/06/20', hours: 180, note: '心情不好,不想上课', submitTime: '2020-05-01 10:20', status: '待审核', operation: '-', id: 5 },
    { name: '魈', course: '幼儿舞蹈启蒙', date: '2020/01/20~2020/06/20', hours: 180, note: '心情不好,不想上课', submitTime: '2020-05-01 10:20', status: '待审核', operation: '-', id: 6 },
    { name: '夜兰', course: '幼儿舞蹈启蒙', date: '2020/01/20~2020/06/20', hours: 180, note: '心情不好,不想上课', submitTime: '2020-05-01 10:20', status: '待审核', operation: '-', id: 7 },
    { name: '可莉', course: '幼儿舞蹈启蒙', date: '2020/01/20~2020/06/20', hours: 180, note: '心情不好,不想上课', submitTime: '2020-05-01 10:20', status: '待审核', operation: '-', id: 8 },
]

let id = 7;
let count = 5;//每页的个数
let iNow = 1;//当前页

let oTbody = document.querySelector('tbody');
let oPagination = document.querySelector('.pagination')
let pg = document.querySelector('.pg')
let oNavigation = document.querySelector('.navigation')

//编辑
let editBtn = document.querySelector('.edit-btn');
let editstatus = document.querySelectorAll('.edit-status');
let editoperation = document.querySelector('.edit-operation')
let editId = 0;

//查询获取的节点
// let searchBtn = document.querySelector('.search-btn');
let studentNameCon = document.querySelector('.studentNameSelected');
let statusCon = document.querySelector('.statusSelected');

// 日历
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


function render() {
    let str = '';
    let renderData = studentArr.slice((iNow - 1) * count, iNow * count);//页码内容渲染
    for (i = 0; i < renderData.length; i++) {
        str += `
        <tr>
        <td>${renderData[i].name}</td>
        <td>${renderData[i].course}</td>
        <td>${renderData[i].date}</td>
        <td>${renderData[i].hours}</td>
        <td>${renderData[i].note}</td>
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

//页面刚加载就渲染数据
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








//给审核添加事件
oTbody.addEventListener('click', function (e) {
    if (e.target.className.includes('edit')) {
        //显示编辑框，赋值
        if (e.target.parentNode.parentNode.children[7].innerText == 'success') {
            editstatus[0].checked = true;
        } else {
            editstatus[1].checked = true;
        }

        editId = e.target.parentNode.dataset.id;
    }

})
//添加修改事件
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
//更改颜色
function col() {
    let post = document.querySelectorAll('.post')
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


const stateDropdown = document.querySelector('.state.dropdown');

// 监听下拉菜单点击事件
stateDropdown.addEventListener('click', function (e) {
    const target = e.target;
    if (target.tagName === 'A') { // 如果是下拉菜单选项
        const status = target.textContent.trim(); // 获取选项文本内容

        const rows = document.querySelectorAll('.table tbody tr'); // 获取表格行数据

        rows.forEach(function (row) { // 遍历行数据
            const renewalStatus = row.querySelector('td:nth-child(1)').textContent.trim(); // 获取续费状态列的文本内容

            if (status === '全部学生' || status === renewalStatus) { // 如果选项是“全部状态”或者与续费状态列的内容一致
                row.style.display = ''; // 显示该行数据
            } else {
                row.style.display = 'none'; // 隐藏该行数据
            }

            // 如果选项是“全部”，则显示所有行
            if (status === '全部学生') {
                row.style.display = '';
            }
        });
    }
});
const statusDropdown = document.querySelector('#status-dropdown');

// 给状态下拉菜单添加事件监听器
statusDropdown.addEventListener('click', function (e) {
    const target = e.target;
    if (target.tagName === 'A') { // 如果是下拉菜单选项
        const status = target.textContent.trim(); // 获取选项文本内容

        const rows = document.querySelectorAll('.table tbody tr'); // 获取表格行数据

        rows.forEach(function (row) { // 遍历行数据
            const auditStatus = row.querySelector('td:nth-child(7)').textContent.trim(); // 获取续费状态列的文本内容

            if (status === '全部状态' || status === auditStatus) { // 如果选项是“全部状态”或者与续费状态列的内容一致
                row.style.display = ''; // 显示该行数据
            } else {
                row.style.display = 'none'; // 隐藏该行数据
            }

            // 如果选项是“全部”，则显示所有行
            if (status === '全部状态') {
                row.style.display = '';
            }
        });
    }
});






// const stateDropdown = document.querySelector('.state.dropdown');
// searchBtn.addEventListener('click', function () {
//     let studentNameStr = String(studentNameCon.value);
//     let statusStr = String(statusCon.value);

//     let newArr = studentArr.filter(el => {
//         // let matched = true;
//         // if (studentNameCon.value !== '全部学生') {
//         //     matched &= (el.name === studentNameStr);

//         // }

//         // if (statusCon.value !== '全部状态') {
//         //     matched &= (el.status === statusStr);

//         // }
//         // return matched;
//         if (studentNameCon.value.trim() !== '全部学生') {
//             return el.name == studentNameStr;
//         }
//         return true;
//     })
//     newArr = newArr.filter(el => {
//         if (statusCon.value != '全部课程') {
//             return el.status == statusStr;
//         }
//         return true;  // 加上这一行
//     })
//     render(newArr);
//     if (newArr.length === 0) {
//         //没有搜到数据，提示查无数据
//         alert('查无数据');
//     } else {
//         render(newArr);
//     }
// })

