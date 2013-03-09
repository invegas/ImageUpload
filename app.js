var express = require('express')
    fs = require('fs');
var app = express();
app.listen(8000);

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.use(express.methodOverride());
    app.use(express.bodyParser({
        uploadDir: "public/images",
        keepExtensions: true,
        limit: 10000000 /* 10M  10*1000*1000 */  
        // defer: true 
    }));
    app.use(express.static(__dirname + "/public"));
});



app.post("/upload", function (req, res) {

    var image = req.files.image;

    // fs.rename(image.path, "public/images/text.jpg", function () {
    //     res.send(image);    
    // });
    
    // req.form.on('progress', function(bytesReceived, bytesExpected) {
    //     console.log(((bytesReceived / bytesExpected)*100) + "% uploaded");
    // });

    // req.form.on('end', function() {
    //     console.log(req.files);
    //     res.send("well done");
    // });

    // 首先要处理单个上传和多个上传
    // console.log(image);
    // console.log(image.length);
})