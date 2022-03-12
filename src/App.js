import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import React, {useState, useEffect} from 'react'
import Loader from './loader'
import Tours from './tours'
const url = "https://course-api.com/react-tours-project"


const App = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [tours, setTours] = useState([])
    const getTours = async ()=>{
        setIsLoading(true)
        const response = await fetch(url);
        const tours = await response.json();
        setTours(tours)
        setIsLoading(false)
        console.log(tours)
    }
    const removeTour = (id)=>{
        const singleTour = tours.filter((tour)=>tour.id !== id)
        setTours(singleTour)
    }
    useEffect(()=>{
        getTours()
    }, [])
    if(isLoading){
        return <Loader />
    }
    if(tours.length === 0){
        return(
            <Button className="reloadBtn" onClick={()=>getTours()}>Reload Tours</Button>
        )
    }
    return(
        <div><Tours tours={tours} removeTour={removeTour}/></div>
    )
        
    
}

export default App
