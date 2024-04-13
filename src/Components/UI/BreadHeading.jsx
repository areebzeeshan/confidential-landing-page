import React from 'react'
import { AiFillHome, AiOutlineEdit } from 'react-icons/ai';

let startCenterFlex = "flex justify-start items-center"

const BreadHeading = ({ current, currentIcon, next, nextIcon, middle, middleIcon }) => {
    return (
        <div className={`mb-3 ${startCenterFlex} text-gray-500 gap-2 p-2`}>
            {current} {currentIcon}
            {middle && 
            <span className={`${startCenterFlex} text-gray-100`}>
                / {middle} {middleIcon}
            </span>
            }
            {next && 
            <span className={`${startCenterFlex} text-gray-100`}>
                / {next} {nextIcon}
            </span>
            }
        </div>
    )
}

export default BreadHeading;
