import { useSearchParams } from 'react-router-dom';
import { useRef } from 'react';
import MoviesSearchForm from "./MoviesSearchForm";
import MoviesList from 'shared/components/MoviesList';
import Loader from 'shared/components/Loader';

import {getMoviesSearch} from '../../shared/service/API/themoviedb';
import { useFetchItems } from '../../shared/hooks/useFetchItems';

function MoviesSearch() {
    const firstRender = useRef(true);

    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get("search");

    const { state, setState } = useFetchItems({ getFetch: getMoviesSearch, array: [search], params: search, firstRender});
    
    const { items, loading } = state;

    function changeSearch({ search }) {
        setSearchParams({ search });
        setState(prevState => ({
            ...prevState,
            items:[],
        }))
    };
    return (
        <>
            <MoviesSearchForm onSubmit={changeSearch} />
            {loading && <Loader />}
            <MoviesList items={items} />
        </>
        
    )
}

export default MoviesSearch;