const { db } = require('../../services/index.js')
const { sendResponse, sendError } = require('../../responses/index.js')

exports.handler = async (event) => {

    try {

        const { id } = event.pathParameters
        const { text, username } = JSON.parse(event.body)

        if (!event.body) {

            return sendError(400, 'the body is empty')
        }

        if (!text || !username) {
            return sendError(404, 'tex and username must be filled in')
        }
       
        const result = await db.update({
            TableName: 'message-app-db',
            Key: {
                 id: id },
            
                 UpdateExpression: 'set #text = :text, #username = :username, #createdAt = :createdAt',
                 ExpressionAttributeNames: {
                     '#text': 'text',
                     '#username': 'username',
                     '#createdAt': 'createdAt',
                     
                 },
                 ExpressionAttributeValues: {
                     ':text': text,
                     ':username': username,
                     ':createdAt': new Date().toString(),
                     
                 },
            ReturnValues: "ALL_NEW"
        })


       return sendResponse(200, { message: 'Message updated successfully', updatedItem: result.Attributes })

    } catch (error) {

        return sendError(404, { message: error.message })
    }

};