import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const SecondaryContext = createContext();
//const apiUrl = "https://mpmiddlewareapi-effmhkhtgqedg4ey.canadacentral-01.azurewebsites.net";
//const apiUrl = "https://localhost:7053";
const apiUrl = process.env.REACT_APP_API_URL;

export const useSecondaryContext = () => useContext(SecondaryContext);

const SecondaryProvider = ({ children }) => {
  const [entities, setEntities] = useState([]);
  const [entityType, setEntityType] = useState('');
  const [interfaceName, setInterfaceName] = useState('');
  const [loadingSecondary, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchEntities = async () => {
    if (entityType) {
      //const response = await axios.get(`https://jsonplaceholder.typicode.com/${entityType}`);
      //const response = await axios.get(`https://localhost:7053/api/${entityType}`);

      //const response = await axios.get(`https://localhost:7053/api/${entityType}`, {
      try {
        setLoading(true);
        const response = await axios.get(`${apiUrl}/api/${entityType}`, {
          params: {
            interfaceName: interfaceName
          },
          headers: {
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
    console.log("consoling from secondary context");
    console.log(interfaceName);
  };

  const setInterfaceType = (name) => {
    setInterfaceName(name);
  };

  const addEntity = async (entity) => {
    //const response = await axios.post(`https://jsonplaceholder.typicode.com/${entityType}`, entity);
    //const response = await axios.post(`https://localhost:7053/api/${entityType}`, entity);
    const response = await axios.post(`${apiUrl}/api/${entityType}`, entity);
    setEntities([...entities, response.data]);
    navigate('/' + entityType);
  };

  const updateEntity = async (entity) => {
    //await axios.put(`https://jsonplaceholder.typicode.com/${entityType}/${entity.id}`, entity);
    await axios.put(`${apiUrl}/api/${entityType}/${entity.recid}`, entity);
    //await axios.put(`https://localhost:7053/api/${entityType}/${entity.recid}`, entity);
    //setEntities(entities.map(e => (e.id === entity.id ? entity : e)));
    setEntities(entities.map(e => (e.recid === entity.recid ? entity : e)));
    //navigate('/' + entityType);
    fetchEntities();
    navigate(-1);
  };

  const deleteEntity = async (id) => {
    //await axios.delete(`https://jsonplaceholder.typicode.com/${entityType}/${id}`);
    await axios.delete(`${apiUrl}/api/${entityType}/${id}`);
    //await axios.delete(`https://localhost:7053/api/${entityType}/${id}`);
    setEntities(entities.filter(e => e.id !== id));
    fetchEntities();
  };

  const resetEntity = async (ids) => {
    console.log(ids);
    if (ids.length > 100) {
      alert("You cannot process more than 100 records at once.");
      return;
    }
    const requests = ids.map(id => axios.put(`${apiUrl}/api/${entityType}/update-reset/${id}/${interfaceName}`));

    await Promise.all(requests);

    setEntities(entities.filter(e => !ids.includes(e.id)));
    fetchEntities();
  };

  const processEntity = async (ids) => {
    if (ids.length > 100) {
      alert("You cannot process more than 100 records at once.");
      return;
    }
    const requests = ids.map(id => axios.put(`${apiUrl}/api/${entityType}/update-process/${id}/${interfaceName}`));

    await Promise.all(requests);

    setEntities(entities.filter(e => !ids.includes(e.id)));
    fetchEntities();
  };

  const pendingEntity = async (ids) => {
    if (ids.length > 100) {
      alert("You cannot process more than 100 records at once.");
      return;
    }
    const requests = ids.map(id => axios.put(`${apiUrl}/api/${entityType}/update-pending/${id}/${interfaceName}`));

    await Promise.all(requests);

    setEntities(entities.filter(e => !ids.includes(e.id)));
    fetchEntities();
  };

  return (
    <SecondaryContext.Provider value={{ entities, setType, setInterfaceType, addEntity, updateEntity, deleteEntity, resetEntity, pendingEntity, processEntity, loadingSecondary }}>
      {/* {loading && <div className="loader">Loading...</div>}  */}
      {children}
    </SecondaryContext.Provider>
  );
};

export default SecondaryProvider;
