import * as React from 'react'
import Fade from 'react-reveal/Fade';

const Footer = () => {
  return(
    <footer className="relative w-full h-56 overflow-hidden">
    <div className="container h-full md:max-w-screen-md lg:max-w-screen-xl m-auto px-5 md:px-20 pb-12 pt-24">
      <div className="container flex-col justify-between md:space-y-8" style={{color: 'var(--primary)'}}>
        <div className="flex flex-col-reverse md:flex-row md:justify-between space-y-reverse space-y-8 md:space-y-0">
          <Fade big>
            <span
            className="text-xs tracking-wider self-center md:self-end"
            aria-label="Copyright">
              © 2021-2022 Oanh Le. All Rights Reserved.
            </span>
          </Fade>
          <div className="flex flex-row items-center space-x-4 justify-center md:justify-end">
            <Fade>
              <span>
                <a
                  href="mailto:oanhngle@gmail.com"
                  aria-label="Email oanhngle@gmail.com"
                  title="Email"
                >
                  <svg
                    aria-hidden="true"
                    className="h-8 w-8 icon transition duration-100"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                  >
                    <path d="M25 5H5a2.497 2.497 0 00-2.487 2.5l-.013 15C2.5 23.875 3.625 25 5 25h20c1.375 0 2.5-1.125 2.5-2.5v-15C27.5 6.125 26.375 5 25 5zm-.5 5.313l-8.838 5.524c-.4.25-.925.25-1.325 0L5.5 10.314a1.063 1.063 0 111.125-1.8L15 13.75l8.375-5.238a1.062 1.062 0 111.125 1.8z" />
                  </svg>
                </a>
              </span>
            </Fade>
            <Fade big>
              <span>
                <a
                  href="https://github.com/oanhgle"
                  aria-label="Visit GitHub"
                  title="Visit GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    aria-hidden="true"
                    className="h-8 w-8 icon transition duration-100"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                  >
                    <path d="M14.988 2.235C7.743 2.232 1.875 8.098 1.875 15.337c0 5.724 3.67 10.59 8.783 12.378.689.173.583-.317.583-.65v-2.271c-3.975.466-4.137-2.165-4.403-2.605-.54-.92-1.814-1.154-1.433-1.593.906-.466 1.828.117 2.898 1.696.773 1.145 2.282.952 3.047.762a3.695 3.695 0 011.016-1.781c-4.119-.739-5.836-3.253-5.836-6.24 0-1.451.478-2.784 1.415-3.86-.597-1.772.056-3.29.144-3.515 1.702-.152 3.471 1.219 3.61 1.327.966-.26 2.07-.398 3.307-.398 1.242 0 2.35.143 3.325.407.331-.252 1.972-1.43 3.554-1.286.085.226.723 1.708.16 3.457.95 1.078 1.433 2.423 1.433 3.876 0 2.994-1.728 5.51-5.859 6.237a3.733 3.733 0 011.116 2.666v3.296c.024.264 0 .525.44.525 5.188-1.75 8.924-6.65 8.924-12.425 0-7.242-5.872-13.105-13.11-13.105z" />
                  </svg>
                </a>
            </span>
            </Fade>
            <Fade big>
              <span>
                <a
                  href="https://www.linkedin.com/in/ohle/"
                  aria-label="Visit LinkedIn profile"
                  title="Visit LinkedIn profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    aria-hidden="true"
                    className="h-8 w-8 icon transition duration-100"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                  >
                    <path d="M27.5 3.5h-23c-.553 0-1 .447-1 1v23c0 .553.447 1 1 1h23c.553 0 1-.447 1-1v-23c0-.553-.447-1-1-1zM10.916 24.803h-3.71V12.872h3.71v11.931zM9.062 11.241a2.15 2.15 0 110-4.301 2.15 2.15 0 010 4.3zm15.741 13.562h-3.706V19c0-1.384-.025-3.162-1.928-3.162-1.928 0-2.225 1.506-2.225 3.062v5.903H13.24V12.872h3.556v1.631h.05c.494-.937 1.703-1.928 3.51-1.928 3.756 0 4.446 2.472 4.446 5.684v6.544z" />
                  </svg>
                </a>
              </span>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer