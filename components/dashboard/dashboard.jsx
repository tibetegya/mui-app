import { DataGrid } from '@mui/x-data-grid';
import Image from 'next/image'
import { Typography, TextField, Button } from '@mui/material';

/** local imports */
import styles from './dashboard.module.scss'
import Sidebar from 'components/sidebar'
const data = {
  logo: 'https://assets-global.website-files.com/5e3177cecf36f6591e4e38cb/5ea2a86505e63bdd814cf868_Logo.png',
  background: 'https://images.unsplash.com/photo-1637406305183-ff6d191b5880?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=993&q=80'
}
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
];

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
const Dashboard = () => {
  const { logo, background } = data
  return (
    <div className={styles.wrapper}>
    <div className={styles.header}>
      <div className={styles.logo}>
        <Image layout="fill" objectFit="contain" src={logo}/>
      </div>
    </div>
    <div className={styles.content}>
      <div className={styles.sidebar}><Sidebar /></div>
      <div className={styles.main}>
        <div>
          <Typography variant="h5" gutterBottom component="div">
            Title
          </Typography>
        </div>
        <div className={styles.table}>
        <DataGrid
          className={styles.table}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
        </div>
      </div>
    </div>
    </div>
  )
}
export default Dashboard
