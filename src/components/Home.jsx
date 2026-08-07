import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import "tailwindcss"
import { addToNotes, updateNote } from '../redux/notesSlice';
import toast from "react-hot-toast";

const Home = () => {

    const [title, setTitle ] = useState('');
    const [value, setValue ] = useState('');
    const [searchParams, setSearchParams ] = useSearchParams();
    const noteId = searchParams.get("notesId");
    const dispatch = useDispatch();
    const allNotes = useSelector((state) => state.notes.notes);

    useEffect(() => {
        if(noteId){
            const note = allNotes.find((p) => p._id === noteId);
            
            if(note){
                setTitle(note.title);
                setValue(note.content);
            }
        }
        else {
            setTitle("");
            setValue("");
        }
    }, [noteId, allNotes]);

    function createNote(){

        if (title.trim() === "") {
            toast.error("Title of the note cannot be empty");
            return;
        }

        if(value.trim() === ""){
            toast.error("There should be some content in the note");
            return;
        }

        const existingNote = allNotes.find((item) => item._id === noteId);

        const note = {
            title: title,
            content: value,
            _id: noteId || Date.now().toString(36),
            createdAt: existingNote?.createdAt || new Date().toISOString(),
        }

        if(noteId){
            // update
            dispatch(updateNote(note));
        }
        else{
            dispatch(addToNotes(note));
        }

        // after creation or updation
        setTitle('');
        setValue('');
        setSearchParams({});
    }

    return (

        <div className=' p-5 rounded-xl flex flex-col justify-between items-center overflow-hidden mt-2'>
            <div className='flex flex-col gap-7 md:flex-row md:justify-between md:items-center '>
                <input type="text" placeholder='enter title'
                value={title} onChange={(e) => setTitle(e.target.value)}
                className='bg-white text-black rounded-xl min-w-65 h-8 p-1 pl-3 text-[14px] sm:min-w-80 md:p-2 md:pl-5  md:min-w-80 md:h-8 md:text-[15px] lg:min-w-110 lg:h-11 lg:text-[18px] '/>

                <button className='bg-amber-200 text-black rounded-2xl text-[13px] w-fit px-3 py-1 sm:min-w-20 md:min-w-15 md:h-9 md:text-[15px] md:rounded-2xl lg:min-w-45 lg:h-11 lg:text-[20px] '
                onClick={createNote}>
                    {
                        noteId ? "Update my note" : "Create my note"
                    }
                </button>
            </div>

            <div className='mt-8'>
                <textarea className='bg-white text-black p-4 rounded-2xl min-w-83 sm:min-w-120 sm:text-[13px] md:min-w-150 md:text-[15px] lg:min-w-230 lg:text-[20px] '
                value={value} placeholder='enter content here'
                onChange={(e) => setValue(e.target.value)} rows={20}>

                </textarea>
            </div>

            <button onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth",})
                }
                className='bg-amber-600 hover:bg-green-700 rounded-4xl text-white mt-5 text-[14px] px-2 py-1 sm:mt-5 sm:text-[16px] sm:px-3 sm:py-1 md:mt-8 md:text-xl md:px-4 md:py-2 lg:mt-10 lg:text-2xl lg:px-6 lg:py-2 '>
                ↑ Go to top
            </button>
        </div>
    )
}

export default Home
