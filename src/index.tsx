import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/register";


const root = ReactDOM.createRoot(document.getElementById('app')!)
// v18 的新方法

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>

</BrowserRouter>)


