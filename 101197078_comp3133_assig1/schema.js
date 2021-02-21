const { gql } = require('apollo-server-express');

exports.typeDefs = gql `

type Hotel {
    hotel_id: Int!
    hotel_name: String!
    street: String!
    city: String!
    postal_code: String!
    price: Float!
    email: String!

}

type User {
    user_id: Int!
    username: String!
    password: String!
    email: String!
}

type Booking {
    user_id: Int!
    booking_date: String!
    booking_start: String!
    booking_end: String!
    hotel_id: Int!
}

   type Query {
     getHotel: [Hotel]
     getHotelByCity(city: String!): [Hotel]
     getHotelByName(hotel_name: String!): [Hotel]
     getUser: [User]
     getBooking: [Booking]
   }

   type Mutation {
     addHotel(
        hotel_id: Int!
        hotel_name: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!
        ):Hotel
     addUser(
        user_id: Int!
        username: String!
        password: String!
        email: String!
     ):User
     addBooking(
        user_id: Int!
        booking_date: String
        booking_start: String!
        booking_end: String!
        hotel_id: Int!
     ):Booking
   }

   
`