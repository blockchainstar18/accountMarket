import logo from "./logo.svg";
import "./App.css";
import { SideBar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Customers } from "./pages/Customers";
import { Analytics } from "./pages/Analytics";
import { Accounts } from "./pages/Accounts";
import { Financial } from "./pages/Financial";
import { Membership } from "./pages/Membership";
import { store } from "./Store";
import { Footer } from "./components/Footer";
import { Link } from "./pages/Link";
import { Navigate } from "react-router-dom";

function App() {
  const [header, setHeader] = store.useState("Header");

  return (
    <div>
      <BrowserRouter>
        <div className="flex text-[20px]">
          <SideBar />

          <div className="w-full">
            <div className="min-h-[94vh] bg-black">
              <Header />

              <Routes>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/analytics" element={<Analytics />}></Route>
                <Route path="/accounts" element={<Accounts />}></Route>
                <Route path="/financial" element={<Financial />}></Route>
                <Route path="/customers" element={<Customers />}></Route>
                <Route path="/membership" element={<Membership />}></Route>
                <Route path="/link" element={<Link />}></Route>
                <Route
                  path="*"
                  element={<Navigate to="/dashboard" replace />}
                ></Route>
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
