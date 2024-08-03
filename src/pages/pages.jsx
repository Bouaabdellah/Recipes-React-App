import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Home } from './home';
import { Category } from '../components/category';
import { Cuisine } from './cuisine';
import { Search } from '../components/search';
import { SearchedMeal } from './serchedMeal';
import { Details } from './details';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { AnimatePresence } from 'framer-motion';

export const Pages = () => {
    const client = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            }
        }
    });
    return (
        <QueryClientProvider client={client}>
            <Router>
                <Header />
                <Search />
                <Category />
                <AnimatePresence mode='wait'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/cuisine/:type' element={<Cuisine />} />
                        <Route path='/search/:meal' element={<SearchedMeal />} />
                        <Route path='/details/:id' element={<Details />} />
                        <Route path='/*' element={<h1>there is error</h1>} />
                    </Routes>
                </AnimatePresence>
                <Footer />
            </Router>
        </QueryClientProvider>
    )
}