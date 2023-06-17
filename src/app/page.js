import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="home--container">
      <Navbar />
      <Hero />
      <div class="home--bgCircle home--circleOne"></div>
      <div class="home--bgCircle home--circleTwo"></div>
    </div>
  );
}
