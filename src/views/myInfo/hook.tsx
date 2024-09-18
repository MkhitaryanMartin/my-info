import React from 'react';
import TymeOf from "./tymeOff"

const useContainer = () => {
    return {
        children: {"time_off": <TymeOf/>}
    };
};

export default useContainer;