import { baseURL } from "../helpers/apiHelper";
import { useState } from "react";
import axios from "axios";

// async function handleSave() {
//   const token = localStorage.getItem('jwtreservespot');
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `${token}`,
//       Accept: "application/json"
//     }
//   }

//   const val = await instanceRef.current.save()
//   if(val.blocks[0]){
//       await axios.post(`${baseURL}/fields/field`, val, config).then( Swal.fire({
//       icon: 'success',
//       title: 'Added',
//       text: 'Your exercise has been saved',
//       confirmButtonColor: "#878787",
//     }))
//   }
// }

const CreateNewExercise = () => {
  const [event, setEvent] = useState({
    title: "",
    color: "red",
    start: "",
    url: "",
  });

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
    console.log(event);
  };
  //to center the form
  const center = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwtreservespot");
    const { uid } = await JSON.parse(localStorage.getItem("uid"))
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
        Accept: "application/json",
      },
    };
    try {
      await axios.post(`${baseURL}/events/event/user/${uid}`, event, config);
      setEvent({
        title: "",
        start: "",
        color: "",
        url: "",
      });
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div style={center} className="mt-5 md:mt-0 md:col-span-2">
      <form onSubmit={handleSubmit}>
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <img
              className="mx-auto h-12 w-auto"
              src="https://res.cloudinary.com/duscflsvf/image/upload/v1633316619/International_Marathon_Running_Shoe_Logo_2_xznkd8.png"
              alt="Workflow"
            />
            <div className="grid grid-cols-10 gap-8">
              <div className="col-span-10">
                <label className="block text-sm font-medium text-gray-700">
                  Exercise Name
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="title"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                />
              </div>

              <div className="col-span-10">
                <label className="block text-sm font-medium text-gray-700">
                  Url
                </label>
                <input
                  onChange={handleChange}
                  type="url"
                  name="url"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div className="col-span-10">
                <label className="block text-sm font-medium text-gray-700">
                  Exercise Type
                </label>
                <select
                  defaultValue={"Full body workout"}
                  name="color"
                  onChange={handleChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                >
                  <option value={"red"}>Full body workout(red)</option>
                  <option value={"blue"}>Lower body workout(blue)</option>
                  <option value={"green"}>Upper body workout(green)</option>
                </select>
              </div>
              <div className="col-span-10">
                <label className="block text-sm font-medium text-gray-700">
                  Time
                </label>
                <input
                  onChange={handleChange}
                  type="date"
                  name="start"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateNewExercise;
