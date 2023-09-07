import React from 'react';
import { useRoutes } from "react-router-dom";
import LayOut from './LayOut';
import Parent from './components/main';
import Section1 from './components/main/service/section1/Section1';
import FreeGuide from './components/freeGuide/FreeGuide';
import About from './components/about/About';
import Extra from './components/extra/Extra';




export default function Routes() {
    let element = useRoutes([
        {
            element: <LayOut/>,
        children: [
            {path: "/", element: <Parent/>},
            { path: "service", element: <Section1/>},
            { path: "freeGuide", element: <FreeGuide/> },
            { path: "about", element: <About/> },
            { path: "extra", element: <Extra/> },
        ]
    },
    ]);
    return element;
}
