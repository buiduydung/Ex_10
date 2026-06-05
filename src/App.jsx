import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import BookingForm from "./components/BookingForm";
import "./App.css";

function App() {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <Menu />
      <BookingForm />
    </div>
  );
}

export default App;
