import { useState } from "react"
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Container } from "./container";

export const Search = () => {
    const [meal, setMeal] = useState("");
    const changeMeal = (event) => {
        setMeal(event.target.value);
    }
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/search/${meal}`);
    }
    return (
        <Container>
            <form action="" className="flex justify-center items-center mb-10 relative w-full md:w-1/2 mx-auto" onSubmit={handleSubmit}>
                <FaSearch className="absolute left-3 text-white" />
                <input type="text" onChange={changeMeal} className="w-full py-3 px-9 bg-custom-gradient text-white text-[18px] rounded-md" placeholder="meal..." />
            </form>
        </Container>
    )
}