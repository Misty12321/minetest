//渲染功能
let HcourseArr = [
  {
    id:1,
    courseName: "HTML入门",
    courseSrc: "../image/test.png",
    courseState: "已上架",
    courseFication: "前端课程",
    courseUpdateTime: "9999",
  },
  {
    id:2,
    courseName: "CSS入门",
    courseSrc: "../image/test.png",
    courseState: "未上架",
    courseFication: "前端课程",
    courseUpdateTime: "9999",
  },
  {
    id:3,
    courseName: "C#入门",
    courseSrc: "../image/test.png",
    courseState: "未上架",
    courseFication: "后端课程",
    courseUpdateTime: "9999",
  },
  {
    id:4,
    courseName: "JAVA入门",
    courseSrc: "../image/test.png",
    courseState: "已上架",
    courseFication: "后端课程",
    courseUpdateTime: "9999",
  },
];
let otableinner = document.querySelector(".tableinner");
let sPage = 1;
let iPage = 3;
let id=4;
let oPagination = document.querySelector(".pagination");
let oSearchInput = document.querySelector(".searchinput");
let odeliamge = document.querySelector(".deliamge");
let oSearchbutton = document.querySelector(".searchbutton");
let oDropDownkcbutton = document.querySelector(".dropdownkcbutton");
let oDropDownkc = document.querySelector(".dropdownkc");
let test = false;
let selectedText;
let oDropDownMenu = document.querySelector(".dropdown-menu");
let oDropDownButton = document.querySelector(".dropdownkcbutton");
let oNewCourseName = document.querySelector(".newcourseName");
let oNewCourseState = document.querySelector(".newcourseState");
let oNewCourseFication = document.querySelector(".newcourseFication");
let oNewSaveButton = document.querySelector('.newsavebutton');
let oDelB=document.querySelector('delb');
let oDelSureBtn=document.querySelector('.delsurebtn');
let ohuanyuanB=document.querySelector('.huanyuanb');
let courseId=0;
let oUndb=document.querySelector('.undb')
let oDelsButton=document.querySelector('.delsbutton');
xuanran(HcourseArr);
SearchInputDel();

//内容页渲染
// 渲染功能
function xuanran(arr) {
  let Reload = arr.slice((sPage - 1) * iPage, sPage * iPage);
  let str = "";
  for (let i = 0; i < Reload.length; i++) {
    str += `<tr data-course-id="${Reload[i].id}">
    <td><div class="checkbox">
    <label>
      <input type="checkbox" value="">
    </label>
  </div></td>
    <td>${Reload[i].courseName}</td>
    <td><img src="${Reload[i].courseSrc}"/></td>
    <td>${Reload[i].courseState}</td>
    <td>${Reload[i].courseFication}</td>
    <td>${Reload[i].courseUpdateTime}</td>
    <td data-id="${Reload[i].id}">
        <button class="huanyuanb" data-toggle="modal" data-target="#huanyuanModal">还原</button>
        <button class="delb" data-toggle="modal" data-target="#delModal">删除</button>
    </td>
 </tr>`;
  }
  otableinner.innerHTML = str;
  renderPagination(arr);
  huanye(arr);
}
// 页码渲染
function renderPagination(arr) {
  let changePageLeft = ` <li>
    <a href="#" aria-label="Previous" class='left'>
        <span aria-hidden="true" class='left'>&laquo;</span>
    </a>
    </li>`;
  let changePageRight = ` <li>
    <a href="#" aria-label="Previous" class='right'>
        <span aria-hidden="true" class='right'>&raquo;</span>
    </a>
    </li>`;
  let changePageStr = "";
  for (let i = 1; i <= Math.ceil(arr.length / iPage); i++) {
    if (sPage == i) {
      changePageStr += `<li class="active"><a href="#">${i}</a></li>`;
    } else {
      changePageStr += `<li><a href="#">${i}</a></li>`;
    }
  }
  oPagination.innerHTML = changePageLeft + changePageStr + changePageRight;
}
//换页
function huanye(arr) {
  oPagination.addEventListener("click", function (e) {
    if (e.target.className === "left") {
      if (sPage > 1) {
        sPage--;
      }
    } else if (e.target.className === "right") {
      if (sPage < Math.ceil(arr.length / iPage)) {
        sPage++;
      }
    } else {
      sPage = e.target.innerText.trim();
    }
    xuanran(arr);
  });
}
//点击下来菜单中的内容使button内容为点击的内容
oDropDownMenu.addEventListener("click", function (e) {
  if (e.target.classList.contains("dropdownkc")) {
    selectedText = e.target.innerText;
    oDropDownButton.innerText = selectedText;
  }
});

//搜索功能

//主体搜索判定
// 搜索功能
oSearchbutton.addEventListener("click", function () {
  let dSearchInput = oSearchInput.value.trim();
  if (dSearchInput === "") {
    xuanran(HcourseArr);
    return;
  }

  let arrFound = HcourseArr.filter((course) => {
    for (let key in course) {
      if (
        (oDropDownkcbutton.innerText.trim() === "课程名称" ||
          selectedText === course.courseName) &&
        typeof course[key] === "string" &&
        course[key].includes(dSearchInput)
      ) {
        return true;
      }
    }
    return false;
  });

  if (arrFound.length === 0) {
    oSearchInput.value = "";
    odeliamge.style.display = "none";
    alert("未找到包含" + dSearchInput + "的数据");
  } else {
    oSearchInput.value = "";
    odeliamge.style.display = "none";
    oDropDownButton.innerText='课程名称';
    xuanran(arrFound);
    
  }
});
//输入框有数据则弹出x //点击x使搜索框内容清空
function SearchInputDel() {
  oSearchInput.addEventListener("input", function () {
    if (oSearchInput.value != "") {
      odeliamge.style.display = "block";
    }
  });
  oSearchInput.addEventListener("focus", function () {
    if (oSearchInput.value != "") {
      odeliamge.style.display = "block";
    }
  });
  oSearchInput.addEventListener("blur", function () {
    if (oSearchInput.value === "") {
      odeliamge.style.display = "none";
    }
  });
  odeliamge.addEventListener("click", function () {
    oSearchInput.value = "";
    odeliamge.style.display = "none";
  });
}
//新增
//点击新增按钮弹出模态框具有编号名称图片课程状态课程分类获取对应的数据内容点击确定pul arr 渲染
oNewSaveButton.addEventListener('click',function(){
  HcourseArr.push({
    courseName: oNewCourseName.value,
    courseId: ++id,
    courseSrc: "../image/test.png",
    courseState: oNewCourseState.value,
    courseFication: oNewCourseFication.value,
    courseUpdateTime: "9999",
  })
  xuanran(HcourseArr);
  return;
})

//点击外部删除按钮 
otableinner.addEventListener('click', function (e) {
  if (e.target.classList.contains("delb")) {
    let row = e.target.closest("tr");
    courseId = row.dataset.courseId;
    console.log(courseId);
  }
});
//执行删除
oDelSureBtn.addEventListener('click',function(){
  for(let i=0;i<HcourseArr.length;i++){
      if(HcourseArr[i].id==courseId){
          HcourseArr.splice(i,1);

          let delData = HcourseArr.slice((sPage - 1) * iPage, sPage * iPage);
          if(delData.length==0 && sPage>1){
              sPage--;
          }
          xuanran(HcourseArr);
          return;
      }
  }
})


//批量删除
oDelsButton.addEventListener('click', function () {
  // 获取表格中的所有复选框
  let checkboxes = otableinner.querySelectorAll('input[type="checkbox"]');
  let selectedCourseIds = [];

  // 遍历每个复选框
  checkboxes.forEach(function (checkbox) {
    // 如果复选框被选中，获取相应的课程ID
    if (checkbox.checked) {
      let row = checkbox.closest("tr");
      let courseId = row.dataset.courseId;
      selectedCourseIds.push(courseId);
    }
  });

  // 从HcourseArr中删除选定的课程
  let filteredHcourseArr = [];
for (let i = 0; i < HcourseArr.length; i++) {
  let course = HcourseArr[i];
  let isCourseIdIncluded = false;
  for (let j = 0; j < selectedCourseIds.length; j++) {
    if (selectedCourseIds[j] === course.id.toString()) {
      isCourseIdIncluded = true;
      break;
    }
  }
  if (!isCourseIdIncluded) {
    filteredHcourseArr.push(course);
  }
}
HcourseArr = filteredHcourseArr;
  // 渲染更新后的表格
  xuanran(HcourseArr);
});
