// $(document).ready(function(){
//     $('#modal1').modal();
//     $('#modal1').modal('open');
//     $('#cls').click(function(){
//         $('#modal1').modal('close');                   
//    });

// Here is where we can use jQuery to dynamically insert addiontal HTML pages into the primary page
$(function(){
    testForMobile();
    $('.modalContent').html(modalz);
    $('#modalTrigger').attr('href','#modal1').addClass('modal-trigger');
    $('.createAnAccount').html(createAcountContent);
    $('#createAccountTrig').attr('href','#createAccountModal').addClass('modal-trigger');
  
    // *** OnClick Functions ***
    $('.aboutButton').on('click', function(){
        $('.homePageContainer').html(aboutContent);
    });
    
    $('.signInFirebase').on('click', function(){
        checkIfLocal();
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;// This gives you a Google Access Token. You can use it to access the Google API.
            var user = result.user;// The signed-in user info.
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            console.log('errorCode: ', errorCode);
            var errorMessage = error.message;
            console.log('errorMessage: ', errorMessage);
            var email = error.email;// The email of the user's account used.
            var credential = error.credential;// The firebase.auth.AuthCredential type that was used.
        });
    });
    //initialize Materialize content last so that it is available
    $('.modal').modal(); //needed in order to initialize Materialize modals
    $('.sidenav').sidenav(); //needed in order to initialize side bar for mobile menu
});
/**
 * Call this function if you want to remind developers that they are running code locally and certain features may not work 
 * the same way as when running on server
*/
function checkIfLocal(){
    if (location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.hostname === ""){
        alert("Google Sign in only works from HTTP/S, not local!");//reminder to devs
        getKeys();
    }
}
/**
 * This is a function for getting API keys when running locally, it reads in the APIkeys.txt file
 */
function getKeys(){
    let file = $('<file>').attr('href','file:APIkeys.txt');
    let reader = new FileReader();
    reader.addEventListener('load', function(e){
        let text = e.target.result;
        alert(text);
    });
    reader.readAsText(file);
}
/**
 * Checks if the user is on a mobile device and if so enters past the control statement
 */
function testForMobile(){
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        $('.brand-logo').removeAttr('id'); //centers the logo on mobile devices -- remember to refresh in inspector
        //remove tab images since they do not wrap for mobile devices
    }
}
/**
 * About page HTML content
 * @type {template literal}
 */
var aboutContent = 
`<h4 class="center-header">Site Developers</h4>
<div class="aboutContainer">
    <div class="card medium" id="Bennett-Card">
        <div class="card-image">
            <img src="images/sample-1.jpeg">
            <span class="card-title">Bennett Gould</span>
        </div>
        <div class="card-content">
            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
            <a href="https://github.com/bpgould" target="_blank"><i class="fab fa-github"></i>&nbspGitHub</a>
            <a href="#"><i class="fas fa-user"></i>&nbspPersonal Website</a>
        </div>
    </div>
    <div class="card medium" id="Mike-Card">
        <div class="card-image">
            <img src="images/sample-1.jpeg">
            <span class="card-title">Mike Hill</span>
        </div>
        <div class="card-content">
            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
            <a href="https://github.com/DigitalAmnesia" target="_blank"><i class="fab fa-github"></i>&nbspGitHub</a>
            <a href="#"><i class="fas fa-user"></i>&nbspPersonal Website</a>
        </div>
    </div>
    <div class="card medium" id="Habby-Card">
        <div class="card-image">
            <img src="images/sample-1.jpeg">
            <span class="card-title">Habby Olusesi</span>
        </div>
        <div class="card-content">
            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
            <a href="https://github.com/habby-bit" target="_blank"><i class="fab fa-github"></i>&nbspGitHub</a>
            <a href="#"><i class="fas fa-user"></i>&nbspPersonal Website</a>
        </div>
    </div>
    <div class="card medium" id="Elijah-Card">
        <div class="card-image">
            <img src="images/sample-1.jpeg">
            <span class="card-title">Elijah Melanson</span>
        </div>
        <div class="card-content">
            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
            <a href="https://github.com/emelanson" target="_blank"><i class="fab fa-github"></i>&nbspGitHub</a>
            <a href="#"><i class="fas fa-user"></i>&nbspPersonal Website</a>
        </div>
    </div>
</div>
<div class="featureList">
    <ul class="collection with-header">
        <li class="collection-header"><h4 class="center-header">Core Features</h4></li>
        <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">Details</i></a></div></li>
        <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">Details</i></a></div></li>
        <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">Details</i></a></div></li>
        <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">Details</i></a></div></li>
    </ul>
</div>`;
/**
 * Example modal HTML
 * @type {template literal}
 */
var modalz = 
    `<div id="modal1" class="modal">
        <div class="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
        </div>
        <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
    </div>`;
/**
 * Create An Account modal HTML 
 * @type {template literal}
 */
var createAcountContent =
`<div id="createAccountModal" class="modal">
    <div class="row modal-content">
        <h5 class="center-header">SEO Tracker</h5>
        <div class="col s12">
            <div class="card-panel">
                <div class="row">
                    <form class="col s12 m12 l12">
                        <div class="row">
                            <div class="input-field col s10">
                                <i class="mdi-communication-email prefix"></i>
                                <input id="email" type="email" class="validate">
                                <label for="email">Your email</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s10">
                                <i class="mdi-action-lock-outline prefix"></i>
                                <input id="password" type="password" class="validate">
                                <label for="password">Password</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s10">
                                <i class="mdi-action-lock-outline prefix"></i>
                                <input id="password2" type="password" class="validate">
                                <label for="password">Confirm Password</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s4 modal-close">
                                <a href="#" class="btn waves-effect waves-light col"><h6>Create Account</h6></a>
                            </div>
                            <div class="input-field col s3 modal-close">
                                <a href="#" class="btn waves-effect waves-light col" id="waves-red"><h6>Cancel</h6></a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
</div>`;