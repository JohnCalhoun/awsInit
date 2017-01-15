exports.handler = function(event, context,callback) {
    console.log('Received event:', JSON.stringify(event, null, 2));
    body=JSON.parse(event.body) 
   
    context.succeed()
};

