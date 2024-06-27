import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
// components
import SignupForm from '../../components/signup/SignUpForm'

function Signup() {
  return (
    <div>
      <SignupForm/>
    </div>
  )
}

export default Signup