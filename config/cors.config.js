const cors = require('cors')

const corsMiddleware = cors({
    origin : 'https://joseluisrodriguez.vercel.app',
    allowedHeaders: ["Content-Type", "Authorization"]
})

module.exports = corsMiddleware