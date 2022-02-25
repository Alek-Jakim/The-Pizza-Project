import React, { FC } from "react"
import "./About.css"
import Navbar from "../Navbar/Navbar"



const About: FC = () => {


    return (
        <div className="about-container">
            <Navbar />

            <div className="about-text-container">
                <h3 className="about-header">About Us</h3>
                <br />
                <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis suscipit dolore laborum quasi modi nam sint veniam quibusdam atque, incidunt doloribus recusandae, provident ipsum molestias laboriosam, deleniti labore debitis itaque nihil tenetur deserunt corrupti dolorum. Unde, vero sunt quis autem dolor sed alias similique pariatur nostrum iure. Asperiores, fugit aspernatur!</p>
            </div>
        </div>
    )
}

export default About