<template>
    <div id="login">
        <div id="box">
            <div id="top">
                <img src="" alt="">
                <h3>宿舍管理系统</h3>
            </div>
            <div id="bottom">
                <div id="pBox">
                    <p>欢迎您！请登录</p>
                </div>
                <div id="formBox">
                    <div class="form-horizontal">
                        <div class="form-group">
                            <label for="inputEmail3" class="col-sm-2 control-label">
                                <span class="iconfont icon-user"></span>
                            </label>
                            <div class="user">
                               <div >
                                <i class="el-icon-user tb"></i>
                               </div>
                               <div class="userI ">
                                <input type="text" class="form-control login-user" name="username" id="inputEmail3"
                                    placeholder="账号">
                               </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="inputPassword3" class="col-sm-2 control-label">
                                <span class="iconfont icon-mima"></span>
                            </label>
                            <div class="user">
                               <div >
                                <i class="el-icon-lock tb"></i>
                               </div>
                               <div class="userI ">
                                <input type="text" class="form-control login-user" name="username" id="inputEmail3"
                                    placeholder="密码">
                               </div>
                            </div>
                        </div>

                        <div class="form-group sf">
                            
                            
                            <div class="sf-div col-sm-12">
                                <div style="display: flex;align-items: center;">
                                    <div><span>管理员</span></div>
                                    <div><input type="radio" name="status" value="管理员" id=""></div>
                                </div>
                                <div style="display: flex;align-items: center;">
                                    <div><span>学生</span></div>
                                    <div><input value="学生" type="radio" name="status" id=""></div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-offset-4 col-sm-10">
                                <button type="button" class="btn btn-block loginBtn col-sm-10" style="margin-left: 50px;">登录</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
</script>
<style>
body {
    height: 100%;
    background: url() no-repeat;
    background-size: cover;
}

#box {
    position: absolute;
    left: 0px;
    top: 0px;
    position: absolute;
    top: 25%;
    left: 60%;
}

#top {
    width: 289px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#top img {
    width: 30px;
    height: 30px;
    margin-top: 10px;
}

#top h3 {
    margin-left: 10px;
    color: white;
}

#bottom {
    margin-top: 10px;
    width: 300px;
    height: 255px;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.30) 0px 0px 10px;
    border-radius: 10px;
}

#pBox {
    width: 300px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: rgb(53, 193, 203);
}

#formBox {
    width: 300px;
    display: flex;
    justify-content: center;
}

#formBox button {
    color: white;
    background: rgb(53, 193, 203);
    height: 40px;
    margin: auto;
}

#formBox .sf {
    display: flex;
    width: 276px;
    justify-content: space-between;
    align-items: center;
}

#formBox .sf span {
    margin-right: 5px;
}

#formBox .sf .sf-div {
    display: flex;
    align-items: center;
    justify-content: center;
}

#formBox .sf input[type="radio"] {
    margin-right: 15px;
}

.username {
    width: 260px;
    display: flex;
    align-items: center;
    gap: 7px;
}

.error input {
    border-color: red;
}

.error p {
    display: block;
    color: red;
    font-size: 12px;
}

.success input {
    border-color: #1ABC9C;
}

.success p {
    display: block;
    color: #1ABC9C;
    font-size: 12px;
}

.success-box {
    width: 500px;
    margin: 50px auto 0;
}

.error-box {
    width: 500px;
    margin: 50px auto 0;
}
.user{
    display: flex;
    align-items: center;
    justify-content: center;
}
.userI{
    margin-left: 10px;
}
label {
    font-weight: normal;
}

</style>