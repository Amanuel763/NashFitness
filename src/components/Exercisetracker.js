import React, {useState} from 'react'
import Recipe from './Recipe'
import Axios from 'axios'
import {v4 as uuidv4} from 'uuid'
import './ExerciseTracker.css'
import Alert from './AlertComponent'

const Exercisetracker = () => {

    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");
    require('dotenv').config();

    const APP_ID = "3e525ca1";

    const APP_KEY = process.env.REACT_APP_API_KEY;

    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const getData = async() => {
        if(query !== ""){
            const result = await Axios.get(url);
            if(!result.data.more){
                return setAlert("Food not in inventory");
            }
            setRecipes(result.data.hits)
            console.log(result);
            setAlert("");
            setQuery("");
        } else {
            setAlert("Please enter recipe");
        }
    }

    const onChange = e => { 
        setQuery(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();
        getData();
    }

    return (
        <div className='exercise'>
            <h1 onClick={getData}>Explore Healthy Recipe's</h1>
            <form className="search-form" onSubmit={onSubmit}>
            {alert !== "" && <Alert alert={alert}/>}
            <input type="text" placeholder="Search Food" autoComplete="off" onChange={onChange} value={query}></input>
            <input type="submit" value="search"></input>
            </form>
            <div className="recipes">
                {recipes !== [] && recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
            </div>
        </div>
    )
}

export default Exercisetracker

