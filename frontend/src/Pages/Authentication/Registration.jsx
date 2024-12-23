import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import { useState } from "react";
import img1 from '../../../src/assets/images/Wedding.png'
import img2 from '../../assets/images/ring.jpg'
function Registration() {
  const [selectedGender, setSelectedGender] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "Gender") {
      // Update both selectedGender and formData.gender
      setSelectedGender(value);
      setFormData({
        ...formData,
        gender: value,
      });
    } else if (name === "dob") {
      // Special handling for date of birth to format it as "yyyy-mm-dd"
      const date = new Date(value);
      const formattedDate = date.toISOString().split("T")[0];
      setFormData({
        ...formData,
        [name]: formattedDate,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // This part is removed because the backend integration has been removed
      // toast.success("Registration successful!");
      navigate("/login");
    } catch (error) {
      // Toast is now removed for successful or error cases because there's no backend
      // toast.error("Error during registration.");
      console.log(error);
    }
  };

  return (
    <div>
      <div className="shadow-md">
        <Header />
      </div>

      <div className="flex h-auto p-12 justify-center items-center">
        {/* <!-- Start Left Section --> */}
        <div className="hidden lg:block w-1/2 bg-white flex justify-center"> {/* Hide on small screens, show on lg and up */}
          <div className="md:w-[405px] text-center">
            <h2 className="font-bold text-pink-500 text-4xl">
              Indian Metrimony
            </h2>
            <h3 className="text-black font-semibold mt-4">
              India most trusted Matrimony Web App with best Virtual Meetings, Success Stories, Easy Registration, User Friendly Interface
            </h3>
            <img
              className="w-72 mt-10 mx-auto"
              src={img1}
              alt="error"
            />
          </div>
        </div>
        {/* <!-- End Left Section -->

            <!-- Start Right Section --> */}
        <div className="w-full lg:w-1/2 bg-white-300"> {/* Make this section take full width on small screens */}
          <form className="flex justify-center" onSubmit={handleFormSubmit}>
            <div className="m-10 p-10 border rounded-md w-full md:w-[450px] shadow-purple-300 shadow-lg hover:shadow-purple-400 hover:shadow-xl transition-all duration-500 bg-white">
              <p className="font-bold text-center text-xl mb-3">
                Registration
              </p>

              <input
                className="border rounded-md p-2 w-full my-2 focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                type="text"
                name="username"
                placeholder="Username"
                required
                value={formData.username}
                onChange={handleInputChange}
              />

              <input
                className="border rounded-md p-2 w-full my-2 focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                type="password"
                name="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleInputChange}
              />

              <input
                className="border rounded-md p-2 w-full my-2 focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                type="text"
                name="email"
                placeholder="Email address"
                required
                value={formData.email}
                onChange={handleInputChange}
              />

              <input
                className="border rounded-md p-2 w-full my-2 focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                type="number"
                name="phone"
                placeholder="Mobile number"
                required
                value={formData.mobileNumber}
                onChange={handleInputChange}
              />

              <select
                className="border rounded-md p-2 w-full my-2 focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200 text-gray-800"
                name="Gender"
                value={selectedGender}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Select your gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <input
                className="border rounded-md p-2 w-full my-2 focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200 text-gray-400"
                type="date"
                name="dob"
                onChange={handleInputChange}
              />

              <center>
                <button
                  className="py-2 px-8 rounded-full bg-pink-500 text-white font-semibold drop-shadow-md hover:shadow-purple-300 hover:shadow-lg hover:bg-pink-600 transition-all duration-500 text-md my-4"
                  type="submit"
                >
                  Registration
                </button>
              </center>

              <center>
                <label className="font-sm text-sm text-gray-500 mx-2">
                  Have an account?
                </label>

                <Link
                  className="rounded-md font-bold text-sm text-blue-800"
                  to="/login"
                >
                  Sign in
                </Link>
              </center>
            </div>
          </form>
          {/* <!-- End Right Section --> */}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Registration;
