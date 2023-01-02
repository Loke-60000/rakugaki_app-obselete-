import React from "react";
import NavBanner from "../Components/NavBanner";
import CarouselBanner from '../Components/Carousel';
import ToolBar from "../Components/ToolBar";
import PlaceholderPost from "../Components/Placeholderpost";


function MainApp(){
    return(
        <>
            <NavBanner/>
            <CarouselBanner/>
            <ToolBar/>
            <PlaceholderPost/>
        </>
    )
}

export default MainApp;