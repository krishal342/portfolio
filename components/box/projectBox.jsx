'use client';
import React, { useState } from "react";

const ProjectBox = (prop) => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="w-full box bg-blue-500/10! ">

            <div className="flex items-center justify-between">
                <div>
                <h2 className="titles">{prop.project.title}</h2>
                <p className="text-sm text-gray-400/80">{prop.project.context}</p>
                </div>

                {/* Toggle button */}
                <button
                    onClick={() => setVisible(!visible)}
                    className=" text-blue-500 hover:underline text-sm"
                >
                    {visible ?

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>}
                </button>

            </div>

            {/* Description (hidden until button clicked) */}
            {visible && (
                <div className=" max-h-[100] overflow-y-auto">
                    <p className="">
                        {prop.project.description}
                    </p>
                </div>
            )}
            <div className="flex gap-3 text-xs">

                {/* github link */}
                {
                    prop.project.github_link && (
                        <a href="" className="link">GitHub</a>
                    )
                }

                {/* live link */}
                {
                    prop.project.live_link && (
                        <a href="" className="link">Live Link</a>
                    )
                }
            </div>



        </div>
    );
};

export default ProjectBox;