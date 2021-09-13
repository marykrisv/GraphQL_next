const graphql = require('graphql')
const {GraphQLObjectType, GraphQLInt, GraphQLString} = graphql

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {type: GraphQLInt},
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        email: {type: GraphQLString},
        gender: {type: GraphQLString},
    })
})

module.exports = UserType