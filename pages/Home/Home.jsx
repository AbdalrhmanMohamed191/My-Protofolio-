import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import "./Home.css";

export const Home = () => {
  return (
    <>
    {/* HERO SECTION */}
<section className="hero-section text-light py-5 bg-dark">
  <div className="container text-center">
    <h1 className="fw-bold hero-title mb-3">AbdAlrhman Mohamed</h1>
    <p className="hero-subtitle mb-4">
      Software Engineer | Full-Stack Developer
    </p>

    <div className="d-flex justify-content-center gap-3 flex-wrap">
      <a href="#projects" className="btn btn-primary btn-lg px-4">
        View Projects
      </a>

      <a
        href="/AbdAlrhman-Mohamed-Shelbaya-CV.pdf"
        download="AbdAlrhman-Mohamed-Shelbaya-CV.pdf"
        className="btn btn-success btn-lg px-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download CV
      </a>

      <a href="#contact" className="btn btn-outline-light btn-lg px-4">
        Contact Me
      </a>
    </div>
  </div>
</section>

{/* ABOUT SECTION */}
<section className="py-5" id="about">
  <div className="container">
    <div className="d-flex flex-column flex-md-row align-items-center">
      {/* Image */}
      <div className="me-md-4 mb-4 mb-md-0 text-center flex-shrink-0">
        <img
          src="/png.jpeg"
          alt="profile"
          className="profile-img img-fluid rounded-circle shadow-lg"
          style={{ maxWidth: "250px", border: "5px solid #0d6efd" }}
        />
      </div>

      {/* Text */}
      <div>
        <h2 className="fw-bold mb-4">About Me</h2>

        <p className="text-muted fs-5">
          I am a highly motivated <strong>Software Engineer</strong> and{" "}
          <strong>Full-Stack Developer</strong> with strong experience in
          building scalable and high-performance web applications using{" "}
          <strong>React, Node.js, Express, and NestJS</strong>.
        </p>

        <p className="text-muted fs-5">
          I have a strong foundation in <strong>clean code</strong> and{" "}
          <strong>best practices</strong>, including{" "}
          <strong>MVC architecture</strong>, RESTful APIs, and{" "}
            <strong>database design</strong>.
        </p>
        <p className="text-muted fs-5">
          I enjoy solving complex problems, designing clean APIs, and creating
          intuitive user interfaces. I follow best practices such as{" "}
          <strong>MVC architecture</strong>, clean code principles, and RESTful
          API standards.
        </p>

        <ul className="list-unstyled mt-4 fs-5">
          <li>✔ Full-Stack Development (React & Node.js)</li>
          <li>✔ RESTful APIs & Authentication (JWT)</li>
          <li>✔ Database Design (MongoDB, MySQL, PostgreSQL)</li>
          <li>✔ Clean Code & Scalable Architecture</li>
            <li>✔ Problem Solving & Debugging</li>
        </ul>
      </div>
    </div>
  </div>
</section>
    
    {/* PROJECTS SECTION */}
    <section className="bg-light py-5" id="projects">
  <div className="container">
    <h2 className="text-center fw-bold mb-5">My Projects</h2>

    <div className="row g-4">
      {/* Project 1 */}
      <div className="col-md-4 project-card">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Authentication System (BE)</h5>
            <p className="card-text text-muted">
              Secure authentication system built with Express.js,
              featuring user registration, login, password reset,
              role-based access control, and JWT authentication.
            </p>
          </div>
          <div className="card-footer bg-white border-0">
            <a
              href="https://github.com/AbdalrhmanMohamed191/Final-Dance-BE.git"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark w-100"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="col-md-4 project-card">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Authentication System (FE)</h5>
            <p className="card-text text-muted">
              Secure authentication system built with React.js,
              featuring user registration, login, password reset,
              role-based access control, and JWT authentication.
            </p>
          </div>
          <div className="card-footer bg-white border-0">
            <a
              href="https://github.com/AbdalrhmanMohamed191/Front-End-Auth.git"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark w-100"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="col-md-4  project-card">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Student Management System</h5>
            <p className="card-text text-muted">
              Full-featured system built using NestJS with modular
              architecture, student enrollment, attendance tracking,
              grading, and reporting modules.
            </p>
          </div>
          <div className="card-footer bg-white border-0">
            <a
              href="https://github.com/AbdalrhmanMohamed191/Student-Mangement-System.git"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark w-100"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Project 4 */}
      <div className="col-md-4 project-card">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">E-Commerce Website</h5>
            <p className="card-text text-muted">
              Responsive e-commerce application built with React.js,
              featuring product catalog, shopping cart, authentication,
              and order processing with Node.js backend.
            </p>
          </div>
          <div className="card-footer bg-white border-0">
            <a
              href="https://github.com/AbdalrhmanMohamed191/react-my-site"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark w-100"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Project 5 */}
      <div className="col-md-4 project-card">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Blog Application</h5>
            <p className="card-text text-muted">
              Full-featured blog application built using React.js,
              Node.js, and MongoDB with authentication and comments.
            </p>
          </div>
          <div className="card-footer bg-white border-0">
            <a
              href="https://github.com/AbdalrhmanMohamed191/Blog-Application.git"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark w-100"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Project 6 */}
      <div className="col-md-4 project-card">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Portfolio Website</h5>
            <p className="card-text text-muted">
              Portfolio website built with React.js and Tailwind CSS,
              showcasing my skills and projects.
            </p>
          </div>
          <div className="card-footer bg-white border-0">
            <a
              href="https://github.com/AbdalrhmanMohamed191/My-Protofolio-.git"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark w-100"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Project 7 */}
      <div className="col-md-4 project-card">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Games Platform</h5>
            <p className="card-text text-muted">
              Games platform built with React.js Rock Paper Scissors game.
              
            </p>
          </div>
          <div className="card-footer bg-white border-0">
            <a
              href="https://github.com/AbdalrhmanMohamed191/Rock----Paper----Scissors--Game.git"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark w-100"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
      {/* Project 8 */}
      </div>
      </div>
  </section>

      {/* CONTACT SECTION */}
      <section className="py-5" id="contact">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Contact Me</h2>
          <p className="text-muted mb-4">
            You can find me on these platforms
          </p>

          <div className="d-flex justify-content-center gap-4 social-links">
            <a 
              href="https://www.facebook.com/share/16vPnUfrUc/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon facebookId"
            >
              <FaFacebook />
            </a>

            <a
              href="https://github.com/AbdalrhmanMohamed191"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon githubId"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/abdalrhman-shelbaya-9b8981341"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon linkedinId"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/3bd_alrhmann"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagramId"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-light text-center py-3">
        <p className="mb-0">
          © {new Date().getFullYear()} AbdAlrhman Mohamed. All Rights Reserved.
        </p>
      </footer>
    </>
  );
};
