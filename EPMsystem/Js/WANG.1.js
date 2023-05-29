//渲染功能
let goyiArr = [
    { id: 1, goy: '001', pop: '少年说公益行活动公益T恤', self: '100', xl: '10', kc: '145'}, 
    { id: 2, goy: '002', pop: '少年说公益行活动公益T恤', self: '200', xl: '20', kc: '123'},
    { id: 3, goy: '003', pop: '少年说公益行活动公益T恤', self: '300', xl: '30', kc: '132'}, 
    { id: 4, goy: '004', pop: '少年说公益行活动公益T恤', self: '400', xl: '40', kc: '142'}, 
    { id: 5, goy: '005', pop: '少年说公益行活动公益T恤', self: '500', xl: '50', kc: '182'},
    { id: 6, goy: '006', pop: '少年说公益行活动公益T恤', self: '600', xl: '60', kc: '152'},
    { id: 7, goy: '007', pop: '少年说公益行活动公益T恤', self: '700', xl: '70', kc: '92'}, 
    { id: 8, goy: '008', pop: '少年说公益行活动公益T恤', self: '800', xl: '80', kc: '75'}
]

let tBody = document.querySelector('tbody')
let oPagination = document.querySelector('.pagination')
let delBtn = document.querySelector('.del-btn')
console.log(delBtn);
let oInp = document.querySelector('.inpzzz')
let oBtn = document.querySelector('.btnzzz')
let addBtn = document.querySelector('.add-btn')
let addGoy = document.querySelector('.aaa')
let addPop = document.querySelector('.bbb')
let addSeft = document.querySelector('.ccc')
let addXl = document.querySelector('.ddd')
let addKc = document.querySelector('.eee')
let editGoy = document.querySelector('.edit-aaa')
let editPop = document.querySelector('.edit-bbb')
let editSeft = document.querySelector('.edit-ccc')
let editXl = document.querySelector('.edit-ddd')
let editKc = document.querySelector('.edit-eee')
let editBtn = document.querySelector('.edit')
let queDing = document.querySelector('.add-btn-bianji')
let inpBoxS = document.getElementsByName('checkedbox');
let n = goyiArr.length-1
let id = goyiArr.length
let count = 5 //每页展示的条数
let iNow = 1 //当前页
let delId = 0
let editId = 0
function render(arr) {
    let str = ''
    //截取每一页的内容
    let renderDate = arr.slice((iNow - 1) * count, iNow * count)
    for (let i = 0; i < renderDate.length; i++) {
        str += `<tr class = tr1>
    <td>
        <input type="checkbox" name="checkedbox" data-id = "${renderDate[i].id}">
    </td>
    <td>${renderDate[i].goy}</td> 
    <td>${renderDate[i].pop}</td>
    <td>${renderDate[i].self}</td>
    <td>${renderDate[i].xl}</td>
    <td>${renderDate[i].kc}</td>
    <td data-id = "${renderDate[i].id}">
        <button class="btn btn-warning">下架</button>
        <button class="btn btn-warning edit" data-toggle="modal"
            data-target="#editModal">编辑</button>
        <button data-toggle="modal" data-target="#delModal"
            class="btn btn-danger btn3 del">删除</button>
    </td>
    </tr>
    `
    }
    tBody.innerHTML = str
    //创建页码
    //左边点击按钮
    let pageLeft = `
        <li>
        <a class = 'left' href="#" aria-label="Previous">
            <span class = 'left' aria-hidden="true">&laquo;</span>
        </a>
        </li>`
    //右边点击按钮
    let pageRight = `
    <li>
    <a  class="right" href="#" aria-label="Next">
        <span  class="right" aria-hidden="true">&raquo;</span>
    </a>
    </li>`
    //中间的页码
    let pageStr = ''
    for (let i = 1; i <= Math.ceil(arr.length / count); i++) {
        if (iNow == i) {
            pageStr += `<li class="active"><a href="#">${i}</a></li>`
        } else {
            pageStr += `<li><a href="#">${i}</a></li>`
        }
    }
    oPagination.innerHTML = pageLeft + pageStr + pageRight
}
//页面一加载就渲染页面
render(goyiArr)
//分页的点击事件
oPagination.addEventListener('click', function (e) {
    if (e.target.className == 'left') {//左键
        if (iNow > 1) {
            iNow--
        }
    } else if (e.target.className == 'right') {
        if (iNow < Math.ceil(goyiArr.length / count)) {//右键
            iNow++
        }
    } else {//中间数字键
        iNow = e.target.innerText
    }
    render(goyiArr)
})
//所有删除按钮和编辑按钮点击事件 
tBody.addEventListener('click', function (e) {
    if (e.target.className.includes('del')) {
        //获取目标父级id
        delId = e.target.parentNode.dataset.id
    } else if (e.target.className.includes('edit')) {
        //显示编辑框  赋值
        editGoy.value = e.target.parentNode.parentNode.children[1].innerText
        editPop.value = e.target.parentNode.parentNode.children[2].innerText
        editSeft.value = e.target.parentNode.parentNode.children[3].innerText
        editXl.value = e.target.parentNode.parentNode.children[4].innerText
        editKc.value = e.target.parentNode.parentNode.children[5].innerText
        //获取目标父级id
        editId = e.target.parentNode.dataset.id
    }
})
//点击确定的时候删除
delBtn.addEventListener('click', function () {
    for (let i = 0; i < goyiArr.length; i++) {
        if (goyiArr[i].id == delId) {
            goyiArr.splice(i, 1)
            let renderDate = goyiArr.slice((iNow - 1) * count, iNow * count)
            if (renderDate.length == 0 && iNow > 1) {
                iNow--
            }
            oInp.value = ''
            render(goyiArr);
            return
        }
    }
    //批量删除
    let checked = document.querySelectorAll('[name="checkedbox"]:checked');
    for(let i = 0;i<checked.length;i++){
        let checkedId = checked[i].dataset.id
        console.log(checkedId);
        for(let j=0;j<goyiArr.length;j++){
            if(checkedId==goyiArr[j].id){
                goyiArr.splice(j,1)
            }
        }
    }
    let renderDate = goyiArr.slice((iNow - 1) * count, iNow * count)
    if (renderDate.length == 0 && iNow > 1) {
        iNow--;
    }
    render(goyiArr)

})
//点击查询时
oBtn.addEventListener('click', function () {
    let filterArr = []
    let str = oInp.value
    for (let i = 0; i < goyiArr.length; i++) {
        if (goyiArr[i].goy.includes(str)) {//符合条件
            filterArr.push(goyiArr[i])
        }   
    }
    if(filterArr.length==0){
        alert('请输入正确内容')
    }else{
        render(filterArr)
    }
})
//点击新增时
addBtn.addEventListener('click', function () {
    goyiArr.push({
        id: ++id,
        goy: addGoy.value,
        pop: addPop.value,
        self: addSeft.value,
        xl: addXl.value,
        kc: addKc.value
    })
})
//点击编辑弹框的确定按钮
queDing.addEventListener('click', function () {
    let json = {
        id: editId,
        goy: editGoy.value,
        pop: editPop.value,
        self: editSeft.value,
        xl: editXl.value,
        kc: editKc.value
    }
    for (let i = 0; i < goyiArr.length; i++) {
        if (goyiArr[i].id == editId) {
            goyiArr.splice(i, 1, json)
        }
    }
    render(goyiArr)
})




//批量删除全选操作
//1.当多选框被选中的时候，获取多选框的父级下面的最后一级的id
//2.通过id删除数组中对应的行数
//3.重新进行数据渲染
// let inpS1 = document.querySelector('.btns1')

// let tr1 = document.querySelector('.tr1')
// let a = [];
// inpS1.addEventListener('click', function () {

//     // for (let j = 0; j < inpBoxS.length; j++) {
//     //     if (inpBoxS[j].checked == true) {
//     //         a.push(
//     //             {
//     //                 id: inpBoxS[j].parentNode.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.
//     //                     nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.dataset.id
//     //             }
//     //         )
//     //         console.log(a)
//     //     }
//     // }
//     // for (let i = 0; i < a.length; i++) {
//     //     console.log(a[i].id)
//     //     let length = a.length
//     //     console.log(a[a.length - 1].id - 1)
//     //     goyiArr.splice(a[i].id - 1, a[a.length - 1].id)
//     //     a = []
//     //     render(goyiArr)
//     // }
    
   
//     // render(goyiArr)
// })
