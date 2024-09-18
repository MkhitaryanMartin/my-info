import { gql } from "@apollo/client";
import client from "./client";


export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      access_token
      refresh_token
    }
  }
`;

export const MY_PROFILE_QUERY = gql`
query MyProfile {
  myProfile{
    name
    avatar
  }
}

`;

export const USER = gql`
query AllUser{
  users{
    id
  }
}`


export const REFRESH_TOKEN_MUTATION = gql`
  mutation RefreshToken($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      access_token
      refresh_token
    }
  }
`;

export async function loginUser(email: string, password: string) {
    try {
      const response = await client.mutate({
        mutation: LOGIN_MUTATION,
        variables: {
          email,
          password,
        },
      });
  
      const { access_token, refresh_token } = response.data.login;

      
      return { access_token, refresh_token };
    } catch (error) {
      console.error("Login error:", error);
    }
  }