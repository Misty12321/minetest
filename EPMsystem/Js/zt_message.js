let contentData = [
    { id: 1, con: '【内容分享】如何建立良好的客户关系', name: '肖源', time: '2020-01-07 09：10' },
    { id: 2, con: '【内容分享】如何建立良好的客户关系', name: '赵婷', time: '2020-01-07 09：10' },
    { id: 3, con: '【内容分享】如何建立良好的客户关系', name: '陈兴旺', time: '2020-01-07 09：10' },
    { id: 4, con: '【内容分享】如何建立良好的客户关系', name: '陈泳霏', time: '2020-01-07 09：10' },
    { id: 5, con: '【内容分享】这是一条已读的消息', name: '李祝波', time: '2020-01-07 09：10' },
    { id: 6, con: '【内容分享】这是一条已读的消息', name: '王兴跃', time: '2020-01-07 09：10' },
    { id: 7, con: '【内容分享】这是一条已读的消息', name: '钟长江', time: '2020-01-07 09：10' },
    { id: 8, con: '【内容分享】这是一条已读的消息', name: '一一', time: '2020-01-07 09：10' },
    { id: 9, con: '【内容分享】这是一条已读的消息', name: '张三', time: '2020-01-07 09：10' },
    { id: 10, con: '【内容分享】这是一条已读的消息', name: '张三', time: '2020-01-07 09：10' },
    { id: 11, con: '【内容分享】这是一条已读的消息', name: '张三', time: '2020-01-07 09：10' },
    { id: 12, con: '【内容分享】这是一条已读的消息', name: '张三', time: '2020-01-07 09：10' },
    { id: 13, con: '【内容分享】这是一条已读的消息', name: '张三', time: '2020-01-07 09：10' },
]
let oTbody = document.querySelector('tbody');
let oPagination = document.querySelector('.pagination');
let delBtn = document.querySelector('.del-btn');
let allChecks = document.querySelector('#allChecks');
let checkboxes = document.getElementsByName('check');
let page = 1;
let count = 8;
let delId = 0;
function render(arr) {
    let str = '';
    let renData = arr.slice((page - 1) * count, page * count);
    for (let i = 0; i < renData.length; i++) {
        str +=
            `
            <tr>
                <td class="cks" data-id="${renData[i].id}">
                    <input type="checkbox" name="check">
                </td>
                <td>${renData[i].con}</td>
                <td>
                    <span class="iconfont icon-user " style="margin-right: 8px;">${renData[i].name}</span>
                </td>
                <td>
                    <span class="iconfont icon-shijian " style="margin-right: 8px;">${renData[i].time}</span>
                </td>
                <td data-id="${renData[i].id}">
                    <span data-toggle="modal" data-target="#delModal" class="iconfont icon-shanchu  del " style="font-family: 微软雅黑;font-size: 13px;color: rgb(255, 0, 0);margin-left:5px;cursor: pointer;">删除</span>
                </td>
            </tr>
            `
    }
    oTbody.innerHTML = str;

    //页面
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
    for (let i = 1; i <= Math.ceil(contentData.length / count); i++) {
        if (page == i) {
            pageStr += `<li class="active" > <a href="#">${i}</a></li > `
        } else {
            pageStr += `<li> <a href="#">${i}</a></li > `
        }
    }
    oPagination.innerHTML = pageLeft + pageStr + pageRight;
}
render(contentData);

//给分页加功能
oPagination.addEventListener('click', function (e) {
    if (e.target.className == 'left') {
        if (page > 1) {
            page--;
        }
    } else if (e.target.className == 'right') {
        if (page < Math.ceil(contentData.length / count)) {
            page++;
        }
    } else {
        page = e.target.innerHTML;
    }
    render(contentData);
});
oTbody.addEventListener('click', function (e) {
    if (e.target.className.includes('del')) {
        delId = e.target.parentNode.dataset.id;
    }
});

delBtn.addEventListener('click', function () {
    // 先单独处理根据delId删除contentData数组中对应的元素
    for (let i = 0; i < contentData.length; i++) {
        if (contentData[i].id == delId) {
            contentData.splice(i, 1);
            break;
        }
    }

    // 再获取被选中的复选框元素
    let checked = document.querySelectorAll('[name="check"]:checked');
    console.log(checked);
    let ids = []; // 存储被选中的消息id
    for (let i = 0; i < checked.length; i++) {
        ids.push(checked[i].parentNode.dataset.id);
    }

    // 循环遍历ids数组，根据其中每一个id值删除contentData数组中对应的元素
    for (let i = 0; i < ids.length; i++) {
        for (let j = 0; j < contentData.length; j++) {
            if (contentData[j].id == ids[i]) {
                contentData.splice(j, 1);
                break;
            }
        }
    }

    // 最后根据当前页数和每页显示数量重新渲染页面内容。
    let renData = contentData.slice((page - 1) * count, page * count);
    if (renData.length == 0 && page > 1) {
        page--;
    }
    render(contentData);
});




//联动全选
allChecks.addEventListener('click', function () {
    for (let i = 0; i < checkboxes.length; i++) {
        if (allChecks.checked == true) {
            checkboxes[i].checked = true;
        } else {
            checkboxes[i].checked = false;
        }
    }

});
for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', function () {
        let a = true;
        for (let j = 0; j < checkboxes.length; j++) {
            if (checkboxes[j].checked == false) {
                a = false;
                break;
            }
        }
        if (a == true) {
            allChecks.checked = true;
        } else {
            allChecks.checked = false;
        }
    });
}


