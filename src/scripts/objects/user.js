const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers:'',
    following: '',
    events: [],
    repositories: [],
    forks: '',
    stars: '',
    watchers:'',
    linguage:'',
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },

    setEvents(received_events){
        this.events = received_events
    },

    setRepositories(repositories){
        this.repositories = repositories
    }
}

export {user}