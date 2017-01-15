document.addEventListener('DOMContentLoaded',function(){
    var constants_mod=require('./constants/constants.js')
    var constants=new constants_mod()

    constants.ready.then(function(){
        var routes_con=require('./routes/routes.js')
        var routes=new routes_con() 
        constants.routes=routes
    })
});



