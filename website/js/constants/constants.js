var init=function(resolve,reject){ 
    resolve()
}

var build=function(){
    var intialize=new Promise(init.bind(this))
    this.ready=intialize     
}

module.exports=build
