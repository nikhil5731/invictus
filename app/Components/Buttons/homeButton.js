import React from 'react'
import './homeButton.css'
import Link from "next/link";

const HomeButton = (props) => {

  return (
    <Link href="/Registeration">
      <button onClick={props.action} className="button1 w-fit max-[768px]:h-[0.75vw] h-[1vw] xl:h-[2vw] flex justify-center items-center font-ticketing max-[320px]:text-[6vw] max-[768px]:text-[5vw] md:text-[3vw] lg:text-[2vw] text-white backdrop-blur hover:backdrop-blur-none" >
        {props.buttonText}
      </button>
    </Link>
  )
}

export default HomeButton