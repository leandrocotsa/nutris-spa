import { Loader } from '@mantine/core';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';

const FoodTable = () => {


  const [loadedAliments, setLoadedAliments] = useState();

  const { isLoading, sendRequest } = useHttpClient();

  const auth = useContext(AuthContext);











  return (

    <div className="main__wrapper">
        <h1>Hello</h1>

    </div>
  );

};

export default FoodTable;
