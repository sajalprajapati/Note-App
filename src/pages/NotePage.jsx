// import React, { useState } from "react";

// const NotePage = ({ setShowNotePage }) => {
//   const [formData, setFormData] = useState({
//     noteTitle: "",
//     noteDescription: "",
//   });

//   function changeHandler(event) {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   }

//   async function submitHandler(event) {
//     event.preventDefault();
//     setShowNotePage(false);

//     try {
//       const response = await fetch(
//         "http://localhost:4000/motion/api/v1/note/create",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       const result = await response.json();

//       if (response.ok) {
//         // alert("Note saved successfully!");
//         setFormData({ noteTitle: "", noteDescription: "" });
//       } else {
//         // alert(`Error: ${result.message}`);
//         console.log(result.message)
//       }
//     } catch (error) {
//       alert("Failed to save the note. Please try again later.");
//     }
//   }

//   return (
//     <div className="relative flex items-center justify-center min-h-screen  bg-gradient-to-br from-gray-900 via-black to-gray-800">
//       {/* Blurred Background */}
//       <div className="absolute inset-0 backdrop-blur-xl bg-black/30 -z-10"></div>

//       {/* Note Container */}
//       <div className="relative w-full max-w-lg bg-gray-900 text-white rounded-2xl p-8 shadow-lg border border-gray-700">
//         {/* Close Button */}
//         <button
//           onClick={() => setShowNotePage(false)}
//           className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl"
//         >
//           &times;
//         </button>

//         <h1 className="text-2xl font-semibold text-center mb-6">
//           Create a Note
//         </h1>

//         <form onSubmit={submitHandler} className="space-y-6">
//           {/* Title Field */}
//           <div>
//             <label
//               htmlFor="title"
//               className="block text-sm font-medium text-gray-300 mb-2"
//             >
//               Note Title
//             </label>
//             <input
//               id="title"
//               type="text"
//               name="noteTitle"
//               value={formData.noteTitle}
//               onChange={changeHandler}
//               placeholder="Add a title"
//               className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-200 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"
//             />
//           </div>

//           {/* Description Field */}
//           <div>
//             <label
//               htmlFor="description"
//               className="block text-sm font-medium text-gray-300 mb-2"
//             >
//               Note Description
//             </label>
//             <textarea
//               id="description"
//               name="noteDescription"
//               value={formData.noteDescription}
//               onChange={changeHandler}
//               placeholder="Write your thoughts here..."
//               className="w-full h-40 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-200 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50 resize-none"
//             />
//           </div>

//           {/* Save Button */}
//           <button
//             type="submit"
//             className="w-full py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white text-sm font-medium focus:outline-none focus:ring-4 focus:ring-gray-500 transition-all"
//           >
//             Save Note
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default NotePage;

















import React, { useState } from "react";

const NotePage = ({ setShowNotePage }) => {
  const [formData, setFormData] = useState({
    noteTitle: "",
    noteDescription: "",
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  async function submitHandler(event) {
    event.preventDefault();
    setShowNotePage(false);

    try {
      const response = await fetch(
        "https://note-app-6fq4.onrender.com/motion/api/v1/note/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setFormData({ noteTitle: "", noteDescription: "" });
      } else {
        console.log(result.message);
      }
    } catch (error) {
      alert("Failed to save the note. Please try again later.");
    }
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white p-6">
      {/* Blurred Background Effect */}
      <div className="absolute inset-0 backdrop-blur-3xl bg-white/5 -z-10"></div>

      {/* Enlarged Note Container with Enhanced Glassmorphism */}
      <div className="relative w-full max-w-3xl bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-12 border border-white/20 transition-all hover:shadow-4xl">
        {/* Close Button */}
        <button
          onClick={() => setShowNotePage(false)}
          className="absolute top-6 right-6 text-white text-4xl font-light hover:text-gray-300 transition-all"
        >
          &times;
        </button>

        <h1 className="text-4xl font-bold text-center mb-8 text-gray-100 drop-shadow-lg">
          Create a Note
        </h1>

        <form onSubmit={submitHandler} className="space-y-8">
          {/* Title Field */}
          <div className="relative">
            <label
              htmlFor="title"
              className="block text-lg font-medium text-gray-300 mb-3"
            >
              Note Title
            </label>
            <input
              id="title"
              type="text"
              name="noteTitle"
              value={formData.noteTitle}
              onChange={changeHandler}
              placeholder="Add a title"
              className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 shadow-lg transition-all backdrop-blur-xl placeholder-gray-400"
            />
          </div>

          {/* Description Field */}
          <div className="relative">
            <label
              htmlFor="description"
              className="block text-lg font-medium text-gray-300 mb-3"
            >
              Note Description
            </label>
            <textarea
              id="description"
              name="noteDescription"
              value={formData.noteDescription}
              onChange={changeHandler}
              placeholder="Write your thoughts here..."
              className="w-full h-52 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 resize-none shadow-lg transition-all backdrop-blur-xl placeholder-gray-400"
            />
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full py-4 bg-white/20 text-white text-xl font-semibold rounded-xl hover:bg-white/30 transition-all focus:outline-none focus:ring-4 focus:ring-gray-500 shadow-lg backdrop-blur-xl"
          >
            Save Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default NotePage;
