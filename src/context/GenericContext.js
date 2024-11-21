import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMsal } from '@azure/msal-react'; // Import MSAL hooks`
import { loginRequest, tokenRequest } from '../authentication/authConfig';

const GenericContext = createContext();
//const apiUrl = "https://mpmiddlewareapi-effmhkhtgqedg4ey.canadacentral-01.azurewebsites.net";
//const apiUrl = "https://localhost:7053";
const apiUrl = process.env.REACT_APP_API_URL;
export const useGenericContext = () => useContext(GenericContext);

const GenericProvider = ({ children }) => {
  const [entities, setEntities] = useState([]);
  const [entityType, setEntityType] = useState('');
  const navigate = useNavigate();
  const { instance, accounts } = useMsal(); // Get MSAL instance and accounts
  const [loadingGeneric, setLoading] = useState(false);


  const getAccessToken = async () => {
    try {
      const activeAccount = accounts[0]; // Get the active account
      if (!activeAccount) {
        throw new Error('No active account found.');
      }

      const response = await instance.acquireTokenSilent({
        ...tokenRequest,
        account: activeAccount
      });

      return response.accessToken;
    } catch (error) {
      console.error('Token acquisition failed:', error);
      return null;
    }
  };


  const fetchEntities = async () => {
    if (entityType) {

      try {
        setLoading(true);
        debugger;
        const token = await getAccessToken(); // Get the token
        //const response = await axios.get(`https://jsonplaceholder.typicode.com/${entityType}`);
        //const response = await axios.get(`https://localhost:7053/api/${entityType}`);
        //https://mpmiddlewareapi-effmhkhtgqedg4ey.canadacentral-01.azurewebsites.net/

        // const response = await axios.get(`https://localhost:7053/api/${entityType}`, {
        //   headers: {
        //     'Cache-Control': 'no-cache, no-store, must-revalidate',
        //     'Pragma': 'no-cache',
        //     'Expires': '0'
        //   }
        // });
        const response = await axios.get(`${apiUrl}/api/${entityType}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
          }
        });

        console.log("fetching get");
        console.log(response);

        setEntities(response.data);
      }
      catch (error) {
        console.error('Error fetching entities:', error);
      } finally {
        setLoading(false); // Stop loader
      }

    }
  };

  useEffect(() => {
    fetchEntities();
  }, [entityType]);

  const setType = (type) => {
    setEntityType(type);
  };

  const addEntity = async (entity) => {
    //const response = await axios.post(`https://jsonplaceholder.typicode.com/${entityType}`, entity);
    //const response = await axios.post(`https://localhost:7053/api/${entityType}`, entity);
    const response = await axios.post(`${apiUrl}/api/${entityType}`, entity);
    setEntities([...entities, response.data]);
    //navigate('/' + entityType);
    navigate(-1);
  };

  const updateEntity = async (entity) => {
    //await axios.put(`https://jsonplaceholder.typicode.com/${entityType}/${entity.id}`, entity);
    //await axios.put(`https://localhost:7053/api/${entityType}/${entity.recid}`, entity);
    await axios.put(`${apiUrl}/api/${entityType}/${entity.recid}`, entity);
    //setEntities(entities.map(e => (e.id === entity.id ? entity : e)));
    setEntities(entities.map(e => (e.recid === entity.recid ? entity : e)));
    //navigate('/' + entityType);
    navigate(-1);
    fetchEntities();
  };

  const deleteEntity = async (id) => {
    //await axios.delete(`https://jsonplaceholder.typicode.com/${entityType}/${id}`);
    //await axios.delete(`https://localhost:7053/api/${entityType}/${id}`);
    await axios.delete(`${apiUrl}/api/${entityType}/${id}`);
    setEntities(entities.filter(e => e.id !== id));
  };

  return (
    <GenericContext.Provider value={{ entities, setType, addEntity, updateEntity, deleteEntity, loadingGeneric }}>
      {children}
    </GenericContext.Provider>
  );
};

export default GenericProvider;
