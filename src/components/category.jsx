import { FaPizzaSlice } from "react-icons/fa";
import { GiHamburger, GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export const Category = () => {
    return (
        <div className="flex justify-center gap-4 md:gap-10 mb-20">
            <NavLink className="flex flex-col items-center cursor-pointer" to={"/cuisine/Italian"}>
                <div className="p-3 md:p-6 mb-2 rounded-full bg-custom-gradient">
                    <FaPizzaSlice className="text-[1rem] lg:text-xl text-white" />
                </div>
                <div className="text-[14px] md:text-[1rem]">Italian</div>
            </NavLink>
            <NavLink className="flex cursor-pointer flex-col items-center" to={"/cuisine/American"}>
                <div className="p-3 md:p-6 mb-2 rounded-full bg-custom-gradient">
                    <GiHamburger className="text-[1rem] lg:text-xl text-white" />
                </div>
                <div className="text-[14px] md:text-[1rem]">American</div>
            </NavLink>
            <NavLink className="flex cursor-pointer flex-col items-center" to={"/cuisine/Chinese"}>
                <div className="p-3 md:p-6 mb-2 rounded-full bg-custom-gradient">
                    <GiNoodles className="text-[1rem] lg:text-xl text-white" />
                </div>
                <div className="text-[14px] lg:text-[1rem]">China</div>
            </NavLink>
            <NavLink className="flex cursor-pointer flex-col items-center" to={"/cuisine/Japanese"}>
                <div className="p-3 md:p-6 mb-2 rounded-full bg-custom-gradient">
                    <GiChopsticks className="text--[1rem] lg:text-xl text-white" />
                </div>
                <div className="text-[14px] md:text-[1rem]">Japanese</div>
            </NavLink>
        </div>
    )
} 