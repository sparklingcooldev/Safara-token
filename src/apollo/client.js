import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'JWT fefege...'
}

export const client = new ApolloClient({

  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/nicolaas0411/busd-contract-events',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/index-node/graphql',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/pancakeswap/blocks',
  }),
  cache: new InMemoryCache(),
})
