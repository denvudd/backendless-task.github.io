import React from "react";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = ({}) => {
  return (
    <div className="mt-10 mb-10">
      <h1 className="font-semibold text-center text-3xl mb-6 animate-[fadeInDown_.5s_ease-in-out_.10s_forwards]">
        Welcome to <strong className="font-bold">MyCMS</strong>
      </h1>

      <div className="">
        <h2 className="text-xl text-center font-semibold mb-4 animate-[fadeInDown_.5s_ease-in-out_.10s_forwards]">
          Menage your content with <span className="underline underline-offset-4">ease</span> and <span className="underline underline-offset-4">speed</span>!
        </h2>
        <img
          src="/assets/img/chart-landing.png"
          alt="Landing screen"
          className="w-full block animate-[fadeInDown_.5s_ease-in-out_.10s_forwards] border rounded-md"
        />
      </div>
    </div>
  );
};

export default HomePage;
