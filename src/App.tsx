import React from 'react';
import {Route, Routes} from 'react-router';
import Main from './page/Main';
import EncapsulationEx from "./page/EncapsulationEx";
import GlobalStyle from "./styles/globalStyles";
import AbstractionEx from "./page/AbstractionEx";
import InheritanceEx from "./page/InheritanceEx";
import AbstractInheritanceEx from "./page/AbstractInheritanceEx";
import PolymorphismEx from "./page/PolymorphismEx";
import CompositionEx from "./page/CompositionEx";


function App() {

    return (
        <>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/캡슐화" element={<EncapsulationEx/>}/>
                <Route path="/추상화" element={<AbstractionEx/>}/>
                <Route path="/상속" element={<InheritanceEx/>}/>
                <Route path="/상속+추상화" element={<AbstractInheritanceEx/>}/>
                <Route path="/다형성" element={<PolymorphismEx/>}/>
                <Route path="/합성" element={<CompositionEx/>}/>
            </Routes>
        </>
    )
}

export default App;


