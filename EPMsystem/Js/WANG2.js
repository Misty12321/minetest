let productArr = [
    {
        id: 1, spbh: '001', name: '少年说公益行活动公益T恤', imgs: '../image/WANG1.png', spzt: '下架',
        yhj: '198', yj: '240', xl: '340', kc: '100', pxh: '1', gxsj: '2023-05-01', cjr: '周周',
    },
    {
        id: 2, spbh: '002', name: '少年说公益行活动公益T恤', imgs: '../image/WANG1.png', spzt: '下架',
        yhj: '198', yj: '240', xl: '340', kc: '100', pxh: '2', gxsj: '2023-05-01', cjr: '周周',
    },
    {
        id: 3, spbh: '003', name: '少年说公益行活动公益T恤', imgs: '../image/WANG1.png', spzt: '下架',
        yhj: '198', yj: '240', xl: '340', kc: '100', pxh: '3', gxsj: '2023-05-01', cjr: '周周',
    },
    {
        id: 4, spbh: '004', name: '少年说公益行活动公益T恤', imgs: '../image/WANG1.png', spzt: '下架',
        yhj: '198', yj: '240', xl: '340', kc: '100', pxh: '4', gxsj: '2023-05-01', cjr: '周周',
    },
    {
        id: 5, spbh: '005', name: '少年说公益行活动公益T恤', imgs: '../image/WANG1.png', spzt: '下架',
        yhj: '198', yj: '240', xl: '340', kc: '100', pxh: '5', gxsj: '2023-05-01', cjr: '周周',
    },
    {
        id: 6, spbh: '006', name: '少年说公益行活动公益T恤', imgs: '../image/WANG1.png', spzt: '下架',
        yhj: '198', yj: '240', xl: '340', kc: '100', pxh: '6', gxsj: '2023-05-01', cjr: '周周',
    },
]
let tBody = document.querySelector('tbody')
let oPagination = document.querySelector('.pagination')
let delBtn = document.querySelector('.del-btn')
let editSpbh = document.querySelector('.edit-aaa')
let editName = document.querySelector('.edit-bbb')
let editImgs = document.querySelector('.edit-ccc')
let editSpzt = document.querySelector('.edit-ddd')
let editYhj = document.querySelector('.edit-eee')
let editYj = document.querySelector('.edit-fff')
let editXl = document.querySelector('.edit-ggg')
let editKc = document.querySelector('.edit-hhh')
let editPxh = document.querySelector('.edit-iii')
let editGxsj = document.querySelector('.edit-jjj')
let editCjr = document.querySelector('.edit-zzz')
let baoCun = document.querySelector('.add-btn-bianji')
let oBtn = document.querySelector('.btnzzz')
let input1 = document.querySelector('.input__1')
let oInp = document.querySelector('.inpzzz')

let count = 3//每页展示的条数
let iNow = 1//当前页

let delId = 0//定义删除id=0
let editId = 0//定义还原id=0
let imgwang2='../image/WANG1.png'
//渲染功能
//渲染内容
function render(arr) {
    let str = ''
    //截取数组
    let renderDate = arr.slice((iNow - 1) * count, iNow * count)
    for (let i = 0; i < renderDate.length; i++) {
        str += `
        <tr>
            <td><input type="checkbox" data-id = '${renderDate[i].id}' name = 'check' class = 'sssss'></td>
            <td>${renderDate[i].spbh}</td> 
            <td>${renderDate[i].name}</td>
            <td><img style="width: 50px; height: 50px; border-radius: 4px;" src='${renderDate[i].imgs}'></img></td>
            <td>${renderDate[i].spzt}</td>
            <td>${renderDate[i].yhj}</td>
            <td>${renderDate[i].yj}</td>
            <td>${renderDate[i].xl}</td>
            <td>${renderDate[i].kc}</td>
            <td>${renderDate[i].pxh}</td>
            <td>${renderDate[i].gxsj}</td>
            <td>${renderDate[i].cjr}</td>
            <td data-id = "${renderDate[i].id}">
                <a class="edit" data-toggle="modal"data-target="#editModal" style="cursor: pointer;">编辑</a>
                <a class="btn3 del" data-toggle="modal" data-target="#delModal" style="color: red; cursor: pointer;">删除</a>
            </td>
        </tr>
        `
    }
    tBody.innerHTML = str
    //渲染页码
    //创建页码
    let pageLeft = `
            <li>
            <a class = 'left' href="#" aria-label="Previous">
                <span class = 'left' aria-hidden="true">&laquo;</span>
            </a>
            </li>
    `
    let pageRight = `
            <li>
            <a  class="right" href="#" aria-label="Next">
                <span  class="right" aria-hidden="true">&raquo;</span>
            </a>
            </li>
    `
    let pageStr = ''
    for (let i = 1; i <= Math.ceil(productArr.length / count); i++) {
        if (iNow == i) {
            pageStr += `<li class = 'active'><a href="#">${i}</a></li>`
        } else {
            pageStr += `<li><a href="#">${i}</a></li>`
        }
    }
    oPagination.innerHTML = pageLeft + pageStr + pageRight
}
render(productArr)
//分页点击事件
oPagination.addEventListener('click', function (e) {
    if (e.target.className == 'left') {//左键
        if (iNow > 1) {
            iNow--
        }
    } else if (e.target.className == 'right') {//右键
        if (iNow < Math.ceil(productArr.length) / count) {
            iNow++
        }
    } else {
        iNow = e.target.innerText
    }
    render(productArr)
})
//所有删除按钮编辑按钮加点击事件
tBody.addEventListener('click', function (e) {
    //如果目标类名包含del
    if (e.target.className.includes('del')) {
        //找到目标元素父级的id
        delId = e.target.parentNode.dataset.id
    } else if (e.target.className.includes('edit')) {
        //编辑框显示  给编辑框赋值
        upload.style.background="url(../image/WANG2.png)"
        editSpbh.value = e.target.parentNode.parentNode.children[1].innerText
        editName.value = e.target.parentNode.parentNode.children[2].innerText
        editImgs.value = e.target.parentNode.parentNode.children[3].innerText
        // upload.style.background="url(../image/WANG2.png)"
        editSpzt.value = e.target.parentNode.parentNode.children[4].innerText
        editYhj.value = e.target.parentNode.parentNode.children[5].innerText
        editYj.value = e.target.parentNode.parentNode.children[6].innerText
        editXl.value = e.target.parentNode.parentNode.children[7].innerText
        editKc.value = e.target.parentNode.parentNode.children[8].innerText
        editPxh.value = e.target.parentNode.parentNode.children[9].innerText
        editGxsj.value = e.target.parentNode.parentNode.children[10].innerText
        editCjr.value = e.target.parentNode.parentNode.children[11].innerText
        //获取目标父级id
        editId = e.target.parentNode.dataset.id
    }
})
//点击确定时删除
delBtn.addEventListener('click', function () {
    for (let i = 0; i < productArr.length; i++) {
        if (productArr[i].id == delId) {
            productArr.splice(i, 1)
            let renderDate = productArr.slice((iNow - 1) * count, iNow * count)
            // if (renderDate.length == 0 && iNow > 1) {
            //     iNow--
            // }
            render(productArr);
            return
        }
    }
    render(productArr)
})
//点击编辑确定时
baoCun.addEventListener('click', function () {
    let json = {
        id: editId,
        spbh: editSpbh.value,
        name: editName.value,
        imgs: imgwang2,
        spzt: editSpzt.value,
        yhj: editYhj.value,
        yj: editYj.value,
        xl: editXl.value,
        kc: editKc.value,
        pxh: editPxh.value,
        gxsj: editGxsj.value,
        cjr: editCjr.value
    }
    for (let i = 0; i < productArr.length; i++) {
        if (productArr[i].id == editId) {
            productArr.splice(i, 1, json)
        }
    }
    render(productArr)
})
//点击查询时
oBtn.addEventListener('click', function () {
    let filterArr = []
    let str = oInp.value
    for (let i = 0; i < productArr.length; i++) {
        if (productArr[i].spbh == str) {
            filterArr.push(productArr[i])
        }
    }
    render(filterArr)
})

//批量删除
let btnDel = document.querySelector('.btns11') 
btnDel.addEventListener('click',function(){
    let checked = document.querySelectorAll('[class="sssss"]:checked')
    for(let i=0;i<checked.length;i++){
        let checkedId = checked[i].dataset.id
        for(let j=0;j<productArr.length;j++){
            if(checkedId==productArr[j].id){
                productArr.splice(j,1)
                break
            }
        }
    }
    let renderDate = productArr.slice((iNow - 1) * count, iNow * count)
    if (renderDate.length == 0 && iNow > 1) {
        iNow--;
    }
    render(productArr);
})


//获取图片路径
let ofile = document.querySelector('.file');
let upload = document.querySelector('.upload');
//点div让文件上传的触发一次点击效果
upload.addEventListener('click', function () {
    ofile.click();
    // if(upload.style.display='none'){
    //     upload.style.display='block'
    // }else{
    //     upload.style.display='none'
    // }

})
// file表单和select表单元素事件要加onchange
//file获取选中的文件，.value获取出来的路径是假的
//要用.files 获取的是一个文件的列表。因为上传可以多选
ofile.addEventListener('change', function () {
    // console.log(ofile);
    // console.log(ofile.files);
    //文件格式不能直接在img上使用。需要读取文件内容，转化成标签认识的。
    //文件阅读对象
    let fileReader = new FileReader()
    /* 
        fileReader.readAsDataURL    转成数据地址（bese64地址）
                   readAsArrayBuffer 转成数据流文件
                   readAsBinaryString 转成二进制字符串
    */
    //在文件读取的时候，因为文件体积有可能非常大。不让他进行阻塞加载。
    fileReader.readAsDataURL(ofile.files[0]);
    fileReader.addEventListener('loadend', function (e) {
        console.log(e.target.result)
        upload.style.background='url('+e.target.result+')'
        imgwang2=e.target.result;
        // showImg.style.display = 'block';

        // if(upload.style.display='none'){
        //     upload.style.display='block'
        // }else{
        //     upload.style.display='none'
        // }
    })

})






/* 
    1  5  6  11  n
    1  1  2  2   Math.ceil(n/5)


    1  0,5
    2  5,10
    3  10 15
    n  (n-1)count,n*count

*/


/* 
vue
小程序
react
    重新渲染，框架帮助咱们做了
*/






//批量删除全选操作
//1.当多选框被选中的时候，获取多选框的父级下面的最后一级的id
//2.通过id删除数组中对应的行数
//3.重新进行数据渲染
// let inpS1 = document.querySelector('.btns1')
// let inpId = document.querySelectorAll('')
// let a = [];
// inpS1.addEventListener('click', function () {


    // for (let j = 0; j < inpBoxS.length; j++) {
    //     if (inpBoxS[j].checked == true) {
    //         a.push(
    //             {
    //                 id: inpBoxS[j].parentNode.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.
    //                     nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.dataset.id
    //             }
    //         )
    //         console.log(a)
    //     }
    // }
    // for (let i = 0; i < a.length; i++) {
    //     console.log(a[i].id)
    //     let length = a.length
    //     console.log(a[a.length - 1].id - 1)
    //     goyiArr.splice(a[i].id - 1, a[a.length - 1].id)
    //     a = []
    //     render(goyiArr)
    // }
//})