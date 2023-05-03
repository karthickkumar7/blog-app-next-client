import Image from 'next/image';
import React from 'react';

const Blog = () => {
    return (
        <div className="flex flex-col md:flex-row py-4 px-1 rounded overflow-hidden hover:bg-slate-50 duration-300">
            <Image
                src="/exam.jpg"
                alt="img"
                width={400}
                height={100}
                className="w-full md:w-[45%] object-cover"
            />
            <div className="px-4 w-full md:w-[55%]">
                <h4 className="text-lg md:text-2xl mt-4 md:mt-0 font-semibold hover:underline underline-offset-2 cursor-pointer hover:opacity-95">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere, voluptate.
                </h4>
                <p className="my-2 text-slate-600">
                    Karthick <span>12-03-2023</span>
                </p>
                <p className="text-sm mt-2 text-slate-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                    nulla facilis, repellat asperiores iure sint non itaque
                    aspernatur, illum expedita aut libero! Ratione consequuntur
                    nostrum eligendi! Quod eligendi quaerat quidem!
                </p>
            </div>
        </div>
    );
};

export default Blog;
