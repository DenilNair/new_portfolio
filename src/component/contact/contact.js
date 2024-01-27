import React, { useState } from "react";
import "./contact.css";

import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
  });

  const handleSubmit = (event) => {
    console.log("before ", formData);

    console.log(document.getElementById("grid-first-name").value);
    console.log(document.getElementById("grid-last-name").value);
    console.log(document.getElementById("grid-email").value);
    console.log(document.getElementById("grid-comment").value);
    event.preventDefault();

    /* this.formData.firstName=document.getElementById("grid-first-name").value;
      this.formData.lastName= document.getElementById("grid-last-name").value;
      this.formData.email= document.getElementById("grid-email").value;
      this.formData.comment= document.getElementById("grid-comment").value;*/
    console.log("after ", formData);

    axios
      .post(
        "https://us-central1-mysite-91b59-server.cloudfunctions.net/app/send-mail"
      )
      .then((response) => {
        console.log("response ", response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleInputChange = (event) => {
    /*console.log(document.getElementById("grid-first-name").value);
    const { name, value } = event.target;
    setFormData((prevProps) => ({
      ...formData,
      [name]: value,
    }));
    */
  };
  const imageUrl = process.env.PUBLIC_URL + "/img/angular.png";
  return (
    <div className="mainContact">
      <h4 className="sub-headings">Contact</h4>
      <div className="img-color-fill">
        <img src= {imageUrl}/>
      </div>

      <div className="formContact">
        <form class="w-full max-w-lg" onSubmit={handleSubmit}>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 "
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-black"
                id="grid-first-name"
                type="text"
                onChange={handleInputChange}
                placeholder="denil"
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-black"
                id="grid-last-name"
                type="text"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-email"
              >
                Your Email
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                onChange={handleInputChange}
              />
              <p class="text-gray-600 text-xs italic">
                Make it as long and as crazy as you'd like
              </p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full  px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-comment"
              >
                Comment
              </label>
              <textarea
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-comment"
                type="text"
                onChange={handleInputChange}
                placeholder="comment your thought/suggestions and Idea"
              />
            </div>
          </div>
          <input
            class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
