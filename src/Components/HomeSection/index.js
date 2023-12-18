import "./index.css"
import { FaLaptopCode } from "react-icons/fa6";

import { Component } from "react";
import Header from "../Header";

class HomeSection extends Component {

    heroSectionView = () => {
        return (
            <>
            <div className="hero-section-bg">
                <div className="hero-section-container">
                    <div className="hero-section-content">
                        <div className="hero-section-line-height">
                            <h1 className="hero-section-heading">
                                Bring people together to make practice & grow
                            </h1>
                            <p className="hero-section-description">
                                Revolutionary video calling  for interacting and code reviews. With Tikcle, you ‘ll learn and seamlessly grow for industry.
                            </p>
                            <button className="hero-section-button">
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="hero-section-image-bg">
                            <img src="https://res.cloudinary.com/sangamjone/image/upload/v1702845223/project/hero_f15jhq.png" className="hero-image" alt="hero" />
                        </div>
                    </div>
                </div>
               
            </div>
            <div className="making-video-secion">
                <div className="making-video-secion-bg">
                    <div className="making-video-secion-content">
                        <div>
                        <img src = "https://res.cloudinary.com/sangamjone/image/upload/v1702847390/project/video-calling_k62j5i.png" 
                        className="video-calling-image" 
                        alt = "video-calling"/>
                        </div>
                        <div>
                            <h1 className="making-video-call-heading">
                                Making video call amazing
                            </h1>
                            <p>
                            In today's competitive job market, securing a desirable position requires more than 
                            just academic qualifications. The ability to perform well in interviews is a critical
                             skill that students and job seekers must master. However, the process of preparing for
                             interviews can be challenging, and finding opportunities to practice and receive feedback
                              can be equally daunting. To bridge this gap and provide a solution for aspiring professionals,
                               we introduce our innovative platform: the InterviewerConnect.
                            </p>
                        </div>

                    </div>

                </div>
            </div>

            <div className="feature-section">
                <div className="feature-section-bg">
                    <div>
                        <h1>Features</h1>
                        <div className="feature-section-card-container">
                            <div className="features-section-details">
                                <FaLaptopCode/>
                                <div>
                                <h5>
                                    Video Calling
                                </h5>
                                <p>
                                    Seamless video to interact with instructors
                                </p>
                                </div>

                            </div>
                            <div className="features-section-details">
                                <FaLaptopCode/>
                                <div>
                                <h5>
                                    Code Playground
                                </h5>
                                <p>
                                    Code playground for the coding view
                                </p>
                                </div>

                            </div>
                            <div className="features-section-details">
                                <FaLaptopCode/>
                                <div>
                                <h5>
                                    Voice Room
                                </h5>
                                <p>
                                    Without video calling option is there
                                </p>
                                </div>

                            </div>
                            <div className="features-section-details">
                                <FaLaptopCode/>
                                <div>
                                <h5>
                                    Chat Room
                                </h5>
                                <p>
                                    Learner can chat with instructors
                                </p>
                                </div>

                            </div>
                            <div className="features-section-details">
                                <FaLaptopCode/>
                                <div>
                                <h5>
                                    Premium Plan
                                </h5>
                                <p>
                                    Our Premium plan for more flexibility
                                </p>
                                </div>

                            </div>
                            <div className="features-section-details">
                                <FaLaptopCode/>
                                <div>
                                <h5>
                                    Practicle Learning
                                </h5>
                                <p>
                                    Learner can do practice during call 
                                </p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="get-started-section">
                <div className="get-started-section-bg">
                    <div>
                        <h1>Practice & Grow</h1>
                        <h1>prepaired yourself with us</h1>
                        <p className="get-started-section-description">You are on the way,skills up yourself for the industry ready</p>
                        <div style={{"textAlign":"center",marginTop:"20px"}}>
                            <button className="get-started-section-button">
                                Get Started
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </>
        )
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <Header/>
                    </div>
                    {this.heroSectionView()}
                </div>
            </div>
        )
    }
}

export default HomeSection