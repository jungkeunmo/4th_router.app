import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";

const Shell = () => {
    return (
        <div>
            {/* 버튼을 누를 수 있게 하는 링크 만들기*/}
            <Link to="/">Page1</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/p">Page2</Link>
            {/* *************************** */}
            <hr />
            {/* 버튼을 누를 수 있게 하는 링크 만들기*/}
            <Routes>
                <Route path="/" element={<Page1 />}/>
                <Route path="/p" element={<Page2 />}/>
            </Routes>
            {/* *************************** */}
        </div>
    )
};

export default Shell;