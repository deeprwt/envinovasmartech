"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from "../common/error-msg";
import { db } from "@/database/firebase"; // Import Firestore instance
import { notifySuccess, notifyError } from "@/utils/toast"; // Import notification functions

// ... existing imports

import { addDoc, collection } from "firebase/firestore"; // Import Firestore functions

type FormData = {
  name: string;
  email: string;
  number: string;
  companyname: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required().label("Name"),
  email: yup.string().required().email().label("Email"),
  number: yup
    .string()
    .required("Phone Number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
  companyname: yup.string().required().label("Company Name"),
  message: yup.string().required().min(10).label("Message"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  // const onSubmit = handleSubmit((data) => {
  //   alert(JSON.stringify(data));
  //   reset();
  // });

  // Define form submission handler
  // const onSubmit = async (data: FormData) => {
  //   try {
  //     if (typeof window !== "undefined") {
       
  //       const { db } = await import("@/database/firebase");
  //       const contactRef = collection(db, "newcontact");
  //       await addDoc(contactRef, data);
  //       notifySuccess("Message sent successfully!"); 
  //       reset();
  //     }
  //   } catch (error) {
  //     console.error("Error adding document: ", error);
  //     notifyError("Error sending message, please try again."); 
  //   }
  // };

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        notifySuccess("Message sent successfully!"); // Show success notification
        reset(); // Clear the form after submission
      } else {
        notifyError("Error sending message, please try again."); // Handle error response
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      notifyError("Error submitting form, please try again."); // Handle network or unexpected errors
    }
  };
  

  return (
    <>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="messages"></div>
        <div className="row controls">
          <div className="col-12 col-md-6">
            <div className="input-group-meta form-group mb-30">
              <label className="text-white" htmlFor="">
                Name*
              </label>
              <input
                type="text"
                placeholder="Your Name*"
                {...register("name")}
                id="name"
                name="name"
              />
              <div className="help-block with-errors">
                <ErrorMsg msg={errors.name?.message!} />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="input-group-meta form-group mb-30">
              <label className="text-white" htmlFor="">
                Email*
              </label>
              <input
                type="email"
                placeholder="Email Address*"
                {...register("email")}
                id="email"
                name="email"
              />
              <div className="help-block with-errors">
                <ErrorMsg msg={errors.email?.message!} />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="input-group-meta form-group mb-30">
              <label className="text-white" htmlFor="">
                Phone Number*
              </label>
              <input
                type="number"
                {...register("number")}
                id="number"
                placeholder="Enter Your Phone Number"
                maxLength={10}
                pattern="\d{10}"
                onInput={(e) => {
                  if (e.currentTarget.value.length > 10) {
                    e.currentTarget.value = e.currentTarget.value.slice(0, 10); // Restrict input to 10 digits
                  }
                }}
              />
              <div className="help-block with-errors">
                <ErrorMsg msg={errors.number?.message!} />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="input-group-meta form-group mb-40">
              <label className="text-white" htmlFor="">
                Company Name*
              </label>
              <input
                type="text"
                placeholder="Company Name*"
                {...register("companyname")}
                id="companyname"
                name="companyname"
              />
              <div className="help-block with-errors">
                <ErrorMsg msg={errors.companyname?.message!} />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta form-group mb-35">
              <textarea
                placeholder="Your message*"
                {...register("message")}
                id="message"
                name="message"
              ></textarea>
              <div className="help-block with-errors">
                <ErrorMsg msg={errors.message?.message!} />
              </div>
            </div>
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn-four tran3s w-100 d-block"
              style={{ background: "#62c087" }}
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
