import {User} from './user.js';
import {showProfile, showRepos} from './functions.js';

const findBtn = document.getElementById('findBtn');

findBtn.onclick = async function displayUser() {

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


  const userName = document.getElementById('userName').value;
  const u1 = new User(userName);
  const data = await u1.findUser();
  showProfile(data.profile);
  console.log(data.profile);
}
