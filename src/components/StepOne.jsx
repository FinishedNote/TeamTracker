import React from "react";
import { useFormContext } from "react-hook-form";
import { ChevronsRight } from "lucide-react";

const StepOne = ({ next }) => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext();

  const handleNext = async () => {
    const valid = await trigger(["name", "role"]);
    if (valid) next();
  };

  return (
    <div className="details">
      <label htmlFor="name">Entrez votre nom</label>
      <input
        type="text"
        id="name"
        placeholder="Nom"
        {...register("name", { required: "Le nom est requis" })}
      />
      {errors.name && <p className="error">{errors.name.message}</p>}

      <label htmlFor="role">Votre rôle</label>
      <select
        id="role"
        {...register("role", { required: "Le rôle est requis" })}
      >
        <option value="Entraineur">Entraineur</option>
        <option value="Joueur">Joueur</option>
      </select>
      {errors.role && <p className="error">{errors.role.message}</p>}

      <div className="next-step">
        <button type="button" onClick={handleNext}>
          <ChevronsRight />
        </button>
      </div>
    </div>
  );
};

export default StepOne;
