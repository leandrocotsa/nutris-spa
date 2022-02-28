
import React from 'react';




import { DataGrid } from '@mui/x-data-grid';


import './FoodTable.css';

const FoodTable = (props) => {



    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 90,
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 150,
            headerAlign: 'center',
            align: 'left'
        },
        {
            field: 'calories',
            headerName: 'Calories',
            width: 150,
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'protein',
            headerName: 'Protein',
            type: 'number',
            width: 110,
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'carbohydrate',
            headerName: 'Carbohydrates',
            width: 160,
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'lipid',
            headerName: 'Lipids',
            width: 160,
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'fiber',
            headerName: 'Fiber',
            width: 160,
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'calcium',
            headerName: 'Calcium',
            width: 160,
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'magnesium',
            headerName: 'Magnesium',
            width: 160,
            headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'iron',
            headerName: 'Iron',
            width: 160,
            headerAlign: 'center',
            align: 'center'
        }
    ];












    return (

        <div className="main__wrapper">
            <div className="food-table_wrapper" style={{ height: 700, width: '100%' }}>
                <DataGrid
                    rows={props.aliments}
                    columns={columns}
                    pageSize={100}
                    rowsPerPageOptions={[100]}
                    
                    sx={{
                        boxShadow: 0,
                        border: 0,
                        
                      }}

                />
            </div>

        </div>
    );

};

export default FoodTable;
