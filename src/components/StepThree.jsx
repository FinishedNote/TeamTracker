import React from "react";
import { useFormContext } from "react-hook-form";

const StepThree = ({ prev }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="details">
      <label htmlFor="password">Mot de passe</label>
      <input
        type="password"
        id="password"
        {...register("password", {
          required: "Mot de passe requis",
          minLength: {
            value: 6,
            message: "Minimum 6 caractères",
          },
        })}
      />
      {errors.password && <p className="error">{errors.password.message}</p>}

      <div className="next-step">
        <button type="button" onClick={prev}>
          Retour
        </button>
        <button type="submit">Valider</button>
      </div>
    </div>
  );
};

export default StepThree;
