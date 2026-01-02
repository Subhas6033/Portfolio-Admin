import React, { useState } from "react";
import { motion } from "motion/react";
import { Button, Input, Card } from "../../Components/index";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      fullName: "",
      email: "",
      mobileNumber: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmitForm = (data) => {
    console.log("Submitted Data", data);
    setIsSubmitting(true);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden px-4">
      {/* Background glows */}
      <motion.div
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="relative z-10 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Card
          title="Sign Up"
          description="Create your account to access the dashboard"
          className="bg-white/5 backdrop-blur-xl border border-white/10 text-slate-100"
        >
          <div className="space-y-4">
            <Input
              id="fullName"
              label="Full Name"
              placeholder="Enter your full name"
              {...register("fullName", {
                required: "Full name is required",
              })}
              error={errors.fullName?.message}
              className="bg-slate-900 text-white placeholder:text-slate-500 border-white/10"
            />

            <Input
              id="email"
              label="Email Address"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
              error={errors.email?.message}
              className="bg-slate-900 text-white placeholder:text-slate-500 border-white/10"
            />

            <Input
              id="mobileNumber"
              label="Mobile Number"
              placeholder="Enter your mobile number"
              type="tel"
              {...register("mobileNumber", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit mobile number",
                },
              })}
              error={errors.mobileNumber?.message}
              className="bg-slate-900 text-white placeholder:text-slate-500 border-white/10"
            />

            <Button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="w-full mt-2 bg-indigo-600 hover:bg-indigo-500 transition"
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </Button>
          </div>

          <p className="mt-4 text-center text-slate-400">
            Already have an account?{" "}
            <span
              className="text-indigo-400 hover:underline cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Please Login
            </span>
          </p>
        </Card>
      </motion.form>
    </div>
  );
};

export default Signup;
