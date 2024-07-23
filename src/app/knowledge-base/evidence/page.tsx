import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, CircularProgress } from '@mui/material';


export const metadata: Metadata = {
        title:"Evidence",

};

type Evidence = {
        id: number;
        name: string;
        username: string;
        email: string;
        phone: string;
        address: Address;
        company: Company;

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





export default async function Evidence(){
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
        return (
            <div style={{ padding: '20px' }}>
                <Typography variant="h4" gutterBottom>
                    Evidence
                </Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Company</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((evidence) => (
                                <TableRow key={evidence.id}>
                                    <TableCell>{evidence.id}</TableCell>
                                    <TableCell>
                                        <Link href={`/knowledge-base/evidence/${evidence.id}`}> {/* Add the link with the evidenceId */}
                                            <a>{evidence.company.name}</a>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
} 
