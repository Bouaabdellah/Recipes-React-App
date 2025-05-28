import { useQuery } from "@tanstack/react-query";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { RecipeBox } from "./recipeBox";
import { Link } from "react-router-dom";

export const Mold = ({ name, number, elePage, tagName }) => {
    let shouldFetch; // this is to fetch data just one we open the app
    if (window.localStorage.getItem(name))
        shouldFetch = false;
    else
        shouldFetch = true;
    let { data } = useQuery({
        queryKey: [name],
        queryFn: () => fetchData(name, number, tagName),
        enabled: shouldFetch,
    });
    console.log(shouldFetch);
    if (!shouldFetch)
        data = JSON.parse(window.localStorage.getItem(name));
    //window.localStorage.clear();
    return (
        <div>
            <div className="text-xl font-semibold mb-4 capitalize">{name} food</div>
            <Splide options={{
                perPage: elePage,
                gap: '1rem',
                arrows: false,
                height: '200px',
                pagination: false
            }}>
                {data?.map((ele) => {
                    return (
                        <SplideSlide key={ele.id}>
                            <Link to={`/details/${ele.id}`}>
                                <RecipeBox url={ele.image} title={ele.title} />
                            </Link>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </div>
    )
}

// fetch resipes
const fetchData = async (name, number, tagName) => {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=${number}&tags=${tagName}`);
    const Data = await response.json();
    window.localStorage.setItem(name, JSON.stringify(Data.recipes));
    return Data.recipes;
}