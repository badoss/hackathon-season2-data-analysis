import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
//   { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'FIRSTNAME',
    headerName: 'First name',
    width: 150,
    editable: false,
  },
  {
    field: 'LASTNAME',
    headerName: 'Last name',
    width: 150,
    editable: false,
  },
  {
    field: 'BIRTHDAY',
    headerName: 'birthday',
    width: 150,
    editable: false,
  },
  {
    field: 'DEPT',
    headerName: 'dept',
    width: 250,
    editable: false,
  },
  {
    field: 'EMPID',
    headerName: 'EMPID',
    width: 150,
    editable: false,
  },
  {
    field: 'GENDER',
    headerName: 'GENDER',
    width: 150,
    editable: false,
  },
  {
    field: 'HIRED',
    headerName: 'HIRED',
    width: 150,
    editable: false,
  },
  {
    field: 'NATIONALITY',
    headerName: 'NATIONALITY',
    width: 150,
    editable: false,
  },
  {
    field: 'PASSPORT',
    headerName: 'PASSPORT',
    width: 150,
    editable: false,
  },
  {
    field: 'POSITION',
    headerName: 'POSITION',
    width: 150,
    editable: false,
  },
  {
    field: 'REGION',
    headerName: 'REGION',
    width: 150,
    editable: false,
  },
  {
    field: 'STATUS',
    headerName: 'STATUS',
    width: 150,
    editable: false,
  }
//   {
//     field: 'lastName',
//     headerName: 'Last name',
//     width: 150,
//     editable: false,
//   },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 110,
//     editable: false,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
];




// eslint-disable-next-line
const datainput = [{id : 1 , BIRTHDAY: '28-05-1963', DEPT: 'Pilot',EMPID: 3,FIRSTNAME: 'Jada',GENDER: '0',HIRED: '11-02-2001', LASTNAME: 'Bender',NATIONALITY: 'Pakistan', PASSPORT: 'JUI65YBK7AF',POSITION: 'Pilot',REGION: 'Canada',STATUS: '1'},
{id : 2 , BIRTHDAY: '03-12-1982', DEPT: 'Flight Planning',EMPID: 5,FIRSTNAME: 'Lillian',GENDER: '0',HIRED: '19-05-2002', LASTNAME: 'Reese',NATIONALITY: 'Ukraine', PASSPORT: 'AZE20CSG4MU',POSITION: 'Steward',REGION: 'Canada',STATUS: '1'},
{id : 3 , BIRTHDAY: '24-05-1987', DEPT: 'Aircraft Maintenance',EMPID: 23,FIRSTNAME: 'Armand',GENDER: '0',HIRED: '19-06-2007', LASTNAME: 'Horn',NATIONALITY: 'Netherlands', PASSPORT: 'NFH65BYM0VB',POSITION: 'Airhostess',REGION: 'Ocenia',STATUS: '1'},
{id : 4 , BIRTHDAY: '15-07-1974', DEPT: 'Aircraft Maintenance',EMPID: 29,FIRSTNAME: 'Rowan',GENDER: '1',HIRED: '27-03-2004', LASTNAME: 'Leonard',NATIONALITY: 'Germany', PASSPORT: 'CMK62UAD3VK',POSITION: 'Pilot',REGION: 'Ocenia',STATUS: '1'},
{id : 5 , BIRTHDAY: '23-11-1967', DEPT: 'Flight Planning',EMPID: 33,FIRSTNAME: 'Carter',GENDER: '0',HIRED: '27-02-2005', LASTNAME: 'Velasquez',NATIONALITY: 'Indonesia', PASSPORT: 'EWD45RJW5YK',POSITION: 'Pilot',REGION: 'APAC',STATUS: '1'},
{id : 6 , BIRTHDAY: '26-03-1972', DEPT: 'Flight Attendance',EMPID: 34,FIRSTNAME: 'Selma',GENDER: '0',HIRED: '10-10-2008', LASTNAME: 'Bush',NATIONALITY: 'Italy', PASSPORT: 'BFS82MEY3CX',POSITION: 'Airhostess',REGION: 'USA',STATUS: '1'},
{id : 7 , BIRTHDAY: '16-04-1999', DEPT: 'Flight Attendance',EMPID: 50,FIRSTNAME: 'Calvin',GENDER: '1',HIRED: '18-03-2011', LASTNAME: 'Roach',NATIONALITY: 'Mexico', PASSPORT: 'MRC33GHJ2KW',POSITION: 'Steward',REGION: 'Europe',STATUS: '1'},
{id : 8 , BIRTHDAY: '04-06-1971', DEPT: 'Flight Attendance',EMPID: 66,FIRSTNAME: 'Zachery',GENDER: '0',HIRED: '25-08-2011', LASTNAME: 'Valentine',NATIONALITY: 'Philippines', PASSPORT: 'WKV12UQC6QF',POSITION: 'Steward',REGION: 'Middle East',STATUS: '1'},
{id : 9 , BIRTHDAY: '13-06-1998', DEPT: 'Aircraft Maintenance',EMPID: 80,FIRSTNAME: 'Ryan',GENDER: '0',HIRED: '31-07-2019', LASTNAME: 'Rush',NATIONALITY: 'Italy', PASSPORT: 'EUC74ENE9ZK',POSITION: 'Pilot',REGION: 'Middle East',STATUS: '1'},
{id : 10 , BIRTHDAY: '09-03-1982', DEPT: 'Aircraft Maintenance',EMPID: 93,FIRSTNAME: 'Honorato',GENDER: '1',HIRED: '04-02-2017', LASTNAME: 'Maxwell',NATIONALITY: 'France', PASSPORT: 'UXL43IOW6OV',POSITION: 'Airhostess',REGION: 'Europe',STATUS: '1'},
{id : 11 , BIRTHDAY: '29-06-1996', DEPT: 'Flight Attendance',EMPID: 95,FIRSTNAME: 'Dara',GENDER: '1',HIRED: '18-05-2011', LASTNAME: 'Wilcox',NATIONALITY: 'Singapore', PASSPORT: 'OUP31WOE2IE',POSITION: 'Airhostess',REGION: 'Canada',STATUS: '1'},
{id : 12 , BIRTHDAY: '21-12-1999', DEPT: 'Pilot',EMPID: 97,FIRSTNAME: 'Dante',GENDER: '0',HIRED: '22-02-2016', LASTNAME: 'Hart',NATIONALITY: 'Peru', PASSPORT: 'SUF73DKV4QE',POSITION: 'Pilot',REGION: 'Europe',STATUS: '1'}]




// eslint-disable-next-line
const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function Table() {
  return (
    <Box sx={{ height: 700, width: '100%' , backgroundColor : "#FFFF" , borderRadius : 2}}>
      <DataGrid
        rows={datainput}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[20]}
        // checkboxSelection
        disableSelectionOnClick
        // experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}