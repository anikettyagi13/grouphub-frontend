import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Login from "../Login";

export default function Navigation(){
    return(
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}
