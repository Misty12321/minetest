let studentArr = [
    { studentId: 85641, name: '张小刚', sex: '男', birthday: '2005 - 09 - 08', tel: 13112345678, signUpTime: '2023 - 05 - 06', classHour: '05 / 100', TotalAmount: '3000.00', numLeave: 0, Validity: '2022 - 08 - 31', Consultant: 'JACA', id: 1 },
    { studentId: 85941, name: '张名', sex: '女', birthday: '2006 - 09 - 03', tel: 13105065678, signUpTime: '2023 - 05 - 04', classHour: '09 / 100', TotalAmount: '3000.00', numLeave: 0, Validity: '2022 - 08 - 31', Consultant: 'JACA', id: 2 },
    { studentId: 85341, name: '张刚', sex: '男', birthday: '2005 - 09 - 02', tel: 17302345678, signUpTime: '2023 - 05 - 04', classHour: '11 / 100', TotalAmount: '3000.00', numLeave: 2, Validity: '2022 - 08 - 31', Consultant: 'JACA', id: 3 },
    { studentId: 78541, name: '张小舫', sex: '女', birthday: '2004 - 09 - 02', tel: 15102081358, signUpTime: '2023 - 05 - 03', classHour: '11 / 100', TotalAmount: '3000.00', numLeave: 3, Validity: '2022 - 08 - 31', Consultant: 'JACA', id: 4 },
    { studentId: 25641, name: '张兰', sex: '女', birthday: '2003 - 08 - 25', tel: 13708011049, signUpTime: '2023 - 05 - 02', classHour: '15 / 100', TotalAmount: '3000.00', numLeave: 2, Validity: '2022 - 08 - 31', Consultant: 'JACA', id: 5 },
    { studentId: 85114, name: '李刚', sex: '男', birthday: '2009 - 08 - 25', tel: 13305060804, signUpTime: '2023 - 05 - 02', classHour: '26 / 100', TotalAmount: '3000.00', numLeave: 1, Validity: '2022 - 08 - 31', Consultant: 'JACA', id: 6 },
    { studentId: 85641, name: '李春兰', sex: '女', birthday: '2008 - 08 - 24', tel: 17716589142, signUpTime: '2023 - 05 - 01', classHour: '26 / 100', TotalAmount: '3000.00', numLeave: 5, Validity: '2022 - 08 - 31', Consultant: 'JACA', id: 7 },
]

let id = 7;
let count = 5;//每页的个数
let iNow = 1;//当前页
let delId = 0;
let editId = 0;
let oTbody = document.querySelector('tbody');
let oPages = document.querySelector('.pages');//span
let oPagination = document.querySelector('.pagination');//ul页码
let oPagesItem = document.querySelector('.pagesItem');//select
let oNavigation = document.querySelector('.navigation');//nav页码
let searchBtn = document.querySelector('.search-btn');//btn搜索
let searchCon1 = document.querySelector('.search-con1');//输入查询框
let searchCon2 = document.querySelector('.search-con2');//输入查询框
let searchCon3 = document.querySelector('.search-con3');//输入日期查询框
let delBtn = document.querySelector('.del-btn');//流失按钮
let addBtn = document.querySelector('.add-btn');//添加按钮
let addName = document.querySelector('.add-name');//新增学员
let addTel = document.querySelector('.add-tel');//新增学员
let editBtn = document.querySelector('.edit-btn');
let editClasshour = document.querySelector('.edit-classhour');
let editAmount = document.querySelector('.edit-amount');

// 日历
function setRangeText(start, end) {
    $('input[name="daterange"]').val(start.format('YYYY年MM月DD日') + ' - ' + end.format('YYYY年MM月DD日')).trigger('change');
}
$(function () {
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
                '一月', '二月', '三月', '四月', '五月', '六月',
                '七月', '八月', '九月', '十月', '十一月', '十二月'
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
        alwaysShowCalendars: true,
        startDate: "2023/05/01",
        endDate: "2023/05/06"
    }, function (start, end, label) {
        setRangeText(start, end);
        console.log('开始日期: ' + start.format('YYYY年MM月DD日') + '; 结束日期: ' + end.format('YYYY年MM月DD日') + '; 预定义范围: ' + label);
    });

    // 直接将单击事件监听器函数的内容移动到事件绑定处
    $('#today').on('click', function () {
        var today = moment();
        setRangeText(today, today);
        $('input[name="daterange"]').data('daterangepicker').setStartDate(today).setEndDate(today);
    });

    $('#yesterday').on('click', function () {
        var yesterday = moment().subtract(1, 'days');
        setRangeText(yesterday, yesterday);
        $('input[name="daterange"]').data('daterangepicker').setStartDate(yesterday).setEndDate(yesterday);
    });

    $('#last-7-days').on('click', function () {
        var last7Days = moment().subtract(6, 'days');
        setRangeText(last7Days, moment());
        $('input[name="daterange"]').data('daterangepicker').setStartDate(last7Days).setEndDate(moment());
    });

    $('#last-30-days').on('click', function () {
        var last30Days = moment().subtract(29, 'days');
        setRangeText(last30Days, moment());
        $('input[name="daterange"]').data('daterangepicker').setStartDate(last30Days).setEndDate(moment());
    });

    $('#this-month').on('click', function () {
        var startOfMonth = moment().startOf('month');
        setRangeText(startOfMonth, moment().endOf('month'));
        $('input[name="daterange"]').data('daterangepicker').setStartDate(startOfMonth).setEndDate(moment().endOf('month'));
    });

    $('#last-month').on('click', function () {
        var lastMonthStart = moment().subtract(1, 'month').startOf('month');
        setRangeText(lastMonthStart, moment().subtract(1, 'month').endOf('month'));
        $('input[name="daterange"]').data('daterangepicker').setStartDate(lastMonthStart).setEndDate(moment().subtract(1, 'month').endOf('month'));
    });

    // 将设置日期范围的回调函数提取出来
    $('input[name="daterange"]').on('apply.daterangepicker', function (ev, picker) {
        setRangeText(picker.startDate, picker.endDate);
    });

    $('input[name="daterange"]').on('cancel.daterangepicker', function () {
        setRangeText(moment(), moment());
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
        <td>${renderData[i].studentId}</td>
        <td class="nameColor">${renderData[i].name}</td>
        <td>${renderData[i].sex}</td>
        <td>${renderData[i].birthday}</td>
        <td>${renderData[i].tel}</td>
        <td>${renderData[i].signUpTime}</td>
        <td>${renderData[i].classHour}</td>
        <td>${renderData[i].TotalAmount}</td>
        <td>${renderData[i].numLeave}<span class="glyphicon glyphicon-pencil background"></span></td>
        <td>${renderData[i].Validity}<span class="glyphicon glyphicon-pencil background"></span></td>
        <td>${renderData[i].Consultant}</td>
        <td data-id="${renderData[i].id}">
            <span class="glyphicon glyphicon-pencil background"></span>
            <a href="#" >详情</a>&nbsp;
            <a class="editAmount del" href="#" data-toggle="modal" data-target="#drainModal">流失</a>
            <a class="renewalFee edit" href="#" data-toggle="modal" data-target="#renewalFeeModal">续费</a>
            <a class="newClass" href="#" data-toggle="modal" data-target="#newClassModal">报课</a>
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
render(studentArr);
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

//流失删除加事件
oTbody.addEventListener('click', function (e) {
    console.log(editAmount.value);
    if (e.target.className.includes('del')) {
        delId = e.target.parentNode.dataset.id;//获取到要删除行的id，跳转到真正删除按钮的函数去
    } else if (e.target.className.includes('edit')) {
        editClasshour.value = e.target.parentNode.parentNode.children[6].innerText;
        editAmount.value = e.target.parentNode.parentNode.children[7].innerText;
        editId = e.target.parentNode.dataset.id;
    }
})
//真正删除
delBtn.addEventListener('click', function () {
    for (let i = 0; i < studentArr.length; i++) {
        if (studentArr[i].id == delId) {
            studentArr.splice(i, 1)
            let renderData = studentArr.slice((iNow - 1) * count, iNow * count);//当前页的数组
            if (renderData.length == 0 && iNow > 1) {//当前页的数组与页码数
                iNow--;
            }
            // searchCon1.value = '';
            // searchCon2.value = '';
            render(studentArr);
            return;
        }
    }
})
//搜索
searchBtn.addEventListener('click', function () {
    let filterArr = [];
    let str1 = searchCon1.value;
    let str2 = searchCon2.value;
    for (let i = 0; i < studentArr.length; i++) {
        if (str1 == studentArr[i].name && str2 == studentArr[i].tel) {
            filterArr.push(studentArr[i]);
        }else{
            if (str1 == studentArr[i].name || str2 == studentArr[i].tel){
                filterArr.push(studentArr[i]);
            }
        }
        if (str1 == '' && str2 == '' && searchCon3.value == '') {
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
    render(studentArr)
})
searchCon2.addEventListener('change', function () {
    render(studentArr)
})
// 添加
addBtn.addEventListener('click', function () {
    studentArr.push({
        id: ++id,
        studentId: '',
        name: addName.value,
        sex: document.querySelector('.add-sex:checked').value,
        birthday: document.querySelector('.add-date').value,
        tel: addTel.value,
        signUpTime: '',
        classHour: '',
        TotalAmount: '',
        numLeave: '',
        Validity: '',
        Consultant: '',
    })
    render(studentArr)
})
//保存编辑
editBtn.addEventListener('click', function () {

    let json = {
        id: editId,
        classHour: editClasshour.value,
        TotalAmount: editAmount.value,
    }
    for (let i = 0; i < studentArr.length; i++) {
        if (studentArr[i].id == editId) {
            // studentArr.splice(i, 1, json)
            studentArr[i].classHour = json.classHour;
            studentArr[i].TotalAmount = json.TotalAmount;
        }
    }
    render(studentArr);
})