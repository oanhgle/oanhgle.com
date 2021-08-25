import * as React from 'react'

const Contact = () => {
    return(
        <div className="mt-25 full-width-container">
        <div className="container max-w-screen-xl mx-auto pt-16 text-gray-900">
          <h1 className= "font-mono text-center text-gray-900">
            {'<'} get in touch{' />'}
          </h1>

          <div className="content highlight px-4 mt-4 text-center">
            <h1>Need a tutor? Want to discuss the meaning of boba? <br></br> Feel free to email me about anything</h1>
          </div>

          <div className="mx-auto pt-10 text-center">
            <a href="mailto:oanhngle@gmail.com">
              <span className="font-mono text-on-accent border-2 border-primary rounded-full font-semibold text-primary px-4 py-3 transition duration-300 ease-in-out hover:bg-primary hover:text-white">
                  Say hello {' '}
                  <span role="img" aria-label="wave">
                    👋
                  </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    )
}

export default Contact