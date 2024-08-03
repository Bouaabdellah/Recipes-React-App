import { Mold } from "./mold"
import { useState } from "react";

export const Popular = () => {
    let [screen, setScreen] = useState(window.innerWidth >= 768 ? 4 : 3);
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768)
            setScreen(4);
        else
            setScreen(3);
    });
    return (
        <div>
            <Mold name="popular" number={12} elePage={screen} tagName="" />
        </div>
    )
}