/**
 * 
 * Author: Hamza Nawabi 
 * Date: 2025-03-19
 * Link: https://cdn.jsdelivr.net/gh/Nawabi-Hamza/CDN/Aria-Delta/js/main.js
 * 
 */
// //////////////////////////////////////////////////////////////////////////////
// toggle sidebar hide and show
function toggleSideBar(){
    const as = document.querySelector("aside")
    const ma = document.querySelector("main")
    as.style.display = as.style.display === "none" ? "flex" : "none"
    ma.style.width = ma.style.width === "100%" ? "80%" : "100%"
}

// toggle Active Class For Each sidebar link
function loadPageActiveClassAdd(){
    const currentPage = window.location.hash.split("#")[1]
    document.querySelectorAll("#sidebarButton").forEach( el => {
        if(el.getAttribute("data-target").split("/")[1] === currentPage){
            el.classList.add("active")
        }
    })
}

function toggleWizardBar(){
    const wizardbar = document.querySelector(".wizardbar")
    console.log(wizardbar.style.right)
    if(wizardbar.style.right == "0px"){
        wizardbar.style.right = "-300px"
    }else{
        wizardbar.style.right = "0px"
    }
}
// ///////////////////////////////////////////////////////////////////////////////
function loadPageDynamic(directory) {
    $.ajax({
        url: directory,
        method: 'GET',
        success: function(response) {
            $('.dynamic-content').html(response);
            // console.log(response)
            // Extract title from the response (if you set it in the component)
            let newTitle = $(response).filter("title").text();
            if (!newTitle) { newTitle = "School | MIS"; }
            document.title = newTitle;
        },
        error: function() {
            console.log("This page does not exist");
            document.title = "Error | School";
            loadPageDynamic("pages/index.php")
        }
    });
}
function navigatePageBySidebar(e) {
    e.preventDefault(); 
    var targetPage = $(this).data('target');  
    $('#defaultContent').hide();
    window.location.assign('#'+targetPage.split("/")[1].split('.')[0])
    loadPageDynamic(targetPage)
    document.querySelectorAll("#sidebarButton").forEach( el => el.classList.remove("active") )
    this.classList.add("active")
}
function loadPageDynamicFromURL(){
    const currentPage = window.location.hash.split("#")[1]+".php"
    loadPageDynamic(`pages/${currentPage}`)
}
/////////////////////////////////////////////////////////////////////////////////
function loadingPencel() {
    console.log(document.getElementById("loadingScreen").classList);
    document.getElementById("loadingScreen").classList.add("d-none");
};
////////////////////////////////////////////////////////////////////////////////
function setDirection() {
    const lang = document.documentElement.getAttribute("lang"); // Get the current lang attribute
    if (["ar", "fa", "ps"].includes(lang)) {
        document.documentElement.setAttribute("dir", "rtl");
    } else {
        document.documentElement.setAttribute("dir", "ltr");
    }
}
///////////////////////////////////////////////////////////////////////////////

window.App = {
    toggleSideBar: toggleSideBar,
    toggleWizardBar: toggleWizardBar,
    loadPageActiveClassAdd: loadPageActiveClassAdd,
    loadPageDynamic: loadPageDynamic,
    navigatePageBySidebar: navigatePageBySidebar,
    loadPageDynamicFromURL: loadPageDynamicFromURL,
    loadingPencel: loadingPencel,
    setDirection: setDirection
}


