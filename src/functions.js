export function showProfile(data) {

  const profile = document.getElementById('profile');

  const profileImg = document.createElement('img');
  profileImg.src = data.avatar_url;
  profileImg.classList.add('profileImg');
  profileImg.alt = 'avatar'
  profile.appendChild(profileImg);

  appendToContainer(profile,'loginId', false, data.login);  
  appendToContainer(profile,'profileUrl', false, 'https://github.com/'+data.login);


  appendToContainer(profile,'profileNumber', true);
  const profileNumber = document.getElementsByClassName('profileNumber')[0];
  appendToContainer(profileNumber,'publicRepos',false, data.public_repos);
  appendToContainer(profileNumber,'publicGists',false, data.public_gists);
  appendToContainer(profileNumber,'following',false, data.following);  
  appendToContainer(profileNumber,'followers',false, data.followers);

  appendToContainer(profile,'profileList', true);
  const profileList = document.getElementsByClassName('profileList')[0];
  appendToContainer(profileList,'userName',false, data.name);
  appendToContainer(profileList,'company',false, data.company);
  appendToContainer(profileList,'blog',false, data.blog);
  appendToContainer(profileList,'location',false, data.location);
  appendToContainer(profileList,'createDate',false, data.created_at);

}

export function showRepos(data) {
  let output = "<h2>Recent Repositories</h2>";
  data.slice(0, 5).forEach(repo => {
      output += `<p>${repo.name}</p>`;
  });
  data.innerHTML = output;
}

/** */
function appendToContainer(container, className, isContainer, data){
  const appendingData = document.createElement('div');
  if (!isContainer) appendingData.textContent = className + ' ' +data;
  appendingData.classList.add(className);
  container.appendChild(appendingData);  
}