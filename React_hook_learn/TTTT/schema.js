const {default: axios} = require('axios');
const {GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema} = require('graphql');

const getAllType = new GraphQLObjectType({
    name: "getAll",
    fields: () => ({
        userId: {
            type: GraphQLString
        },
        id: {
            type: GraphQLString
        },
        title: {
            type: GraphQLString
        },
        completed: {
            type: GraphQLBoolean
        }
    })
})

const rootQuery = new GraphQLObjectType({
    name: "root",
    fields: {
        getAll: {
            type: new GraphQLList(getAllType),
            resolve(parent, args) {
                return axios
                    .get('https://jsonplaceholder.typicode.com/todos')
                    .then((res) => res.data)
            }
        }
    }
})

module.exports = new GraphQLSchema({query: rootQuery})