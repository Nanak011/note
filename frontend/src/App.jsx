import {Route, Routes} from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import {Toaster} from "react-hot-toast";
const App = () => {
  return (

    <div className="relative h-full w-full" data-theme="wireframe">
    <Toaster />
<div className="fixed inset-0 -z-50 h-full w-full bg-slate-10 overflow-hidden">
  <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-[120px]" />
  <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-100/40 blur-[120px]" />
  
  <div className="absolute inset-0 backdrop-blur-[150px]" />
</div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
