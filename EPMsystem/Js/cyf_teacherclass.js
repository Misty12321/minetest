let studentArr = [
    { appliCant: '张小刚', course: '幼儿舞蹈启蒙(第2节)', teacher: 'Tina', time: '2020-06-26(周六) 19:00-20:30', submitTime: '2020-06-26 10:20', auditStatus: '待审核', note: '-', id: 1 },
    { appliCant: '李小红', course: '幼儿舞蹈启蒙(第44节)', teacher: 'Jenny', time: '2020-06-26(周六) 19:00-20:30', submitTime: '2020-06-26 10:20', auditStatus: '审核通过', note: '王老师', id: 2 },
    { appliCant: '王小明', course: '中国舞中级班(第23节)', teacher: 'Kiki', time: '2020-07-15(周三) 19:00-20:30', submitTime: '2020-06-26 10:20', auditStatus: '待审核', note: '管理员', id: 3 },
    { appliCant: '张小刚', course: '幼儿舞蹈启蒙(第2节)', teacher: 'Tina', time: '2020-06-26(周六) 19:00-20:30', submitTime: '2020-06-26 10:20', auditStatus: '待审核', note: '-', id: 4 },
    { appliCant: '李小红', course: '幼儿舞蹈启蒙(第44节)', teacher: 'Jenny', time: '2020-06-26(周六) 19:00-20:30', submitTime: '2020-06-26 10:20', auditStatus: '审核通过', note: '王老师', id: 5 },
    { appliCant: '王小明', course: '中国舞中级班(第23节)', teacher: 'Kiki', time: '2020-07-15(周三) 19:00-20:30', submitTime: '2020-06-26 10:20', auditStatus: '待审核', note: '管理员', id: 6 },
    { appliCant: '张小刚', course: '幼儿舞蹈启蒙(第2节)', teacher: 'Tina', time: '2020-06-26(周六) 19:00-20:30', submitTime: '2020-06-26 10:20', auditStatus: '待审核', note: '-', id: 7 },
    { appliCant: '张小刚', course: '幼儿舞蹈启蒙(第2节)', teacher: 'Tina', time: '2020-06-26(周六) 19:00-20:30', submitTime: '2020-06-26 10:20', auditStatus: '待审核', note: '-', id: 8 },
    { appliCant: '张小刚', course: '幼儿舞蹈启蒙(第2节)', teacher: 'Tina', time: '2020-06-26(周六) 19:00-20:30', submitTime: '2020-06-26 10:20', auditStatus: '待审核', note: '-', id: 9 },
    { appliCant: '张小刚', course: '幼儿舞蹈启蒙(第2节)', teacher: 'Tina', time: '2020-06-26(周六) 19:00-20:30', submitTime: '2020-06-26 10:20', auditStatus: '待审核', note: '-', id: 10 },
    { appliCant: '张小刚', course: '幼儿舞蹈启蒙(第2节)', teacher: 'Tina', time: '2020-06-26(周六) 19:00-20:30', submitTime: '2020-06-26 10:20', auditStatus: '待审核', note: '-', id: 11 },
    { appliCant: '张小刚', course: '幼儿舞蹈启蒙(第2节)', teacher: 'Tina', time: '2020-06-26(周六) 19:00-20:30', submitTime: '2020-06-26 10:20', auditStatus: '待审核', note: '-', id: 12 },
    { appliCant: '张小刚', course: '幼儿舞蹈启蒙(第2节)', teacher: 'Tina', time: '2020-06-26(周六) 19:00-20:30', submitTime: '2020-06-26 10:20', auditStatus: '待审核', note: '-', id: 13 },
    { appliCant: '张小刚', course: '幼儿舞蹈启蒙(第2节)', teacher: 'Tina', time: '2020-06-26(周六) 19:00-20:30', submitTime: '2020-06-26 10:20', auditStatus: '待审核', note: '-', id: 14 },
]

let id = 14;
let count = 5;//每页的个数
let iNow = 1;//当前页
let oTbody = document.querySelector('tbody');
let oPagination = document.querySelector('.pagination')
let pg = document.querySelector('.pg')
let oNavigation = document.querySelector('.navigation')
let delId = 0;
let editId = 0;




function render() {
    console.log('render function called');
    let str = '';
    let renderDate = studentArr.slice((iNow - 1) * count, iNow * count);//页码内容渲染
    for (i = 0; i < renderDate.length; i++) {
        str += `
        <tr>
        <td>${renderDate[i].appliCant}</td>
        <td>${renderDate[i].course}</td>
        <td>${renderDate[i].teacher}</td>
        <td>${renderDate[i].time}</td>
        <td>${renderDate[i].submitTime}</td>
        <td id="audit-status" class="post">${renderDate[i].auditStatus}</td>
        <td>${renderDate[i].note}</td>
        
        <td data-id="${renderDate[i].id}">
             <span class="glyphicon glyphicon-cog background"></span>
            <a href="#" data-toggle="modal" data-target="#myModal">审核</a>&nbsp;
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
            // 获取所选的审核状态
            let status = document.querySelector('.opt:checked').value;
            // 获取选定的代课老师姓名
            let teacher = document.getElementById('input1').value;
            // 更新选课记录的状态和备注信息
            studentArr[i].auditStatus = status;
            studentArr[i].note = teacher;
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

    const sl = document.querySelector('.sl')
    sl.addEventListener('change', function (e) {
        count = parseInt(e.target.value)
        iNow = 1
        render()
    })
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
const searchBtn = document.getElementById('search-btn');


searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    const phoneNumber = phoneInput.value.trim();

    // 根据 query 查询数据
});
searchBtn.addEventListener('click', () => {

    const query = searchInput.value.trim().toLowerCase();

    const tableRows = document.querySelectorAll('.table tbody tr');
    for (const row of tableRows) {
        console.log(tableRows);
        const name = row.querySelector('td:first-child').textContent.trim().toLowerCase();

        if (name.includes(query)) {
            row.classList.remove('hidden');
        } else {
            row.classList.add('hidden');
        }
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
            const auditStatus = row.querySelector('td:nth-child(6)').textContent.trim(); // 获取续费状态列的文本内容

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