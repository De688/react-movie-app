import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Form from './components/form';
import Moviecard from './components/moviecard';
import Footer from './components/footer';

function App() {
    const [Allovies, setAllmovies] = useState([]);
    const [Searchmovies, setSearchmovies] = useState('');

    const API_URL = 'http://www.omdbapi.com/?apikey=8da81f98';


    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setAllmovies(data.Search);
        console.log(data.Search);
    };


    useEffect(() => {
        searchMovie('all');
    }, []);


    return (

        <div className="App">
            <Navbar />
            <Form searchMovie={searchMovie} Searchmovies={Searchmovies} setSearchmovies={setSearchmovies} />
            <div className="all-movie">
                {Allovies.map(movie => (
                    <Moviecard movie={movie} />
         ))}
            </div>
            <Footer />
        </div>
    );
}

export default App;
