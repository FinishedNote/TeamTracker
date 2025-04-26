import { Plus } from "lucide-react";
import React from "react";

const AddTeam = ({ openModal, disabled }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!disabled) {
      openModal();
    }
  };

  return (
    <form
      className={`team-card add-team ${disabled ? "disabled" : ""}`}
      onSubmit={handleSubmit}
      title={
        disabled ? "Limite atteinte selon votre plan" : "Ajouter une équipe"
      }
    >
      <Plus />
      <p>Ajouter une équipe</p>
    </form>
  );
};

export default AddTeam;
