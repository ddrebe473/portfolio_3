import React from 'react'
import { useEffect } from 'react';
import Sidebar from '../components/Sidebar'
import TopBar from '../components/TopBar';
import images from '../util/imgs'
import GithubHelper from '../util/githubHelper'

function Projects() {

    const [projects, setProjects] = React.useState([])

    const loadProjects = async () => {
        await GithubHelper.login();
        const repos = await GithubHelper.getRepos();
        setProjects(repos);
    }        

    useEffect(() => {
        loadProjects()
    }, [])
    
    const buttons = () => {
        return
    }

    return (<>
        <TopBar />
        <Sidebar buttons={buttons()}/>
        <div className="mainContent">
            {projects.map((project) => {

                const theImg = images[project.name]
                console.log(theImg, 'name:', project.name)

                return <div className="projectRepo" key={project.name} onClick={() => {
                    window.open(project.url.replace('//api.', '//www.').replace('repos/', ''));
                }}>
                    <h1>{project.name}</h1>
                    <img src={theImg.img} alt={images.title} />
                    <p>{project.description ?? 'Description'}</p>
                </div>
            })}
        </div>
    </>)
}

export default Projects