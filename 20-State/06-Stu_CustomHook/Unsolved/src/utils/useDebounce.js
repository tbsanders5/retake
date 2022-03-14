// Goal is to only update the state when enough time has passed.

// need state -- this will hold the value as we figure our life out
import { useState, useEffect } from 'react';

function useDebounce(currentState, timeToWait) {
    const [debounceState, setDebounceState] = useState(currentState);

    useEffect(function() {
        const timeoutHandle = setTimeout(function() {
            setDebounceState(currentState);
        }, timeToWait);

        return () => clearTimeout(timeoutHandle);
    }, [currentState, timeToWait]);

    return debounceState;
}

export default useDebounce;