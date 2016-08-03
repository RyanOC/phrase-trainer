var
    express  = require('express'),
    router   = express.Router(),
    http     = require('http');

router.get('/', function (req, res) {

    res.status(200).json({
        data: {
            message: "hello from the api!"
        }
    });
});

router.get('/videolist', function (req, res) {

    res.status(200).json({
        data: {
            Videos: [
                {
                    Title:"Thickfreakness",
                    Desc:"Learn the intro to The Black Key's Thickfreakness",
                    VideoId:"2om9HkZ89G4",
                    Category:"Guitar",
                    Segments: ["1.2-7.8"]
                },
                {
                    Title:"Empire State of Mind",
                    Desc:"Learn the main beat from Empire State of Mind",
                    VideoId:"MVPydM-IGpk",
                    Category:"Drums",
                    Segments: ["36.4-61.9"]
                },
                {
                    Title:"The Dougie",
                    Desc:"Learn to dance the Dougie!",
                    VideoId:"4EIl1qh9lqU",
                    Category:"Dance",
                    Segments: ["104-108"]
                }
            ]
        }
    });
});

router.get('/videodetail/:id', function (req, res) {

    console.log(req.params.id);

    res.status(200).json({
        data: {
            message: "videodetail" + req.params.id
        }
    });
});

module.exports = router;