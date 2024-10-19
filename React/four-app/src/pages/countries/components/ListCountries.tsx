import { ICountry } from "../../../models/ICountry"

interface ICountriesProps{
    countries : ICountry[];
}

export const ListCountries: React.FC<ICountriesProps> = ({countries}) => {
  return (
   <>
       {countries.map((country:ICountry, index:number) => {
        return  <div Key={index}>
        
        <h2>{country.name.common}</h2>
        </div>
       })}
   
   </>
  )
}
