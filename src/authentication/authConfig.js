import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: "e04037b4-9e9e-40d7-8b8f-8e60b07fc218",
    authority: "https://login.microsoftonline.com/5f756efe-3ad6-4d9e-bdc0-6bb26a9a231f",
    redirectUri: process.env.REACT_APP_UI_URL,
    //redirectUri: "http://localhost:3000",
    //redirectUri: "https://mpmiddlewareui-gyhrb5hmetgpe5d7.canadacentral-01.azurewebsites.net",
  },
  cache: {
    cacheLocation: "localStorage", // This allows the token to be stored in local storage for SPA usage
    storeAuthStateInCookie: false, // Set to true if issues with IE11 or Edge
  },
};


export const loginRequest = {
  scopes: ["User.Read"],
};

export const tokenRequest = {
  scopes: ["api://0a8a4d06-98b9-49a2-9d17-a0d67df5e50f/access_as_user"],
};



const msalInstance = new PublicClientApplication(msalConfig);

export default msalInstance;
