import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/signup";
import { Blog } from "./pages/blog";
import { SignIn } from "./pages/signin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="blogs/:id" element={<Blog />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
