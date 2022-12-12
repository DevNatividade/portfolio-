function createProject(link, project, age) {
    return `
    <li>
        <a target="_blank" href="${link}">${project} ${age}
            <div id="preview">
                <img src="./Assets/projeto-${project}.jpeg" alt="imagem do projeto ${project}">
            </div>
        </a> 
    </li>
    `
  }

document.querySelector("#ul").innerHTML =
createProject('https://github.com/DevNatividade/NLW-eSports-Explore', 'NLW-eSports','') +
createProject('https://github.com/DevNatividade/Countdown-Rocketseat-Discover', 'Countdown','') +
createProject('https://github.com/DevNatividade/NLW-Copa', 'NLW-Copa', '') +
createProject('https://github.com/DevNatividade/Social-Tree-Rocketseat-Discover', 'Social-Tree','') +
createProject('https://github.com/DevNatividade/Countdown-Rocketseat-Discover', 'RocketNews','') +
createProject('https://github.com/DevNatividade/Sidebar-Discover', 'Sidebar', '- New') 