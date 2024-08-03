import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom"
import { RecipeBox } from "../components/recipeBox";
import { Container } from "../components/container";
import { motion } from "framer-motion"

export const Cuisine = () => {
    const params = useParams();
    const { data, isLoading, isError } = useQuery({
        queryKey: [params.type],
        queryFn: () => getData(params.type),
    })
    if (isError)
        return <div>this cuisine doesn 't exist</div>
    else
        if (isLoading)
            return <div className="text-center text-xl font-bold mt-8">Loading...</div>
        else
            if (data)
                return (
                    <motion.div
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: .5 }}>
                        <Container>
                            <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-y-8 justify-items-center">
                                {data.map((ele) => {
                                    return (
                                        <Link to={`/details/${ele.id}`} key={ele.id}>
                                            <RecipeBox url={ele.image} title={ele.title} />
                                        </Link>
                                    )
                                })}
                            </div>
                        </Container>
                    </motion.div>
                )
}

// fetch data depending on cuisine name
const getData = async (cuisineName) => {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${cuisineName}`);
    const Data = await response.json();
    return Data?.results;
}