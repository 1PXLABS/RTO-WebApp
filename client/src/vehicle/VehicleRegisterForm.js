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

  dateOfBirth: yup
    .string("Enter your dateOfBirth")
    .required("Date of Birth is required"),
  age: yup.string("Enter your Age").required("Age is required"),
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

function VehicleRegisterForm() {
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
    address: "",
    countries: "",
    qualification: "",
    bloodgrp: "",
    phoneNumber: "",
    email: "",
    mobileNumber: "",
    emergencyNumber: "",
    workPhoneNumber: "",
    modelOfVehicle: "",
    companyAddress: "",
  });

  const titledropdown = [
    {
      label: "Mr",
      value: "1",
    },
    {
      label: "Mrs",
      value: "2",
    },
    {
      label: "Miss",
      value: "3",
    },
    {
      label: "Ms",
      value: "4",
    },
  ];
  const RTOOffices = [
    {
      value: "Andhra Pradesh",
      label: "Andhra Pradesh State Road Transport Department",
    },
    {
      value: "Arunachal Pradesh",
      label: "Arunachal Pradesh Transport Department",
    },
    {
      value: "Assam",
      label: "Assam State Transport Corporation",
    },
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
      vhandleSubmit(values);
    },
  });

  const navigate = useNavigate();

  const vhandleSubmit = async (values) => {
    setSubmitFlag(true);
    navigate("/message/vehsuccess");

  };

  const backToHome = () => {
    navigate("/home");
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
              <h3>Vehicle Registration Form</h3>

              <div className="col-sm-4">
                <div className="well">
                  <div>
                    <label htmlFor="lname"> Title </label> {""}
                    <Input
                      type="select"
                      name="title"
                      id="title"
                      placeholder="Select Title"
                      value={formik.values.title}
                      onChange={formik.handleChange}
                      className={` inputs required-input
                              ${
                                formik.errors.title && formik.touched.title
                                  ? "is-invalid"
                                  : ""
                              }`}
                    >
                      <option value="">Please Select Title</option>
                      {titledropdown.map((item) => (
                        <option value={item.value}>{item.label}</option>
                      ))}
                    </Input>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname"> Name </label> {""}
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

              <div className="col-sm-12">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname">Address </label> {""}
                    <Input
                      type="textarea"
                      name="address"
                      id="address"
                      placeholder="Enter Address"
                      value={formik.values.address}
                      onChange={(option) => {
                        formik.handleChange("address")(option);
                      }}
                      className={`required-input
                              ${
                                formik.errors.address && formik.touched.address
                                  ? "is-invalid"
                                  : ""
                              }`}
                    />
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
                    <label htmlFor="lname">Company Name </label> {""}
                    <Input
                      type="text"
                      name="companyName"
                      id="companyName"
                      placeholder="Enter Company Name"
                      value={formik.values.companyName}
                      onChange={(option) => {
                        let regex = /^([^0-9]*)$/;
                        const w = option.target.value;
                        if (w === "" || regex.test(w)) {
                          formik.handleChange("companyName")(option);
                        }
                      }}
                      className={`required-input
                               ${
                                 formik.errors.companyName &&
                                 formik.touched.companyName
                                   ? "is-invalid"
                                   : ""
                               }`}
                    />
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname"> Work Phone Number </label> {""}
                    <Input
                      type="text"
                      name="workPhoneNumber"
                      id="workPhoneNumber"
                      placeholder="Enter Work Number"
                      value={formik.values.workPhoneNumber}
                      onChange={(option) => {
                        let regex = /^(\d+(\.\d+)?)$/;
                        const v = option.target.value;
                        if (v === "" || regex.test(v)) {
                          formik.handleChange("workPhoneNumber")(option);
                        }
                      }}
                      className={`required-input
                               ${
                                 formik.errors.workPhoneNumber &&
                                 formik.touched.workPhoneNumber
                                   ? "is-invalid"
                                   : ""
                               }`}
                    />
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

              <div className="col-sm-12">
                <div className="well">
                  <div>
                    <label> Company Address </label> {""}
                    <Input
                      type="textarea"
                      name="companyAddress"
                      id="companyAddress"
                      placeholder="Enter Company Address"
                      value={formik.values.companyAddress}
                      onChange={(option) => {
                        formik.handleChange("companyAddress")(option);
                      }}
                      className={`required-input
                           ${
                             formik.errors.companyAddress &&
                             formik.touched.companyAddress
                               ? "is-invalid"
                               : ""
                           }`}
                    />
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
                    <label htmlFor="lname"> Mobile Phone Number </label> {""}
                    <Input
                      type="text"
                      name="mobileNumber"
                      id="mobileNumber"
                      placeholder="Enter Mobile Number"
                      value={formik.values.mobileNumber}
                      onChange={(option) => {
                        let regex = /^(\d+(\.\d+)?)$/;
                        const v = option.target.value;
                        if (v === "" || regex.test(v)) {
                          formik.handleChange("mobileNumber")(option);
                        }
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

              <div className="col-sm-6">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname"> Email </label> {""}
                    <Input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Enter Email"
                      value={formik.values.email}
                      onChange={(option) => {
                        formik.handleChange("email")(option);
                      }}
                      className={`required-input
                           ${
                             formik.errors.email && formik.touched.email
                               ? "is-invalid"
                               : ""
                           }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="col-sm-12">
            <div className="row" style={{ border: "3px solid #f1f1f1" }}>
              <h3>Vehicle Information</h3>
              <div className="col-sm-6">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname"> Vehicle Registration Number </label>{" "}
                    <Input
                      type="text"
                      name="vehicleNumber"
                      id="vehicleNumber"
                      placeholder="Enter Vehicle Number"
                      value={formik.values.vehicleNumber}
                      onChange={(option) => {
                        formik.handleChange("vehicleNumber")(option);
                      }}
                      className={`required-input
                           ${
                             formik.errors.vehicleNumber &&
                             formik.touched.vehicleNumber
                               ? "is-invalid"
                               : ""
                           }`}
                    />
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname"> Model of vehicle</label> {""}
                    <Input
                      type="text"
                      name="modelOfVehicle"
                      id="modelOfVehicle"
                      placeholder="Enter Model Number"
                      value={formik.values.modelOfVehicle}
                      onChange={(option) => {
                        formik.handleChange("modelOfVehicle")(option);
                      }}
                      className={`required-input
                           ${
                             formik.errors.modelOfVehicle &&
                             formik.touched.modelOfVehicle
                               ? "is-invalid"
                               : ""
                           }`}
                    />
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
                    <label htmlFor="lname"> Colour </label> {""}
                    <Input
                      type="text"
                      name="colour"
                      id="colour"
                      placeholder="Enter Colour"
                      value={formik.values.colour}
                      onChange={(option) => {
                        formik.handleChange("colour")(option);
                      }}
                      className={`required-input
                           ${
                             formik.errors.colour && formik.touched.colour
                               ? "is-invalid"
                               : ""
                           }`}
                    />
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname">Year</label> {""}
                    <Input
                      type="text"
                      name="year"
                      id="year"
                      placeholder="Enter Year"
                      value={formik.values.year}
                      onChange={(option) => {
                        const w = option.target.value;
                        formik.handleChange("year")(option);
                      }}
                      className={`required-input
                ${
                  formik.errors.year && formik.touched.year ? "is-invalid" : ""
                }`}
                    />
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname"> Current Mileage</label> {""}
                    <Input
                      type="text"
                      name="currentMileage"
                      id="currentMileage"
                      placeholder="Enter Current Mileage"
                      value={formik.values.currentMileage}
                      onChange={(option) => {
                        const w = option.target.value;
                        formik.handleChange("currentMileage")(option);
                      }}
                      className={`required-input
                ${
                  formik.errors.currentMileage && formik.touched.currentMileage
                    ? "is-invalid"
                    : ""
                }`}
                    />
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="well">
                  <div className="commoninput">
                    <label htmlFor="lname">Dealer Name</label> {""}
                    <Input
                      type="text"
                      name="dealerName"
                      id="dealerName"
                      placeholder="Enter Dealer Name"
                      value={formik.values.dealerName}
                      onChange={(option) => {
                        formik.handleChange("dealerName")(option);
                      }}
                      className={`required-input
                           ${
                             formik.errors.dealerName &&
                             formik.touched.dealerName
                               ? "is-invalid"
                               : ""
                           }`}
                    />
                  </div>
                </div>
              </div>

              <div className="col-sm-12">
                <div className="commoninput">
                  <button
                    type="submit"
                    color="primary"
                    className="mr-1"
                    onClick={vhandleSubmit}
                  >
                    Submit
                  </button>
                  <button color="secondary" onClick={backToHome}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}
export default VehicleRegisterForm;
