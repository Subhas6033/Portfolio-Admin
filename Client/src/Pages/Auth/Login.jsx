import React, { useState } from "react";
import { motion } from "motion/react";
import { Card, Input, Button } from "../../Components/index";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = (data) => {
    console.log("Submitted Data =>", data);
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
        onSubmit={handleSubmit(handleFormSubmit)}
        className="relative z-10 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Card
          title="Login"
          description="Access your admin dashboard"
          className="bg-white/5 backdrop-blur-xl border border-white/10 text-slate-100"
        >
          <div className="space-y-4">
            <Input
              id="fullName"
              label="Your Name"
              placeholder="Enter your name"
              {...register("fullName", {
                required: "Name is required",
              })}
              error={errors.fullName?.message}
              className="bg-slate-900 text-white placeholder:text-slate-500 border-white/10"
            />

            <Input
              id="email"
              label="Your Email"
              type="email"
              placeholder="Enter your email"
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

            <Button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="w-full mt-2 bg-indigo-600 hover:bg-indigo-500 transition"
            >
              {isSubmitting ? "Logging In..." : "Login"}
            </Button>
          </div>

          <p className="text-center mt-4 text-slate-400">
            Don&apos;t have an account?{" "}
            <span
              className="text-indigo-400 hover:underline cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Please Signup
            </span>
          </p>
        </Card>
      </motion.form>
    </div>
  );
};

export default Login;
