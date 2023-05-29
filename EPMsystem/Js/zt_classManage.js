let classManageData = [
    { id: 1, className: 'W329', courseName: '前端', attendTime: '9:00-20:30', openingTime: '2023-4-16', teacher: '肖源', person: '40人', classState: '可购买' },
    { id: 2, className: 'W328', courseName: '前端', attendTime: '9:00-20:30', openingTime: '2023-4-16', teacher: '陈泳霏', person: '40人', classState: '可购买' },
    { id: 3, className: 'W327', courseName: 'Java', attendTime: '8:00-17:00', openingTime: '2023-4-16', teacher: '李祝波', person: '40人', classState: '不可购买' },
    { id: 4, className: 'W326', courseName: 'Java', attendTime: '8:00-17:00', openingTime: '2023-4-16', teacher: '王兴跃', person: '40人', classState: '不可购买' },
    { id: 5, className: 'W325', courseName: 'Nodejs', attendTime: '13:00-17:00', openingTime: '2023-4-21', teacher: '陈昕旺', person: '40人', classState: '可购买' },
    { id: 6, className: 'W324', courseName: 'Nodejs', attendTime: '13:00-17:00', openingTime: '2023-4-21', teacher: '赵婷', person: '40人', classState: '可购买' },
    { id: 7, className: 'W323', courseName: 'Nodejs', attendTime: '13:00-17:00', openingTime: '2023-4-21', teacher: '王承江', person: '40人', classState: '可购买' },
    { id: 8, className: 'W322', courseName: 'UI', attendTime: '13:00-20:30', openingTime: '2023-4-21', teacher: '王承江', person: '40人', classState: '可购买' }
];
let oTbody = document.querySelector('tbody');
let oPagination = document.querySelector('.pagination');
//删除获取的节点
let delBtn = document.querySelector('.del-btn ');
//增加获取的节点
let addBtn = document.querySelector('.addClassBtn');
let addClassName = document.querySelector('.add-className');
let addClassPerson = document.querySelector('.add-person');
let addOPeningTime = document.querySelector('.add-openingTime');
let addTeacher = document.querySelector('.add-teacher');
let addCourseName = document.querySelector('.add-courseName');
let addAttendTime = document.querySelector('.add-attendTime');
let addClassState = document.querySelector('.add-classState');

//修改获取的节点
let editBtn = document.querySelector('.editClassBtn');
let editClassName = document.querySelector('.edit-className');
let editClassPerson = document.querySelector('.edit-person');
let editOPeningTime = document.querySelector('.edit-openingTime');
let editTeacher = document.querySelector('.edit-teacher');
let editCourseName = document.querySelector('.edit-courseName');
let editAttendTime = document.querySelector('.edit-attendTime');
let editClassState = document.querySelector('.edit-classState');

//查询获取的节点
let searchBtn = document.querySelector('.search-btn');
let searchCon = document.querySelector('.search-con');
let classNameCon = document.querySelector('.classNameSelected');
let courseNameCon = document.querySelector('.courseNameSelected');
let teacherCon = document.querySelector('.teacherSelected');
let stateCon = document.querySelector('.stateSelected');

//导出
let exportBtn = document.querySelector('.exportBtn');
//导入
let importBtn = document.querySelector('.importBtn');

let delId = 0;
let editId = 0;
let page = 1;
let count = 7;
let id = classManageData.length;

let dataFn;

//渲染
function render(arr) {
    let str = '';
    let renderData = arr.slice((page - 1) * count, page * count);
    for (let i = 0; i < renderData.length; i++) {
        //console.log(renderData[i].classState);

        str += `
            <tr>
                <td>${renderData[i].className}</td>
                <td>${renderData[i].courseName}</td>
                <td>${renderData[i].attendTime}</td>
                <td>${renderData[i].openingTime}</td>
                <td>${renderData[i].teacher}</td>
                <td>${renderData[i].person}</td>
                <td class="text">${renderData[i].classState}</td>
                <td data-id="${renderData[i].id}">
                    <span data-toggle="modal" data-target="#editModal" class="iconfont icon-bianji modify" style="font-family: 微软雅黑;font-size: 13px;color:rgba(0, 121, 254, 1);cursor: pointer;">编辑</span>
                    <span data-toggle="modal" data-target="#delModal" class="iconfont icon-shanchu  del " style="font-family: 微软雅黑;font-size: 13px;color: rgb(255, 0, 0);margin-left:5px;cursor: pointer;">删除</span>
                </td>
            </tr>
        `
    }
    oTbody.innerHTML = str;
    let oText = document.querySelectorAll('.text');
    for (let i = 0; i < oText.length; i++) {
        if (oText[i].innerText == '可购买') {
            oText[i].classList = 'textBlue'
        } else {
            oText[i].classList = 'textRed'
        }
    }
    let pageStr = '';
    let pageLeft = `<li>
            <a href="#" aria-label="Previous" class="left">
                <span aria-hidden="true"  class="left">&laquo;</span>
            </a>
        </li>`
    let pageRight = `<li>
            <a  href="#" aria-label="Next"  class="right">
                <span aria-hidden="true"  class="right">&raquo;</span>
            </a>
         </li>`
    for (let i = 1; i <= Math.ceil(classManageData.length / count); i++) {
        if (page == i) {
            pageStr += `<li class="active"><a href="#">${i}</a></li>`
        } else {
            pageStr += `<li><a href="#">${i}</a></li>`
        }
    }
    oPagination.innerHTML = pageLeft + pageStr + pageRight;

}
render(classManageData);
//补零函数
function showTime(t) {
    let time;
    time = t > 10 ? t : '0' + t;
    return time
}
//格式化日期
function dateFormat(date) {
    let year = date.getFullYear();
    let month = showTime(date.getMonth() + 1);
    let day = showTime(date.getDate());
    let str = '';
    str = str + year + '-' + month + '-' + day;
    return str;
}
//给分页加功能
function fy(arr1){
    oPagination.addEventListener('click', function (e) {
        if (e.target.className == "left") {
            if (page > 1) {
                page--;
            }
        } else if (e.target.className == 'right') {
            if (page < Math.ceil(arr1.length / 5)) {
                page++;
            }
        } else {
            page = e.target.innerText;
        }
        render(arr1);
    });
}
fy(classManageData)


//所以删除和修改加事件
oTbody.addEventListener('click', function (e) {
    if (e.target.className.includes('del')) {
        delId = e.target.parentNode.dataset.id;
    } else if (e.target.className.includes('modify')) {
        editClassName.value = e.target.parentNode.parentNode.children[0].innerText;  //班级赋值
        editClassPerson.value = e.target.parentNode.parentNode.children[5].innerText;  //班级人数赋值

        let teacherStr = e.target.parentNode.parentNode.children[4].innerText;  //老师赋值
        document.querySelector('.edit-teacher option[value=' + teacherStr + ']').selected = true;
        let courseNameStr = e.target.parentNode.parentNode.children[1].innerText;//课程赋值
        document.querySelector('.edit-courseName option[value=' + courseNameStr + ']').selected = true;

        let attendTimeStr = e.target.parentNode.parentNode.children[2].innerText;  //上课时间赋值
        document.querySelector('.edit-attendTime option[value="' + attendTimeStr + '"]').selected = true;

        let openingTimeStr = e.target.parentNode.parentNode.children[3].innerText;
        let date = new Date(openingTimeStr);
        document.getElementById('exampleInputEditOpeningTime').value = dateFormat(date);//开课时间赋值

        let classStateStr = e.target.parentNode.parentNode.children[6].innerText;  //班级状态赋值
        document.querySelector('.edit-classState option[value=' + classStateStr + ']').selected = true;

        editId = e.target.parentNode.dataset.id;
    }
});
//点击删除出现modal框点确定时
delBtn.addEventListener('click', function (e) {
    for (let i = 0; i < classManageData.length; i++) {
        if (classManageData[i].id == delId) {
            classManageData.splice(i, 1);
            let renderData = classManageData.slice((page - 1) * count, page * count);
            if (renderData.length == 0 && page > 1) {
                page--;
            }
            searchCon.value = '';
            render(classManageData);
            return;
        }
    }

});
//点击修改出现modal框点确定时
editBtn.addEventListener('click', function () {
    let json = {
        id: editId,
        className: editClassName.value,
        courseName: editCourseName.value,
        attendTime: editAttendTime.value,
        openingTime: editOPeningTime.value,
        teacher: editTeacher.value,
        person: editClassPerson.value,
        classState: editClassState.value
    }
    for (let i = 0; i < classManageData.length; i++) {
        if (classManageData[i].id == editId) {
            classManageData.splice(i, 1, json);
        }
    }
    render(classManageData);
})

//新增
addBtn.addEventListener('click', function () {
    classManageData.push({
        id: ++id,
        className: addClassName.value,
        courseName: addCourseName.value,
        attendTime: addAttendTime.value,
        openingTime: addOPeningTime.value,
        teacher: addTeacher.value,
        person: addClassPerson.value,
        classState: addClassState.value
    });
    fy(classManageData)
    render(classManageData);
});

//查询
// searchBtn.addEventListener('click', function () {
//     // let filterArr = [];
//     // let str = searchCon.value;
//     // let courseNameStr = courseNameCon.value;
//     // let teacherStr = teacherCon.value;
//     // let stateStr = stateCon.value;
//     // for (let i = 0; i < classManageData.length; i++) {
//     //     let matchCourseName = courseNameStr = '全部课程' || classManageData[i].courseName === courseNameStr;
//     //     let matchTeacher = teacherStr = '全部老师' || classManageData[i].teacher === teacherStr;
//     //     let matchStatus = stateStr = '全部状态' || classManageData[i].classState === stateStr;
//     //     let matchQuery = str === '' || classManageData[i].className.includes(str) || classManageData[i].courseName.includes(str) || classManageData[i].teacher.includes(str)||classManageData[i].classState.includes(str);
//     //     if (matchCourseName && matchTeacher && matchStatus && matchQuery) {
//     //         filterArr.push(classManageData[i]);
//     //     }
//     // }
//     // render(filterArr);

//     // 输入框查询的值
//     let strInpV = searchCon.value;

//     // 定义下拉框需要查询的字段 以及搜索值
//     let searchArr = {
//         'className': classNameCon.value,
//         'courseName': courseNameCon.value,
//         'teacher': teacherCon.value,
//         'classState': stateCon.value
//     };
//     // 定义过滤的数组,避免只查一条
//     let resultArr = [];

//     let filterArr = classManageData.filter((item, i, arr) => {
//         // 输入框查询
//         try {
//             if (strInpV) {
//                 Object.keys(searchArr).forEach((key, j, arr) => {
//                     // 还需解决直接查询班级状态的bug，不可购买包含可购买
//                     if (item[key].includes(strInpV)) {
//                         resultArr.push(item);
//                         return;
//                     }
//                 })
//             } else {
//                 // 下拉框查询
//                 Object.keys(searchArr).forEach((key, j, arr) => {
//                     if (item[key].includes(searchArr[key]) && item['classState'] == searchArr['classState']) {
//                         if (j > 2) {
//                             throw new Error();
//                         }
//                         resultArr.push(item);
//                     }
//                 })
//             }

//             return item;
//         } catch (error) {

//         }
//     });

//     console.log(resultArr);
//     console.log(filterArr);
//     render(resultArr.length > 0 ? resultArr : filterArr);
// })

searchBtn.addEventListener('click', function () {

    let strInpV = searchCon.value;
    let classNameStr = String(classNameCon.value);
    let courseNameStr = String(courseNameCon.value);
    let teacherStr = String(teacherCon.value);
    // let newArr = classManageData.filter(el => {
    //     if (searchCon.value.trim() !== '') {
    //         return el.teacher == strInpV || el.courseName == strInpV;
    //     }
    //     return true;  // 加上这一行
    // });
    // newArr = newArr.filter(el => {
    //     if (classNameCon.value != '全部班级') {
    //         return el.className == classNameStr;
    //     }
    //     return true;  // 加上这一行
    // })
    // newArr = newArr.filter(el => {
    //     if (courseNameCon.value != '全部课程') {
    //         return el.courseName == courseNameStr;
    //     }
    //     return true;  // 加上这一行
    // })
    // newArr = newArr.filter(el => {
    //     if (teacherCon.value != '全部老师') {
    //         return el.teacher == teacherStr;
    //     }
    //     return true;  // 加上这一行
    // })
    // render(newArr);
    let newArr = classManageData.filter(el => {
        let matched = true;
        if (searchCon.value.trim() !== '') {
            matched &= (el.teacher === strInpV || el.courseName === strInpV);
        }
        if (classNameCon.value !== '全部班级') {
            matched &= (el.className === classNameStr);
        }
        if (courseNameCon.value !== '全部课程') {
            matched &= (el.courseName === courseNameStr);
        }
        if (teacherCon.value !== '全部老师') {
            matched &= (el.teacher === teacherStr);
        }
        return matched;
    });
    
    if (newArr.length === 0) {
        // 没有搜到数据，提示查无此数据
        alert('查无此数据');
    } else {
        fy(newArr)
        render(newArr);
    }
});

//导出
exportBtn.addEventListener('click', function () {
    //列标题，逗号隔开，每一个逗号就是隔开一个单元格
    let str = `编号,班级,课程,上课时间,开课日期,老师,班级人数,班级状态\n`;
    for (let i = 0; i <= classManageData.length; i++) {
        for (let item in classManageData[i]) {
            //列标题，逗号隔开，每一个逗号就是隔开一个单元格
            str += `${classManageData[i][item] + '\t'},`;
        }
        str += '\n';
    }
    //encodeURIComponent解决中文乱码
    let uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str);
    let link = document.createElement('a');
    link.href = uri;
    link.download = "json数据表.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

});