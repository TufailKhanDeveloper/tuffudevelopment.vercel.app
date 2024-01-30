import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"Full Stack Blockchain Developer | Smart Contracts Expert"}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="Hey! I'm a developer who enjoys making awesome websites and apps. With over 5 years of experience, I use tools like ReactJS, NextJS, VueJS, NodeJS, AngularJS, PHP, and Django to make things look good and work well, both in the front and back." />

                        <AnimatedBody
                            delay={0.1}
                            text="But that's not all – I'm also into blockchain stuff! For more than 3 years, I've been using a special language called Solidity to create smart contracts and understand how blockchain works. Whether it's saving money or dealing with things like Aave, Pancakeswap and Uniswap, I'm here to help."
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="I believe in keeping tech simple and easy to understand. So, whether it's a friendly website or exploring the world of blockchain, we can work together to make something amazing!"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
