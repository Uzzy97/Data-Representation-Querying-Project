var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var mongoDB = 'mongodb://G00345816:password123@ds211504.mlab.com:11504/g00345816-project'
mongoose.connect(mongoDB);

var Schema = mongoose.Schema;
var postSchema = new Schema({
    fname: String,
    sname: String,
    number: String,
    occupation: String,
    message: String
})

var PostModel = mongoose.model('post', postSchema);
//Here we are configuring express to use body-parser as middle-ware. 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use("/", express.static(path.join(__dirname, "angular")));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "angular", "index.html"));
})


app.post('/api/posts', function (req, res) {
    console.log("post successful");
    console.log(req.body.fname);
    console.log(req.body.sname);
    console.log(req.body.number);
    console.log(req.body.occupation);
    console.log(req.body.message);

    PostModel.create({
        fname: req.body.fname,
        sname: req.body.sname,
        number: req.body.number,
        occupation: req.body.occupation,
        message: req.body.message
    },
        function (err, data) {
            if (err)
                res.send(err);
            res.json(data);
        })

    // adding this text will close server (stopping double posts)
})

app.get('/api/posts', function (req, res) {

    PostModel.find(function (err, data) {
        if (err)
            res.send(err);
        res.json(data);
    });

})

// Delete Function
app.delete('/api/posts/:id', function (req, res) {
    console.log(req.params.id);

    PostModel.deleteOne({ _id: req.params.id },
        function (err, data) {
            res.send(data);
        })
})

app.get('/api/posts/:id', function (req, res) {
    PostModel.find({ _id: req.params.id },
        function (err, data) {
            if (err)
                return handleError(err);
            res.json(data);
        });
});

app.put('/api/posts/:id', function (req, res) {
    PostModel.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

// Listening to port 8081
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})