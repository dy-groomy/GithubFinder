export class User {

  constructor(name) {
      this.userName = name;
  }

  async findUser() {
      const userName = this.userName;
      const profileResponse = await fetch(`https://api.github.com/users/${userName}`);
      const reposResponse = await fetch(`https://api.github.com/users/${userName}/repos`);

      const profile = await profileResponse.json();
      const repos = await reposResponse.json();

      return {
          profile,
          repos
      };
  }
}