//import component
import * as React from 'react'
import projects from '../data/projects'

//define component
const ProjectPage = () => {
  return( 
    
    <div className="container m-auto mt-25 -mb-20 sm:px-12 md:px-20 max-w-screen-xl px-15 py-10 flex flex-col lg:flex items-center lg:justify-center lg:space-x-6"> 
     <h1 className="font-mono text-gray-900">{'<'} projects{' />'}</h1>
        <ul className="px-5 mt-6 -mx-5 grid md:grid-cols-3 gap-8 md:gap-8">
            {projects.map((project) => {
                return(
                    <div className="flex flex-col ">
                        <div className="bg-white shadow-md rounded-2xl p-4 hover:shadow-xl transform hover:scale-105 transition duration-500 hover:content highlight">
                            <div className= "flex-none lg:flex">
                                <div className="flex-auto ml-3 justify-evenly py-2">
                                    <div className="flex flex-wrap ">
                                        <div className="w-full flex-none text-xs text-blue-700 font-medium grid justify-items-stretch">
                                            <span className="flex justify-between text-primary">
                                            {project.year}
                                            <div> {project.links.map((link) => {
                                                return(
                                                <span>
                                                    {link.github &&
                                                    <a href= {link.github} target="_blank" className="fill-current text-black hover:text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="inline-flex h-5 w-5 mr-2" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                                        <path d="M10.07 20.503a1 1 0 0 0-1.18-.983c-1.31.24-2.963.276-3.402-.958a5.708 5.708 0 0 0-1.837-2.415a1.2 1.2 0 0 1-.167-.11a1 1 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.004.815.81 1.338 1.141 1.514a4.44 4.44 0 0 1 .924 1.36c.365 1.023 1.423 2.576 4.466 2.376l.003.098l.004.268a1 1 0 0 0 2 0l-.005-.318c-.005-.19-.012-.464-.012-1.182zM20.737 5.377c.032-.125.063-.264.09-.42a6.278 6.278 0 0 0-.408-3.293a1.002 1.002 0 0 0-.615-.58c-.356-.12-1.67-.357-4.184 1.25a13.87 13.87 0 0 0-6.354 0C6.762.75 5.455.966 5.102 1.079a.997.997 0 0 0-.631.584a6.3 6.3 0 0 0-.404 3.357c.025.127.051.246.079.354a6.27 6.27 0 0 0-1.256 3.83a8.422 8.422 0 0 0 .043.921c.334 4.603 3.334 5.984 5.424 6.459a4.591 4.591 0 0 0-.118.4a1 1 0 0 0 1.942.479a1.678 1.678 0 0 1 .468-.878a1 1 0 0 0-.546-1.745c-3.454-.395-4.954-1.802-5.18-4.899a6.61 6.61 0 0 1-.033-.738a4.258 4.258 0 0 1 .92-2.713a3.022 3.022 0 0 1 .195-.231a1 1 0 0 0 .188-1.025a3.388 3.388 0 0 1-.155-.555a4.094 4.094 0 0 1 .079-1.616a7.543 7.543 0 0 1 2.415 1.18a1.009 1.009 0 0 0 .827.133a11.777 11.777 0 0 1 6.173.001a1.005 1.005 0 0 0 .83-.138a7.572 7.572 0 0 1 2.406-1.19a4.04 4.04 0 0 1 .087 1.578a3.205 3.205 0 0 1-.169.607a1 1 0 0 0 .188 1.025c.078.087.155.18.224.268A4.122 4.122 0 0 1 20 9.203a7.039 7.039 0 0 1-.038.777c-.22 3.056-1.725 4.464-5.195 4.86a1 1 0 0 0-.546 1.746a1.63 1.63 0 0 1 .466.908a3.06 3.06 0 0 1 .093.82v2.333c-.01.648-.01 1.133-.01 1.356a1 1 0 1 0 2 0c0-.217 0-.692.01-1.34v-2.35a4.881 4.881 0 0 0-.155-1.311a4.256 4.256 0 0 0-.116-.416a6.513 6.513 0 0 0 5.445-6.424A8.697 8.697 0 0 0 22 9.203a6.13 6.13 0 0 0-1.263-3.826z"/>
                                                    </svg>
                                                    </a>}

                                                    {link.website && 
                                                    <a href= {link.website} target="_blank" className="fill-current text-black hover:text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="inline-flex flex-1 h-5 w-5 mr-2" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                                        <path d="M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2z"/>
                                                    </svg></a>}
                                                    
                                                    {link.demo && 
                                                    <a href= {link.demo} target="_blank" className="fill-current text-black hover:text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="inline-flex h-5 w-5 mr-2" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                                        <path d="M17.001 20h-11a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4v2h-4v11h11v-4h2v4a2 2 0 0 1-2 2zm-5.3-6.293l-1.41-1.414L16.584 6h-3.583V4h7v7h-2V7.415l-6.3 6.292z"/>
                                                    </svg></a>}

                                                    {link.article && 
                                                    <a href= {link.article} target="_blank" className="fill-current text-black hover:text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" className="inline-flex h-5 w-5 mr-2" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" fill="currentColor"></path><path d="M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="currentColor"></path></svg>
                                                        </a>}
                                                </span>
                                            )})}
                                            </div></span>
                                        </div>
                                        <div className="content highlight">
                                            <h1 className="flex-auto text-lg font-bold">{project.title}</h1>
                                        </div>
                                    </div>
                                    <p className="mt-3"></p>
                                    <div className="flex py-4 flex-col text-sm text-gray-500">
                                        <div className="flex-1 inline-flex items-center">
                                            <p  className="text-base" >{project.description}</p>
                                        </div>
                                    </div>
                                    <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
                                        <div className="flex space-x-3 text-sm font-medium">
                                            <div className="flex-auto flex space-x-3">
                                            {project.technology.map((tech) => {
                                                return(
                                                <div className="font-mono text-gray-600 hover:text-primary inline-flex items-center space-x-2">
                                                    <span className="flex-auto text-sm">{tech}</span>
                                                </div>
                                            )})}
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            )}
        </ul>
    </div>
  )
}

//export component
export default ProjectPage