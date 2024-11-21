// src/pages/DataTable.js
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'age', headerName: 'Age', width: 150 },
  { field: 'email', headerName: 'Email', width: 200 }
];

const DataTable = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const data = response.data.map(user => ({
          id: user.id,
          name: user.name,
          age: Math.floor(Math.random() * 30) + 20, // Random age for demo
          email: user.email
        }));
        setRows(data);
      });
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
};

export default DataTable;
