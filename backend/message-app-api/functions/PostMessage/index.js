const { db } = require('../../services/index.js')
const { sendResponse, sendError } = require('../../responses/index.js')
const { v4: uuid } = require("uuid");


exports.handler = async (event) => {

       try {
        const { text, username } =JSON.parse(event.body)
        if (!event.body) {

            return sendError(400, 'Invalid request: No body found')
        }

       if(!text || !username){

        return sendError('both text and username are required')
       }

        const newid = uuid().substring(0,8)


        const newItem = {
            id: newid,
            createdAt: new Date().toString(),
            text: text,
            username: username
        };

        await db.put({

            TableName: 'message-app-db',
            Item: newItem
        })
        return sendResponse(200, newItem)

    } catch (error) {

        return sendError(404, 'something went wrong')
    }

};