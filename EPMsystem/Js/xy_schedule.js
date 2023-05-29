let scheduleArr = [
    { class: '中国舞2级A班', date: '2022 - 04 - 10', week: '周一', time: '15:40-17:00', teachername: 'Ellie', classroom: 'B', id: 1 },
    { class: '金牌启蒙2班', date: '2022 - 04 - 03', week: '周一', time: '09:00-11:00', teachername: 'Amy', classroom: 'D', id: 2 },
    { class: '幼儿舞启蒙1班', date: '2022 - 04 - 03', week: '周一', time: '18:30-20:30', teachername: 'Bile', classroom: 'E', id: 3 },
    { class: '中国舞2级A班', date: '2022 - 04 - 03', week: '周一', time: '15:40-17:00', teachername: 'Ellie', classroom: 'B', id: 4 },
    { class: '中国舞1级A班', date: '2022 - 04 - 03', week: '周一', time: '18:20-20:20', teachername: 'Tony', classroom: 'C', id: 5 },
    { class: '中国舞2级A班', date: '2022 - 04 - 03', week: '周一', time: '15:40-17:00', teachername: 'Ellie', classroom: 'B', id: 6 },
    { class: '中国舞1级B班', date: '2022 - 04 - 03', week: '周一', time: '18:20-20:20', teachername: 'Layila', classroom: 'A', id: 7 },
]

let id = 7;
let pg = document.querySelector('.pg')
let oTbody = document.querySelector('tbody');

//分页功能
let oPagination = document.querySelector('.pagination');
//删除按钮
let delBtn = document.querySelector('.del-btn');
let delId = 0;

//编辑按钮
let editId = 0;
let editBtn = document.querySelector('.edit-btn');
let editWeek = document.querySelector('.edit-week');
let editClass = document.querySelector('.edit-class')
let editDate = document.querySelector('.edit-date');
let editTime = document.querySelector('.edit-time');
let editTeachername = document.querySelector('.edit-teachername');
let editClassroom = document.querySelector('.edit-classroom');

//查询获取的节点
let searchBtn = document.querySelector('.search-btn');
// let searchCon = document.querySelector('.search-con');
let classNameCon = document.querySelector('.classNameSelected');
let roomNameCon = document.querySelector('.roomNameSelected');
let teacherNameCon = document.querySelector('.teacherNameSelected');




let count = 5;//每页的个数
let iNow = 1;//当前页

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

function render(arr) {
    //创建内容
    let str = ''
    let renderData = arr.slice((iNow - 1) * count, iNow * count);
    for (let i = 0; i < renderData.length; i++) {
        str += `<tr>
        <td>${renderData[i].class}</td>
        <td>${renderData[i].date}</td>
        <td>${renderData[i].week}</td>
        <td>${renderData[i].time}</td>
        <td>${renderData[i].teachername}</td>
        <td>${renderData[i].classroom}</td>
        <td data-id="${renderData[i].id}">
           <span data-toggle="modal" data-target="#editModal" class="iconfont icon-bianji edit" style="font-family: 微软雅黑;font-size: 13px;color:rgba(0, 121, 254, 1);cursor: pointer;">编辑</span>
           <span data-toggle="modal" data-target="#delModal" class="iconfont icon-shanchu  del" style="font-family: 微软雅黑;font-size: 13px;color: rgb(255, 0, 0);margin-left:5px;cursor: pointer;">删除</span>
        </td>
    </tr>`
    }
    oTbody.innerHTML = str;
    //创建页码
    let pagesLeft = `<li >
    <a class="left" href="#" aria-label="Previous">
       <span  class="left" aria-hidden="true">&laquo;</span>
    </a>
</li>`

    let pagesRight = `<li>
    <a  class="right" href="#" aria-label="Next">
        <span  class="right" aria-hidden="true">&raquo;</span>
    </a>
</li>`
    let pagesStr = ''
    for (let i = 1; i <= Math.ceil(arr.length / count); i++) {
        if (iNow == i) {
            pagesStr += `<li class="active"><a href="#">${i}</a></li>`
        } else {
            pagesStr += `<li><a href="#">${i}</a></li>`
        }

    }
    oPagination.innerHTML = pagesLeft + pagesStr + pagesRight;
}
//页面刚加载就渲染数据
render(scheduleArr)
//分页的功能
oPagination.addEventListener('click', function (e) {
    console.log(e.target)
    if (e.target.className === 'left') {//左
        console.log(1)
        if (iNow > 1) {
            iNow--;
        }
    } else if (e.target.className === 'right') {//右
        if (iNow < Math.ceil(scheduleArr.length / 5)) {
            iNow++;
        }
    } else {
        iNow = e.target.innerText.trim();
    }
    render(scheduleArr);

})

//给所有的删除加事件
oTbody.addEventListener('click', function (e) {
    //删除  如果有很多标签可以使用incldes
    if (e.target.className.includes('del')) {
        delId = e.target.parentNode.dataset.id
        // console.log(delId)
    } else if (e.target.className.includes('edit')) {
        //显示编辑框，赋值
        // console.log(e.target)
        editClass.value = e.target.parentNode.parentNode.children[0].innerText;
        editDate.value = e.target.parentNode.parentNode.children[1].innerText;
        editWeek.value = e.target.parentNode.parentNode.children[2].innerText;
        let timeStr = e.target.parentNode.parentNode.children[3].innerText;
        // document.querySelector('.edit-time option[value="' + timestr + '"]').selected = true;
        for (let i = 0; i < editTime.children.length; i++) {
            if (editTime.children[i].value == timeStr) {
                editTime.children[i].selected = true
            }
        }
        let teachernameStr = e.target.parentNode.parentNode.children[4].innerText;
        // console.log(teachernameStr)
        for (let i = 0; i < editTeachername.children.length; i++) {
            if (editTeachername.children[i].value == teachernameStr) {
                editTeachername.children[i].selected = true
            }
        }
        let classroomStr = e.target.parentNode.parentNode.children[5].innerText;
        for (let i = 0; i < editClassroom.children.length; i++) {
            if (editClassroom.children[i].value == classroomStr) {
                editClassroom.children[i].selected = true
            }
        }
        editId = e.target.parentNode.dataset.id;

    }

})
delBtn.addEventListener('click', function () {
    for (let i = 0; i < scheduleArr.length; i++) {
        if (scheduleArr[i].id == delId) {
            scheduleArr.splice(i, 1);
            let renderData = scheduleArr.slice((iNow - 1) * count, iNow * count);
            if (renderData.length == 0 && iNow > 1) {
                iNow--;
            }
            render(scheduleArr);
            return;
        }
    }
})
editBtn.addEventListener('click', function () {
    let json = {
        id: editId,
        class: editClass.value,
        week: editWeek.value,
        date: editDate.value,
        time: editTime.value,
        classroom: editClassroom.value,
        teachername: editTeachername.value,
    }
    for (let i = 0; i < scheduleArr.length; i++) {
        if (scheduleArr[i].id == editId) {
            scheduleArr.splice(i, 1, json)
        }
    }
    render(scheduleArr);
})

//查询
searchBtn.addEventListener('click', function () {
    // let strInpV = searchCon.value;
    let classNameStr = String(classNameCon.value);
    let roomNameStr = String(roomNameCon.value);
    let teacherNameStr = String(teacherNameCon.value);
    let newArr = scheduleArr.filter(el => {
        let matched = true;
        // if (searchCon.value.trim() !== '') {
        //     matched &= (el.teacher === strInpV || el.courseName === strInpV);
        // }
        if (classNameCon.value !== '全部班级') {
            matched &= (el.class === classNameStr);
        }
        if (roomNameCon.value !== '全部教室') {
            matched &= (el.classroom === roomNameStr);
        }
        if (teacherNameCon.value !== '全部老师') {
            matched &= (el.teachername === teacherNameStr);
        }
        return matched;
    });

    if (newArr.length === 0) {
        // 没有搜到数据，提示查无此数据
        alert('查无此数据');
    } else {
        render(newArr);
    }
})





