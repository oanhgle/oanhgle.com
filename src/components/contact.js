import * as React from 'react';
import Fade from 'react-reveal/Fade';

const Contact = () => {
  return(
    <div className="mt-25 full-width-container">
      <div className="container max-w-screen-xl mx-auto pt-16">
        <Fade top>
          <h1 className= "font-mono text-center" style={{color: 'var(--primary)'}}>
            {'<'} get in touch{' />'}
          </h1>
        </Fade>

        <Fade bottom>
          <div className="content highlight px-4 mt-4 text-center text-base" style={{color: 'var(--secondary)'}}>
            <h1>Need a tutor? Want to discuss the meaning of boba? <br></br> Feel free to email me about anything</h1>
          </div>
          <div className="mx-auto pt-10 text-center" style={{color: 'var(--theme)'}}>
            <a href="mailto:oanhngle@gmail.com">
              <span className="font-mono text-on-accent border-2 border-primary rounded-full font-semibold px-4 py-3 transition duration-300 ease-in-out effect">
                  Say hello {' '}
                  <span role="img" aria-label="wave">
                    👋
                  </span>
              </span>
            </a>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Contact