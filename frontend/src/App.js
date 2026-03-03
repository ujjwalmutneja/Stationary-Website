// import { useEffect } from "react";
// import "@/App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import axios from "axios";

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
// const API = `${BACKEND_URL}/api`;

// const Home = () => {
//   const helloWorldApi = async () => {
//     try {
//       const response = await axios.get(`${API}/`);
//       console.log(response.data.message);
//     } catch (e) {
//       console.error(e, `errored out requesting / api`);
//     }
//   };

//   useEffect(() => {
//     helloWorldApi();
//   }, []);

//   return (
//     <div>
//       <header className="App-header">
//         <a
//           className="App-link"
//           href="https://emergent.sh"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img src="https://avatars.githubusercontent.com/in/1201222?s=120&u=2686cf91179bbafbc7a71bfbc43004cf9ae1acea&v=4" />
//         </a>
//         <p className="mt-5">Building something incredible ~!</p>
//       </header>
//     </div>
//   );
// };

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />}>
//             <Route index element={<Home />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar.js';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import PSEBBooks from './pages/PSEBBooks';
import CreativeGifts from "./pages/CreativeGifts";
import Projects from './pages/Projects';
import VisitUs from './pages/VisitUs';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pseb-books" element={<PSEBBooks />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/visit-us" element={<VisitUs />} />
          <Route path="/creative-gifts" element={<CreativeGifts />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <Toaster position="top-center" richColors />
      </div>
    </BrowserRouter>
  );
}

export default App;


