import { Loader } from "../Components/index";
import { lazy, Suspense } from "react";

const HeroSection = lazy(() => import("../Components/Common/HeroSection"));
const Features = lazy(() => import("../Components/Features/Features"));
const Security = lazy(() => import("../Components/Security/Security"));

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 scroll-smooth">
      <Suspense fallback={<Loader text="Herosection" />}>
        <HeroSection />
        <Features />
        <Security />
      </Suspense>
    </div>
  );
};

export default Home;
