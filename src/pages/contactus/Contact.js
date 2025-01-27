import React from "react";

function Contact() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <p>contact us</p>
        <a href={"/login"} className="underline block">Go to log in</a>
      </div>
    </div>
  );
}

export default Contact;
