import Home from "./Components/Home/Home";
import Footer from "./Components/Shared/Footer";
import Header from "./Components/Shared/Header";

function App() {
  return (
    <div className="">
      <Header></Header>
        <Home className=" md:w-4/5 mx-auto"></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
