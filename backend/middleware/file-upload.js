const multer = require('multer')
const { v1: uuidv1, v1 } = require('uuid');
const path = require('path');

const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg',
};


const fileUpload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            // const filePath = 'E:/GitHub/EventManagement/backend/upload/images';
            // console.log(filePath)
            // const filePath = path.join(__dirname, './../upload/images');
            const filePath = __dirname;
            cb(null, filePath);
        },
        filename: (req, file, cb) => {
            const ext = MIME_TYPE_MAP[file.mimetype];
            cb(null, v1() + '.' + ext);
        }
    }),
    limits: {
        fileSize: 50000000 // or 1024 * 1024 * 50 // ~50MB
    },
    fileFilter: (req, file, cb) => {
        const isValid = !!MIME_TYPE_MAP[file.mimetype];
        let error  = isValid ? null : new Error('Invalid mime type!')
        cb(error, isValid);
    },
});

module.exports =fileUpload;