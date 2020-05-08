const MEDIA = (() => {
    let data = {
        UserProfile: {},
        right: {},
        //default  state
    }
    const render = () => {
        const { UserProfile } = data
        var htmlString = `
        ${data.UserProfile.map((key,index) => {
            return `
            <div class="box box-primary">
        <div class="box-body box-profile">
          <img class="profile-user-img img-responsive img-circle" src="${key.personImg}" alt="User profile picture">
          <h3 class="profile-username text-center">${key.personName}</h3>
          <p class="text-muted text-center">${key.personProfession}</p>
            <hr>
            <div class="col"><span><strong>Followers</strong></span><span
                    class="values float-right"  >${key.Followers}</span></div>
            <hr>
            <div class="col"><span><strong>Following</strong></span><span
                    class="values float-right">${key.Following}</span></div>
            <hr>
            <div class="col"><span><strong>Friends</strong></span><span
                    class="values float-right">${key.Friends}</span></div>
            <hr>
            <div id="follow">
                <button class="btn-sm btn-primary btn-block"  onclick="MEDIA.follow(${index});"><strong>Follow</strong></button>
            </div>
        </div>
      </div>
      <div class="box box-primary">
        <div class="card-header">
            <h5>About me</h5>
        </div>
        
        <div class="box-body">
          <strong><i class="fa fa-book margin-r-5"></i> Education</strong>

          <p><small class="text font-weight-bold">${key.Education}</small></p>

          <hr>

          <strong><i class="fa fa-map-marker margin-r-5"></i> Location</strong>

          <p> <small class="text font-weight-bold">${key.Location}</small></p>

          <hr>

          <strong><i class="fa fa-pencil margin-r-5"></i> Skills</strong>

          <p>
            <span class="badge badge-danger">${key.Skills1}</span>
            <span class="badge badge-success">${key.Skills2}</span>
            <span class="badge badge-info">${key.Skills3}</span>
            <span class="badge badge-warning">${key.Skills4}</span>
            <span class="badge badge-primary">${key.Skills5}</span>
          </p>

          <hr>

          <strong><i class="fa fa-file-text-o margin-r-5"></i> Notes</strong>

          <p><small class="text font-weight-bold">${key.Notes}</small></p>
        </div>
        <!-- /.box-body -->
      </div>

    `
        })
            }
    `
        document.getElementById('left').innerHTML = htmlString
        const htmlString1 = `
        ${
            data.UserProfile.map((key) => {
                return `
                
        <div class="alert alert-dismissible">
            <button  class="btn  close" data-dismiss="alert">&times;</button>
            <div class="user-block">
        <img class="img-circle img-bordered-sm" src="${key.activity1.userImg}" alt="User Image">
            <span class="username">
              <a href="#">${key.activity1.userName}</a>
              
            </span>
        <span class="description">${key.activity1.activityStatus}</span>
      </div>

                <p class="m-2 mt-n1">${key.activity1.content}</p>
                <div class="row m-2">
                    <div class="col">
                        <a class="alinks" href="#"><span class="mr-3 alinks"><i class="fa fa-mail-forward mr-2" style="font-size: 15px;"></i>Share</span></a>
                       <a class="alinks" href="#"> <span class="alinks"><i class="material-icons mr-2" style="font-size: 15px;">thumb_up</i>Like</span></a>
                       <a class="alinks" href="#"> <span class="float-right alinks"><i class="fa fa-comments-o mr-2"style="font-size: 16px;"></i>Comments (${key.activity1.comments})</span></a>
                        <!--<i class="fa fa-comments-o mr-1" style="font-size: 15px;"></i>-->
                    </div>
                </div>
                <div class="pb-2 mx-3">
                    <input type="text " class="form-control " id="usr" placeholder="Type a comment"> 
                </div>
                
        </div>
        <hr>
        <div class="alert alert-dismissible">
            <button  class="btn  close" data-dismiss="alert">&times;</button>
            <div class="user-block">
        <img class="img-circle img-bordered-sm" src="${key.activity2.userImg}" alt="User Image">
            <span class="username">
              <a href="#">${key.activity2.userName}</a>
            </span>
        <span class="description">${key.activity2.activityStatus}</span>
      </div>

                <p class="m-2 mt-n1">${key.activity2.content}</p>
                <div class="row m-2">
                    <div class="col">
                        <a class="alinks" href="#"><span class="mr-3 "><i class="fa fa-mail-forward mr-2" style="font-size: 15px;"></i>Share</span></a>
                       <a class="alinks" href="#"> <span ><i class="material-icons mr-2" style="font-size: 15px;">thumb_up</i>Like</span></a>
                       <a class="alinks" href="#"> <span class="float-right alinks"><i class="fa fa-comments-o mr-2"style="font-size: 16px;"></i>Comments (${key.activity1.comments})</span></a>
                        <!--<i class="fa fa-comments-o mr-1" style="font-size: 15px;"></i>-->
                    </div>
                </div>
                <div class="row pb-2 mx-1">
                    <div class="col-8"><input type="text " class="form-control " id="response" placeholder="Response"></div>
                    <div class="col-4"><button class="btn btn-danger form-control rounded">Send</button></div>
                </div>
                
        </div>
        <hr>
        <div class="alert alert-dismissible">
            <button type="button" class="btn  close" data-dismiss="alert">&times;</button>
            <div class="user-block">
        <img class="img-circle img-bordered-sm" src="${key.activity3.userImg}" alt="User Image">
            <span class="username">
              <a href="#">${key.activity3.userName}</a>
            </span>
        <span class="description">${key.activity3.activityStatus}</span>
      </div>
        <div class="row margin-bottom">
        <div class="col-sm-6">
          <img class="img-responsive" src="${key.activity3.content0}" alt="Photo">
        </div>
        <!-- /.col -->
        <div class="col-sm-6">
          <div class="row">
            <div class="col-sm-6">
              <img class="img-responsive" src="${key.activity3.content1}" alt="Photo">
              <br>
              <img class="img-responsive" src="${key.activity3.content2}" alt="Photo">
            </div>
            <!-- /.col -->
            <div class="col-sm-6">
              <img class="img-responsive" src="${key.activity3.content3}" alt="Photo">
              <br>
              <img class="img-responsive" src="${key.activity3.content4}" alt="Photo">
            </div>
            <!-- /.col -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.col -->
      </div>
            <div class="row m-2">
                    <div class="col">
                        <a class="alinks" href="#"><span class="mr-3 "><i class="fa fa-mail-forward mr-2" style="font-size: 15px;"></i>Share</span></a>
                       <a class="alinks" href="#"> <span ><i class="material-icons mr-2" style="font-size: 15px;">thumb_up</i>Like</span></a>
                       <a class="alinks" href="#"> <span class="float-right alinks"><i class="fa fa-comments-o mr-2"style="font-size: 16px;"></i>Comments (${key.activity3.comments})</span></a>
                        <!--<i class="fa fa-comments-o mr-1" style="font-size: 15px;"></i>-->
                    </div>
                </div>
            
            <div class="pb-2 mx-3">
                <input type="text " class="form-control " id="comment3" placeholder="Type a comment"> 
            </div>
                
        </div>
        
            `

            })
            }
        
    `
        document.getElementById('activity').innerHTML = htmlString1

    }
    const update = () => {

    }
    const timeline = () => {

        document.getElementById("activity").innerHTML = "";
        var htmlString3 = `
            <h4 class="text-center ">No Posts yet...</h4>
        `
        document.getElementById("timeline").innerHTML = htmlString3;

    }
    const activity = () => {

        render();
    }
    var count=0;
    const follow = (ind) => {
        data.UserProfile[ind].Followers++
                render()

        document.getElementById("follow").innerHTML = "";
        var htmlString4 = `<button class="btn-sm btn-light form-control" disabled><strong>Following</strong></button>`;

        document.getElementById("follow").innerHTML = htmlString4;

    }
    const init = () => {
        fetch('https://jsonblob.com/api/92369dd8-8bac-11ea-b153-09f2ee6f0dba')
            .then(response => response.json())
            .then(json => {
                data = { ...data, UserProfile: [...json] }
                console.log(data);
                render();
            });
    }
    return {
        init,
        timeline,
        update,
        activity,
        follow
    }
})()
MEDIA.init();