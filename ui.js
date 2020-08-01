class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    //display profile in UI
    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class = "img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-info">Folllowing: ${user.following}</span>
                    <br><br>
                    <ul class="list-groups">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
    <h3 class="page-heading mb-3"></h3>
    <div id="respos"></div>
        `;
    }

    //show alert
    showAlert(message,className){
        //clear any remaining alerts
        this.clearAlert();
        //create div
        const div =  document.createElement('div');
        //add classes
        div.className = className;
        //add text
        div.appendChild(document.createTextNode(message));
        //get parent
        const container = document.querySelector('.searchContainer');
        //get serach box
        const search = document.querySelector('.search');
        //insert alert
        container.insertBefore(div,search);
        //Time out after 3 sec
        setTimeout(()=>{
            this.clearAlert();
        },3000);

    }

    //clear alert
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }

    //clear profile
    clearProfile(){
        this.profile.innerHTML = "";
    }
}