import React, { useState } from "react";
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

  const handleFormSubmit = (data) => {
    console.log("Submitted Data =>", data);
    setIsSubmitting(true);
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="w-full max-w-md"
      >
        <Card title="Login" description="Please login to update the data">
          <div className="space-y-4">
            <Input
              id="fullName"
              label="Your Name"
              placeholder="Enter your name"
              {...register("fullName", {
                required: "Name is required",
              })}
              error={errors.fullName?.message}
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
            />

            <Button
              type="submit"
              className="w-full mt-2"
              disabled={!isValid || isSubmitting}
            >
              {isSubmitting ? "Logging In" : "Login"}
            </Button>
          </div>
          <p className="text-center mt-3">
            Don't Have Account?{" "}
            <span
              className="text-red-500 hover:underline hover:cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Plese Signup
            </span>
          </p>
        </Card>
      </form>
    </div>
  );
};

export default Login;
