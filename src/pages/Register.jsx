import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";
import supabase from "../supabaseClient";
import { useNavigate } from "react-router";

const steps = [StepOne, StepTwo, StepThree];

const Register = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const methods = useForm({
    defaultValues: {
      name: "",
      role: "Entraineur",
      email: "",
      password: "",
    },
  });
  const [error, setError] = useState("");

  const nextStep = () => setCurrentStep((s) => s + 1);
  const prevStep = () => setCurrentStep((s) => s - 1);
  const isLast = currentStep === steps.length - 1;

  const onSubmit = async (formData) => {
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          name: formData.name,
          role: formData.role,
        },
      },
    });

    if (error) {
      // TODO: verif email
      console.log(error.code);
      switch (error.code) {
        case "weak_password":
          console.log("password faible");
          break;

        default:
          break;
      }
    } else {
      navigate("/login");
    }
  };

  const CurrentComponent = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="r-container">
      <FormProvider {...methods}>
        <form className="register" onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="info">
            <h1>Team Tracker</h1>
            <p>Bienvenue ! Veuillez entrer vos coordonnées.</p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <CurrentComponent
                next={nextStep}
                prev={prevStep}
                isLast={isLast}
              />
            </motion.div>
          </AnimatePresence>

          <div className="progress-bar">
            <div className="range">
              <div className="progress" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Register;
