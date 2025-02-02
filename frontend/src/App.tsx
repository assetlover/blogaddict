import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/signup";
import { Blogs } from "./pages/blog";
import { SignIn } from "./pages/signin";
import { BlogPage } from "./pages/blogPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/blogs/:id" element={<BlogPage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
