var constants_tmp=require('./constants.js')

var constants=new constants_tmp()
constants.ready.then(function(){
    
    var new_div=document.createElement('div')
    new_div.setAttribute('id','done')
    document.querySelector('main').appendChild(new_div)
})


