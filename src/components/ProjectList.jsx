import React from 'react'
export default function ProjectList({ isItalian }) {
    var projects = [{
        name: 'PORTFOLIO',
        requester: 'MATTIA SPASIANO',
        date: '03/09/2026'
    }] /*Array of Objects. Will make a different file for experiences*/

    return (
        <>
            <div className={`${projects.length === 0 ? 'WIP' : 'project-list'}`}>
                {projects.length === 0 ?
                    <div><strong>Work in progress!</strong></div>
                    :
                    
                    projects.map((project, index) => (
                        <div key={index} className="project">
                            <div className="project-name">{project.name}</div>
                            <div className="project-details">{project.requester} • {project.date} <span className="visit"><a href={project.url}><img src="../src/assets/link icon.svg" alt="" />{isItalian ? ' VISITA!' : ' EXPLORE'}</a></span></div> 
                        </div>
                    ))}
            </div>
        </>
    )
}