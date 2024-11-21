import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchTableDisplayName = async (tableName, interfaceName) => {
    try {
        var data = {
            tableName : tableName,
            interfaceName: interfaceName,
        }
        const response = await axios.post(`${API_URL}/api/DynamicMenu/GetDisplayName`,  data );
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(`Error fetching table display name for ${tableName}:`, error);
        throw error;
    }
};


