/**
 * Module dependencies.
 */

var request = require('..');

var url = 'https://gist.github.com/visionmedia/9fff5b23c1bf1791c349/raw/3e588e0c4f762f15538cdaf9882df06b3f5b3db6/works.js';

// request.get(url, function(err, res) {
//     if (err) throw err;
//     console.log(res.text);
// });


request
//.get('http://ubmcmm.baidustatic.com/media/v1/0f000ATlaBMls10NGVgZb0.jpg')
.get('http://file.qianqian.com//data2/music/18623465/18623465.mp3?xcode=c6007cc99c4516980e36f2067d58dcad&src=%22http%3A%2F%2Fpan.baidu.com%2Fshare%2Flink%3Fshareid%3D424894%26uk%3D2872396315%22')
    .parse(function(res, fn) {
        var data = []; // Binary data needs binary storage

        res.on('data', function(chunk) {
            data.push(chunk);
        });
        res.on('end', function() {
            fn(null, Buffer.concat(data));
        });
    })
    .end(function(err, res) {
        if (err) throw err;
        console.log(res.body);
    });