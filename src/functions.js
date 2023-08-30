export function showProfile(data) {

  const profile = document.getElementById('profile');

  const profileImg = document.createElement('img');
  profileImg.src = data.avatar_url;
  profileImg.alt ='avatar';
  profileImg.classList.add('profileImg');
  profile.appendChild(profileImg);

  const userName = document.createElement('div');
  userName.textContent = data.login;
  userName.classList.add('userName');
  profile.appendChild(userName);

  const url = document.createElement('div');
  url.textContent = 'https://github.com/'+ data.login;  
  url.classList.add('url');
  profile.appendChild(url);

  if (data.twitter_username)
  {
    const twitName = document.createElement('div');
    twitName.textContent = data.twitter_username;  
    twitName.classList.add('twitterUsername');
    profile.appendChild(twitName);
  }

  if (data.blog)
  {
    const blog = document.createElement('div');
    blog.textContent = data.blog;  
    blog.classList.add('blog');
    profile.appendChild(blog);
  }

  if (data.company)
  {
    const company = document.createElement('div');
    company.textContent = data.company;  
    company.classList.add('company');
    profile.appendChild(company);
  }

  if (data.name)
  {
    const name = document.createElement('div');
    name.textContent = data.name;  
    name.classList.add('name');
    profile.appendChild(name);
  }


}

export function showRepos(data) {
  let output = "<h2>Recent Repositories</h2>";
  data.slice(0, 5).forEach(repo => {
      output += `<p>${repo.name}</p>`;
  });
  data.innerHTML = output;
}