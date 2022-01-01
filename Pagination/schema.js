const { default: axios } = require('axios');
const {
    GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLSchema
} = require('graphql');

const DataType = new GraphQLObjectType({
    name: "Type",
    fields:()=>({
        id: {type: GraphQLInt},
        title: {type: GraphQLString}
    })
})

const rootQuery = new GraphQLObjectType({
    name: "root",
    fields:{
        ViewData:{
            type: new GraphQLList(DataType),
            resolve(parent , args){
                return axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => res.data)
            }
        }
    }
})
module.exports = new GraphQLSchema({
    query: rootQuery
})