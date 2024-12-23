import img1 from '../../../assets/images/hiw-create-biodata.svg'
import img2 from '../../../assets/images/hiw-search.svg'
import img3 from '../../../assets/images/hiw-contact.svg'
import img4 from '../../../assets/images/hiw-success.svg'
function HowToWorks() {
  return (
    <div className="p-3 max-w-screen-xl mx-auto flex-col text-center justify-center items-center mb-20">
      <h1 className="font-bold text-4xl text-indigo-900 m-5 p-3">
        How Indian Matrimony Works
      </h1>

      <div
        className="md:flex
       justify-center
        items-center 
        xl:justify-between 
        flex flex-wrap"
      >
        {/* -------Card------- */}

        <div className="flex-col justify-center items-center bg-white p-10 h-[350px] md:w-[295px] w-[350px] border rounded-xl hover:shadow-xl drop-shadow-md mb-4 mr-4 hover:h-[360px] hover:w-[305px] transition-all duration-400 hover:shadow-pink-600">
          <div className="flex justify-center items-center mb-5">
            <img
              src={img1}
              alt=""
              className=" w-16"
            />
          </div>
          <p className="font-bold m-3 text-xl">Search Biodata</p>
          <h1 className="text-sm ">
            You can easily search biodata using many filters including age, upazila, profession, educational qualification.
          </h1>
        </div>

        {/* ----------Card------- */}

        {/* -------Card------- */}

        <div className="flex-col justify-center items-center bg-white p-10 h-[350px] md:w-[295px] w-[350px] border rounded-xl hover:shadow-xl drop-shadow-md mb-4 mr-4 hover:h-[360px] hover:w-[305px] transition-all duration-400 hover:shadow-pink-600">
          <div className="flex justify-center items-center mb-5">
            <img
              src={img2}
              alt=""
              className=" w-16"
            />
          </div>
          <p className="font-bold m-3 text-xl">Create Biodata</p>
          <h1 className="text-sm ">
            If someone likes your biodata or you like someone's biodata you can directly contact their parent.
          </h1>
        </div>

        {/* ----------Card------- */}
        {/* -------Card------- */}

        <div className="flex-col justify-center items-center bg-white p-10 h-[350px] md:w-[295px] w-[350px] border rounded-xl hover:shadow-xl drop-shadow-md mb-4 mr-4 hover:h-[360px] hover:w-[305px] transition-all duration-400 hover:shadow-pink-600">
          <div className="flex justify-center items-center mb-5">
            <img
              src={img3}
              alt=""
              className=" w-16"
            />
          </div>
          <p className="font-bold m-3 text-xl">Create Biodata</p>
          <h1 className="text-sm ">
            If you like the biodata and conversation, do your own inquiry & get married according to Sunnah.
          </h1>
        </div>

        {/* ----------Card------- */}
        {/* -------Card------- */}

        <div className="flex-col justify-center items-center bg-white p-10 h-[350px] md:w-[295px] w-[350px] border rounded-xl hover:shadow-xl drop-shadow-md mb-4 mr-4 hover:h-[360px] hover:w-[305px] transition-all duration-400 hover:shadow-pink-600">
          <div className="flex justify-center items-center mb-5">
            <img
              src={img4}
              alt=""
              className=" w-16"
            />
          </div>
          <p className="font-bold m-3 text-xl">Create Biodata</p>
          <h1 className="text-sm ">
            You can easily create a biodata on Indian Matrimony completely free of cost within some steps.
          </h1>
        </div>

        {/* ----------Card------- */}
      </div>
    </div>
  );
}
export default HowToWorks;
