import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import { RecipeBox } from "../components/recipeBox";
import { Container } from "../components/container";
import { useEffect } from "react";
import { motion } from "framer-motion"

export const SearchedMeal = () => {
    const params = useParams();
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["meal"],
        queryFn: () => getData(params.meal),
    })
    useEffect(() => {
        if (params.meal) {
            refetch();
        }
    }, [params.meal, refetch]);
    if (isLoading)
        return <div className="text-center text-xl font-bold mt-8">Loading...</div>
    else
        if (data?.length !== 0)
            return (
                <motion.div
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .5 }}>
                    <Container>
                        <div className="mt-10 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-4 gap-y-8">
                            {data.map((ele) => {
                                return (
                                    <Link to={`/details/${ele.id}`} key={ele.id}>
                                        <RecipeBox url={ele.image} title={ele.title} key={ele.id} />
                                    </Link>
                                )
                            })}
                        </div>
                    </Container>
                </motion.div>
            )
        else
            return <div className="text-center text-xl font-bold mt-8">Sorry, we don 't have this meal</div>
}

// fetch data depending on cuisine name
const getData = async (meal) => {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${meal}`);
    const Data = await response.json();
    return Data.results;
}