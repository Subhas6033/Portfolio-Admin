import React, { useState } from "react";
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

  const handleSubmitForm = (data) => {
    console.log("Submitted Data", data);
    setIsSubmitting(true);
    // TODO: Handel API Calls
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="w-full max-w-md"
      >
        <Card
          title="Sign Up"
          description="Create your account to access the dashboard"
          className="space-y-4"
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
            />

            <Input
              id="mobileNumber"
              label="Mobile Number"
              placeholder="Enter your mobile number"
              type="tel"
              {...register("mobileNumber", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/, // 10 digit number
                  message: "Enter a valid 10-digit mobile number",
                },
              })}
              error={errors.mobileNumber?.message}
            />

            <Button
              type="submit"
              className={`w-full mt-2 ${
                !isValid ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!isValid || isSubmitting}
            >
              {isSubmitting ? "Creating Account" : "Create Account"}
            </Button>
          </div>
          <p className="mt-3 text-center">
            Already Have an Account?{" "}
            <span
              className="text-red-600 hover:cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
            >
              Please Login
            </span>
          </p>
        </Card>
      </form>
    </div>
  );
};

export default Signup;
