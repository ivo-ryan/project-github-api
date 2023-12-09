const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
        <img src = "${user.avatarUrl}" alt = "Foto do perfil do Usuário" />
      <div class= "data">
        <h1> ${user.name ?? 'Nã posui nome cadastrado 😢'}</h1> <br/>
        <p>${user.bio ?? 'Não posui bio cadastrada 😢'} </p>
        <h4> Seguidores: <span> ${user.followers ?? 'Não possui seguidores 😢'} </span></h4>
        <h4> Seguindo: <span>  ${user.following ?? 'Não segue ninguém ainda 😢'} </span> </h4>

      </div>
    </div>`

  
    let repositoriesItens = ''
    user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name} <p> <span> 🍴${repo.forks}</span> <span>⭐${repo.stargazers_count}</span> <span>👀${repo.watchers}</span> <span>👨‍💻${repo.language}</span> </p> </a></li>`);


    if(user.repositories.length > 0){
        this.userProfile.innerHTML += `<div class="repositories section">
                                         <h2>Repositórios</h2>
                                         <ul>${repositoriesItens}</ul>
                                        </div>`
    }

    let eventsItens = ''
    user.events.forEach(event => eventsItens += `<li><p>${event.repo.name}</p> <span> - ${event.type}</span></li>`);


    if(user.events.length > 0){
        this.userProfile.innerHTML += `<div class="events section">
                                         <h2>Eventos</h2>
                                         <ul>${eventsItens}</ul>
                                        </div>`
    }

    },
    renderNotFound(){
      this.userProfile.innerHTML = "<h3>Usuário não encontrado!</h3>"
    }
  }

export {screen}