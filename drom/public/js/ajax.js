function json2url(json){//{a:1,b:2}
    let str='';
    for(let key in json){
        str+=key+'='+json[key]+'&'
    }
    //a=1&b=2&t=随机数、
    //return str.substring(0,str.length-1)
    return str+'t='+Date.now();
}
function ajax(option) {
    let options=option || {};
    let url=options.url;
    let method=options.method || 'get';
    console.log(method);
    if(!url){
        console.log('必须传url')
        return;
    }
    let xhr = new XMLHttpRequest();

    switch(method.toLowerCase()){
        case 'get':
            xhr.open('get', url+'?'+json2url(option.data), true);
            xhr.send();
            break;
        case 'post':
            xhr.open('post', url, true);
            xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
            xhr.send(json2url(options.data));
            break;
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                options.success && options.success(JSON.parse(xhr.responseText))
            }else{
                options.error && options.error(xhr.status)
            }
        }
    }
}
