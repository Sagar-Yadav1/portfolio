import React from "react";
import styles from "./style.module.css";
import Navbar from "../../components/navbar";
import HeroSection from "../../components/herosection";
import AnimationBar from "../../components/animationBar";
import Services from "../../components/services";
import Portfolio from "../../components/portfolio";
import Certificate from "../../components/certificate";
import Footer from "../../components/footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AnimationBar />
            <Services />
            <Portfolio />
            <Certificate />
            <Footer />
        </>
    );
}

export default Home;