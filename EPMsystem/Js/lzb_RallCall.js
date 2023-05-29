let rollArr = [
    {
        classname: '金牌启蒙1班',
        courseName: '幼儿舞蹈启蒙（第2节）',
        classTeacher: 'Tina',
        classDate: '2023-04-13',
        classTime: '17:30-18:30',
        classRoom: '教室B',
        classSize: '10/16',
        Attendance: '5/1/4',
        signIn: '签到',
        RollCall: '点名',
        inDetail: '详情',

        id: 1
    },
    {
        classname: '幼儿舞启蒙1班',
        courseName: '幼儿舞蹈启蒙（第44节）',
        classTeacher: 'Jenny',
        classDate: '2023-04-16',
        classTime: '19:00-20:30',
        classRoom: '教室B',
        classSize: '16/10',
        Attendance: '-',
        signIn: '签到',
        RollCall: '点名',
        inDetail: '详情',

        id: 2
    },
    {
        classname: '中国舞4级C班',
        courseName: '中国舞中级班(第23节)',
        classTeacher: 'Kiki',
        classDate: '2023-04-19',
        classTime: '17:00-20:00',
        classRoom: '教室B',
        classSize: '100/50',
        Attendance: '50/20/30',
        signIn: '签到',
        RollCall: '点名',
        inDetail: '详情',

        id: 3
    },
    {
        classname: '金牌启蒙1班',
        courseName: '幼儿舞蹈启蒙 (第2节)',
        classTeacher: 'Tina',
        classDate: '2023-04-20',
        classTime: '18:30-20:30',
        classRoom: '教室B',
        classSize: '16/10',
        Attendance: '10/0/0',
        signIn: '签到',
        RollCall: '点名',
        inDetail: '详情',

        id: 4
    },
    {
        classname: '幼儿舞启蒙1班',
        courseName: '幼儿舞蹈启蒙 (第44节)',
        classTeacher: 'Jenny',
        classDate: '2023-04-22',
        classTime: '19:30-20:30',
        classRoom: '教室B',
        classSize: '16/10',
        Attendance: '-',
        signIn: '签到',
        RollCall: '点名',
        inDetail: '详情',

        id: 5
    },
    {
        classname: '中国舞4级C班',
        courseName: '中国舞中级班 (第23节)',
        classTeacher: 'Kiki',
        classDate: '2023-04-18',
        classTime: '19:20-20:20',
        classRoom: '教室B',
        classSize: '16/10',
        Attendance: '-',
        signIn: '签到',
        RollCall: '点名',
        inDetail: '详情',

        id: 6
    },
    {
        classname: '中国舞4级A班',
        courseName: '中国舞中级班(第10节)',
        classTeacher: 'Kiki',
        classDate: '2023-04-18',
        classTime: '19:00-20:00',
        classRoom: '教室B',
        classSize: '16/15',
        Attendance: '15/0/1',
        signIn: '签到',
        RollCall: '点名',
        inDetail: '详情',
        id: 7
    },

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
let addClassname = document.querySelector('.add-classname');
let addCourseName = document.querySelector('.add-courseName');
let addClassTeacher = document.querySelector('.add-classTeacher');
let addClassDate = document.querySelector('.add-classDate');
let addClassTime = document.querySelector('.add-classTime');
let addClassRoom = document.querySelector('.add-classRoom');

//内容的渲染
//创建内容
function render(arr) {
    let str = '';
    let renderData = arr.slice((iNow - 1) * count, iNow * count);//页码内容渲染
    for (i = 0; i < renderData.length; i++) {
        str += `
        <tr>
        <td>${renderData[i].classname}</td>
        <td>${renderData[i].courseName}</td>
        <td>${renderData[i].classTeacher}</td>
        <td>${renderData[i].classDate}</td>
        <td>${renderData[i].classTime}</td>
        <td>${renderData[i].classRoom}</td>
        <td>${renderData[i].classSize}</td>
        <td>${renderData[i].Attendance}</td>
        <td data-id="${renderData[i].id}">
            <a class="" href="#" data-toggle="modal" data-target="#signIn">${renderData[i].signIn}</a>
            <a class="rollCall" href="#" data-toggle="modal" data-target="#RollCall">${renderData[i].RollCall}</a>
            <a class="" href="#" data-toggle="modal" data-target="#delModal">${renderData[i].inDetail}</a>
            <a class="" href="#" data-toggle="modal" 
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
render(rollArr);
//分页点击功能
function lop(arr) {
    oPagination.addEventListener('click', function (e) {
        if (e.target.className === 'left') {//左

            if (iNow > 1) {
                iNow--;
            }
        } else if (e.target.className === 'right') {//右
            if (iNow < Math.ceil(arr.length / 5)) {
                iNow++;
            }
        } else {//数字键
            iNow = e.target.innerText.trim();
        }
        render(arr);
    })
}
lop(rollArr)

//搜索
searchBtn.addEventListener('click', function () {
    // oTbody.innerHTML = '';
    let filterArr = [];
    let str1 = searchCon1.value;
    let str2 = searchCon2.value;


    for (let i = 0; i < rollArr.length; i++) {
        if (str1 == rollArr[i].classname && str2 == rollArr[i].classDate) {
            filterArr.push(rollArr[i])
        } else {
            if (str1 == rollArr[i].classname || str2 == rollArr[i].classDate) {
                filterArr.push(rollArr[i])
            }
        }
    }

    oPages.innerHTML = `
 共<a>${(Math.ceil(filterArr.length / count))}</a>页/<a>${filterArr.length}</a>条数据
 `
    render(filterArr);
    lop(filterArr);
})
//搜索框变化时
//搜索框变化时
searchCon1.addEventListener('change', function () {
    render(rollArr);
    lop(rollArr);
})
searchCon2.addEventListener('change', function () {
    render(rollArr);
    lop(rollArr);
})

oTbody.addEventListener('click',function(e){
    if (e.target.className.includes('rollCall')){
        addClassname.innerText = e.target.parentNode.parentNode.children[0].innerText;
        addCourseName.innerText =e.target.parentNode.parentNode.children[1].innerText;
        addClassTeacher.innerText = e.target.parentNode.parentNode.children[2].innerText;
        addClassDate.innerText =e.target.parentNode.parentNode.children[3].innerText;
        addClassTime.innerText =e.target.parentNode.parentNode.children[4].innerText;
        addClassRoom.innerText =e.target.parentNode.parentNode.children[5].innerText;
    }
})