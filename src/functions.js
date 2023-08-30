export function showProfile(data) {

  const profile = document.getElementById('profile');

  appendImgToContainer(profile,'profileImg',data.avatar_url,'avatar');

  appendDivToContainer(profile,'loginId', false, data.login);  
  appendDivToContainer(profile,'profileUrl', false, 'https://github.com/'+data.login);


  appendDivToContainer(profile,'profileNumber', true);
  const profileNumber = document.getElementsByClassName('profileNumber')[0];
  appendDivToContainer(profileNumber,'publicRepos numberBlock',false, data.public_repos);
  appendDivToContainer(profileNumber,'publicGists numberBlock',false, data.public_gists);
  appendDivToContainer(profileNumber,'following numberBlock',false, data.following);  
  appendDivToContainer(profileNumber,'followers numberBlock',false, data.followers);

  appendDivToContainer(profile,'profileList', true);
  const profileList = document.getElementsByClassName('profileList')[0];
  appendDivToContainer(profileList,'userName listBlock',false, data.name);
  appendDivToContainer(profileList,'company listBlock',false, data.company);
  appendDivToContainer(profileList,'blog listBlock',false, data.blog);
  appendDivToContainer(profileList,'location listBlock',false, data.location);
  appendDivToContainer(profileList,'createDate listBlock',false, data.created_at);

  const date = document.getElementsByClassName('createDate')[0];
  const dateStr = date.textContent.split('T');
  date.textContent = dateStr[0];
}

export function showRepos(data) {
  let output = "<h2>Recent Repositories</h2>";
  data.slice(0, 5).forEach(repo => {
      output += `<p>${repo.name}</p>`;
  });
  data.innerHTML = output;
}

/** */
function appendDivToContainer(container, className, isContainer, data){
  const appendingData = document.createElement('div');
  if (!isContainer) appendingData.textContent = data;
  const listOfClass = className.split(' ')
  listOfClass.forEach(itm=>appendingData.classList.add(itm));
  container.appendChild(appendingData);  
}

function appendImgToContainer(container, className, src, alt){
  const appendingData = document.createElement('img');
  appendingData.src = src;
  appendingData.alt = alt;
  const listOfClass = className.split(' ')
  listOfClass.forEach(itm=>appendingData.classList.add(itm));
  container.appendChild(appendingData);
}