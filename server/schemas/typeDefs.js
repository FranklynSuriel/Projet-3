const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me: User
        users: [User]
    }
    type User {
        _id: ID
        username: String
        email: String
        savedBooks: [Books]!
        savedTvShows: [TvShows]!
        savedFriends: [Friends]!
    }

    type Books {
        authors: [String]
        title: String
        description: String
        image: String
        bookStatus: String
        bookId: String
        bookComments: [Comments]!
        
    }

    input BookInput {
        authors: [String]
        title: String
        description: String
        bookId: String
        image: String
        bookStatus: String
    }

    type TvShows {
        name: String
        overview: String
        poster: String
        tvShowsId: String
        tvShowsStatus: String
        tvShowsComments: [Comments]!
    }

    input TvShowInput {
        name: String
        overview: String
        poster: String
        tvShowsId: String
        tvShowsStatus: String
    }

    type Comments {
        _id: ID!
        comments: [String]
        
    }
    
    type Friends {
        _id: ID!
        username: String
        
    }

    input FriendInput {
        username: String!
    }
    
    type Auth {
        token: ID!
        user: User
    }
    
    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth

        getAllUsers: [User!]!

        savedBooks(bookData: BookInput!): String
        removeBook(bookId: String!): User

        savedTvShows(TvShowsData: TvShowInput!): String
        removeTvShows(tvShowsId: String!): User

        bookCommentsCreate( comments: String!, bookId: String!): String
        removeBookComment( bookId: String!, _id: ID!): String

        addFriend( Friend: FriendInput!): String
        removeFriends( Friend: FriendInput!): String
    }
`;

module.exports = typeDefs;