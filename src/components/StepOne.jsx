import React from "react";
import { useFormContext } from "react-hook-form";
import { ChevronsRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const StepOne = ({ next }) => {
  const {
    register,
    formState: { errors },
    trigger,
    watch,
  } = useFormContext();

  const role = watch("role");

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
        defaultValue=""
      >
        <option value="" disabled hidden>
          Choisissez un rôle
        </option>
        <option value="manager">Entraineur</option>
        <option value="player">Joueur</option>
      </select>
      {errors.role && <p className="error">{errors.role.message}</p>}

      <div className="next-step">
        <button type="button" onClick={handleNext}>
          <ChevronsRight />
        </button>
      </div>

      <AnimatePresence mode="wait">
        {role && (
          <motion.div
            key={role}
            className="role-img"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <img src={`../assets/${role}.png`} alt="role" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StepOne;
