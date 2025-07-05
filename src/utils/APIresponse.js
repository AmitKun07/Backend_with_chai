class APIresponse{
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message 
        this.success = statusCode < 400
    }
} 

export {APIresponse}
/**
 * @description A utility function to handle async operations in Express routes.
 * It catches errors and passes them to the next middleware.
 * @param {Function} fn - The async function to be executed.
 * @returns {Function} - A function that wraps the async function with error handling.
 */