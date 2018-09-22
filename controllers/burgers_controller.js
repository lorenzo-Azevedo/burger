var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get("/", function(req, res) {
    res.redirect("/burgers");
  });

router.get('/burgers', function(req,res){
    burger.all(function(burger_data){
        res.render('index',{burger_data});
    })
    
});

// router.post('/burgers/update',function(req,res){
//     burger.update(req.body.burger_id, function(result){
//         res.redirect('/');
//     });
// });

router.post('/burgers/create',function(req,res){
    burger.create(req.body.burger_name, function(result){
        res.redirect('/')
    })
});

router.put('/burgers/:id',function(req,res){
    burger.update(req.params.burger_id, function(result){
        res.sendStatus(200);
    });
});

// router.post('/burgers/update',function(req,res){
//     burger.update(req.body.burger_id, function(result){
//         res.redirect('/');
//     });
// });

// router.get('/burgers/create', function(req,res){
//     burger.create(function(burger_data){
//         res.render('index',{burger_data});
//     })
    
// });

module.exports = router;
