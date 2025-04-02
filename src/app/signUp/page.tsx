"use client";
import { useState } from "react";
import { SignUp } from "./components/Signup";
import { SignUp2 } from "./components/Signup2";

const Page = () => {
  const [username, setUserName] = useState("");
  const [currentSlide, setCurrent] = useState(0);
  const FormSteps = [SignUp, SignUp2][currentSlide];

  const setCurrentSlides = () => {
    setCurrent(currentSlide + 1);
  };

  return (
    <div>
      <FormSteps
        username={username}
        setUserName={setUserName}
        setCurrentSlide={setCurrentSlides}
        currentSlide={currentSlide}
      />
    </div>
  );
};
export default Page;
