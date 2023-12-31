import React from 'react'
import { useEffect, useState, } from 'react'
import { useParams } from 'react-router-dom'
import { Heading } from './'


const ProjectDetail = () => {
    const params = useParams()
    const id = params.id
    const [data, setData] = useState({})

    useEffect(() => {
        let isMounted = true; 
    
        fetch('/records.json')
            .then(Response => Response.json())
            .then(data => {
                const project = data.find(project => project.id == id);
                if (isMounted) {
                    setData(project);
                }
            })
            .catch(error => console.log("error while fetching project data:", error));
    
        return () => {
            isMounted = false; 
        };
    }, [id]);

    return (
        <div>
            <Heading title="Project Detail" subtitle="Details About The Porject" />
            <div className='flex gap-4 flex-col sm:flex-row'>
                <div className=' basis-2/5 md:h-full h-[50%]'>
                    <img src={data.img_url} alt="image" className='rounded-tr-[16px] object-contain rounded' />
                    <div className='mt-2 flex flex-row justify-between'>
                        <a href={data.livedemo}><button className='button1'>Live Demo</button></a>
                        <a href={data.coderepository}><button className='button1'>Code</button></a>
                    </div>
                </div>
                <div className=' basis-3/5'>
                    <p className=' !text-start heading1 mb-4 mt-2'>{data.title}</p>
                    <div className='flex flex-row flex-wrap gap-2 items-center'>
                        <p className=' text-center paragraph mr-3 '>Tack stack :</p>
                        {
                            data.tech_stack && data.tech_stack.map(tech => (
                                <div key={tech.name} className={`flex gap-1 items-center pr-2 border-r rounded-[4px]`}>
                                    <img src={tech.logo_url} alt={tech.name} className=' text-white' />
                                    <p className='m-0 p-0 text-center font-[Rubik] text-[14px] tracking-wide'>{tech.name}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='mt-4'>
                        <p className='heading3'>ABOUT:</p>
                        <p className='paragraph whitespace-pre-line	indent-8'>{data.about}</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 flex-col md:flex-row mt-8">
                <div className='mt-4 flex-1'>
                    <p className='heading3 mb-2'>PROCESS:</p>
                    <p className='paragraph whitespace-pre-line'>{data.process}</p>
                </div>
                <div className='mt-4 flex-1'>
                    <p className='heading3 mb-2'>CHALLENGES:</p>
                    <p className='paragraph whitespace-pre-line'>{data.challenges}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail