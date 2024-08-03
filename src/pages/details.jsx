import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";
import { RecipeBox } from "../components/recipeBox";
import { Container } from "../components/container";
import { useState } from "react";
import { motion } from "framer-motion"

export const Details = () => {
    const params = useParams();
    const { data, isLoading, isError } = useQuery({
        queryKey: [params.id],
        queryFn: () => getData(params.id),
    })
    if (isError)
        return <div>this dish doesn 't exist</div>
    else
        if (isLoading)
            return <div className="text-center text-xl font-bold mt-8">Loading...</div>
        else
            if (data)
                return (
                    <Container>
                        <DetailsComponent data={data} />
                    </Container>
                )
}

// fetch resipes
const getData = async (id) => {
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const Data = await response.json();
    return Data;
}
// Details component
const DetailsComponent = ({ data }) => {
    const [active, setActive] = useState("instructions");
    return (
        <motion.div className="flex gap-8 flex-col items-center lg:flex-row lg:items-start"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .5 }}>
            <RecipeBox url={data.image} title={data.title} />
            <div className="flex-1 lg:flex-1/2">
                <div className="mb-6 flex justify-center">
                    <button className={`py-1 md:py-2 px-2 md:px-4 text-[1rem] md:text-xl font-semibold text-white bg-[#313131] rounded-full cursor-pointer mr-4 ring-2 ring-[#494949] ${active === 'instructions' && 'active'}`} onClick={(eve) => setActive("instructions")}>Instructions</button>
                    <button className={`py-1 md:py-2 px-2 md:px-4 text-[1rem] md:text-xl font-semibold text-white bg-[#313131] rounded-full cursor-pointer ring-2 ring-[#494949] ${active === 'ingredients' && 'active'}`} onClick={(eve) => setActive("ingredients")}>Ingredients</button>
                </div>
                {active === "instructions" ?
                    (<div>
                        <div dangerouslySetInnerHTML={{ __html: data.summary }} className="max-w-full prose">
                        </div>
                        <div className="mt-4 prose" dangerouslySetInnerHTML={{ __html: data.instructions }}>
                        </div>
                    </div>)
                    : (<div>
                        <ul className="pl-6 list-disc">
                            {data.extendedIngredients.map((ele) => {
                                return (<li className="mt-2" key={ele.id}>
                                    {ele.name}
                                </li>)
                            })}
                        </ul>
                    </div>)
                }
            </div>
        </motion.div >
    )
}