import React, { useState } from "react";
import { Button, Card, Modal } from "../Components/index";

const Achievements = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const handleDelete = () => {
    if (selectedAchievement !== null) {
      console.log(`Achievement ID : ${selectedAchievement} deleted.`);
    }
    closeModal();
  };

  const openModal = (index) => {
    setSelectedAchievement(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAchievement(null);
  };

  const achievementsDummyData = Array(6).fill({
    title: "ECOWOC ID",
    description: "This is an open source contribution ID card",
    imageSRC: "/ECWoc.png",
    imageAlt: "ECOWOC ID Card",
  });

  return (
    <section className="relative bg-slate-900 text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Achievements
        </h1>
        <p className="mt-4 text-slate-400 sm:text-lg">
          Showcase of all achievements, contributions, and certifications.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {achievementsDummyData.map((achievement, index) => (
          <Card
            key={index}
            title={achievement.title}
            description={achievement.description}
            imageUrl={achievement.imageSRC}
            imageAlt={achievement.imageAlt}
            className="bg-white/5 border border-white/10 text-white 
                       transition-transform duration-300 hover:scale-105"
          >
            <Button
              className="mt-4 bg-red-500 hover:bg-red-600"
              onClick={() => openModal(index)}
            >
              Delete
            </Button>
          </Card>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal
          title={`Delete ${selectedAchievement} Achievements?`}
          isOpen={isModalOpen}
        >
          <p className="text-center font-bold text-red-500">
            After Deleting the Achievements it wouldn't be undo again
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button
              className="bg-slate-600 hover:bg-slate-700"
              onClick={closeModal}
            >
              Cancel
            </Button>
            <Button
              className="bg-red-500 hover:bg-red-600"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Achievements;
