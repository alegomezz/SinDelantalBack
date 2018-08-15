import {
    GraphQLList
} from 'graphql'

import User from '../../../models/user'
import {UserType} from '../../types/user'

const queryAllUsers = {
    type: new GraphQLList(UserType),
    resolve(){
        const Users = User.find().exec()
        if (!Users) throw new Error ('Error al traer los usuarios de la db')
        return Users
    }
}

export default queryAllUsers;
