/**
* Made with <3 by John Keller
* http://john.coffee
*/

// Let's start by running the addUltrawide function

addUltrawide();

function addUltrawide() {
    
    // Injects an ultraride script
    
    // Note: Script requires 3440px width, and the video to be in full screen
    
    var isEnabled = true;
    if (window.location.hostname === ("www.youtube.com")) {
        
        // Inject the script for youtube...
        
        var st = document.createElement('style');
        st.id = "ultrawide-injection"
        st.innerText = "@media screen and (device-width: 3440px){:-webkit-full-screen video{height: 133.9%!important; width: 100%!important; left: 0px!important; top: 50%!important; position:relative!important; transform: translateY(-12.5%)!important;}}";
        document.head.append(st);
        
        console.log(st);
        
    } else if (window.location.hostname === "app.plex.tv") {
        
        // Inject the script for plex
        
        var plex = document.createElement('style');
        plex.innerText = ":-webkit-full-screen video{height: 133.9%!important; width: 100%!important; left: 0px!important; top: 50%!important; position:relative!important; transform: translateY(-50%)!important;}";
        document.head.append(plex);
    }
};


function removeUltrawide(){
    
    // Removes the ultrawide injection code
    
    var isEnabled = false;
    
    var rm = document.getElementById("ultrawide-injection")[0];
    rm.parentNode.removeChild(rm);
}
