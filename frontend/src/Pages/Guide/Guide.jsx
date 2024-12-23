import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";

const itemsEn = [
  {
    title: "How to create an account in Indian Metrimony?",
    content:
      "1. First, go to Indian Metrimony and then click on the user icon at the upper right corner of the home page. <br> 2. Click Create Account. <br> 3. Registration Form will be displayed on the screen. Enter your name and select your gender. <br>  4. Enter your email address and click the Verify button. If your email address is correct, there will be a verification code in the email box. After completing the email verification, enter the verification code in the specified field and click on the Confirm button. <br> 5. Enter your mobile phone number and click the Verify button. If your number is correct, there will be a verification code. Enter the verification code in the specified field and click on the Confirm button. <br> 6. Choose a password and confirm your password. <br> 7. Check the Checkbox if you agree to the Terms and Conditions and Privacy Policyof Indian Metrimony. <br> 8. Complete the account by clicking the Create Account button.",
  },
  {
    title: "How to submit biodata in Indian Metrimony ?",
    content:
      "1. First, log in at Indian Metrimony. Create an account if you don't have an account on Indian Metrimony. <br> 2. Then click the Create Biodata button from the home page or dashboard. <br> 3. Before creating the biodata, read the terms and conditions of Indian Metrimony and if you agree, check all the Checkbox and click the Create Biodata button. <br> 4. Biodata form will be displayed. After filling in all the information, you will enter the Biodata Review Page and submit the biodata by clicking on the Submit button after checking all the information carefully. <br> 5. Within a few days, the Indian Metrimony Customer Care will call your parents and you for verification. <br> 6. After reviewing your biodata by Indian Metrimony Customer Care, you will be notified by email about the 'Approved' or 'Not-approved' status in sha Allah. Note : Write all the information clearly in the biodata",
  },
  {
    title: "How to edit biodata in Indian Metrimony?",
    content:
      "1. First, log in to your account. <br> 2. Then, click the user icon at the top right corner of the page. <br> 3. Click the Edit Biodata button. <br> 4. The biodata form will be displayed. Review your biodata after editing the information you need and then click Submit button. <br> 5. The Indian Metrimony Customer Care will review the information you have edited. <br> 6. After reviewing your biodata by Indian Metrimony Customer Care, you will be notified by email about the 'Approved' or 'Not-approved' status In Sha Allah.",
  },
  {
    title: "How to temporarily hide biodata in Indian Metrimony?",
    content:
      "Keep your biodata hidden during the conversation for marriage issues with the marital alliance. Moreover, you can hide biodata for any reason with one click for any duration and your biodata will not be shown in search results. <br> 1. First, log in to the account. <br> 2. After logging in, go to the Dashboard or click the user icon at the top right corner. <br> 3. Click the Slide Button under Biodata Status. <br> 4. A Confirmation Popup will be shown. <br> 5. Hide the biodata by clicking on the OK button. In the same way, you can make the biodata live again at any time. However, if any information is edited, Customer Care will review your biodata again.",
  },
  {
    title: "How to delete biodata in Indian Metrimony ?",
    content:
      "You can delete your biodata yourself at any time. <br>  1. First, log in to your account. <br>  2. Go to the dashboard after logging in and click the user icon at the upper right corner. <br>  3. Click Settings. <br>  4. Delete your biodata by clicking on the Delete Biodata button.  <br> Note: Once your biodata is deleted, it cannot be undone. You can hide it if necessary for a temporary period.",
  },
  {
    title: "How will I complain about a biodata?",
    content:
      "After viewing the contact information of your biodata through the Connection, if you want to make a complaint about that biodata to Indian Metrimony. <br> 1. Click on the Report button at the bottom of the biodata page. <br> 2. Next, submit the complaint-related information in the form on the next page. <br> Customer Care will verify it and take proper actions and inform you shortly in sha Allah.",
  },
  {
    title: "How to purchase connection?",
    content:
      "A connection is required to view the contact number of a groom or bride's guardian on Indian Metrimony. Connections can be purchased in the following ways- 1. First, enter the dashboard. 2. Click on the Buy Connection button. 3. You will see three connection packages on this page. Select a package as per your requirement and click on the Purchase Now button. 4. Select the account from which you want to pay Bkash or Nagad and click on the Pay Now button. 5. If you select Bkash and click on Pay Now button, you can see payment checkout from Bkash. First, enter your Bkash number and click on Confirm button. 6. Enter an OTP code that will be sent to your Bkash mobile number and click on the Confirm button. 7. Enter your Bkash PIN code and click on Confirm button. 8. In this way, your payment will be done very easily and connections will be added to your account In Sha Allah. 9. You can see your connection on the dashboard and use it to get parent's number.",
  },
  {
    title: "How will I get my 'Connection' refund?",
    content:
      "You can get Connection refund if you fail to make a communication with the guardian of the bride/groom even after having contact information through Connection. However, if the guardians of the opposite wing reject your proposal due to their personal disliking, you will not get the refund. 1. First of all, click on the Report button at the bottom of the biodata. Or go to My Purchase from the Dashboard. From there, click on the Report button next to that biodata. 2. Submit your complaints by filling up the particular form. Customer Care will verify your complaints and inform you very soon in sha Allah. Check the Refund Policy of Indian Metrimony for details.",
  },
  {
    title:
      "I want to delete my account from Indian Metrimony. I don't need my remaining Connections. So, how can I get my refund?",
    content:
      "All the information related to refunds is written in our Refund Policy in detail. Click Refund Policy for details.",
  },
];

const Guide = () => {
  const items = itemsEn;

  return (
    <>
      <Header />
      <div className="container mx-auto my-8 px-4">
        <div className="faq-list mt-6">
          {items.map((item, index) => (
            <div key={index} className="faq-item mb-4">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <div
                className="content mt-2 text-sm"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Guide;
