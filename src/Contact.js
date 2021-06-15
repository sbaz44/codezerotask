import React, { useState } from "react";
import Header from "./Components/Header";
import InputBox from "./Components/InputBox";
let emailIsValid = true;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    image: "",
  });
  const [preview, setPreview] = useState(null);
  const [showData, setShowData] = useState(false);
  const [errors, setErrors] = useState([false, false, false, false]);

  const handleChange2 = (e) => {
    if (isNaN(e.target.value)) {
      return;
    }
    const onlyNums = e.target.value.replace(/[^0-9]/g, "");
    setFormData({
      ...formData,
      [e.target.name]: onlyNums,
    });
  };

  const _handleImageChange = (e) => {
    if (e.target.files.length) {
      setFormData({
        ...formData,
        image: e.target.files[0],
      });
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const updateFormData = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const { name, phone, email, address } = formData;

  const isValidEmailAddress = () => {
    let address = email;
    if (address === "") {
      emailIsValid = false;
      alert("Invalid Email");
    }
    if (
      address.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      emailIsValid = true;
    } else {
      alert("Invalid Email");
      emailIsValid = false;
    }
  };

  const onSubmit = () => {
    let error = [...errors];

    if (name === "") {
      error[0] = true;
    }
    if (phone === "") {
      error[1] = true;
    }
    if (email === "" || emailIsValid === false) {
      error[2] = true;
    }
    if (address === "") {
      error[3] = true;
    }
    setErrors(error);

    if (
      name === "" ||
      phone === "" ||
      email === "" ||
      address === "" ||
      emailIsValid === false
    ) {
      alert("All Fields are required");
      setShowData(false);
      return;
    }
    setShowData(true);
  };

  return (
    <div className="contact-container">
      {console.log(errors)}
      <Header />
      <div className="form">
        <InputBox
          value={name}
          onChange={(e) => updateFormData(e)}
          placeholder="Name"
          name="name"
          error={errors[0] === true}
        />

        <InputBox
          value={email}
          onChange={(e) => updateFormData(e)}
          placeholder="Email address"
          name="email"
          onBlur={isValidEmailAddress}
          error={errors[1] === true}
        />

        <InputBox
          value={phone}
          onChange={(e) => handleChange2(e)}
          placeholder="Phone"
          name="phone"
          error={errors[2] === true}
        />

        <React.Fragment>
          <textarea
            value={address}
            onChange={(e) => updateFormData(e)}
            placeholder="Address"
            type="text"
            name="address"
            className={errors[3] === true ? "error" : ""}
          />
          {errors[3] === true && <p className="required">Required</p>}
        </React.Fragment>
        <label>Attach Image</label>
        <input
          className="fileInput"
          type="file"
          accept="image/*"
          // capture="filesystem"
          onChange={(e) => _handleImageChange(e)}
        />
        <button onClick={onSubmit}>Submit</button>
      </div>
      {showData && (
        <div className="preview">
          <img src={preview} alt="preview" className="preview-image" />
          <p>Name: {name}</p>
          <p>Phone: {phone}</p>
          <p>Email: {email}</p>
          <p>Address: {address}</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
