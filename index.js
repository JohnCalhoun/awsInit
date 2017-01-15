#!/usr/bin/env node
var path=require('path')
var fs=require('fs-extra')
var figlet=require('figlet')

types=["cloudformation","lambda","customResource"]
error_message='must be one of:\n    '+types.join(' ')

var arg=require('argparser')
            .create()
            .arglen(1)
            .err(function(e){
                console.log(e.message)
                console.log(error_message)
            })
            .parse();

if(!arg) process.exit();

var type=arg.arg(0)

if( types.indexOf(type) === -1){
    console.log(error_message)
    process.exit()
}

dest=process.cwd()
source=__dirname+'/'+type

console.log(
    figlet.textSync('AWS-INIT')
)

fs.copy(source,dest,
    function(error){
        if(error) return console.log(error)
        console.log('success')
    }
)

