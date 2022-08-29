import Vue from 'vue';
import {ApolloClient} from 'apollo-client';
import {setContext} from 'apollo-link-context';
import {createHttpLink} from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({ uri: 'http://localhost:4000/' });
const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : null,
        }
    }
});

export const apollo = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

Vue.use({
    install(Vue) {
        Vue.prototype.$api = apollo
    }
});