const express = require('express')
const PORT = 5000
const app = express()
const { graphqlHTTP} = require('express-graphql')
const schema = require('./Schemas/index')

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(PORT, () => {
    console.log("Server running...")
})