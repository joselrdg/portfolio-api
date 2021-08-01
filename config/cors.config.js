const cors = require('cors')

const corsMiddleware = cors({
    origin : process.env.CORS_ORIGIN || 'http://localhost:3000',
    // allowedHeaders: ["Content-Type", "Authorization"]
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
})

module.exports = corsMiddleware