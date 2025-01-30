// // import React, { useEffect, useState } from "react";
// // import { useGSAP } from "@gsap/react";
// // import gsap from "gsap";
// // import NotFoundPage from "../components/NotFoundPage.jsx";
// // import NotePage from "./NotePage.jsx";

// // const HomePage = () => {
// //   const [searchBar, setSearchBar] = useState("");
// //   const [allTheNotesData, setAllTheNotesData] = useState([]);
// //   const [showNotePage, setShowNotePage] = useState(false);

// //   async function gettingAlltheNotes() {
// //     try {
// //       const output = await fetch(
// //         "http://localhost:4000/motion/api/v1/note/getAllNote",
// //         {
// //           method: "GET",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //         }
// //       );

// //       if (!output.ok) {
// //         throw new Error(`HTTP error! Status: ${output.status}`);
// //       }

// //       const response = await output.json();
// //       setAllTheNotesData(Array.isArray(response.data) ? response.data : []);
// //     } catch (error) {
// //       console.error("Error fetching notes:", error.message);
// //     }
// //   }

// //   useEffect(() => {
// //     gettingAlltheNotes();
// //   }, []);

// //   useGSAP(() => {
// //     gsap.to("#Welcome", {
// //       opacity: 1,
// //       y: 0,
// //       duration: 1.5,
// //       ease: "power3.out",
// //       delay: 0.3,
// //       from: { y: -50 },
// //     });

// //     gsap.to("#Organize", {
// //       opacity: 1,
// //       y: 0,
// //       duration: 1.5,
// //       ease: "power3.inOut",
// //       delay: 0.5,
// //       from: { y: -50 },
// //     });

// //     gsap.from("#Notes", {
// //       opacity: 0,
// //       y: 20,
// //       scale: 0.95,
// //       duration: 1.5,
// //       ease: "power3.out",
// //       stagger: 0.2,
// //     });
// //   }, []);

// //   async function deleteHandler(key) {
// //     try {
// //       const response = await fetch(
// //         `http://localhost:4000/motion/api/v1/note/deleteSingleNote/${key}`,
// //         {
// //           method: "DELETE",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //         }
// //       );

// //       if (!response.ok) {
// //         throw new Error(`HTTP error! Status: ${response.status}`);
// //       }

// //       setAllTheNotesData((prevNotes) =>
// //         prevNotes.filter((note) => note._id !== key)
// //       );
// //     } catch (error) {
// //       console.error("Error Deleting note:", error.message);
// //     }
// //   }

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans">
// //       {showNotePage ? (
// //         <NotePage setShowNotePage={setShowNotePage} />
// //       ) : (
// //         <div className="container mx-auto px-6 py-16">
// //           {/* Heading Section */}
// //           <div className="text-center mb-12">
// //             <h1
// //               className="text-6xl font-extrabold opacity-0 translate-y-12 tracking-tight text-gray-200"
// //               id="Welcome"
// //             >
// //               Welcome to Motion
// //             </h1>
// //             <p
// //               className="mt-4 text-xl opacity-0 text-gray-400"
// //               id="Organize"
// //             >
// //               Organize your thoughts with simplicity and elegance.
// //             </p>
// //           </div>

// //           {/* Search Bar Section */}
// //           <div className="flex justify-center mb-10">
// //             <div className="relative w-full max-w-2xl">
// //               <input
// //                 type="text"
// //                 placeholder="Search notes..."
// //                 value={searchBar}
// //                 onChange={(event) => setSearchBar(event.target.value)}
// //                 className="w-full px-6 py-4 rounded-full bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-600 placeholder-gray-500 shadow-lg transition-shadow"
// //               />
// //             </div>
// //           </div>

// //           {/* Add Button */}
// //           <div className="flex justify-center mb-12">
// //             <button
// //               className="px-8 py-3 rounded-full bg-white text-black text-lg font-medium hover:bg-gray-200 focus:ring-4 focus:ring-gray-500 focus:outline-none shadow-lg transition-all"
// //               onClick={() => setShowNotePage(true)}
// //             >
// //               + Add Note
// //             </button>
// //           </div>

// //           {/* Notes Section */}
// //           {allTheNotesData.length !== 0 ? (
// //             <div
// //               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
// //               id="Notes"
// //             >
// //               {allTheNotesData.map((note) => (
// //                 <div
// //                   key={note._id}
// //                   className="relative bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-700 hover:shadow-2xl hover:scale-105 transition-transform"
// //                 >
// //                   {/* Content Section */}
// //                   <div className="relative z-10">
// //                     <h2 className="text-2xl font-semibold text-white mb-2">
// //                       {note.noteTitle}
// //                     </h2>
// //                     <p className="text-gray-400 text-base leading-relaxed mb-6">
// //                       {note.noteDescription}
// //                     </p>

// //                     <div className="flex justify-end gap-4">
// //                       <button className="text-sm font-medium py-2 px-4 bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 transition-all">
// //                         Edit
// //                       </button>

// //                       <button className="text-sm font-medium py-2 px-4 bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 transition-all">
// //                         Archive
// //                       </button>

// //                       <button
// //                         onClick={() => deleteHandler(note._id)}
// //                         className="text-sm font-medium py-2 px-4 bg-white text-black rounded-full hover:bg-red-500 transition-all"
// //                       >
// //                         Delete
// //                       </button>
// //                     </div>
// //                   </div>



                  
// //                 </div>
// //               ))}
// //             </div>
// //           ) : (
// //             <NotFoundPage/>
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default HomePage;














// import React, { useEffect, useState } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import NotFoundPage from "../components/NotFoundPage.jsx";
// import NotePage from "./NotePage.jsx";

// const HomePage = () => {
//   const [searchBar, setSearchBar] = useState("");
//   const [allTheNotesData, setAllTheNotesData] = useState([]);
//   const [showNotePage, setShowNotePage] = useState(false);

//   async function gettingAlltheNotes() {
//     try {
//       const output = await fetch(
//         "http://localhost:4000/motion/api/v1/note/getAllNote",
//         {
//           method: "GET",
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       if (!output.ok) {
//         throw new Error(`HTTP error! Status: ${output.status}`);
//       }

//       const response = await output.json();
//       setAllTheNotesData(Array.isArray(response.data) ? response.data : []);
//     } catch (error) {
//       console.error("Error fetching notes:", error.message);
//     }
//   }

//   useEffect(() => {
//     gettingAlltheNotes();
//   }, []);

//   useGSAP(() => {
//     gsap.to("#Welcome", { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.3 });
//     gsap.to("#Organize", { opacity: 1, y: 0, duration: 1.5, ease: "power3.inOut", delay: 0.5 });
//     gsap.from("#Notes", { opacity: 0, y: 20, scale: 0.91, duration: 1.5, ease: "power3.out", stagger: 0.2 });
//   }, []);

//   async function deleteHandler(key) {
//     try {
//       const response = await fetch(
//         `http://localhost:4000/motion/api/v1/note/deleteSingleNote/${key}`,
//         {
//           method: "DELETE",
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       setAllTheNotesData((prevNotes) => prevNotes.filter((note) => note._id !== key));
//     } catch (error) {
//       console.error("Error Deleting note:", error.message);
//     }
//   }


//   async function editHandler(key, updatedData) {
//     try {
//       const response = await fetch(`http://localhost:4000/motion/api/v1/note/update/${key}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(updatedData), // Sending updated note data
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
  
//       const output = await response.json(); // Await JSON response
//       console.log(output.data);
//     } catch (error) {
//       console.error("Error updating note:", error.message);
//     }
//   }
  

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white font-sans">
//       {showNotePage ? (
//         <NotePage setShowNotePage={setShowNotePage} />
//       ) : (
//         <div className="container mx-auto px-6 py-16">
//           {/* Heading Section */}
//           <div className="text-center mb-12">
//             <h1 id="Welcome" className="text-6xl font-extrabold opacity-0 tracking-tight text-gray-200">
//               Welcome to Motion
//             </h1>
//             <p id="Organize" className="mt-4 text-xl opacity-0 text-gray-400">
//               Organize your thoughts with simplicity and elegance.
//             </p>
//           </div>

//           {/* Search Bar */}
//           <div className="flex justify-center mb-8">
//             <div className="relative w-full max-w-2xl">
//               <input
//                 type="text"
//                 placeholder="Search notes..."
//                 value={searchBar}
//                 onChange={(event) => setSearchBar(event.target.value)}
//                 className="w-full px-6 py-4 rounded-full bg-gray-900/80 backdrop-blur-lg text-gray-300 border border-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-600 placeholder-gray-500 shadow-lg transition-all"
//               />
//             </div>
//           </div>

//           {/* Add Note Button */}
//           <div className="flex justify-center mb-12">
//             <button
//               className="px-8 py-3 rounded-full bg-gradient-to-br from-white to-gray-300 text-black text-lg font-semibold hover:bg-gray-200 hover:shadow-md focus:ring-4 focus:ring-gray-500 focus:outline-none shadow-lg transition-all"
//               onClick={() => setShowNotePage(true)}
//             >
//               + Add Note
//             </button>
//           </div>

//           {/* Notes Section */}
//           {allTheNotesData.length !== 0 ? (
//             <div id="Notes" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//               {allTheNotesData.map((note) => (
//                 <div
//                   key={note._id}
//                   id="Notes"
//                   className="relative bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-700 hover:shadow-2xl hover:scale-[1.03] transition-transform overflow-hidden group"
//                 >
//                   {/* Subtle Glow Effect */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-black opacity-30 blur-xl transition-all group-hover:opacity-40"></div>

//                   {/* Note Content */}
//                   <div className="relative z-10 transform transition-transform group-hover:scale-105">
//                     <h2 className="text-2xl font-semibold text-white mb-2">{note.noteTitle}</h2>
                    // <p className="text-gray-400 text-base leading-relaxed mb-6 max-h-40  hover:overflow-y-auto ">
                    // {note.noteDescription.length<1000?(note.noteDescription):(note.noteDescription.substring(0,500)+`...`)}
                    // </p>

//                     <div className="flex justify-end gap-4">
//                       <button 
//                       className="text-sm font-medium py-2 px-4 bg-white text-black rounded-full hover:bg-gray-700 transition-all"
//                       onClick={()=> editHandler(note._id)}
//                       >
//                         Edit
//                       </button>

//                       <button className="text-sm font-medium py-2 px-4 bg-red-500 text-gray-300 rounded-full hover:bg-gray-700 transition-all">
//                         Archive
//                       </button>

//                       <button
//                         onClick={() => deleteHandler(note._id)}
//                         className="text-sm font-medium py-2 px-4 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all"
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <NotFoundPage />
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default HomePage;










import React, { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import NotFoundPage from "../components/NotFoundPage.jsx";
import NotePage from "./NotePage.jsx";

const HomePage = () => {
  const [searchBar, setSearchBar] = useState("");
  const [allTheNotesData, setAllTheNotesData] = useState([]);
  const [showNotePage, setShowNotePage] = useState(false);
  const [editNote, setEditNote] = useState(null); // Stores note to be edited
  const [showEditForm, setShowEditForm] = useState(false); // Controls modal visibility

  async function gettingAlltheNotes() {
    try {
      const output = await fetch(
        "https://note-app-6fq4.onrender.com/motion/api/v1/note/getAllNote",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!output.ok) {
        throw new Error(`HTTP error! Status: ${output.status}`);
      }

      const response = await output.json();
      setAllTheNotesData(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching notes:", error.message);
    }
  }

  useEffect(() => {
    gettingAlltheNotes();
  }, []);

  useGSAP(() => {
    gsap.to("#Welcome", { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.3 });
    gsap.to("#Organize", { opacity: 1, y: 0, duration: 1.5, ease: "power3.inOut", delay: 0.5 });
    gsap.from("#Notes", { opacity: 0, y: 20, scale: 0.91, duration: 1.5, ease: "power3.out", stagger: 0.2 });
  }, []);

  async function deleteHandler(key) {
    try {
      const response = await fetch(
        `https://note-app-6fq4.onrender.com/motion/api/v1/note/deleteSingleNote/${key}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setAllTheNotesData((prevNotes) => prevNotes.filter((note) => note._id !== key));
    } catch (error) {
      console.error("Error Deleting note:", error.message);
    }
  }

  async function editHandler(note) {
    setEditNote(note); // Store the selected note
    setShowEditForm(true); // Open the pop-up form
  }

  async function updateNote(key, updatedData) {
    try {
      const response = await fetch(`https://note-app-6fq4.onrender.com/motion/api/v1/note/update/${key}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const updatedNote = await response.json();
      setAllTheNotesData((prevNotes) =>
        prevNotes.map((note) => (note._id === key ? updatedNote.data : note))
      );
    } catch (error) {
      console.error("Error updating note:", error.message);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white font-sans">
      {showNotePage ? (
        <NotePage setShowNotePage={setShowNotePage} />
      ) : (
        <div className="container mx-auto px-6 py-16">
          {/* Heading Section */}
          <div className="text-center mb-12">
            <h1 id="Welcome" className="text-6xl font-extrabold opacity-0 tracking-tight text-gray-200">
              Welcome to Motion
            </h1>
            <p id="Organize" className="mt-4 text-xl opacity-0 text-gray-400">
              Organize your thoughts with simplicity and elegance.
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex justify-center mb-8">
            <input
              type="text"
              placeholder="Search notes..."
              value={searchBar}
              onChange={(event) => setSearchBar(event.target.value)}
              className="w-full max-w-2xl px-6 py-4 rounded-full bg-gray-900/80 backdrop-blur-lg text-gray-300 border border-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-600 placeholder-gray-500 shadow-lg transition-all"
            />
          </div>

          {/* Add Note Button */}
          <div className="flex justify-center mb-12">
            <button
              className="px-8 py-3 rounded-full bg-gradient-to-br from-white to-gray-300 text-black text-lg font-semibold hover:bg-gray-200 hover:shadow-md focus:ring-4 focus:ring-gray-500 focus:outline-none shadow-lg transition-all"
              onClick={() => setShowNotePage(true)}
            >
              + Add Note
            </button>
          </div>

          {/* Notes Section */}
          {allTheNotesData.length !== 0 ? (
            <div id="Notes" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {allTheNotesData.map((note) => (
                <div key={note._id} className="relative bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-700 hover:shadow-2xl transition-transform">
                  <h2 className="text-2xl font-semibold text-white mb-2">{note.noteTitle}</h2>
                  <p className="text-gray-400 text-base leading-relaxed mb-6 max-h-40  overflow-y-auto ">
                    {note.noteDescription.length<1000?(note.noteDescription):(note.noteDescription.substring(0,500)+`...`)}
                    </p>

                  <div className="flex justify-end gap-4">
                    <button
                      className="text-sm font-medium py-2 px-4 bg-white text-black rounded-full hover:bg-gray-700 transition-all"
                      onClick={() => editHandler(note)}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteHandler(note._id)}
                      className="text-sm font-medium py-2 px-4 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <NotFoundPage />
          )}
        </div>
      )}

      {/* Edit Note Modal */}
      {/* Edit Note Modal */}
    {/* Edit Note Modal */}
{showEditForm && editNote && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md">
    <div className="relative bg-black p-10 rounded-3xl shadow-2xl w-[95%] max-w-2xl border border-gray-700 transition-all">
      {/* Close Button */}
      <button
        onClick={() => setShowEditForm(false)}
        className="absolute top-5 right-5 text-white hover:text-gray-300 text-3xl transition-all"
      >
        ✖
      </button>

      {/* Modal Title */}
      <h2 className="text-4xl font-bold text-white mb-8 text-center">
        Edit Your Note
      </h2>

      {/* Note Title Input */}
      <input
        type="text"
        value={editNote.noteTitle}
        onChange={(e) => {
          const updated = { ...editNote, noteTitle: e.target.value };
          setEditNote(updated);
        }}
        className="w-full mb-6 p-4 text-lg bg-gray-900 text-white rounded-lg border border-gray-700 focus:ring-4 focus:ring-gray-600 focus:outline-none transition-all"
        placeholder="Enter Note Title..."
      />

      {/* Note Description Textarea */}
      <textarea
        value={editNote.noteDescription}
        onChange={(e) => {
          const updated = { ...editNote, noteDescription: e.target.value };
          setEditNote(updated);
        }}
        className="w-full h-52 p-4 text-lg bg-gray-900 text-white rounded-lg border border-gray-700 focus:ring-4 focus:ring-gray-600 focus:outline-none transition-all resize-none"
        placeholder="Enter Note Description..."
      />

      {/* Action Buttons */}
      <div className="flex justify-end gap-6 mt-8">
        <button
          className="px-8 py-3 rounded-full bg-gray-800 text-white text-lg font-medium hover:bg-gray-700 transition-all"
          onClick={() => setShowEditForm(false)}
        >
          Cancel
        </button>
        <button
          className="px-8 py-3 rounded-full bg-gradient-to-br from-white to-gray-300 text-black text-lg font-semibold hover:from-gray-300 hover:to-white transition-all shadow-lg"
          onClick={() => {
            updateNote(editNote._id, editNote);
            setShowEditForm(false);
          }}
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default HomePage;



