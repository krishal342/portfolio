'use client';
import { useState } from 'react'

const CopyContent = (prop) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(prop.content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    };
    return (
        <div onClick={handleCopy} className='relative group'>
            {prop.content}

            {/* Tooltip on hover */}
            <span className="absolute top-6 left-1
                   bg-gray-700 text-white text-xs px-2 py-1 rounded 
                   hidden group-hover:block transition">
                    {
                        copied ? 'Copied!' : 'Click to copy'
                    }
            </span>

        </div>
    )
}

export default CopyContent