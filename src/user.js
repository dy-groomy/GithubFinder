class GitHubAPI {
  async getUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    return new User(data);
  }
}

class User {
  constructor(data) {
    this.username = data.login;
    this.avatar = data.avatar_url;
    this.contributions = Math.floor(Math.random() * 500); // Simulating contributions
  }

  displayUserInfo() {
    return `<h2>${this.username}</h2><img src="${this.avatar}" width="100">`;
  }

  displayContributionGraph() {
    let graph = '<h3>Contribution Graph (simplified)</h3>';
    for(let i = 0; i < this.contributions; i++) {
      graph += '#';
    }
    return graph;
  }
}

async function searchUser() {
  // Show spinner
  document.getElementById('spinner').style.display = 'block';

  const username = document.getElementById('username').value;
  const gitHubAPI = new GitHubAPI();

  const user = await gitHubAPI.getUser(username);

  // Hide spinner
  document.getElementById('spinner').style.display = 'none';

  // Display User Info and Contribution Graph
  document.getElementById('user-info').innerHTML = user.displayUserInfo();
  document.getElementById('contribution-graph').innerHTML = user.displayContributionGraph();
}