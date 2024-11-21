import React, { useEffect, useState } from "react";
import './App.css';
import AppRoutes from './routes';
import { useMsal } from "@azure/msal-react";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useIsAuthenticated } from "@azure/msal-react";
import { loginRequest } from "./authentication/authConfig";
import { InteractionRequiredAuthError } from "@azure/msal-browser";

function App() {
  const { instance, accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const [interactionInProgress, setInteractionInProgress] = useState(false);


  
  useEffect(() => {

    // debugger;
    // const apiUrl = process.env.REACT_APP_API_URL;
    // console.log("api url is");
    // console.log(apiUrl);

    // Handle the redirect response
    instance.handleRedirectPromise()
      .then((response) => {
        if (response) {
          console.log("Login response received:", response);
          // You can process the response here, like storing user information, etc.
        }
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });


    const handleAuthentication = async () => {
      if (accounts.length > 0) {
        if (interactionInProgress) return; // Prevent initiating another interaction

        setInteractionInProgress(true);

        try {
          const response = await instance.acquireTokenSilent({
            ...loginRequest,
            account: accounts[0]
          });
          console.log("Token acquired silently:", response);
        } catch (error) {
          if (error instanceof InteractionRequiredAuthError) {
            console.log("Token expired or not available, redirecting to login.");
            try {
              await instance.loginRedirect(loginRequest);
            } catch (redirectError) {
              console.error("Login redirect failed:", redirectError);
            }
          } else {
            console.error("Silent token acquisition failed:", error);
          }
        } finally {
          setInteractionInProgress(false);
        }
      } else {
        if (!interactionInProgress) {
          setInteractionInProgress(true);
          instance.loginRedirect(loginRequest)
            .catch(error => {
              console.error("Login redirect failed:", error);
              setInteractionInProgress(false);
            });
        }
      }
    };

    handleAuthentication();
  }, [instance, accounts, isAuthenticated, interactionInProgress]);
  

  return (
    <div>
      
      <AuthenticatedTemplate>
        <AppRoutes />
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <div>Please sign in to access the application.</div>
      </UnauthenticatedTemplate>
    </div>
  );
}

export default App;
