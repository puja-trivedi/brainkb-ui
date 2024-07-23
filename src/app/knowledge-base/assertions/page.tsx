import type { Metadata } from "next";
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, CircularProgress } from '@mui/material';
import styles from './assertions.css'; // Import the CSS module

export const metadata: Metadata = {
    title:"Assertions",

};

type Assertion = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    address: Address;

}

type Geo = {
    lat: string;
    lng: string;
  }
  
type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
}

export default async function Assertions(){
        //! TODO: 1. Update fetch command such that we are querying the correct endpoint
        //!       2. Update the Assertion type to match the data being fetched
        //!       3. Update the Table to display the correct data 
        //const response = await fetch("http://3.134.90.242:8010/query/sparql/?sparql_query=http://3.134.90.242:8010/query/sparql/?sparql_query=SELECT%20%28%3Fs%20as%20%3FID%29%20%28%3Fp%20as%20%3FProperty%29%20%28%3Fo%20as%20%3FData%29%20WHERE%20%7B%0A%20%20%3Fs%20%3Fp%20%3Fo.%0A%20%20%7B%20%0A%20%20%20%20SELECT%20%3Fentity%20%0A%20%20%20%20WHERE%20%7B%20%3Fentity%20biolink%3Acategory%20bican%3AAmplifiedCdna.%20%7D%0A%20%20%7D%20FILTER%20%28%3Fs%20%3D%20%3Fentity%29%0A%7D%0AGROUP%20BY%20%3Fs%20%3Fp%20%3Fo");
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
        return (
            <div style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>
              Assertions
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Company</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((assertion) => (
                    <TableRow key={assertion.id}>
                      <TableCell>{assertion.id}</TableCell>
                      <TableCell>{assertion.name}</TableCell>
                      <TableCell>{assertion.username}</TableCell>
                      <TableCell>{assertion.email}</TableCell>
                      <TableCell>
                        <span className={styles.tooltip} title={`${assertion.address.street}, ${assertion.address.suite}, ${assertion.address.city}, ${assertion.address.zipcode}`}>
                          {assertion.address.zipcode}
                        </span>
                      </TableCell>
                      <TableCell>{assertion.phone}</TableCell>
                      <TableCell>{assertion.company.name}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        );
      

}