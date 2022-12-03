import React from 'react'
import { useEffect } from 'react';
import Sidebar from '../components/Sidebar'
import TopBar from '../components/TopBar';

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
                return <div className="projectRepo" onClick={() => {
                    window.open(project.url.replace('//api.', '//www.').replace('repos/', ''));
                }}>
                    <h1>{project.name}</h1>
                    <p>{project.description ?? 'Description'}</p>
                </div>
            })}
        </div>
    </>)
}

export default Projects