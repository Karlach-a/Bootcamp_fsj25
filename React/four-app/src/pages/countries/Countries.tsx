import { useEffect, useState } from "react";
import { ICountry } from "../../models/ICountry";
import { ListCountries } from "./components/ListCountries";

const APIuri ="https://restcountries.com/v3.1/all";

export const Countries = () => {

const[countries,setCountries]=useState<ICountry[]>([]);//este estado estara recibiendo un estado de ICountry

    const getCountries = async () => {

        const response:Response = await fetch(APIuri)
        const data:ICountry[] = await response.json();
        console.log(data);
        setCountries(data);

    }


    useEffect( () =>{
        getCountries();

    },[]);

  return (

    <div>
      Countries
     <ListCountries countries={countries}/>
     </div>

  )
}


