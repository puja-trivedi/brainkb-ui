import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, CircularProgress } from '@mui/material';


// export default function EvidenceDetails({params}) {
//     return (
//         <div>
//             <h1>Evidence Details {params.evidenceId}</h1>
//         </div>
//     )
// }

// type Evidence = {
//     id: number;
//     name: string;
//     username: string;
//     email: string;
//     phone: string;
//     address: Address;
//     company: Company;

// }

// type Geo = {
//     lat: string;
//     lng: string;
// }

// type Address = {
//     street: string;
//     suite: string;
//     city: string;
//     zipcode: string;
//     geo: Geo;
// }

// type Company = {
//     name: string;
//     catchPhrase: string;
//     bs: string;
// }





export default async function EvidenceDetails({params}){
    // const { evidenceId } = params.evidenceId as { evidenceId: string };
    // console.log('Evidence ID:', evidenceId); // Log evidenceId to check the value
    // console.log('Params:', params); // Log params to check the structure
    //console.log("PARARMS.EVIDENCEID p1:", params.evidenceId);
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.evidenceId}`);
    const data = await response.json();
    console.log(data);
    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>
                Evidence Details
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Company Name</TableCell>
                            <TableCell> Catch Phrase </TableCell>
                            <TableCell> BS </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>{data.id}</TableCell>
                            <TableCell>{data.company.name}</TableCell>
                            <TableCell>{data.company.catchPhrase}</TableCell>
                            <TableCell>{data.company.bs}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
    //console.log("PARARMS.EVIDENCEID:", params.evidenceId);
}
