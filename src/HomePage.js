import Hero from "./Hero";
import Specials from "./Specials";
import Review from "./Review";
import History from "./History";
import "./homepage.css";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Specials />
      <Review />
      <History />
    </main>
  );
}
