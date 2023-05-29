let data = [
    { account: '19160610038', password: '123456' },
    { account: '15708133749', password: '123456' }
];

let aInp = document.querySelectorAll('input');
let loginBtn = document.querySelector('.loginBtn');
let testBox = document.querySelectorAll('.testbox');
let loginUser = document.querySelector('.login-user');
let loginPwd = document.querySelector('.login-pwd');
let successBox = document.querySelector('.success-box');
let errorBox = document.querySelector('.error-box');
let reg = {
    username: {
        con: /^1[3-9]\d{9}$/,
        error: '你输入的账号有误'
    },
    pwd: {
        con: /^[0-9]{6,18}$/,
        error: '密码不正确'
    }
}

function test(obj) {
    let str = obj.value.trim()
    if (str == '') {
        obj.parentNode.parentNode.className = 'error';
        obj.nextElementSibling.innerHTML = '必填项不能为空';
        return false;
    }
    if (reg[obj.name].con.test(str)) {
        obj.parentNode.parentNode.className = 'success';
        obj.nextElementSibling.innerHTML = '正确';
        return true;
    } else {
        obj.parentNode.parentNode.className = 'error';
        obj.nextElementSibling.innerHTML = reg[obj.name].error;
        return false;
    }
}

for (let i = 0; i < aInp.length; i++) {
    aInp[i].addEventListener('blur', function () {
        test(this);
    });
}

loginBtn.addEventListener('click', function (e) {
    let loginUserInpV = loginUser.value;
    let loginPwdInpV = loginPwd.value;
    let isFormValid = true;

    for (let i = 0; i < aInp.length; i++) {
        if (!test(aInp[i])) {
            isFormValid = false;
        }
    }

    if (isFormValid) {
        let isUserFound = false;
        for (let i = 0; i < data.length; i++) {
            if (data[i].account === loginUserInpV && data[i].password === loginPwdInpV) {
                isUserFound = true;
                break;
            }
        }

        if (isUserFound) {
            successBox.classList.remove('hide');
            setTimeout(function () {
                location.href = '../Pages/xy_schedule.html';
            }, 500);
        } else {
            errorBox.classList.remove('hide');
            loginUser.value = '';
            loginPwd.value = '';
            aInp[0].parentNode.parentNode.className = 'error';
            aInp[0].nextElementSibling.innerHTML = '没有该账号';
            aInp[1].parentNode.parentNode.className = 'error';
            setTimeout(function () {
                errorBox.classList.add('hide');
            }, 2000);
        }
    }
});
