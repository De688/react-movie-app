import React from 'react';
import { FaSearch } from 'react-icons/fa';
import '../style/form.css';

function Form({ Searchmovies, setSearchmovies, searchMovie }) {
    return (
        <form>
            <input type="text" value={Searchmovies} onChange={(e) => { setSearchmovies(e.target.value); }} className="name" placeholder="Search your favorite moves" />
            <FaSearch
                className="icon-style"
                type="submit"
                value="Submit"
                onClick={() => { searchMovie(Searchmovies); }} />
        </form>

    );
}
export default Form;
