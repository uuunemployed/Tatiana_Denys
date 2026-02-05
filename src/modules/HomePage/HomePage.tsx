import { Hero } from "./components/Hero/Hero";
import { MakeupExpert } from "./components/MakeupExpert";
import { MakeupForWho } from "./components/MakeupForWho";
import { MakeupLessons } from "./components/MakeupLessons";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <MakeupForWho />
      <MakeupLessons />
      <MakeupExpert />
    </>
  );
};
