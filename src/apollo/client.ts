
import Cookies from '@/utils/cookies';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { REFRESH_TOKEN_MUTATION } from './user';


const fetchNewAccessToken = async (client: ApolloClient<any>, refreshToken: string) => {
  try {
    const { data } = await client.mutate({
      mutation: REFRESH_TOKEN_MUTATION,
      variables: { refreshToken },
    });
    
    const { access_token, refresh_token } = data.refreshToken;
    
    Cookies.setCookie({ key: 'access_token', value: access_token });
    Cookies.setCookie({ key: 'refresh_token', value: refresh_token });
    
    return access_token;
  } catch (error) {
    console.error('Ошибка обновления токена:', error);
    return null;
  }
};

const httpLink = createHttpLink({
  uri: 'https://api.escuelajs.co/graphql',
});

const authLink = setContext(async (_, { headers }) => {

  let token = Cookies.getStringCookie({key:'access_token'});
  const refreshToken = Cookies.getStringCookie({key: "refresh_token"});
  if (!token && refreshToken) {
    const apolloClient = new ApolloClient({
      link: httpLink, 
      cache: new InMemoryCache(),
    });
    token = await fetchNewAccessToken(apolloClient, refreshToken);
  }

  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client