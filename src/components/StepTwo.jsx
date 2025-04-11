import React from "react";
import { useFormContext } from "react-hook-form";
import { ChevronsRight } from "lucide-react";

const StepTwo = ({ next, prev }) => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext();

  const handleNext = async () => {
    const valid = await trigger("email");
    if (valid) next();
  };

  return (
    <div className="details">
      <label htmlFor="email">Votre email</label>
      <input
        type="email"
        id="email"
        placeholder="email@example.com"
        {...register("email", {
          required: "L'email est requis",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Email invalide",
          },
        })}
      />
      {errors.email && <p className="error">{errors.email.message}</p>}

      <div className="next-step">
        <button type="button" onClick={prev}>
          Retour
        </button>
        <button type="button" onClick={handleNext}>
          <ChevronsRight />
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
