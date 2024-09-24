import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Details from "../pages/Details";
import WorkWithUs from "../pages/WorkWithUs";
import NoPage from "../pages/NoPage";
import Subscriptions from "../pages/Subscriptions";
import Contacts from "../pages/Contacts";

function Navbar() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="details" element={<Details />} />
          <Route path="subscriptions" element={<Subscriptions />} />
          <Route path="work-with-us" element={<WorkWithUs />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Navbar;
