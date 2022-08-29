import gql from 'graphql-tag'

export class LoginService {
    apollo = {};

    constructor(apollo) {
        this.apollo = apollo;
    }

    async login(form) {
        const result = await  this.apollo.query({
            query: gql`
            query(
                $email: String!
                $password: String!
            ){
                login(
                    data: {
                        email: $email
                        password: $password
                    }
                ){
                    id name email token role
                }
            }`,
            variables: {
                email: form.email,
                password: form.password
            }
        })
        return result ? result.data.login : null
    }

    async register(form) {
        const result = await this.apollo.mutate({
            mutation: gql`
                mutation(
                    $name: String!
                    $email: String!
                    $password: String!
                ){
                    registerUser(
                        user: {
                            name: $name
                            email: $email
                            password: $password
                        }
                    ){
                        id name email role
                    }
                }`,
            variables: {
                name: form.name,
                email: form.email,
                password: form.password
            }
        })
        return result ? result.data.registerUser : null
    }
}