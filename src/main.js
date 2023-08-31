import {User} from './user.js';
import {showProfile, showRepos} from './functions.js';

const findBtn = document.getElementById('findBtn');

findBtn.onclick = async function displayUser() {
    
  /**ID 입력 내역 가져오기 */
  const userId = document.getElementById('userId').value;
  if(userId==''){
    alert('장난?');
    return;
  }

  /**profile DOM 요소 */
  const $profile = document.getElementById('profile');
  /**repository DOM 요소 */
  const $repos = document.getElementById('repos');

  /**profile 리셋 */
  while($profile.firstChild)
  {$profile.removeChild($profile.firstChild);}
  /**repository 리셋 */
  while($repos.firstChild)
  {$repos.removeChild($repos.firstChild);}

  /** data에 profile data, repository data 받아오기 */
  const u1 = new User(userId);
  const data = await u1.findUser();

  /**profile요소 생성 */
  showProfile(data.profile);
  showRepos(data.repos);
}
