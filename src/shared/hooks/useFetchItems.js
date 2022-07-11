import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export function useFetchItems({ getFetch, array = [], params, firstRender = {} }) {
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
                const data = await getFetch(params);
                setState(prevState => ({
                        ...prevState,
                        items: [...prevState.items, ...data]
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
        // console.log('firstRender.current',firstRender.current);

        if (!firstRender.current) {
        fetchData();
        }
        else {
        firstRender.current = false;
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...array]);
    return { state, setState };
};

useFetchItems.defaultProps = {
    getFetch: () => { },
    array: [],
    firstRender:{},
}
useFetchItems.propTypes = {
    getFetch: PropTypes.func.isRequired,
    array: PropTypes.array,
    params: PropTypes.string,
    firstRender: PropTypes.object,
}