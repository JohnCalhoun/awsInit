module.exports={
    options:{
        stderr:true
    },
    metalsmith:{
        command:'node ./html/metalsmith.js'
    },
    favicon:{
        command:'convert -size 16x16 xc:<%= primary_color %> assets/favicon.gif'
    }
}
