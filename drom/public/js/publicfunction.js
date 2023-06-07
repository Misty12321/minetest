
//侧边栏渲染
function RSidebar(){
        let user = JSON.parse(sessionStorage.getItem("user"));

        let oUl = document.querySelector("#nav");
        console.log('如无法正常获取检查代码中ul的id是否为nav',oUl);
        let str1;
        if (user.t_type == 1) {
            //超级
            str1 = `<li>
                <a href="../page/student.html">
                <h3 id="hot"><span class="iconfont icon-zhuye centerLogo"></span>公告主页</h3>
                </a>
                </li>
                <li>
                <a href="../page/dormitory.html">
                    <h3 id="amusement"><span class="iconfont icon-sushe centerLogo"></span> 宿舍管理</h3>
                </a>
                    </li>
                <li>
                <a href="../page/student.html">
                    <h3 id="goods"><span class="iconfont icon-xueshengguanli centerLogo"></span> 学生管理</h3>
                </a>
                </li>
               
                <li>
                <a href="../page/notice.html">
                    <h3 id="goods"><span class="iconfont icon-shequguanli_gonggaoguanli centerLogo"></span> 公告管理
                    </h3>
                </a>
                </li>

                <li>
                <a href="../page/admin.html">
                    <h3 id="goods"><span class="iconfont icon-admin-manage centerLogo"></span> 管理员管理</h3>
                </a>
                    </li>`;
          } else if (user.t_type == 0) {
            //宿舍管理员
            str1 = `<li>
            <a href="../page/student.html">
            <h3 id="hot"><span class="iconfont icon-zhuye centerLogo"></span>公告主页</h3>
            </a>
            </li>
            <li>
            <a href="../page/student.html">
                <h3 id="amusement"><span class="iconfont icon-sushe centerLogo"></span> 宿舍管理</h3>
            </a>
                </li>
            <li>
            <a href="../page/student.html">
                <h3 id="goods"><span class="iconfont icon-xueshengguanli centerLogo"></span> 学生管理</h3>
            </a>
            </li>
           
            <li>
            <a href="../page/student.html">
                <h3 id="goods"><span class="iconfont icon-shequguanli_gonggaoguanli centerLogo"></span> 公告管理
                </h3>
            </a>
            </li>`;
          } else {
            //学生
            str1 = `<li>
            <a href="../page/student.html">
            <h3 id="hot"><span class="iconfont icon-zhuye centerLogo"></span>公告主页</h3>
            </a>
            </li>
            <li>
            <a href="../page/student.html">
                <h3 id="goods"><span class="iconfont icon-xueshengguanli centerLogo"></span> 学生管理</h3>
            </a>
            </li>`;
          }
          oUl.innerHTML = str1;
        }
//顶部渲染
function Rheader(){
    let oHead = document.querySelector("#head")
    let user = JSON.parse(sessionStorage.getItem("user"));
    let username;
    console.log(user.t_type)
    if(user.t_type){
        username=user.t_name;
        url=user.t_url;
    }
    else{
        username=user.s_name;
        url=user.s_url;
    }
    let str;
    str=` <div class="header-left">
    <span class="iconfont icon-jurassic_cloud-data"></span>
    <h3>宿舍管理系统</h3>
</div>
<div class="header-right">
    <div class="hrederdiv2">
    <span></span>    
    <span class='circle hrederdiv2'><img src='../uploads/${url}'></img></span>
        <span><a class='userset' id='username hrederdiv2' >${username}</a></span>
    </div>
    
    <div class="hrederdiv2">
        <span class="iconfont icon-tuichu exit s1"><span class='exit' style="margin-left: 5px;">退出登录</span></span>
    </div>
</div>`
    oHead.innerHTML=str;


        let exit=document.querySelector('.exit')
        exit.addEventListener('click',function(){
            window.location.href='../page/login.html'
        })
        let userset=document.querySelector('.userset')
        userset.addEventListener('click',function(){
            window.location.href='../page/usersetting.html'
        })
                
}
