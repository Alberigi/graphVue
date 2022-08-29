import gql from 'graphql-tag'

export class RoleService {
    apollo = {};

    constructor(apollo) {
        this.apollo = apollo;
    }

    async getRoles() {
        const result = await this.apollo.query({
            query: gql`{roles {id, type}}`,
            fetchPolicy: 'network-only'
        });
        return result ? result.data.roles : null;   
    }

    async getRole(role) {
        const result = await this.apollo.query({
            query: gql`
                query(
                    $id: Int
                    $type: String
                ){
                    role(
                        filter:{
                            id: $id
                            type: $type
                        }
                    ){
                        id nome type
                    }
                }`,
            variables: {
                id: role.id,
                type: role.type
            },
            fetchPolicy: 'network-only'
        });
        return result ? result.data.role : null;   
    }

    async newRole(role) {
        const result = await this.apollo.mutate({
            mutation: gql`
                mutation(
                    $role: String!
                ){
                    newRole(
                        role: $role
                    ){
                        id type
                    }
                }`,
            variables: {
                role: role
            },
        });
        return result ? result.data.newRole : null;   
    }

    async updateRole(filter, role) {
        console.log(role)
        const result = await this.apollo.mutate({
            mutation: gql`
                mutation(
                    $role: String!
                    $filterId: Int
                    $filterType: String
                ){
                    updateRole(
                        filter:{
                            id: $filterId
                            type: $filterType
                        }
                        role: $role
                    ){
                        id  type
                    }
                }`,
            variables: {
                filterId: filter.id,
                filterType: filter.type,
                role: role,
            }
        });
        return result ? result.data.updateRole : null;   
    }

    async deleteRole(filter) {
        const result = await this.apollo.mutate({
            mutation: gql`
                mutation(
                    $id: Int
                    $type: String
                ){
                    deleteRole(
                        filter: {
                            id: $id
                            type: $type 
                        }
                    ){
                        id type
                    }
                }`,
            variables: {
                id: filter.id,
                type: filter.type
            },
        });
        return result ? result.data.deleteRole : null;   
    }
}