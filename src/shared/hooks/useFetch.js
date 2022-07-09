import { useState, useEffect } from 'react';

function useFetch({ getFetch, arr}) {
    
    const [state, setState] = useState({
        items: [],
        loading: false, 
        error: null,
    })

    useEffect(() => {
        async function fetchData() {
            setState(prevState => ({
                ...prevState,
                loading: true,
            }))
            try {
                const data = await getFetch();
                setState(prevState => ({
                    ...prevState,
                    items: [...prevState.items, ...data],
                }));
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
        fetchData()
    }, [...arr]);
    return { state, setState };
};


export default useFetch;

useFetch.defaultProps = {
    getFetch: () => { },
    arr: [],
}