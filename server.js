var express = require('express');
var app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(__dirname + '/client'));

app.post('/c4', function (req, res) {
    console.log(req)
    
    
    // res.end();
});

app.get('/c4', function (req, res) {
    // res.render("/");
});

app.listen(3000, () => {
    console.log('server is listening ')
})



