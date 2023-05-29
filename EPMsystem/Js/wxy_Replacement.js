let reArr = [
    { id: 1, name: '王一', pClass: '一阶段', classname: '前端', teacher: 'Tina', schoolTime: '2020-06-26 （周日）19:00-20:30', apTime: '2020-05-01 10:20', reason: '', state: '待审核', staff: '王老师', operate: '审核' },
    { id: 2, name: '王二', pClass: '二阶段', classname: '后端', teacher: 'jerry', schoolTime: '2020-06-26 （周日）19:00-20:30', apTime: '2020-05-01 10:20', reason: '', state: '待审核', staff: '王老师', operate: '审核' },
    { id: 3, name: '王三', pClass: '三阶段', classname: 'JAVA', teacher: 'tom', schoolTime: '2020-06-26 （周日）19:00-20:30', apTime: '2020-05-01 10:20', reason: '', state: '待审核', staff: '王老师', operate: '审核' },
    { id: 4, name: '王四', pClass: '四阶段', classname: 'JQ', teacher: 'tony', schoolTime: '2020-06-26 （周日）19:00-20:30', apTime: '2020-05-01 10:20', reason: '', state: '待审核', staff: '王老师', operate: '审核' },
    { id: 5, name: '王五', pClass: '五阶段', classname: 'BOOTSTR', teacher: 'tony', schoolTime: '2020-06-26 （周日）19:00-20:30', apTime: '2020-05-01 10:20', reason: '', state: '审核未通过', staff: '王老师', operate: '审核' },
    { id: 6, name: '王六', pClass: '六阶段', classname: 'WRAP', teacher: 'jerry', schoolTime: '2020-06-26 （周日）19:00-20:30', apTime: '2020-05-01 10:20', reason: '', state: '待审核', staff: '王老师', operate: '审核' },
    { id: 7, name: '王七', pClass: '七阶段', classname: 'VUE', teacher: 'jerry', schoolTime: '2020-06-26 （周日）19:00-20:30', apTime: '2020-05-01 10:20', reason: '', state: '待审核', staff: '王老师', operate: '审核' },
    { id: 8, name: '王發', pClass: '八阶段', classname: 'JS', teacher: 'Tina', schoolTime: '2020-06-26 （周日）19:00-20:30', apTime: '2020-05-01 10:20', reason: '', state: '审核通过', staff: '王老师', operate: '审核' },
    { id: 9, name: '王九', pClass: '九阶段', classname: 'HTML', teacher: 'Tina', schoolTime: '2020-06-26 （周日）19:00-20:30', apTime: '2020-05-01 10:20', reason: '', state: '待审核', staff: '王老师', operate: '审核' },
    { id: 10, name: '王十', pClass: '十阶段', classname: 'CSS', teacher: 'tom', schoolTime: '2020-06-26 （周日）19:00-20:30', apTime: '2020-05-01 10:20', reason: '', state: '待审核', staff: '王老师', operate: '审核' },
    { id: 11, name: '王十一', pClass: '十一阶段', classname: 'nodeJS', teacher: 'tom', schoolTime: '2020-06-26 （周日）19:00-20:30', apTime: '2020-05-01 10:20', reason: '', state: '审核通过', staff: '王老师', operate: '审核' },
]
let tBody = document.querySelector('.cont')//body节点
let uls = document.querySelector('.uls')//分页节点
let inform = document.querySelector('.inform')//分页栏数据统计
let selt = document.querySelector('.selt')//分页下拉
let searchName = document.querySelector('.searchName')
let searchBtn = document.querySelector('.searchBtn')
let counts = 5//每页个数
let page = 1//首页
function render(arr) {
    let str = ''
    let sliarr = arr.slice((page - 1) * counts, page * counts)
    for (let i = 0; i < sliarr.length; i++) {
        str += `<tr>
    <td>${sliarr[i].name}</td>
    <td>${sliarr[i].pClass}</td>
    <td>${sliarr[i].classname}</td>
    <td>${sliarr[i].teacher}</td>
    <td>${sliarr[i].schoolTime}</td>
    <td>${sliarr[i].apTime}</td>
    <td>${sliarr[i].reason}</td>
    <td class="post">${sliarr[i].state}</td>
    <td>${sliarr[i].staff}</td>
    <td data-id="${sliarr[i].id}"><span class="setting iconfont" data-toggle="modal" data-target="#myModal">&#xe68f;${sliarr[i].operate}</span></td>
</tr>`
    }
    tBody.innerHTML = str
    
    //上一页
    let pageLeft = `<li>
<a href="#" aria-label="Previous" class="left">
  <span aria-hidden="true"  class="left">&laquo;</span>
</a>
</li>`
    //下一页
    let pageRight = ` <li>
<a href="#" aria-label="Next" class="right">
  <span aria-hidden="true"  class="right">&raquo;</span>
</a>
</li>`
    //数字页
    let pageCen = ''
    for (let i = 1; i <= Math.ceil(arr.length / counts); i++) {
        if (page == i) {
            pageCen += ` <li class="active"><a href="#">${i}</a></li>`
        }
        else {
            pageCen += ` <li><a href="#">${i}</a></li>`
        }
    }
    uls.innerHTML = pageLeft + pageCen + pageRight
    //审核颜色
    let post = document.querySelectorAll('.post')
    for (let i = 0; i < post.length; i++) {
        if (post[i].innerText == '审核通过') {
            post[i].classList = 'tongguo'
        }
        if (post[i].innerText == '待审核') {
            post[i].classList = 'dai'
        }
        if (post[i].innerText == '审核未通过') {
            post[i].classList = 'fals'
        }
    }

}
render(reArr)

//各页按钮点击事件
uls.addEventListener('click', function (e) {
    if (e.target.className == 'left') {
        if (page > 1) {
            page--
        }
    } else if (e.target.className == 'right') {
        if (page < Math.ceil(reArr.length / counts)) {
            page++
        }
    } else {
        page = e.target.innerText
    }
    render(reArr)
})
let informs=document.querySelector('.inform')
//下部统计
informs.innerText = `共${Math.ceil(reArr.length / counts)}页/${reArr.length}条数据`
//下部导航
// let opstr=''
// for(let i=1;i<=Math.ceil(reArr.length/counts);i++){
// opstr+=` <option>${i}</option>`
// }
// selt.innerHTML=opstr


//下部导航
let lis = document.querySelectorAll('.ull li')
let selts = document.querySelector('.selt')
let ull = document.querySelector('.ull')

document.addEventListener('click', function (e) {
    if (e.target.nodeName == 'LI') {
        ull.style.display = 'none'
        selts.innerText = e.target.innerText + '∨'
    }
})
selts.addEventListener('click', function () {
    ull.style.display = 'block'
})
for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener('mouseover', function () {
        for (let j = 0; j < lis.length; j++) {
            lis[j].className = ''
        }
        lis[i].className = 'cols'
        lis[i].style.color = 'white'
    })
}
//上方下拉
let ztBtn = document.querySelector('.ztBtn')
let searchOps = document.querySelector('#searchOps')
ztBtn.addEventListener('click', function () {
    searchOps.addEventListener('click', function (e) {
        if (e.target.nodeName = 'A') {
            ztBtn.innerText = e.target.innerText
        }
    })
})
//搜索框
searchBtn.addEventListener('click', function () {
    let val = searchName.value;
    tBody.innerHTML = ''

    let newarr = reArr.filter(el => {
        if(ztBtn.innerText.trim() === '全部状态'&&searchName.value == ''){
            return el.name
        }
        if (searchName.value != '' && ztBtn.innerText.trim() === '全部状态') {
            // informs.innerText = ''
            return el.name == val
        }
        if(searchName.value == ''&&ztBtn.innerText.trim() !== '全部状态'){
            return el.state == ztBtn.innerText.trim()
        }
        if(searchName.value != '' &&ztBtn.innerText.trim() !== '全部状态'){
            return el.name == val&&el.state == ztBtn.innerText.trim()
        }
    })
    informs.innerText = `共${Math.ceil(newarr.length / counts)}页/${newarr.length}条数据`
    render(newarr)
})

//获取id
let saveId = 0
let saveBtn = document.querySelector('.save')
tBody.addEventListener('click', function (e) {
    if (e.target.className.includes('setting')) {
        saveId = e.target.parentNode.dataset.id
    }
})

//保存按钮
saveBtn.addEventListener('click', function () {
    for (let i = 0; i < reArr.length; i++) {
        if (reArr[i].id == saveId) {
            reArr[i].state = document.querySelector('.pass:checked').value
        }
    }
    render(reArr)
})