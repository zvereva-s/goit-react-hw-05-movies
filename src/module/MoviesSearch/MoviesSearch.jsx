import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import MoviesSearchForm from "./MoviesSearchForm";
import MoviesList from 'shared/components/MoviesList';
import Loader from 'shared/components/Loader';

import {getMoviesSearch} from '../../shared/service/API/themoviedb';


function MoviesSearch() {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    })
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get("search");

    useEffect(() => {
        async function fetchMoviesBySearch() {
            setState(prevState => ({
                ...prevState, 
                loading: true,
            }))
            try {
                const data = await getMoviesSearch(search);
                setState(prevState => ({
                    ...prevState,
                    items: [...data],
                }))
            }
            catch (error) {
                setState(prevState => ({
                    ...prevState,
                    error,
                }))
                }   
            finally {
                setState(prevState => ({
                    ...prevState, 
                    loading: false,
                }))
            }
        }
        fetchMoviesBySearch();
    }, [search, setState])
    
    function changeSearch({ search }) {
        setSearchParams({ search });
        setState(prevState => ({
            ...prevState,
            items:[],
        }))
    };
    const { items, loading} = state;

    return (
        <>
            <MoviesSearchForm onSubmit={changeSearch} />
            {loading && <Loader />}
            <MoviesList items={items} />
        </>
        
    )
 }
export default MoviesSearch;