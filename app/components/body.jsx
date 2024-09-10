import About from "./about";
import Hero from "./hero";
import Menu from "./menu";
import Showcase from "./showcase";
import Location from "./location";

export default function Body() {
  return (
    <div>
      <Hero />
      <Showcase />
      <About />
      <Menu />
      <Location />
    </div>
  );
}
