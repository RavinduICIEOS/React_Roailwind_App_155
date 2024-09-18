/*import PageContent from '../components/PageContent';

function Merchandise() {
  return (
    <PageContent title="Shop Now">
      <p>Take Away!!!!!!!!</p>
    </PageContent>
  );
}

export default Merchandise;*/


//import { useState , useEffect } from "react";
import useHttp from "../hooks/useHttp.js";
import Error from './Error.js';
import Cloths from "../Cloths.js";

const requestConfig = {};


export default function Merchandise(){
    const {
        data: loadedMeals,
        isLoading,
        error
    }  = useHttp('http://localhost:3000/meals',requestConfig,[]);

   // console.log(loadedMeals);

    if(isLoading){
        return <p className="center">Fetching meals...</p>
    }

    if(error){
        return <Error title="Failed to fetch meals" message={error}/>
    }
   // const [loadedMeals, setLoadedMeals] = useState([]);

    /*useEffect(() => {
        async function fetchMeals() {
            const response = await fetch('http://localhost:3000/meals');
    
            if(!response.ok){
                //...
            }
    
            const meals = await response.json();
            setLoadedMeals(meals);    
        }
    
        fetchMeals();
    },[]);*/

  /*  if (!loadedMeals || loadedMeals.length === 0) {
      return <p>No meals available!</p>;  // Handling empty data
  }*/
  
   
    return (
        <ul id="meals" className="flex flex-wrap list-none p-20 m-10 gap-0 justify-between">
            {loadedMeals.map((meal) => (
                <Cloths key={meal.id} meal={meal} />
            ))}
        </ul>
    );

}