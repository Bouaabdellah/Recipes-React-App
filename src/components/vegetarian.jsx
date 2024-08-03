import { useState } from 'react';
import { Mold } from './mold';

export const Vegetarian = () => {
    let [screen, setScreen] = useState(window.innerWidth >= 768 ? 3 : 2);
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768)
            setScreen(3);
        else
            setScreen(2);
    });
    return (
        <div className='md:mb-10'>
            <Mold name="vegetarian" elePage={screen} number={9} tagName="vegetarian" />
        </div>
    )
}