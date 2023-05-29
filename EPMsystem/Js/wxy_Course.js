let reArr = [
    { id: 1, wordSize: 9527, name: '刘明', tel: 19121147612, bTime: '2020-08-21', class: '前端', classTime: 100, SpentHours: 20, limit: 80, leave: '王老师', indate: '2023-05-11' },
    { id: 2, wordSize: 1234, name: '穆念慈', tel: 19121147611, bTime: '2020-08-21', class: 'Java', classTime: 100, SpentHours: 20, limit: 80, leave: '李老师', indate: '2023-05-11' },
    { id: 3, wordSize: 9082, name: '童昕', tel: 19121147613, bTime: '2020-08-21', class: '后端', classTime: 100, SpentHours: 20, limit: 80, leave: '张老师', indate: '2023-05-01' },
    { id: 4, wordSize: 7788, name: '张思', tel: 213871212, bTime: '2020-08-21', class: 'Java', classTime: 100, SpentHours: 20, limit: 80, leave: '刘老师', indate: '2022-12-01' },
    { id: 5, wordSize: 3311, name: '刘欧普', tel: 908023981, bTime: '2020-08-21', class: 'css', classTime: 100, SpentHours: 20, limit: 80, leave: '李老师', indate: '2023-05-15' },
    { id: 6, wordSize: 9801, name: '许佳明', tel: 1983798127, bTime: '2020-08-21', class: '前端', classTime: 100, SpentHours: 20, limit: 80, leave: '吴老师', indate: '2023-05-15' },
    { id: 7, wordSize: 2366, name: '王舒妤', tel: 1908098343, bTime: '2020-08-21', class: 'css', classTime: 100, SpentHours: 20, limit: 80, leave: '刘老师', indate: '2022-12-01' },
    { id: 8, wordSize: 7878, name: '吴萌', tel: 189738974389, bTime: '2020-08-21', class: 'Java', classTime: 100, SpentHours: 20, limit: 80, leave: '张老师', indate: '2023-05-16' },
    { id: 9, wordSize: 8888, name: '孙晓礼', tel: 18979879833, bTime: '2020-08-21', class: '前端', classTime: 100, SpentHours: 20, limit: 80, leave: '张老师', indate: '2023-05-17' },
    { id: 10, wordSize: 1001, name: '陈一发', tel: 13878973928, bTime: '2020-08-21', class: 'html', classTime: 100, SpentHours: 20, limit: 80, leave: '王老师', indate: '2022-12-01' },
    { id: 11, wordSize: 3990, name: '郑建军', tel: 16349873987, bTime: '2020-08-21', class: 'html', classTime: 100, SpentHours: 20, limit: 80, leave: '吴老师', indate: '2023-05-17' },
]
let tBody = document.querySelector('.cont')
let uls = document.querySelector('.uls')
let page = 1
let pagenum = 5
let inform = document.querySelector('.inform')
let list = document.querySelector('.list')
let searchBtn = document.querySelector('.searchBtn')
let searchName = document.querySelector('.searchName')
let searchTel = document.querySelector('.searchTel')
let dates = document.querySelector('.searchOp')
let dels = document.querySelector('.dels')

function render(arr) {
    let str = ''
    let slarr = arr.slice((page - 1) * pagenum, page * pagenum)
    for (let i = 0; i < slarr.length; i++) {
        str += `
    <tr>
    <td data-id="${slarr[i].id}"><input type="checkbox" name="delCheck"></td>
    <td>${slarr[i].wordSize}</td>
    <td>${slarr[i].name}</td>
    <td>${slarr[i].tel}</td>
    <td>${slarr[i].bTime}</td>
    <td>${slarr[i].class}</td>
    <td>${slarr[i].classTime}</td>
    <td>${slarr[i].SpentHours}</td>
    <td>${slarr[i].limit}</td>
    <td class="iconfont pen">${slarr[i].leave}<span>&#xe608;</span></td>
    <td class="iconfont pen">${slarr[i].indate}<span>&#xe608;</span></td>
    <td data-id="${slarr[i].id}">

    <button type="button" class="btn btn-primary btn-xs ways" data-toggle="modal"data-target="#ismyModal">编辑</button>

    <button type="button" class="btn btn-danger btn-xs del" data-toggle="modal" data-target="#editModal">删除</button>
    </td>
   </tr>
    `
    }
    tBody.innerHTML = str

    //上一页
    let pageL = `<li>
    <a href="#" aria-label="Previous" class="left">
      <span aria-hidden="true"  class="left">&laquo;</span>
    </a>
    </li>`
    //下一页
    let pageR = ` <li>
    <a href="#" aria-label="Next" class="right">
      <span aria-hidden="true"  class="right">&raquo;</span>
    </a>
    </li>`
    //数字页
    let pagens = ''
    for (let i = 1; i <= Math.ceil(arr.length / pagenum); i++) {
        if (page == i) {
            pagens += ` <li class="active"><a href="#">${i}</a></li>`
        } else {
            pagens += ` <li><a href="#">${i}</a></li>`
        }
    }
    uls.innerHTML = pageL + pagens + pageR





}
ym(reArr)

render(reArr)

//分页下拉
function xl(arr) {
    let str1 = ''
    for (let i = 1; i <= Math.ceil(arr.length / pagenum); i++) {
        str1 += `<option value="${i}">${i}</option>`
        list.addEventListener('change', function () {
            page = list.value
            arr.slice((page - 1) * pagenum, page * pagenum)
            render(reArr)
        })

    }
    list.innerHTML = str1
}
xl(reArr)

let che = document.querySelectorAll('.che')
let unil = document.querySelector('.unil')
//批量删除
// function shanchu(obj,arr) {
//     obj.addEventListener('click', function () {
//         for (let i = 0; i < arr.length; i++) {
//             if (this.checked == true) {
//                 arr[i].checked = true 
//             }else{
//                 arr[i].checked = false 
//             }
//         }
//     })
// for(let i=0;i<arr.length;i++){
//     arr[i].addEventListener('click',function(){
//         let flage=true
//         for(let j=0;j<arr.length;j++){
//             if(arr[j].checked==false){
//                 flage=false
//                 break
//             }
//         }
//         if(flage==true){
//             obj.checked=true
//         }else{
//             obj.checked=false
//         }
//     })
// }
    

// }
// shanchu(unil,che)

// dels.addEventListener('click', function () {
//     for(let i=0;i<reArr.length;i++){
//         if(che.checked==true){

//         }
//     }
   
// })




// 分页点击事件
function fy(arr) {
    uls.addEventListener('click', function (e) {
        if (e.target.className == 'left') {
            if (page > 1) {
                page--
            }
        } else if (e.target.className == 'right') {
            if (page < Math.ceil(arr.length / pagenum)) {
                page++
            }
        } else {
            page = e.target.innerText
            list.value = page
        }
        render(arr)
    })


}
fy(reArr)
//获取id号
let saveId = 0
let delId = 0
//查看按钮
tBody.addEventListener('click', function (e) {
    if (e.target.className.includes('way')) {
        saveId = e.target.parentNode.dataset.id
        document.querySelector('.wordSizes').value=e.target.parentNode.parentNode.children[1].innerText
        document.querySelector('.namess').value=e.target.parentNode.parentNode.children[2].innerText
        document.querySelector('.tels').value=e.target.parentNode.parentNode.children[3].innerText
        document.querySelector('.bTimes').value=e.target.parentNode.parentNode.children[4].innerText
        document.querySelector('.SpentHourss').value=e.target.parentNode.parentNode.children[7].innerText
        document.querySelector('.clas').value=e.target.parentNode.parentNode.children[5].innerText
        document.querySelector('.strons').value=e.target.parentNode.parentNode.children[9].innerText.slice(0,3)
        document.querySelector('.indates').value=e.target.parentNode.parentNode.children[10].innerText.slice(0,10)
        
    } else if (e.target.className.includes('del')) {
        delId = e.target.parentNode.dataset.id
      
           
        
       
    }
})

// 搜索
searchBtn.addEventListener('click', function () {
    let nameVal = searchName.value;
    let telVal = searchTel.value
    tBody.innerHTML = ''
    let newarr = reArr.filter(el => {
        if (searchName.value != '') {
            return el.name == nameVal
        }
        if (searchTel.value != '') {
            return el.tel == telVal
        }
        if (nameVal == el.name && telVal == el.tel) {
            return el.tel == telVal && el.name == nameVal
        }
        if (dates.children[0].value == el.indate) {
            return el.indate == dates.children[0].value
        }

    })
    xl(newarr)
    del(newarr)
    see(newarr)
    fy(newarr)
    ym(newarr)
    render(newarr)
})

//新增
let saveBtn = document.querySelector('.save')
let id = reArr.length
saveBtn.addEventListener('click', function () {
    reArr.push({
        id: ++id,
        wordSize: document.querySelector('.wordSize').value,
        name: document.querySelector('.names').value,
        tel: document.querySelector('.tel').value,
        bTime: document.querySelector('.bTime').value,
        class: document.querySelector('.cla').value,
        classTime: 100,
        SpentHours: document.querySelector('.SpentHours').value,
        limit: 100 - document.querySelector('.SpentHours').value,
        leave: 4,
        indate: document.querySelector('.indate').value
    })
    document.querySelector('.wordSize').value = ''
    document.querySelector('.names').value = ''
    document.querySelector('.tel').value = ''
    document.querySelector('.bTime').value = ''
    document.querySelector('.cla').value = ''
    document.querySelector('.SpentHours').value = ''
    document.querySelector('.indate').value = ''
    see(reArr)
    xl(reArr)
    ym(reArr)
    render(reArr)
})

// 页码刷新函数封装
function ym(arr) {
    return inform.innerHTML = `共${Math.ceil(arr.length / pagenum)}页/${arr.length}条数据`
}

//删除
function del(arrs) {
    let delBtn = document.querySelector('.delBtn')
    delBtn.addEventListener('click', function () {
        for (let i = 0; i < arrs.length; i++) {
            if (arrs[i].id == delId) {
                arrs.splice(i, 1)
                xl(arrs)
                ym(arrs)
                see(arrs)
                render(arrs)
                return
            }
        }
        //批量删除
        let delCheck=document.querySelectorAll('[name="delCheck"]:checked')
        for(let i=0;i<delCheck.length;i++){
            let delCheckId=delCheck[i].parentNode.dataset.id
            for(let j=0;j<arrs.length;j++){
                if(delCheckId==arrs[j].id){
                    arrs.splice(j,1)
                    ym(arrs)
                    see(arrs)
                    render(arrs)
                    xl(arrs)
                    break
                }
            }
        }
        })



}
del(reArr)

//查看保存按钮
function see(arr){
    let cool=document.querySelector('.cool')
    cool.addEventListener('click',function(){
       let obj={
        id:saveId,
        wordSize: document.querySelector('.wordSizes').value, 
        name: document.querySelector('.namess').value, 
        tel: document.querySelector('.tels').value, 
        bTime: document.querySelector('.bTimes').value, 
        class: document.querySelector('.clas').value, 
        classTime: 100, 
        SpentHours: document.querySelector('.SpentHourss').value, 
        limit: 100-document.querySelector('.SpentHourss').value, 
        leave: document.querySelector('.strons').value, 
        indate: document.querySelector('.indates').value
       }
       for(let i=0;i<arr.length;i++){
        if(arr[i].id==saveId){
            arr.splice(i,1,obj)
        }
       }
       render(arr)
    })
}
see(reArr)




