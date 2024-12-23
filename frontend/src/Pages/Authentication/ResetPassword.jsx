import { useState } from "react";
import Footer from "../../Components/Layout/Footer";
import Header from "../../Components/Layout/Header";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  

  return (
    <div>
      <div className=" shadow-md">
        <Header />
      </div>
      <div>
        <form className="flex justify-center mt-28">
          <div className="m-10 p-10 border rounded-md shadow md:w-[400px] hover:shadow-blue-300 hover:shadow-lg transition-all duration-500 bg-white">
            <center>
              <img
                className="w-24 h-24 m-2"
                src="../src/assets/images/ring.jpg"
                alt=""
              />
            </center>

            <p className="text-center font-semibold text-xl text-gray-700 mb-3">
              Reset Password
            </p>

            <input
              className="border rounded-xl bg-gray-100 h-10 w-full my-2 px-2 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"
              placeholder="please enter your email address"
              required
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />

            <button
              className="my-2 py-2 px-4 rounded-md bg-pink-500 text-white font-semibold drop-shadow-md hover:shadow-blue-300 w-full"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default ResetPassword;
