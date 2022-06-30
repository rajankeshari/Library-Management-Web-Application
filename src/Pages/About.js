import React from "react";
import { Navigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "../Styles/Pages/About.css";

function About({ user, setUser, isAdmin, setIsAdmin }) {
  if (!Object.keys(user).length) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="about-page">
      <Header
        user={user}
        setUser={setUser}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
      />
      <div className="about-content">
        <div className="service-content">
          <h1>Library Offered Services</h1>
          <p>
            The Library services / facilities include Circulation Service,
            Reference Service, Online reservation of books, Recommendation of
            library material, Current Awareness Service, Inter Library Loan
            Service, Photocopying / Printing Service, Orientation and
            Information Sessions, Selective Dissemination of Information, Audio
            Visual Service and Multimedia Section.
          </p>
          <div className="service-box-container">
            <div className="service-box">
              <i className="fa fa-laptop"></i>
              <span>Circulation Services</span>
              <p>
                Library materials are borrowed and returned at the circulation
                desk, which is located near the main entrance. Reserved books,
                audio visual material, periodicals, reference books and CDs /
                DVDs can be used with in library.
              </p>
            </div>
            <div className="service-box">
              <i className="fa fa-rocket"></i>
              <span>Reference Services</span>
              <p>
                Library provides reference and referral service to its users. If
                the required information source is not available / accessible at
                IST Library, the users are referred to other libraries where the
                required information may be available.
              </p>
            </div>
            <div className="service-box">
              <i className="fa fa-braille"></i>
              <span>Photocopying / Printing Service</span>
              <p>
                Photocopying and printing facility is available with the
                library. Users can get the photocopy of required information
                from reference materials (like reference books, encyclopedias,
                dictionaries, journals and magazines etc.) on payment.
              </p>
            </div>
          </div>
        </div>
        <div className="achievement-content">
          <h1>Achievements</h1>
          <div className="achievement-box-container">
            <div className="achievement-box">
              <img src={require("../Images/ismlibrary.jpg")} alt="" />
              <span>Largest Library In Asia</span>
              <p>
                We have the largest library in Asia, the largest Centre of
                Excellence in Research in India and probably the largest
                Academic Complex in India.
              </p>
            </div>
            <div className="achievement-box">
              <img src={require("../Images/librarystudents.jpg")} alt="" />
              <span>10K+ Registered Students</span>
              <p>
                We have more than 10K students registered for the library
                resources.
              </p>
            </div>
            <div className="achievement-box">
              <img src={require("../Images/digitallibrary.png")} alt="" />
              <span>Digitization of Library Resources</span>
              <p>
                All the library materials are also converted from the hard
                copies to electronic copies for students so that every students
                could get benifite.
              </p>
            </div>
          </div>
        </div>
        <div className="library-info">
          <h1>Vision</h1>
          <p>
            To be a nationally and internationally acclaimed premier institution
            of higher technical and scientific education with social commitment
            having an ethos for intellectual excellence, where initiative is
            nurtured, where new ideas, research and scholarship flourish, where
            intellectual honesty is the norm and from which will emerge the
            leaders and innovators of tomorrow in the realm of technology. While
            serving as a catalyst in a developing society, its goal as one of
            the premier technology education institution in the country would be
            to intimately involve itself not just in the technological
            development of the Nation but indeed in its overall development. The
            Indian School of Mines was formally opened on 9th December 1926, by
            Lord Irwin, the then Viceroy of India to address the need for
            trained manpower related to mining activities in the country with
            disciplines of Mining and Applied Geology. In 1967 it was granted
            the status of a deemed to be university under Section 3 of UGC Act,
            1956. Since its establishment, IIT(ISM) has undergone considerable
            expansion of its activities, and presently it can be considered as a
            total technology education institute.
          </p>
          <h1>Mission</h1>
          <ul>
            <li>
              To educate and train manpower in various disciplines of
              engineering and technology, management, applied sciences and
              applied arts at the graduate, postgraduate and research levels
            </li>
            <li>
              To foster the creation of new and relevant technologies in the
              areas of its core competency and to transfer them to industry for
              effective utilization.
            </li>
            <li>
              To participate directly in the planning and solving of engineering
              and managerial problems of relevance to Indian industry and to
              society at large.
            </li>
            <li>
              To develop and conduct continuingeducation programmes for
              practicing engineers and managers.
            </li>
            <li>
              To develop strong collaborative and cooperative links with private
              and publi c sector industries and government user departments.
            </li>
            <li>
              To develop comprehensive and intimate interaction with premier
              academic and research institutions within the country and abroad
              for mutual benefit.
            </li>
            <li>To develop programmes for faculty growth and development.</li>
            <li>
              To anticipate the technological needs of the nation, and to plan
              and prepare to cater to them.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
