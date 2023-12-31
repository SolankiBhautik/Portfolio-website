import React from 'react'
import { useEffect, useState, } from 'react'
import { useParams } from 'react-router-dom'
import { Heading } from './'

import { db } from '../config/firebase-config';
import { getDocs, collection } from 'firebase/firestore';


const ProjectDetail = () => {


    const params = useParams()
    const path = params.id
    const [data, setData] = useState({})

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
                setData(fdata[path]);
            } catch (error) {
                console.log("getdoc error: ", error);
            }
        }
        getlist();
    }, []);


    return (
        <div>
            <Heading title="Project Detail" subtitle="Details About The Porject" />
            <div className='flex gap-4 flex-col md:flex-row'>
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
                        <p className='paragraph whitespace-pre-line	indent-8' dangerouslySetInnerHTML={{__html:data.about}}></p>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 flex-col md:flex-row mt-8">
                <div className='mt-4 flex-1'>
                    <p className='heading3 mb-2'>PROCESS:</p>
                    <p className='paragraph whitespace-pre-line' dangerouslySetInnerHTML={{__html:data.process}}></p>
                </div>
                <div className='mt-4 flex-1'>
                    <p className='heading3 mb-2'>CHALLENGES:</p>
                    <pre className='paragraph whitespace-pre-line'  dangerouslySetInnerHTML={{__html:data.challenges}}></pre>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail