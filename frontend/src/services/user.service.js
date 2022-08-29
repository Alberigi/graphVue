import gql from 'graphql-tag'

export class UserService {
    apollo = {};

    constructor(apollo) {
        this.apollo = apollo;
    }

    async getUsers() {
        const result = await this.apollo.query({
            query: gql`
                query{
                    users{
                        id name email role
                    }
                }`,
            fetchPolicy: 'network-only'
        });
        return result ? result.data.users : null;   
    }

    async getUser(filter) {
        const result = await this.apollo.query({
            query: gql`
                query(
                    $id: Int
                    $email: String
                ){
                    user(
                        filter:{
                            id: $id
                            email: $email
                        }
                    ){
                        id name email role
                    }
                }`,
            variables: {
                id: filter.id,
                email: filter.email
            },
            fetchPolicy: 'network-only'
        });
        return result ? result.data.user : null;   
    }

    async deleteUser(filter) {
        const result = await this.apollo.mutate({
            mutation: gql`
                mutation(
                    $id: Int!
                    $email: String!
                ){
                    deleteUser(
                        filter: {
                            id: $id
                            email: $email
                        }
                    ){
                        id name email role
                    }
                }`,
            variables: {
                id: filter.id,
                email: filter.email,
            },
        });
        return result ? result.data.deleteUser : null;
    }

    async newUser(user) {
        const result = await this.apollo.mutate({
            mutation: gql`
                mutation(
                    $name: String!
                    $email: String!
                    $password: String!
                    $role: String
                ){
                    newUser(
                        user: {
                            name: $name
                            email: $email
                            password: $password
                            role: $role
                        }
                    ){
                        id name email role
                    }
                }`,
            variables: {
                name: user.name,
                email: user.email,
                password: user.password,
                role: user.role
            }
        });
        return result ? result.data.newUser : null;
    }

    async updateUser(filter, user) {
        const result = await this.apollo.mutate({
            mutation: gql`
                mutation(
                    $name: String
                    $email: String
                    $password: String
                    $role: String
                ){
                    updateUser(
                        data: {
                            name: $name
                            email: $email
                            password: $password
                            role: $role
                        }
                    ){
                        id name email role
                    }
                }`,
            variables: {
                filtroId: filter.id,
                filtroEmail: filter.email,
                name: user.name,
                email: user.email,
                password: user.password,
                role: user.role
            }
        });
        return result ? result.data.updateUser : null;
    }
}