module.exports={
    resources:{
        options:{
            separator:',\n',
            banner:'"Resources":{ \n',
            footer:'}',
            stripBanners:true
        },
        src:['template/resources/*.json'],
        dest:'tmp/resources.json'
    },
    cloudformation:{
        options:{
            separator:'\n',
            banner:'{',
            footer:'}',
            stripBanners:true
        },
        src:['template/*.json','tmp/template.json'],
        dest:'tmp/CF-<%= StackName %>.json'
    }
}
