import "./App.css";
import Calendar from "./components/Calendar.jsx";
import Docs from "./components/docs.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Syllabus from "./components/syllabus.jsx";
import Whats from "./components/whats.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/campusDocs",
      element: (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/campusDocs/Home",
      element: (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/campusDocs/Docs",
      element: (
        <>
          <Navbar />
          <Docs />
          <Footer />
        </>
      ),
    },
    {
      path: "/campusDocs/WhatsGrp",
      element: (
        <>
          <Navbar />
          <Whats />
          <Footer />
        </>
      ),
    },
    {
      path: "/campusDocs/Syllabus",
      element: (
        <>
          <Navbar />
          <Syllabus />
          <Footer />
        </>
      ),
    },
    {
      path: "/campusDocs/Calendar",
      element: (
        <>
          <Navbar />
          <Calendar />
          <Footer />
        </>
      ),
    },
    {
      path: "*",
      element: (
        <>
          <Navbar />
          <ErrorPage />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
