import { Hero } from "./components/Hero/Hero";
import { MakeupBonuses } from "./components/MakeupBonuses";
import { MakeupExpert } from "./components/MakeupExpert";
import { MakeupForWho } from "./components/MakeupForWho";
import { MakeupLessons } from "./components/MakeupLessons";
import { MakeupPricing } from "./components/MakeupPricing";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <MakeupForWho />
      <MakeupLessons />
      <MakeupExpert />
      <MakeupBonuses />
      <MakeupPricing />
    </>
  );
};
