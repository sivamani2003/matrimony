import React, { useState } from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";

const FAQ = () => {
  const items = [
    {
      title: "What is Indian Matrimony? How does it work?",
      content:
        "Indian Matrimony is a website that serves as a platform for connecting individuals from India seeking matrimonial alliances. It began its journey in 2021, offering detailed profiles for people from various regions in India, including those of different Hindu communities, and aims to promote traditional matchmaking for individuals looking for life partners based on family, culture, and values.",
    },
    {
      title: "How do I register?",
      content:
        "To register, simply click on the 'Register' button on the top right corner of the homepage. You will need to fill in important personal details, including information on religion, caste, and family background, and submit the form to create a profile.",
    },
    {
      title: "Is there any fee for using the service?",
      content:
        "Indian Matrimony offers both free and paid services. You can browse through profiles for free, but if you want access to premium features like messaging and advanced matchmaking preferences, you may need to choose a paid plan.",
    },
    {
      title: "How safe is my data on your platform?",
      content:
        "We take privacy and safety seriously. All your personal data is protected using modern security technologies and is shared only with other registered members according to your privacy settings. We do not share your data with unauthorized parties.",
    },
    {
      title: "Can I delete my account?",
      content:
        "Yes, if you wish to delete your profile, you can easily do so from the 'Account Settings'. Deleting your account will remove all your details from the platform permanently.",
    },
    {
      title: "How can I contact other members?",
      content:
        "To connect with other members, you must first sign up and complete your profile. Once you have access to the platform, you can reach out to potential matches via private messaging or request to connect based on common interests.",
    },
    {
      title: "Can I update my profile information after registering?",
      content:
        "Yes, you can update or modify your profile information at any time by visiting the 'Edit Profile' section. Whether it's changing your bio, adding new photos, or updating details such as your location or preferences, we provide flexibility to ensure your profile reflects you accurately.",
    },
    {
      title: "Is Indian Matrimony available on mobile?",
      content:
        "Yes, Indian Matrimony is mobile-friendly and can be accessed via a smartphone browser. We also have an Android and iOS app available for easier access to our platform, so you can manage your profile and communicate with matches on the go.",
    },
    {
      title: "What are the matchmaking criteria for Hindu communities?",
      content:
        "Indian Matrimony focuses on maintaining cultural values and traditions in the matchmaking process. When creating a profile, users can choose their religion, caste, and other relevant details to ensure compatibility with prospective partners from similar or compatible backgrounds.",
    },
    {
      title: "Does Indian Matrimony support arranged marriages?",
      content:
        "Yes, Indian Matrimony acknowledges and respects the tradition of arranged marriages. Our platform allows families and individuals to connect based on shared values, ensuring they meet the expectations of arranged marital systems while maintaining privacy and control over the process.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <div className="faq-container py-8 px-4 mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
        <div className="faq-items space-y-4">
          {items.map((item, index) => (
            <div key={index} className="faq-item border-b pb-4">
              <button
                onClick={() => toggleItem(index)}
                className="faq-title text-left w-full flex justify-between items-center py-2 text-lg font-medium"
              >
                {item.title}
                <span className="ml-2">
                  {activeIndex === index ? "▲" : "▼"}
                </span>
              </button>
              {activeIndex === index && (
                <p className="faq-content mt-2 text-gray-700">{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
