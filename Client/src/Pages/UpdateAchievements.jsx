import React from "react";
import { Button, Card } from "../Components/index";

const Achievements = () => {
  const achievementsDummyData = [
    {
      title: "ECOWOC ID",
      description: "This is an open source contribution ID card",
      imageSRC: "/ECWoc.png",
      imageAlt: "ECWOC ID Card",
    },
    {
      title: "ECOWOC ID",
      description: "This is an open source contribution ID card",
      imageSRC: "/ECWoc.png",
      imageAlt: "ECWOC ID Card",
    },
    {
      title: "ECOWOC ID",
      description: "This is an open source contribution ID card",
      imageSRC: "/ECWoc.png",
      imageAlt: "ECWOC ID Card",
    },
    {
      title: "ECOWOC ID",
      description: "This is an open source contribution ID card",
      imageSRC: "/ECWoc.png",
      imageAlt: "ECWOC ID Card",
    },
    {
      title: "ECOWOC ID",
      description: "This is an open source contribution ID card",
      imageSRC: "/ECWoc.png",
      imageAlt: "ECWOC ID Card",
    },
    {
      title: "ECOWOC ID",
      description: "This is an open source contribution ID card",
      imageSRC: "/ECWoc.png",
      imageAlt: "ECWOC ID Card",
    },
  ];

  const handelDelete = (id) => {
    console.log(`Achievements ID : ${id} deleted.`);
  };

  return (
    <section className="relative bg-slate-900 text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          Achievements
        </h1>
        <p className="mt-4 text-slate-400 text-base sm:text-lg">
          Showcase of all achievements, contributions, and certifications.
        </p>
      </div>

      {/* Achievements Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {achievementsDummyData.map((achievement, idx) => (
          <>
            <Card
              key={idx}
              title={achievement.title}
              description={achievement.description}
              imageUrl={achievement.imageSRC}
              imageAlt={achievement.imageAlt}
              className="bg-white/5 border border-white/10 text-white hover:scale-105 transform transition-all duration-300"
            >
              <Button
                className="bg-red-500 hover:bg-red-600"
                onClick={() => handelDelete(idx)}
              >
                Delete
              </Button>
            </Card>
          </>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
