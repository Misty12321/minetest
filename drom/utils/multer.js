let multer = require('multer');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {//配置目录
        cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {//配置文件名
        console.log(1, file);
        cb(null, decodeURI(file.originalname))
    }
})

let upload = multer({
    fileFilter: function (req, file, cb) {
        file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf-8')
        cb(null, true);
    },
    storage: storage
})

module.exports = upload;