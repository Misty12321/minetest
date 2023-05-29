let studentArr = [
    { studentName: '张小刚', parentName: 'liaos', parentPhone: '13112345678', advisorName: 'Jack', className: '金牌启蒙1班', classHour: '180/200', endTime: '2020 - 06 - 09', renewStatus: '待续费', auditStatus: '待审核', paymentMethod: '微信支付', id: 1 },
    { studentName: '李晓红', parentName: '幻影视界', parentPhone: '13112345678', advisorName: 'Jack', className: '幼儿舞启蒙1班', classHour: '52/300', endTime: '2020 - 06 - 09', renewStatus: '待续费', auditStatus: '待审核', paymentMethod: '微信支付', id: 2 },
    { studentName: '张小刚', parentName: 'liaos', parentPhone: '14112345678', advisorName: 'Jack', className: '中国舞4级C班', classHour: '0/100', endTime: '2020 - 06 - 09', renewStatus: '待续费', auditStatus: '待审核', paymentMethod: '微信支付', id: 3 },
    { studentName: '提那里', parentName: 'liaos', parentPhone: '15112345678', advisorName: 'Jack', className: '金牌启蒙1班', classHour: '180/200', endTime: '2020 - 06 - 09', renewStatus: '待续费', auditStatus: '审核通过', paymentMethod: '微信支付', id: 4 },
    { studentName: '张小刚', parentName: 'liaos', parentPhone: '13112345678', advisorName: 'Jack', className: '金牌启蒙1班', classHour: '180/200', endTime: '2020 - 06 - 09', renewStatus: '流失', auditStatus: '审核不通过', paymentMethod: '微信支付', id: 5 },
    { studentName: '张小刚', parentName: 'liaos', parentPhone: '13112345678', advisorName: 'Jack', className: '金牌启蒙1班', classHour: '180/200', endTime: '2020 - 06 - 09', renewStatus: '待续费', auditStatus: '待审核', paymentMethod: '微信支付', id: 6 },
    { studentName: '张小刚', parentName: 'liaos', parentPhone: '13112345678', advisorName: 'Jack', className: '金牌启蒙1班', classHour: '180/200', endTime: '2020 - 06 - 09', renewStatus: '待续费', auditStatus: '待审核', paymentMethod: '微信支付', id: 7 },
]

let id = 7;
let count = 5;//每页的个数
let iNow = 1;//当前页
let oTbody = document.querySelector('tbody');
let oPagination = document.querySelector('.pagination')
let pg = document.querySelector('.pg')
let oNavigation = document.querySelector('.navigation')
let delId = 0;
let editId = 0;





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

function render() {
    let str = '';
    let renderDate = studentArr.slice((iNow - 1) * count, iNow * count);//页码内容渲染
    for (i = 0; i < renderDate.length; i++) {
        str += `
        <tr>
        <td>${renderDate[i].studentName}</td>
        <td>${renderDate[i].parentName}</td>
        <td>${renderDate[i].parentPhone}</td>
        <td>${renderDate[i].advisorName}</td>
        <td>${renderDate[i].className}</td>
        <td>${renderDate[i].classHour}</td>
        <td>${renderDate[i].endTime}</td>
        <td>${renderDate[i].renewStatus}</td>
        <td id="audit-status" class="post">${renderDate[i].auditStatus}</td>
        <td>${renderDate[i].paymentMethod}</td>
        
        <td data-id="${renderDate[i].id}">
            
            <a href="#" data-toggle="modal" data-target="#myModal">审核</a>&nbsp;
            <a href="#" id="renew-package-link" data-toggle="modal" data-target="#renewPackageModal">套餐续费</a>
             <a class="renewalFee" href="#" data-toggle="modal" data-target="#renewalFeeModal">人工续费</a>
           <a href="#" data-toggle="modal" data-target="#lossModal">流失</a>
        </td>
        </tr>
        `
    }
    oTbody.innerHTML = str;
    // 创建页码
    col()
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
    const sl = document.querySelector('.sl')
    sl.addEventListener('change', function (e) {
        count = parseInt(e.target.value)
        iNow = 1
        render()
    })
}

let n = 0
oTbody.addEventListener('click', function (e) {
    if (e.target.innerText == '审核') {
        n = e.target.parentNode.dataset.id
        console.log(n);
    }
})
let save = document.querySelector('.save')
save.addEventListener('click', function () {
    for (let i = 0; i < studentArr.length; i++) {
        if (studentArr[i].id == n) {
            studentArr[i].auditStatus = document.querySelector('.opt:checked').value
        }
    }
    render(studentArr);
})
//页码数据计量
function renderTotal() {
    let pageTotal = `
 <span class="concen">共<a>${(Math.ceil(studentArr.length / count))}</a>页/<a>${studentArr.length}</a>条数据</span>
 <select class="form-control sl">
     <option>5条/每页</option>
     <option>10条/每页</option>
 </select>
 `
    oNavigation.insertAdjacentHTML('beforebegin', pageTotal)
}
renderTotal()
render()
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


const searchInput = document.getElementById('search-input');
const phoneInput = document.getElementById("phone-search-input");
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim().toLowerCase();
    const keyword = phoneInput.value.trim().toLowerCase();
    const tableRows = document.querySelectorAll('.table tbody tr');

    for (const row of tableRows) {
        const name = row.querySelector('td:first-child').textContent.trim().toLowerCase();
        const parentPhone = row.querySelector('td:nth-child(3)').textContent.trim().toLowerCase();
        let isNameMatched = false;
        let isPhoneMatched = false;

        if (query === '' || name.includes(query)) {
            isNameMatched = true;
        }

        if (keyword === '' || parentPhone.includes(keyword)) {
            isPhoneMatched = true;
        }

        if (isNameMatched && isPhoneMatched) {
            row.classList.remove('hidden');
        } else {
            row.classList.add('hidden');
        }
    }
});



const stateDropdown = document.querySelector('.state.dropdown');

// 监听下拉菜单点击事件
stateDropdown.addEventListener('click', function (e) {
    const target = e.target;
    if (target.tagName === 'A') { // 如果是下拉菜单选项
        const status = target.textContent.trim(); // 获取选项文本内容

        const rows = document.querySelectorAll('.table tbody tr'); // 获取表格行数据

        rows.forEach(function (row) { // 遍历行数据
            const renewalStatus = row.querySelector('td:nth-child(8)').textContent.trim(); // 获取续费状态列的文本内容

            if (status === '全部续费状态' || status === renewalStatus) { // 如果选项是“全部状态”或者与续费状态列的内容一致
                row.style.display = ''; // 显示该行数据
            } else {
                row.style.display = 'none'; // 隐藏该行数据
            }

            // 如果选项是“全部”，则显示所有行
            if (status === '全部续费状态') {
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
            const auditStatus = row.querySelector('td:nth-child(9)').textContent.trim(); // 获取续费状态列的文本内容

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


let editAudit = document.querySelector('#audit-status');
let submitBtn = document.querySelector('#submitBtn')
submitBtn.addEventListener('click', function () {
    let json = {
        auditStatus: editAudit.checked ? 'option1' : 'option2'
    }
    for (let i = 0; i < studentArr.length; i++) {
        if (studentArr[i].id == editId) {
            studentArr[i].auditStatus = json.auditStatus;
        }
    }
    render(studentArr);
})
function col() {
    let post = document.querySelectorAll('.post')
    for (let i = 0; i < post.length; i++) {
        if (post[i].innerText == '待审核') {
            post[i].classList = 'orange'
        }
        if (post[i].innerText == '审核通过') {
            post[i].classList = 'blu'
        }
        if (post[i].innerText == '审核不通过') {
            post[i].classList = 'red'
        }

    }
}








