import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../config/firebase-config';
import { getDocs, collection } from 'firebase/firestore';

const Projects = () => {
    const [project, setProject] = useState([]);

    const collref = collection(db, "projects");

    useEffect(() => {
        const getlist =  async () => {
            try{
                const data = await getDocs(collref);
                const fdata = data.docs.map(doc => (
                    {
                        ...doc.data()
                    }
                ));
                setProject(fdata);

            } catch (error) {
                console.log("getdoc error: ", error);
            }
            
        }
        getlist();
    }, [])


    return (
        <div className=' mt-10 scroll-mt-40' id='project'>
            <div className='flex flex-col'>
                <h2 className='heading2 text-center'>My Projects Highlight</h2>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-start'>
                {
                    project.map((project) => (
                        <div key={project.id} className='flex items-center justify-center my-5'>
                            <div className='w-fit'>
                                <Link to={`/ProjectDetail/${project.id}`} key={project.id}>
                                    <div className="image-container">
                                        <img src={project.img_url} alt={project.title} className='hover:opacity-60 transition duration-300 rounded rounded-tr-[16px] object-contain flex-none w-[360px] relative' />
                                        <div className="hover-text">Click for more details</div>
                                    </div>
                                </Link>
                                <div>
                                    <h3 className='heading3 mb-4 mt-2'>{project.title}</h3>
                                    <div className='flex flex-row flex-wrap gap-2 items-center'>
                                        <p className=' text-center paragraph mr-3 '>Teck stack :</p>
                                        {project.tech_stack.map((tech) => (
                                            <div key={tech.name} className={`flex gap-1 items-center pr-2 border-r rounded-[4px]`}>
                                                <img src={tech.logo_url} alt={tech.name} className=' text-white' />
                                                <p className='m-0 p-0 text-center font-[Rubik] text-[14px] tracking-wide'>{tech.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects