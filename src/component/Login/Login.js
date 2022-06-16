import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  const [massage, setMassage] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const data = { email, password };
    const url = `http://localhost:5000/login`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.token){
          setMassage('Successfully received token');
        }
        if(data.error){
          setMassage('Password Missing');
        }
      });
    event.target.reset();
  };
  let massages;
  if(massage){
    massages = (
      <p style={{color: '#03203C'}} className="fw-bold ">
        <small>{massage}</small>
      </p>
    );
  }
  // let errorMsg;
  // if(error){
  //   errorMsg = (
  //     <p className="text-danger fw-bold ">
  //       <small>{error}</small>
  //     </p>
  //   )
  // }
  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-center mt-5">
        <div className="container w-50 mb-4">
          <h2 className="text-secondary text-center my-5">
            {" "}
            <span className="fw-bolder text-dark">Welcome Back</span>{" "}
          </h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className="mb-3  mx-auto small-view"
              controlId="formBasicEmail"
            >
              <Form.Control
                name="email"
                type="email"
                placeholder="Email Address"
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-3 mx-auto small-view"
              controlId="formBasicPassword"
            >
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
              {massages}
            <Button
              className="fw-bold mx-auto d-block small-view mb-1"
              style={{ backgroundColor: "#03203C" }}
              type="submit"
            >
              Login
            </Button>
          </Form>
          <div className="d-flex justify-content-around mt-2">
            <div className="size fw-bold">
              <input
                // onClick={() => setAgree(!agree)}
                type="checkbox"
                name="terms"
                id="terms"
              />
              <label className="" htmlFor="terms">
                Remember Password
              </label>
            </div>
            <div className="size fw-bold">
              <p>Forget Password?</p>
            </div>
          </div>
        </div>
        <div className="d-none  d-lg-block">
          <img src="https://i.ibb.co/tDZLWJV/login1.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
