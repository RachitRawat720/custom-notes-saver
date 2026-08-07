import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "tailwindcss";
import { NavLink, useNavigate } from 'react-router-dom'

{/* ============================================================================ */}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { removeFromNotes } from "../redux/notesSlice";
import toast from "react-hot-toast";

library.add(fas, far, fab)
{/*============================================================================= */}

const Notes = () => {
    const notes = useSelector((state) => state.notes.notes);
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const filteredData = notes.filter((note) =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    function handleDelete(noteId){
        dispatch(removeFromNotes(noteId));
    }

    function handleShare(note) {
        if (navigator.share) {
                navigator.share({
                    title: note.title,
                    text: `${note.title}\n\n${note.content}`,
                })
                .then(() => console.log("Shared successfully"))
                .catch((err) => console.log(err));
        }
        else {
            toast.error("Sharing is not supported on this browser.");
        }
    }

    return (
        <div className="p-10 sm:p-20 sm:pt-10 md:p-30 md:pt-15 lg:p-50 lg:pt-20">
            <input
                className="p-2 w-full max-w-84 text-[14px] rounded-2xl bg-white text-black pl-6 sm:mt-5 sm:min-w-100 sm:text-[16px] md:min-w-140 md:text-[18px] lg:min-w-150  lg:text-[20px]"
                type="search"
                placeholder="search here"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="flex flex-col gap-5 mt-10">
                {filteredData.length > 0 ? (
                    filteredData.map((notes) => {
                        return (
                            <div className="border bg-amber-50 rounded-2xl p-5 flex flex-col" key={notes?._id}>
                                <div className="text-rose-500 text-[22px] ">{notes.title}</div>

                                <div>{notes.content}</div>

                                <div className="flex flex-row gap-4 place-content-start mt-4 mb-4 sm:place-content-end sm:m-0">

                                    {/* =============================================================== */}
                                    <div className="relative group border p-1 rounded-md">
                                        <FontAwesomeIcon icon="pen-to-square" className="cursor-pointer" onClick={() => navigate(`/?notesId=${notes?._id}`)}/>
                                        
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-white text-black text-xs rounded py-1 px-2 whitespace-nowrap">
                                            Click to edit note!
                                        </div>

                                    </div>
                                    {/* ===================================================================== */}

                                    <div className="relative group border p-1 rounded-md">
                                        <FontAwesomeIcon icon={['fas', 'eye']} className="cursor-pointer" onClick={() => navigate(`/notes/${notes?._id}`)}/>

                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-white text-black text-xs rounded py-1 px-2 whitespace-nowrap">
                                            Click to View the note!
                                        </div>
                                    </div>

                                    {/* ===================================================================== */}

                                    <div className="relative group border p-1 rounded-md">
                                        <FontAwesomeIcon icon={['fas', 'trash-can']} className="cursor-pointer" onClick={() => handleDelete(notes?._id)}/>

                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-white text-black text-xs rounded py-1 px-2 whitespace-nowrap">
                                            Click to delete the note!
                                        </div>
                                    </div>
                                    
                                    {/* ===================================================================== */}

                                    <div className="relative group border  p-1 rounded-md">
                                        <FontAwesomeIcon icon={['far','copy']} className="cursor-pointer" onClick={() => navigator.clipboard.writeText(notes?.content)} onClickCapture={() => toast.success('copied to clipboard')} />
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-white text-black text-xs rounded py-1 px-2 whitespace-nowrap">
                                            Click to copy the note!
                                        </div>
                                    </div>

                                    {/* ===================================================================== */}

                                    <div className="relative group border  p-1 rounded-md">
                                        <FontAwesomeIcon
                                            icon={['far', 'share-from-square']}
                                            onClick={() => handleShare(notes)}
                                            className="cursor-pointer"
                                        />

                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-white text-black text-xs rounded py-1 px-2 whitespace-nowrap">
                                            Click to share the note!
                                        </div>
                                    </div>

                                    {/* ===================================================================== */}

                                </div>

                                <div className="text-green-800">
                                    {new Date(notes.createdAt).toLocaleDateString("en-IN", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </div>

                            </div>
                        );
                    })) :
                    (
                        <div className="text-gray-700 font-medium text-xl sm:text-3xl md:text-4xl lg:text-5xl lg:mt-5">
                        "No note present" <div className="text-blue-700 text-[15px] md:text-2xl lg:text-3xl cursor-pointer mt-5 underline"><NavLink to={"/"}>Add Note</NavLink></div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Notes;
