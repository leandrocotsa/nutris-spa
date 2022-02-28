import { Loader } from '@mantine/core';
import React, { useContext, useEffect, useState } from 'react';
import Card from '../../shared/components/UIElements/Card';
import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';
import FoodTable from '../components/FoodTable';


const AllFood = () => {


    const [loadedAliments, setLoadedAliments] = useState();

    const { isLoading, sendRequest } = useHttpClient();

    const auth = useContext(AuthContext);



    useEffect(() => {
        const fetchAliments = async () => {
            try {
                const responseData = await sendRequest(
                    'http://localhost:8080/aliments/',
                    'GET', null,
                    {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + auth.token
                    }
                );
                setLoadedAliments(responseData);
            } catch (err) {

            }
        };
        fetchAliments();

    }, [auth.token, sendRequest]);








    return (

        <div className="main__wrapper">
            <div className="food-plan-group__info">
                <h1>Aliments List</h1>
                <p>Check the catalog of aliments</p>
            </div>

            {!isLoading && loadedAliments
                ?
                <Card>
                    <FoodTable aliments={loadedAliments} />
                </Card>
                :
                <div className='empty-warning'>
                    <Loader color="teal" size="sm" variant="dots" />
                </div>}

        </div>
    );

};

export default AllFood;
