var
    express  = require('express'),
    router   = express.Router(),
    http     = require('http');

router.get('/', function (req, res) {

    //res.send('hello api!');

    res.status(200).json({
        data: {
            message: "hello api!"
        }
    });
});

router.get('/list', function (req, res) {

    res.status(200).json({
        data: {
            message: ['item0','item1','item2']
        }
    });
});

router.get('/detail/:id', function (req, res) {

    console.log(req.params.id);

    res.status(200).json({
        data: {
            message: "detail"
        }
    });
});

module.exports = router;