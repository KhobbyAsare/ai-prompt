"use client";
import Form from "@/components/form/Form";
import { useState } from "react";

function Prompt() {
  const [post, setPost] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log("form submitting");

    setSubmitting(true);

    setTimeout(() => {
      console.log("submitting complete");
      setSubmitting(false);
    }, 3000);
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={handleSubmit}
    />
  );
}

export default Prompt;
