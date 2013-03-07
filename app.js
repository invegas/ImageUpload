var express = require('express')
var app = express();
app.listen(8000);

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.use(express.bodyParser({
        uploadDir: "public/images",
        keepExtensions: true,
        limit: 10000000, /* 10M  10*1000*1000 */  
        defer: true 
    }));
    app.use(express.static(__dirname + "/public"));
});



app.post("/upload", function (req, res) {
    console.log(req.files);
    var image = req.files.image;

    //首先要处理单个上传和多个上传
    // console.log(image);
    // console.log(image.length);

    if (Array.isArray(image)) console.log("is array");
    else console.log("is not array");

    res.send("ok");
})