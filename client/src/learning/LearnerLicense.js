import React, { useState } from "react";
import { Input, Form, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  state: yup.string("Enter your state").required("state is required"),
  rto: yup.string("Enter your rto").required("RTO is required"),

  pincode: yup.string("Enter your pincode").required("pincode is required"),
  firstName: yup
    .string("Enter your First Name")
    .required("first name is required"),

  middleName: yup
    .string("Enter your Middle Name")
    .required("Middle Name is required"),

  lastName: yup
    .string("Enter your Last Name")
    .required("Last Name is required"),

  aadhaarNumber: yup
    .string("Enter your Aadhaar Number")
    .required("Aadhar Number is required"),

  gender: yup.string("Enter your gender").required("Gender is required"),
  dateOfBirth: yup
    .string("Enter your dateOfBirth")
    .required("Date of Birth is required"),

  age: yup
    .string("Enter your Age")
    .required("Age is required")
    .min(18, "Age should be greater than 18"),

  placeOfBirth: yup
    .string("Enter your placeOfBirth")
    .required("Place of Birth is required"),

  countries: yup
    .string("Enter your countryOfBirth")
    .required("Country of Birth is required"),
  qualification: yup
    .string("Enter your Qualification")
    .required("Qualification is required"),
  bloodgrp: yup
    .string("Enter your Blood Group")
    .required("Blood Group is required"),

  phoneNumber: yup
    .string("Enter your Phone Number")
    .required("Phone Number is required"),

  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),

  mobileNumber: yup
    .string("Enter your Mobile Number")
    .required("Mobile Number is required"),

  emergencyNumber: yup
    .string("Enter your Mobile Number")
    .required("Mobile Number is required"),
});

function LearnerLicense() {
  const [state, setState] = useState("");
  const [submitFlag, setSubmitFlag] = useState(false);
  const [gender, setGender] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const [listData, setListData] = useState({
    state: "",
    rto: "",
    pincode: "",
    firstName: "",
    middleName: "",
    lastName: "",
    aadhaarNumber: "",
    gender: "",
    dateOfBirth: "",
    age: "",
    placeOfBirth: "",
    countries: "",
    qualification: "",
    bloodgrp: "",
    phoneNumber: "",
    email: "",
    mobileNumber: "",
    emergencyNumber: "",
  });

  const stateDropdown = [
    {
      label: "Andhra Pradesh",
      value: "Andhra Pradesh",
    },
    {
      label: "Arunachal Pradesh",
      value: "Arunachal Pradesh",
    },
    {
      label: "Assam",
      value: "Assam",
    },
    {
      label: "Bihar",
      value: "Bihar",
    },
    {
      label: "Chhattisgarh",
      value: "Chhattisgarh",
    },
    {
      label: "Goa",
      value: "Goa",
    },
    {
      label: "Gujarat",
      value: "Gujarat",
    },
    {
      label: "Haryana",
      value: "Haryana",
    },
    {
      label: "Himachal Pradesh",
      value: "Himachal Pradesh",
    },
    {
      label: "Jharkhand",
      value: "Jharkhand",
    },
    {
      label: "Karnataka",
      value: "Karnataka",
    },
    {
      label: "Kerala",
      value: "Kerala",
    },
    {
      label: "Madhya Pradesh",
      value: "Madhya Pradesh",
    },
    {
      label: "Maharashtra",
      value: "Maharashtra",
    },
    {
      label: "Manipur",
      value: "Manipur",
    },
    {
      label: "Meghalaya",
      value: "Meghalaya",
    },
    {
      label: "Mizoram",
      value: "Mizoram",
    },
    {
      label: "Nagaland",
      value: "Nagaland",
    },
    {
      label: "Odisha",
      value: "Odisha",
    },
    {
      label: "Punjab",
      value: "Punjab",
    },
    {
      label: "Rajasthan",
      value: "Rajasthan",
    },
    {
      label: "Sikkim",
      value: "Sikkim",
    },
    {
      label: "Tamil Nadu",
      value: "Tamil Nadu",
    },
    {
      label: "Telangana",
      value: "Telangana",
    },
    {
      label: "Tripura",
      value: "Tripura",
    },
    {
      label: "Uttar Pradesh",
      value: "Uttar Pradesh",
    },
    {
      label: "Uttarakhand",
      value: "Uttarakhand",
    },
    {
      label: "West Bengal",
      value: "West Bengal",
    },
    {
      label: "Andaman and Nicobar Islands",
      value: "Andaman and Nicobar Islands",
    },
    {
      label: "Chandigarh",
      value: "Chandigarh",
    },
    {
      label: "Dadra and Nagar Haveli and Daman and Diu",
      value: "Dadra and Nagar Haveli and Daman and Diu",
    },
    {
      label: "Lakshadweep",
      value: "Lakshadweep",
    },
    {
      label: "Delhi",
      value: "Delhi",
    },
    {
      label: "Puducherry",
      value: "Puducherry",
    },
  ];
  const RTOOffices = [
    {
      value: "Maharashtra",
      label: "Maharashtra State Road Transport Department",
    },

    // Add more states and their respective RTO office details as needed
  ];

  const genderoptions = [
    {
      label: "Male",
      value: "1",
    },
    {
      label: "Female",
      value: "2",
    },

    {
      label: "Trans",
      value: "3",
    },
  ];
  const countries = [
    { label: "India", value: "IN" },
    { label: "United States", value: "US" },
    { label: "United Kingdom", value: "UK" },
    { label: "Canada", value: "CA" },
    // Add more countries as needed
  ];

  const bloodGroups = [
    { label: "A+", value: "A+" },
    { label: "A-", value: "A-" },
    { label: "B+", value: "B+" },
    { label: "B-", value: "B-" },
    { label: "AB+", value: "AB+" },
    { label: "AB-", value: "AB-" },
    { label: "O+", value: "O+" },
    { label: "O-", value: "O-" },
  ];

  const phoneCodes = [
    { label: "+1", value: "United States" },
    { label: "+44", value: "United Kingdom" },
    { label: "+91", value: "India" },
    { label: "+1", value: "Canada" },
    // Add more countries as needed
  ];

  const formik = useFormik({
    initialValues: listData,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    setSubmitFlag(true);
    console.log(values);
    navigate("/license/test");
    if (values.state) {
      submittoapi(values);
    }
  };

  const backToHome = () => {
    navigate("/license");
  };

  const handleOptionChange = (e) => {
    setGender(e.target.value);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const submittoapi = async (values) => {
    try {
      const response = await fetch(
        "https://api-codehub.vercel.app/api/register/savelearnerlicense",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      if (response.ok) {
        navigator("/license/test");
        console.log("Form data submitted successfully");
      } else {
        // Handle errors
        console.error("Failed to submit form data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <br />
      <br />
      <br />
      <br />

      <Form onSubmit={formik.handleSubmit}>
        <div className="container-fluid">
          <div className="col-sm-12">
            <div className="row" style={{ border: "3px solid #f1f1f1" }}>
              <h3>Application For Learner License</h3>

              <div className="col-sm-4">
                <div className="well">
                  <div>
                    <label htmlFor="lname"> State </label> {""}
                    <Input
                      type="select"
                      name="state"
                      id="state"
                      placeholder="Select State"
                      value={formik.values.state}
                      onChange={formik.handleChange}
                      className={` inputs required-input
                              ${
                                formik.errors.state && formik.touched.state
                                  ? "is-invalid"
                                  : ""
                              }`}
                    >
                      <option value="">Please Select State</option>
                      {stateDropdown.map((item) => (
                        <option value={item.value}>{item.label}</option>
                      ))}
                    </Input>
                    {formik.errors.state && formik.touched.state && (
                      <div className="invalid-feedback">
                        {formik.errors.state}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname"> RTO Office </label> {""}
                    <Input
                      type="select"
                      name="rto"
                      id="rto"
                      placeholder="Select RTO office"
                      value={formik.values.rto}
                      onChange={formik.handleChange}
                      className={` inputs required-input
                              ${
                                formik.errors.rto && formik.touched.rto
                                  ? "is-invalid"
                                  : ""
                              }`}
                    >
                      <option value="">Please Select Office</option>
                      {RTOOffices.map((item) => (
                        <option value={item.value}>{item.label}</option>
                      ))}
                    </Input>
                    {formik.errors.rto && formik.touched.rto && (
                      <div className="invalid-feedback">
                        {formik.errors.rto}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname"> Pincode </label> {""}
                    <Input
                      type="text"
                      name="pincode"
                      id="pincode"
                      placeholder="Enter Pincode"
                      value={formik.values.pincode}
                      onChange={(option) => {
                        formik.handleChange("pincode")(option);
                      }}
                      className={`required-input
                           ${
                             formik.errors.pincode && formik.touched.pincode
                               ? "is-invalid"
                               : ""
                           }`}
                    />
                    {formik.errors.pincode && formik.touched.pincode && (
                      <div className="invalid-feedback">
                        {formik.errors.pincode}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="col-sm-12">
            <div className="row" style={{ border: "3px solid #f1f1f1" }}>
              <h4>Personal Details</h4>

              <div className="col-sm-4">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname"> Name of the Applicant </label> {""}
                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Enter First Name"
                      value={formik.values.firstName}
                      onChange={(option) => {
                        let regex = /^([^0-9]*)$/;
                        const w = option.target.value;
                        if (w === "" || regex.test(w)) {
                          formik.handleChange("firstName")(option);
                        }
                      }}
                      className={`required-input
                              ${
                                formik.errors.firstName &&
                                formik.touched.firstName
                                  ? "is-invalid"
                                  : ""
                              }`}
                    />
                    {formik.errors.firstName && formik.touched.firstName && (
                      <div className="invalid-feedback">
                        {formik.errors.firstName}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="well">
                  <div className="commoninput">
                    <Input
                      type="text"
                      name="middleName"
                      id="middleName"
                      placeholder="Enter Middle Name"
                      value={formik.values.middleName}
                      onChange={(option) => {
                        let regex = /^([^0-9]*)$/;
                        const w = option.target.value;
                        if (w === "" || regex.test(w)) {
                          formik.handleChange("middleName")(option);
                        }
                      }}
                      className={`required-input
                              ${
                                formik.errors.middleName &&
                                formik.touched.middleName
                                  ? "is-invalid"
                                  : ""
                              }`}
                    />
                    {formik.errors.middleName && formik.touched.middleName && (
                      <div className="invalid-feedback">
                        {formik.errors.middleName}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="well">
                  <div className="commoninput">
                    <Input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Enter Last Name"
                      value={formik.values.lastName}
                      onChange={(option) => {
                        let regex = /^([^0-9]*)$/;
                        const w = option.target.value;
                        if (w === "" || regex.test(w)) {
                          formik.handleChange("lastName")(option);
                        }
                      }}
                      className={`required-input
                              ${
                                formik.errors.lastName &&
                                formik.touched.lastName
                                  ? "is-invalid"
                                  : ""
                              }`}
                    />
                    {formik.errors.lastName && formik.touched.lastName && (
                      <div className="invalid-feedback">
                        {formik.errors.lastName}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="col-sm-12">
            <div className="row" style={{ border: "3px solid #f1f1f1" }}>
              <h4>{""}</h4>

              <div className="col-sm-6">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname"> Aadhaar Number </label> {""}
                    <Input
                      type="text"
                      name="aadhaarNumber"
                      id="aadhaarNumber"
                      placeholder="Enter Aadhaar Number"
                      value={formik.values.aadhaarNumber}
                      onChange={(option) => {
                        let regex = /^(\d+(\.\d+)?)$/;
                        const v = option.target.value;
                        if (v === "" || regex.test(v)) {
                          formik.handleChange("aadhaarNumber")(option);
                        }
                      }}
                      className={`required-input
                               ${
                                 formik.errors.aadhaarNumber &&
                                 formik.touched.aadhaarNumber
                                   ? "is-invalid"
                                   : ""
                               }`}
                    />
                    {formik.errors.aadhaarNumber &&
                      formik.touched.aadhaarNumber && (
                        <div className="invalid-feedback">
                          {formik.errors.aadhaarNumber}
                        </div>
                      )}
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="well">
                  <div>
                    <label> Gender </label> {""}
                    <Input
                      type="select"
                      name="gender"
                      id="gender"
                      placeholder="Select gender"
                      value={formik.values.gender}
                      onChange={formik.handleChange}
                      className={` inputs required-input
                              ${
                                formik.errors.gender && formik.touched.gender
                                  ? "is-invalid"
                                  : ""
                              }`}
                    >
                      <option value="">Please Select Gender</option>
                      {genderoptions.map((item) => (
                        <option value={item.value}>{item.label}</option>
                      ))}
                    </Input>
                    {formik.errors.gender && formik.touched.gender && (
                      <div className="invalid-feedback">
                        {formik.errors.gender}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="col-sm-12">
            <div className="row" style={{ border: "3px solid #f1f1f1" }}>
              <h3>{""}</h3>

              <div className="col-sm-6">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname"> Date of Birth </label> {""}
                    <Input
                      type="date"
                      name="dateOfBirth"
                      id="dateOfBirth"
                      placeholder="DD MM YY"
                      value={formik.values.dateOfBirth}
                      onChange={(option) => {
                        formik.handleChange("dateOfBirth")(option);
                      }}
                      className={`required-input
                     ${
                       formik.errors.dateOfBirth && formik.touched.dateOfBirth
                         ? "is-invalid"
                         : ""
                     }`}
                    />
                    {formik.errors.dateOfBirth &&
                      formik.touched.dateOfBirth && (
                        <div className="invalid-feedback">
                          {formik.errors.dateOfBirth}
                        </div>
                      )}
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname"> Age </label> {""}
                    <Input
                      type="text"
                      name="age"
                      id="age"
                      placeholder="Enter Age"
                      onChange={(option) => {
                        const enteredAge = option.target.value;
                        if (enteredAge < 18) {
                          formik.setFieldError(
                            "age",
                            "Age should be greater than 18"
                          );
                        } else {
                          formik.handleChange("age")(option);
                        }
                      }}
                      className={`required-input ${
                        (formik.errors.age && formik.touched.age) ||
                        formik.values.age < 18
                          ? "is-invalid"
                          : ""
                      }`}
                    />
                    {formik.errors.age && formik.touched.age && (
                      <div className="invalid-feedback">
                        {formik.errors.age}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="col-sm-12">
            <div className="row" style={{ border: "3px solid #f1f1f1" }}>
              <h3>{""}</h3>
              <div className="col-sm-6">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname"> Place of Birth </label> {""}
                    <Input
                      type="text"
                      name="placeOfBirth"
                      id="placeOfBirth"
                      placeholder="Enter Place of Birth"
                      value={formik.values.placeOfBirth}
                      onChange={(option) => {
                        formik.handleChange("placeOfBirth")(option);
                      }}
                      className={`required-input
                           ${
                             formik.errors.placeOfBirth &&
                             formik.touched.placeOfBirth
                               ? "is-invalid"
                               : ""
                           }`}
                    />
                    {formik.errors.placeOfBirth &&
                      formik.touched.placeOfBirth && (
                        <div className="invalid-feedback">
                          {formik.errors.placeOfBirth}
                        </div>
                      )}
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname"> Country of Birth </label> {""}
                    <Input
                      type="select"
                      name="countries"
                      id="countries"
                      placeholder="Enter Country of Birth"
                      value={formik.values.countries}
                      onChange={formik.handleChange}
                      className={` inputs required-input
                              ${
                                formik.errors.countries &&
                                formik.touched.countries
                                  ? "is-invalid"
                                  : ""
                              }`}
                    >
                      <option value="">Please Select Country</option>
                      {countries.map((item) => (
                        <option value={item.value}>{item.label}</option>
                      ))}
                    </Input>
                    {formik.errors.countries && formik.touched.countries && (
                      <div className="invalid-feedback">
                        {formik.errors.countries}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="col-sm-12">
            <div className="row" style={{ border: "3px solid #f1f1f1" }}>
              <h3>{""}</h3>

              <div className="col-sm-6">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname"> Blood Group</label> {""}
                    <Input
                      type="select"
                      name="bloodgrp"
                      id="bloodgrp"
                      placeholder="Select Blood Group"
                      value={formik.values.bloodgrp}
                      onChange={formik.handleChange}
                      className={` inputs required-input
                              ${
                                formik.errors.bloodgrp &&
                                formik.touched.bloodgrp
                                  ? "is-invalid"
                                  : ""
                              }`}
                    >
                      <option value="">Select Blood Group</option>
                      {bloodGroups.map((item) => (
                        <option value={item.value}>{item.label}</option>
                      ))}
                    </Input>
                    {formik.errors.bloodgrp && formik.touched.bloodgrp && (
                      <div className="invalid-feedback">
                        {formik.errors.bloodgrp}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname"> Phone Number</label> {""}
                    <Input
                      type="text"
                      name="phoNenumber"
                      id="phoneNumber"
                      placeholder="Enter Phone Number"
                      value={formik.values.phoneNumber}
                      onChange={(option) => {
                        formik.handleChange("phoneNumber")(option);
                      }}
                      className={`required-input
                           ${
                             formik.errors.phoneNumber &&
                             formik.touched.phoneNumber
                               ? "is-invalid"
                               : ""
                           }`}
                    />
                    {formik.errors.phoneNumber &&
                      formik.touched.phoneNumber && (
                        <div className="invalid-feedback">
                          {formik.errors.phoneNumber}
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="col-sm-12">
            <div className="row" style={{ border: "3px solid #f1f1f1" }}>
              <h3>{""}</h3>

              <div className="col-sm-6">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname">Email Address</label> {""}
                    <Input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Enter Email"
                      value={formik.values.email}
                      onChange={(option) => {
                        const w = option.target.value;
                        formik.handleChange("email")(option);
                      }}
                      className={`required-input
                ${
                  formik.errors.email && formik.touched.email
                    ? "is-invalid"
                    : ""
                }`}
                    />
                    {formik.errors.email && formik.touched.email && (
                      <div className="invalid-feedback">
                        {formik.errors.email}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname"> Mobile Number</label> {""}
                    <Input
                      type="select"
                      name="phoneCode"
                      id="phoneCode"
                      placeholder="Enter Number"
                      value={selectedCountry}
                      onChange={handleCountryChange}
                      className={`phonecodeinputs
                        ${submitFlag && !state ? "is-invalid1" : ""}`}
                    >
                      <option value="">+91</option>
                      {phoneCodes.map((item, index) => (
                        <option key={index} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </Input>
                    <Input
                      type="text"
                      name="mobileNumber"
                      id="mobileNumber"
                      placeholder="Enter Mobile Number"
                      value={formik.values.mobileNumber}
                      onChange={(option) => {
                        formik.handleChange("mobileNumber")(option);
                      }}
                      className={`required-input
                           ${
                             formik.errors.mobileNumber &&
                             formik.touched.mobileNumber
                               ? "is-invalid"
                               : ""
                           }`}
                    />
                  </div>
                </div>
              </div>

              <div className="col-sm-12">
                <div className="commoninput">
                  <Button
                    type="submit"
                    color="primary"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                  <Button
                    type="button"
                    color="primary"
                    className="btn btn-primary"
                    onClick={backToHome}
                  >
                    Back
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}
export default LearnerLicense;
