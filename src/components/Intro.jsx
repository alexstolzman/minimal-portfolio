import React from "react";

function Intro(){
    return(
        <div className="flex items-center jusitfy-center flex-col text-center pt-20 pb-6">
            <h1 className="text-5xl md:text-7xl mb-1 md:mb-3 font-bold dark:text-white">Alex Stolzman</h1>
            <p className="text-base md:text-x1 mb-3 font-medium">Software Engineer & Web Developer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">Applied Mathematics and Computer Science grad with a passion for software development and
             a focus on web development.</p>
             <a href="https://github.com/alexstolzman" className="text-blue-600  text-xl font-bold visited:text-purple-600">Github Profile</a>

        </div>
    )
}

export default Intro;