import { Link } from "react-router-dom"
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Container } from "./container";

export const Header = () => {
    return (
        <Container>
            <Link className="flex gap-2 items-center text-2xl font-bold mb-8 text-[#313131]" to={"/"}>
                <MdOutlineRestaurantMenu />
                Dilicious
            </Link>
        </Container>
    )
}