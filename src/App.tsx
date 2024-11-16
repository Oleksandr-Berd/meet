import Footer from "./layouts/footer/Footer";
import Header from "./layouts/Header/Header";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";

function App() {
  return (
    <div className="App">
      <Header />
      <SharedLayout/>
      <Footer/>
    </div>
  );
}

export default App;
