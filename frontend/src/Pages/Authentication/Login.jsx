import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Components/Layout/Footer";
import Header from "../../Components/Layout/Header";
import { useState } from "react";
import img1 from '../../../src/assets/images/Wedding.png'
import img2 from '../../assets/images/ring.jpg'
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    // Your login logic goes here
  };

  return (
    <>
      <div>
        <div className="shadow-md">
          <Header />
        </div>
        <div className="flex h-auto p-12 justify-center items-center transition-all duration-500">
          {/* Left Section - Visible on medium screens and up */}
          <div className="hidden md:block w-1/2 bg-white flex justify-center">
            <div className="md:w-[405px] text-center">
              <h2 className="font-bold text-pink-500 text-4xl">
                Indian Matrimony
              </h2>
              <h3 className="text-black font-semibold mt-4">
                Indias most trusted Matrimony Web App with best Virtual Meetings, Success Stories, Easy Registration, User Friendly Interface
              </h3>
              <img
                className="w-72 m-10 mx-auto"
                src={img1}
                alt="error"
              />
            </div>
          </div>

          {/* Right Section - Takes full width on small screens */}
          <div className="w-full md:w-1/2 bg-white-300">
            <form className="flex justify-center" onSubmit={handleLogin}>
              <div
                className="m-10 p-10 border rounded-2xl md:w-[400px] shadow-pink-300 shadow-lg
                hover:shadow-pink-400 hover:shadow-xl  
                transition-all duration-500 bg-pink"
              >
                <img
                  className="w-24 h-24 mx-auto mb-4"
                  src={img2}
                  alt=""
                />
                <p className="text-center font-bold text-xl mb-2">
                  Login
                </p>
                <p className="text-center font-semibold text-gray-600 mb-3">
                  Welcome Back
                </p>

                <input
                  className="border font-extralight rounded-md h-10 w-full my-2 px-2 focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                  placeholder="Enter Email"
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                <input
                  className="border font-extralight rounded-md h-10 w-full my-2 px-2 focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                  placeholder="Enter password"
                  required
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />

                {/* Keep login and forget password */}
                <div className="flex justify-between">
                  <div>
                    <input className="my-4" type="checkbox" name="checkbox" />
                    <label className="my-4 mx-2 text-sm text-gray-500">
                      Remember me
                    </label>
                  </div>
                  <Link className=" text-sm my-3 text-rose-500 " to="/reset">
                    Forget password?
                  </Link>
                </div>
                
                {/* Submit button */}
                <div className="flex justify-center">
                  <button
                    className="my-4 py-2 px-10 rounded-full bg-pink-500 text-white font-semibold drop-shadow-md hover:shadow-pink-300 hover:shadow-lg hover:bg-pink-600 transition-all duration-500"
                    type="submit"
                  >
                    Log in
                  </button>
                </div>
                <center>
                  <label className="text-sm text-gray-600">
                    Don't have an account? &nbsp;
                  </label>
                  <Link
                    to="/registration"
                    className="rounder-md font-semibold text-sm text-blue-800"
                  >
                    Click Here
                  </Link>
                </center>
              </div>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Login;
