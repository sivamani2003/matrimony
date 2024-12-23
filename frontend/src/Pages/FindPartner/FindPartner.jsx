import React, { useState } from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import img1 from "../../assets/images/1.jpeg";
import img2 from "../../assets/images/2.jpeg";
import img3 from "../../assets/images/3.jpeg";
import img4 from "../../assets/images/4.jpeg";

const ProfileCard = ({ profile, onClick, profileImage }) => {
  return (
    <div>
      <div className="bg-white shadow-md shadow-purple-300 rounded-2xl pb-4 m-4 cursor-pointer hover:shadow-2xl text-center flex flex-wrap border hover:shadow-purple-400 transition-all duration-500">
        <div className="w-full transition-all duration-500">
          <div className="bg-pink-500 h-24 px-4 rounded-2xl transition-all duration-500"></div>
          <div className="flex justify-center">
            {/* Set a fixed width and height for the image */}
            <img
              className="rounded-full w-32 h-32 object-cover -mt-14 border-2 border-[#ff0081] bg-white"
              src={profileImage}
              alt={profile.username}
            />
          </div>
          
          <div className="mb-5">
            <h2 className="text-md text-gray-700 font-semibold mb-2">ID: {profile.id}</h2>
            <h2 className="text-lg text-gray-700 font-semibold mb-2">{profile.username}</h2>
            <p className="text-gray-500">{profile.gender}</p>
          </div>
          <div>
            <button
              className="bg-pink-500 hover:shadow-xl text-white font-bold py-3 px-5 rounded-full cursor-pointer transition-all duration-500"
              onClick={() => onClick(profile.id)}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FindPartner = () => {
  const sampleProfiles = [
    { id: 1, username: "John Doe", gender: "Male" },
    { id: 2, username: "Jane Smith", gender: "Female" },
    { id: 3, username: "Mike Johnson", gender: "Male" },
    { id: 4, username: "Sarah Wilson", gender: "Female" },
  ];

  // Mapping images to profiles
  const profileImages = {
    1: img1,
    2: img2,
    3: img3,
    4: img4,
  };

  const [selectedRole, setSelectedRole] = useState("All");
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const profilesPerPage = 8;

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
    setSelectedProfile(null);
  };

  const handleLocationChange = (event) => {
    setSearchLocation(event.target.value);
    setSelectedProfile(null);
  };

  const openProfileDetails = (profileId) => {
    const selected = sampleProfiles.find((profile) => profile.id === profileId);
    setSelectedProfile(selected);
  };

  const goBack = () => {
    setSelectedProfile(null);
  };

  const filteredProfiles = sampleProfiles.filter((profile) => {
    const locationMatch = profile.gender.toLowerCase().includes(searchLocation.toLowerCase());
    return (
      (selectedRole === "All" || profile.gender === selectedRole) &&
      (searchLocation === "" || locationMatch)
    );
  });

  const currentProfiles = filteredProfiles.slice((currentPage - 1) * profilesPerPage, currentPage * profilesPerPage);

  return (
    <div>
      <Header />
      <div className="flex flex-col min-h-screen">
        {/* Place the header at the top */}
        <div className="flex justify-center flex-col md:flex-row bg-gray-100 flex-grow">
          <div
            className={`md:w-3/5 xl:w-1/5 mr-4 p-4 bg-white shadow-xl xl:h-screen rounded-md ${
              selectedProfile ? "hidden" : "block"
            }`}
          >
            <h1 className="text-2xl font-semibold mb-4 text-center">Search Partner</h1>
            <div className="mb-4">
              <label htmlFor="roleFilter" className="block text-sm font-medium text-gray-700">
                Select Gender
              </label>
              <select
                id="roleFilter"
                name="roleFilter"
                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border"
                onChange={handleRoleChange}
                value={selectedRole}
              >
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="locationFilter" className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                id="locationFilter"
                name="locationFilter"
                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border"
                placeholder="Enter location"
                onChange={handleLocationChange}
                value={searchLocation}
              />
            </div>
          </div>

          <div
            className={`w-full xl:w-4/5 md:ml-10 p-4 flex flex-wrap justify-center xl:justify-start shadow-xl bg-white ${
              selectedProfile ? "hidden" : "block"
            }`}
          >
            {currentProfiles.map((profile) => (
              <div key={profile.id} className="w-full sm:w-2/3 md:w-3/3 xl:w-1/4">
                <ProfileCard profile={profile} onClick={openProfileDetails} profileImage={profileImages[profile.id]} />
              </div>
            ))}
          </div>

          {selectedProfile && (
  <div className="md:w-3/4 p-4">
    <div className="bg-white shadow-xl rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center bg-[#ff0081] text-white py-3 rounded">
        Profile Details
      </h2>
      <div className="flex items-center mb-4">
        <img
          className="w-40 h-40 rounded-full border-2 border-[#ff0081] bg-white"
          src={profileImages[selectedProfile.id]} // Update this to use the correct profile image
          alt={selectedProfile.username}
        />
        <div className="ml-4">
          <h2 className="text-lg font-semibold">{selectedProfile.username}</h2>
          <p className="text-gray-500">{selectedProfile.gender}</p>
          <p className="text-gray-500">ID: {selectedProfile.id}</p>
        </div>
      </div>
      <button
        onClick={goBack}
        className="mt-4 bg-[#ff0081] hover:bg-pink-600 text-white font-normal py-2 px-4 rounded-md"
      >
        Back
      </button>
    </div>
  </div>
)}

        </div>

        <Footer /> {/* Place the footer at the bottom */}
      </div>
    </div>
  );
};

export default FindPartner;
