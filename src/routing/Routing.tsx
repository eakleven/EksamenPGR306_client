import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNavigation from "../components/shared/MainNavigation";
import { Container } from "react-bootstrap";
import Home from "../pages/Home";
import TvSeries from "../pages/TvSeries";

const Routing: FC = () => {
    return (
        <BrowserRouter>

            <MainNavigation />
            <Container>
                <Routes>
                    <Route path={"/"} element={<Home />}></Route>
                    <Route path={"/tvseries"} element={<TvSeries />}></Route>
                </Routes>
            </Container>

        </BrowserRouter>
    )
}

export default Routing