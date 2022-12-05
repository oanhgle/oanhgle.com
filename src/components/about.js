import * as React from 'react';
import Fade from 'react-reveal/Fade';

//define component
const AboutPage = () => {
    return(
    <div className="container m-auto mt-25 -mb-10 sm:px-12 md:px-20 max-w-screen-xl px-15 py-40 flex flex-col lg:flex items-center lg:justify-center lg:space-x-6">
            <Fade top>
                <h1 className="font-mono" style={{color: 'var(--primary)'}}>{'<'} about me{' />'}</h1>
            </Fade>
            <Fade bottom>
                <div className="content highlight xl:px-40 mt-4 text-center text-lg font-sans" style={{color: 'var(--secondary)'}}>
                    <h1>
                        Hello! My name is Oanh Le. I'm currently a senior studying Computer Science at the University of South Florida {' '}
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi inline-block" width="21" height="21" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3m6.82 6L12 12.72L5.18 9L12 5.28L18.82 9M17 16l-5 2.72L7 16v-3.73L12 15l5-2.73V16z" fill="currentColor"></path></svg>.
                        My obsession is to solve problems outside of the tech community with computer science concepts. I aspire to advance more products that make people’s experience with technology memorable and change the world for the better every day. 
                        I've always been the type to be open to new ideas and hobbies, so {' '}
                        <a href = "#contact" className="highlight-under hover:text-hover">reach me out </a>
                        if you want to team up on any project {' '}
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--uil inline-block" width="21" height="21" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M9 11a1 1 0 1 0-1-1a1 1 0 0 0 1 1zm5.36 3.23a3.76 3.76 0 0 1-4.72 0a1 1 0 0 0-1.28 1.54a5.68 5.68 0 0 0 7.28 0a1 1 0 1 0-1.28-1.54zM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8zm5.62-10.87a3.08 3.08 0 0 0-4.24 0a1 1 0 0 0 1.41 1.41a1 1 0 0 1 1.42 0a1 1 0 0 0 1.41 0a1 1 0 0 0 0-1.41z" fill="currentColor"></path></svg>
                        .{' '} Beyond school, I love film photography {' '}
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi inline-block" width="21" height="21" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M20 4h-3.17L15 2H9L7.17 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 14H4V6h4.05l1.83-2h4.24l1.83 2H20v12M12 7a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0 8a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3z" fill="currentColor"></path></svg>
                        , cuddling my cat {' '}
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fluent inline-block" width="21" height="21" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="none"><path d="M3.64 15h8.043c.858 0 1.553-.696 1.553-1.554V6.914c1.407-.101 2.236-1.676 1.475-2.905l-.435-.702a1.904 1.904 0 0 0-1.619-.902h-1.176v-.483A.921.921 0 0 0 10.56 1a2.186 2.186 0 0 0-2.186 2.186v2.936c-1.096.123-1.93.652-2.542 1.388c-.688.826-1.09 1.899-1.33 2.924a14.837 14.837 0 0 0-.35 2.814c-.01.292-.01.548-.008.752h-.503a1.642 1.642 0 0 1-1.2-2.763l.797-.855a3.177 3.177 0 0 0-.076-4.412l-.782-.783a.5.5 0 1 0-.707.707l.783.783A2.176 2.176 0 0 1 2.508 9.7l-.798.855A2.643 2.643 0 0 0 3.64 15zm6.841-12.997v.902a.5.5 0 0 0 .5.5h1.676c.313 0 .604.162.77.429l.435.702a.905.905 0 0 1-.77 1.383h-.355a.5.5 0 0 0-.5.5v7.027a.554.554 0 0 1-.554.554h-.553v-.554a2.607 2.607 0 0 0-2.607-2.608h-.878a.5.5 0 0 0 0 1h.878c.887 0 1.607.72 1.607 1.608V14H5.144c-.003-.193-.002-.437.007-.719c.024-.722.105-1.675.325-2.62c.222-.952.577-1.855 1.124-2.511c.531-.638 1.25-1.055 2.274-1.055a.5.5 0 0 0 .5-.5V3.186c0-.628.489-1.143 1.107-1.183z" fill="currentColor"></path></g></svg>
                        , and passion fruit tea with lychee jelly {' '}
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fluent inline-block" width="21" height="21" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M15.72 2.22a.75.75 0 0 1 1.06 1.06L15.56 4.5h2.19c.317 0 .6.2.706.498l1.25 3.5A.75.75 0 0 1 19 9.5h-1.045l-1.587 10.05c-.21 1.465-1.46 2.45-2.97 2.45h-2.796c-1.51 0-2.76-.986-2.968-2.44L6.044 9.5H5a.75.75 0 0 1-.706-1.002l1.25-3.5A.75.75 0 0 1 6.25 4.5h7.188l2.282-2.28zm.716 7.28H7.562l1.555 9.837c.1.695.692 1.163 1.485 1.163h2.796c.793 0 1.386-.468 1.487-1.174L16.436 9.5zm.785-3.5H6.78l-.715 2h11.872l-.715-2z" fill="currentColor" fillRule="nonzero"></path></svg>
                    </h1>
                </div>
            </Fade>
        </div>
    )
}
export default AboutPage