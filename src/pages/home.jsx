import { Container } from "../components/container"
import { Popular } from "../components/popular"
import { Vegetarian } from "../components/vegetarian"
import { motion } from "framer-motion"

export const Home = () => {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .5 }}>
            <Container>
                <Vegetarian />
                <Popular />
            </Container>
        </motion.div>
    )
}