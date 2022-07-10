import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const SingleMoviePage = lazy(() => import('./pages/SingleMoviePage'));
const CastPage = lazy(() => import('./pages/CastPage'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const Loader = lazy(() => import('./shared/components/Loader'));



const UserRoutes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>    
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<MoviesPage />}/>
                    <Route path="/movies/:id" element={<SingleMoviePage />}>
                        <Route path="/movies/:id/cast" element={<CastPage />} />
                        <Route path="/movies/:id/reviews" element={<ReviewsPage />}/>
                    </Route>
                    <Route path='*' element={<NotFoundPage />}/>
            </Routes>
        </Suspense>
    )
}
export default UserRoutes;