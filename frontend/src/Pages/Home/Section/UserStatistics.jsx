import React from "react";
import img1 from '../../../assets/images/couple.svg'
import img2 from '../../../assets/images/male.svg'
import img3 from '../../../assets/images/female.svg'
import img4 from '../../../assets/images/married.svg'
function UserStatistics() {
  return (
    <div className="p-3 max-w-screen-xl mx-auto flex-col text-center justify-center items-center mb-20">
      <h1 className="font-bold text-4xl text-indigo-900 m-5 p-3">
        Indian Matrimony User Statistics
      </h1>

      <div className="md:flex justify-center items-center xl:justify-between flex flex-wrap">
        <div className="flex-col justify-center items-center bg-white p-10 h-[275px] md:w-[295px] w-[350px] border rounded-xl hover:shadow-xl drop-shadow-md mb-4 mr-4 hover:h-[260px] hover:w-[305px] transition-all duration-400 hover:shadow-pink-600">
          <div className="flex justify-center items-center ">
            <img src={img1} alt="" className="w-28" />
          </div>
          <p className="font-bold m-3">Total Groom and Bride's Biodatas</p>
          <h1 className="text-4xl font-bold">100</h1>
        </div>

        <div className="flex-col justify-center items-center bg-white p-10 h-[275px] md:w-[295px] w-[350px] border rounded-xl hover:shadow-xl drop-shadow-md mb-4 mr-4 hover:w-[305px] transition-all duration-400 hover:shadow-pink-600">
          <div className="flex justify-center items-center mb-5">
            <img src={img2} alt="" className="w-20" />
          </div>
          <p className="font-bold m-3">Total Groom's Biodatas</p>
          <h1 className="text-4xl font-bold">100</h1>
        </div>

        <div className="flex-col justify-center items-center bg-white p-10 h-[275px] md:w-[295px] w-[350px] border rounded-xl hover:shadow-xl drop-shadow-md mb-4 mr-4 hover:w-[305px] transition-all duration-400 hover:shadow-pink-600">
          <div className="flex justify-center items-center mb-5">
            <img src={img3} alt="" className="w-20" />
          </div>
          <p className="font-bold m-3">Total Bride's Biodatas</p>
          <h1 className="text-4xl font-bold">20</h1>
        </div>

        <div className="flex-col justify-center items-center bg-white p-10 h-[275px] md:w-[295px] w-[350px] border rounded-xl hover:shadow-xl drop-shadow-md mb-4 mr-4 hover:w-[305px] transition-all duration-400 hover:shadow-pink-600">
          <div className="flex justify-center items-center mb-5">
            <img src={img4} alt="" className="w-28" />
          </div>
          <p className="font-bold m-3">Total Successful Marriages</p>
          <h1 className="text-4xl font-bold">50+</h1>
        </div>
      </div>
    </div>
  );
}

export default UserStatistics;
