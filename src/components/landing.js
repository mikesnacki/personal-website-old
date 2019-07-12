import Typing from 'react-typing-animation';
import React from 'react'
import Layout from "../components/layout"


function Landing() {
    const welcome = ["Hi. ",
        "I'm Mike. ",
        "I like to build things. ",
        "Thanks for coming to my webpage. "]

    return (
        <div className="landing-container">
            <Typing speed={50}>
                <h2 className="landing-font">
                    {welcome[0]}
                    <Typing.Delay ms={250} />
                    {welcome[1]}
                    <Typing.Delay ms={250} />
                    {welcome[2]}
                    <Typing.Delay ms={250} />
                    {welcome[3]}
                </h2>
            </Typing>
        </div >
    )
}

export default Landing
