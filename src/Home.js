import React, { Component } from "react";
import Header from "./Components/Header";
import vector1 from "./assests/vectorit.jpg";
import back from "./assests/back.png";
import patient from "./assests/patient.png";
import prescription from "./assests/prescription.png";
import edit from "./assests/edit.png";
import abn from "./assests/abn.png";
import deloitte from "./assests/deloitte.png";
import emirate from "./assests/emirate.png";
import ibm from "./assests/ibm.png";
import intel from "./assests/intel.png";
import master from "./assests/master.png";
import w1 from "./assests/w1.jpg";
import Button from "./Components/Button";
import Footer from "./Components/Footer";
export default class Home extends Component {
  render() {
    const Feature = (data) => {
      return (
        <div className="feature">
          <img src={data.icon} alt="icon" />
          <h3>{data.title}</h3>
          <p>{data.desc}</p>
        </div>
      );
    };

    const FAQ = (data) => {
      return (
        <div className="faq-info">
          <div className="question">?</div>
          <div className="info">
            <h5>{data.title}</h5>
            <p>{data.desc}</p>
          </div>
        </div>
      );
    };
    return (
      <div className="home-container">
        <Header />
        <div className="slide">
          <div className="info">
            <h1>
              Welcome to <span>Blender.</span>
              <br />
              Develop Anything.
            </h1>
            <h4>
              Built a beautiful, modern website with flexible Bootstrap
              components built from scratch.
            </h4>
            <div className="btn-container">
              <Button name="View All Pages" icon={back} />
              <div className="sizeBox" />
              <Button name="Documentation" bg="gray" />
            </div>
          </div>
          <div className="vector">
            <img alt="vector1" src={vector1} />
          </div>
        </div>
        <div className="features">
          <Feature
            icon={patient}
            title="Built for Developers"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore laboris nisi ut aliquip ex ea commodo consequat"
          />
          <Feature
            icon={prescription}
            title="Built for Developers"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore laboris nisi ut aliquip ex ea commodo consequat"
          />
          <Feature
            icon={edit}
            title="Built for Developers"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore laboris nisi ut aliquip ex ea commodo consequat"
          />
        </div>
        <div className="clients">
          <img src={abn} alt="icon" />
          <img src={deloitte} alt="icon" />
          <img src={emirate} alt="icon" />
          <img src={ibm} alt="icon" />
          <img src={intel} alt="icon" />
          <img src={master} alt="icon" />
        </div>

        <div className="resource">
          <div className="card">
            <img src={w1} alt="resource" />
            <div className="form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <Button name="Download Sample" bg="#52ba96" />
            </div>
          </div>

          <div className="info">
            <h1>
              The most useful resource <br />
              <span>ever created for dev</span>
            </h1>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore laboris nisi ut aliquip ex ea
              commodo consequat
            </h4>
          </div>
        </div>

        <div className="faq">
          <div className="faq-container">
            <FAQ
              title="Can I use Landkit for my client?"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore laboris nisi ut aliquip ex
                ea commodo consequat "
            />
            <FAQ
              title="Can I use Landkit for my client?"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore laboris nisi ut aliquip ex
                ea commodo consequat consectetur adipiscing elit, sed do
                eiusmod tempor incididunt"
            />
            <FAQ
              title="Can I use Landkit for my client?"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore laboris nisi ut aliquip ex
                ea commodo consequat dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore"
            />
            <FAQ
              title="Can I use Landkit for my client?"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore laboris nisi ut aliquip ex
                ea commodo consequat"
            />
          </div>
          <button className="started"> Get Started</button>
          <h1>Get Landkit and save your time.</h1>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore laboris nisi ut aliquip ex ea
            commodo consequat
          </h4>
          <Button name="Buy it now" icon={back} bg="#52ba96" />
        </div>
        <Footer />
      </div>
    );
  }
}
