import React from 'react'
import { FaRegFileLines } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

export default function Card({ data, reference }) {
    const { desc, filesize, close, tag } = data;
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.1 }} dragElastic={0.1} dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }} className='relative flex-shrink-0 w-60 h-72 rounded-[20px] bg-zinc-900/90 text-white p-5 overflow-hidden'>
            <FaRegFileLines />
            <p className='text-sm leading-tight mt-5 font-semibold'>{desc}</p>
            <div className="footer absolute bottom-0 left-0 w-full">
                <div className='flex items-center justify-between py-3 px-8 mb-3'>
                    <h5>{filesize}</h5>
                    <span className='w-7 h-7 flex items-center justify-center bg-zinc-200 rounded-full'>
                        {close ? <IoClose size=".9em" color='#000' /> : <FiDownload size=".7em" color='#000' />}
                    </span>
                </div>
                {
                    tag.isOpen && (
                        <div className={`tag w-full py-4 ${tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-500"} flex items-center justify-center`}>
                            <h3 className='text-sm font-semibold'>{tag.tagTitle}</h3>
                        </div>
                    )
                }
            </div>
        </motion.div>
    )
}
