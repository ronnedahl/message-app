const { db } = require('../../services/index.js')
const { sendResponse, sendError} = require('../../responses/index.js')

exports.handler = async (event) => {
    
    try{

     const {Items} = await db.scan({
        TableName: 'message-app-db',
        FilterExpression : 'attribute_exists(#text)',
        ExpressionAttributeNames: {
             '#text': 'text'
        }
     })

     if(Items.length < 1){
        return sendError(400,{message: 'No messages found'})
        
    }else{
  
        return sendResponse(200,Items)
     }
     
    }catch(error){
   
     return sendError(404,{message:error.message}) 
    }
    
    };

    