import {
    GraphQLNonNull, GraphQLID
} from 'graphql'

import User from '../../../models/user'
import {UserType} from '../../types/user'

const querySingleUser = {
    type: UserType,
    args:{
        id:{
            name:'ID',
            type:GraphQLNonNull(GraphQLID)

        }
    },

    resolve(root,params){
        const Users = Users.findById().exec()
        return User
    }
}

export default querySingleUser;
