export default function ProjectList({ isItalian }) {
    var projects = [{
        name: 'portfolio',
        requester: 'Mattia Spasiano',
        date: '19/02/2026'
    },
    {
        name: 'portfolio',
        requester: 'Mattia Spasiano',
        date: '19/02/2026'
    },
    {
        name: 'portfolio',
        requester: 'Mattia Spasiano',
        date: '19/02/2026'
    },
    {
        name: 'portfolio',
        requester: 'Mattia Spasiano',
        date: '19/02/2026'
    },
    {
        name: 'portfolio',
        requester: 'Mattia Spasiano',
        date: '19/02/2026'
    },
    {
        name: 'portfolio',
        requester: 'Mattia Spasiano',
        date: '19/02/2026'
    }] /*Array di oggetti che saranno i progetti svolti da me, avranno il nome, data, id ed azienda o persona per cui ho fatto il progetto*/

    return (
        <>
            <div className="project-list">
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