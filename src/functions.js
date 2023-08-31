export function showProfile(data) {

  const profile = document.getElementById('profile');

  appendImgToContainer(profile,'profileImg',data.avatar_url,'avatar');

  /** profile link button 생성 */
  appendLinkButtonToContainer(profile, 'profileLinkBtn button','View Profile','https://www.github.com/'+data.login);
  
  /** Repos수, Gist수, Following수, Followers수 생성 */
  appendDivToContainer(profile,'profileNumber', true);
  const profileNumber = document.getElementsByClassName('profileNumber')[0];
  appendDivToContainer(profileNumber,'publicRepos numberBlock',false, data.public_repos);
  appendDivToContainer(profileNumber,'publicGists numberBlock',false, data.public_gists);
  appendDivToContainer(profileNumber,'following numberBlock',false, data.following);  
  appendDivToContainer(profileNumber,'followers numberBlock',false, data.followers);
  
  /** 이름, 직장, 블로그주소, 위치, 가입 날짜 생성 */
  appendDivToContainer(profile,'profileList', true);
  const profileList = document.getElementsByClassName('profileList')[0];
  appendDivToContainer(profileList,'userName listBlock',false, data.name);
  appendDivToContainer(profileList,'company listBlock',false, data.company);
  appendDivToContainer(profileList,'blog listBlock',false, data.blog);
  appendDivToContainer(profileList,'location listBlock',false, data.location);
  appendDivToContainer(profileList,'createDate listBlock',false, data.created_at);

  /** 가입 날짜만 나오게 설정 */
  const date = document.getElementsByClassName('createDate')[0];
  const dateStr = date.textContent.split('T');
  date.textContent = dateStr[0];
}

export function showRepos(data) { 

  /**생성 날짜 기준으로 repository 정렬 */
  data.sort((a,b) => {return new Date(b.created_at)-new Date (a.created_at);})
  /**최근 repository 선택 */
  const latestRepos = data.slice(0,5);
  /**respository element 선택 */
  const repository = document.getElementById('repos');

  /**Latest Repository 문구 추가 */
  appendDivToContainer(repository,'latestReposTitle',false,'Latest Repository');
  /**url link를 위한 id 선택 */
  const userId = document.getElementById('userId').value;  

  /**repository container에 각 repository추가 */
  latestRepos.forEach(itm => {
    let eachRepos = appendDivToContainer(repository,'reposContainer',true);
    appendDivToContainer(eachRepos,'reposName reposContent',false,itm.name);
    appendLinkButtonToContainer(eachRepos,'reposLinkBtn button reposContent','Link','https://www.github.com/'+userId+'/'+itm.name);
    appendDivToContainer(eachRepos,'stars reposContent',false,itm.stargazers_count);
    appendDivToContainer(eachRepos,'watchers reposContent',false,itm.watchers);
    appendDivToContainer(eachRepos,'forks reposContent',false,itm.forks_count);
  }    
  );

}

/**
 * 
 * @param {*} container 어디에 
 * @param {*} className : 어떤 class들을 가질 것인가, space로 구분
 * @param {*} isContainer : container인가
 * @param {*} data : textContent에 어떤 값을 가질 것인가
 */
function appendDivToContainer(container, className, isContainer, data){
  const appendingData = document.createElement('div');
  if (!isContainer) appendingData.textContent = data;
  const listOfClass = className.split(' ')
  listOfClass.forEach(itm=>appendingData.classList.add(itm));
  container.appendChild(appendingData);
  return appendingData;
}

/**
 * 
 * @param {*} container : 어디에 붙일것인가
 * @param {*} className : 어떤 class들을 가질 것인가, space로 구분
 * @param {*} src : 이미지 source
 * @param {*} alt : 이미지 대체 문구
 */
function appendImgToContainer(container, className, src, alt){
  const appendingData = document.createElement('img');
  appendingData.src = src;
  appendingData.alt = alt;
  const listOfClass = className.split(' ')
  listOfClass.forEach(itm=>appendingData.classList.add(itm));
  container.appendChild(appendingData);
}

/**
 * 
 * @param {*} container : 어디에 붙일것인가
 * @param {*} className : 어떤 class들을 가질 것인가, space로 구분
 * @param {*} btnText : 버튼 텍스트
 * @param {*} url : 링크 어디로 갈것인가
 */
function appendLinkButtonToContainer(container, className, btnText, url){
  const appendingData = document.createElement('input');
  const listOfClass = className.split(' ')
  listOfClass.forEach(itm=>appendingData.classList.add(itm));
  appendingData.value = btnText;
  appendingData.type = 'button';
  appendingData.addEventListener('click', async()=>{window.open(url);});
  container.appendChild(appendingData);
}
