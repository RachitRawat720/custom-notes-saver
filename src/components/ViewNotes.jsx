import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import "tailwindcss"
import { addToNotes, updateNote } from '../redux/notesSlice';

const ViewNotes = () => {
    const {id} = useParams();

    const allNotes = useSelector((state) => state.notes.notes);
    const note = allNotes.filter((p) => p._id === id)[0];

    return (
        <div className='p-5 sm:p-15 md:p-20 lg:p-30 flex flex-col items-center'>
            <div>
                <input type="text" placeholder='enter title'
                value={note.title} onChange={(e) => setTitle(e.target.value)}
                disabled
                className='bg-white rounded-xl p-2 pl-5 min-w-40 text-[14px] text-rose-600 sm:text-[16px] sm:min-w-80 md:text-[18px] md:min-w-100 lg:text-[20px] lg:min-w-120' />
            </div>

            <div className='mt-4 sm:mt-8'>
                <textarea className='bg-white text-black rounded-2xl min-w-80 text-[14px] p-3 sm:text-[16px] sm:min-w-120
                sm:p-7 md:text-[18px] md:min-w-150 lg:text-[20px] lg:min-w-180'
                value={note.content} placeholder='enter content here' disabled
                onChange={(e) => setValue(e.target.value)} rows={20}>

                </textarea>
            </div>
        </div>
    )
}

export default ViewNotes
