class GitHub {
    constructor(){
        this.client_id = 'e39727e95fdfd811b4a7';
        this.client_secret = '92e301bff2d47296f87e6712a9a866c3122b62c7'
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
    

        return {
            profile
        }
    }
}