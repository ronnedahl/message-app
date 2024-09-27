const { db } = require('../../services/index.js')
const { sendResponse, sendError} = require('../../responses/index.js')

exports.handler = async (event) => {
     
    const { id } = event.pathParameters


    try{

     const {Items} = await db.delete({
        TableName: 'message-app-db',
         Key: {id: id}  
        })

     if(id){

        return sendResponse(200,{message:'deleted successfully',Items})
    }else{

         return sendError(400,{message: 'could not delete message'})
     }
     
    }catch(error){
   
     return sendError(404,{message:error.message}) 
    }
    
    };