/**
 * 
 * Load Page Dynamic From Pages Folder as component in the main page
 * Author: Hamza Nawabi 
 * Date: 2025-02-01
 * Version: 1.0
 * Link: https://cdn.jsdelivr.net/gh/Nawabi-Hamza/CDN@latest/Aria-Delta/js/load-page-dynamic.js
 * 
 */

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

$(document).on('click','#sidebarButton', function(e) {
    e.preventDefault(); 
    var targetPage = $(this).data('target');  
    $('#defaultContent').hide();
    // console.log(targetPage.split("/")[1].split('.')[0])
    window.location.assign('#'+targetPage.split("/")[1].split('.')[0])
    // newpage = targetPage.split("/")[1].split('.')[0]
    // Load page as a component
    loadPageDynamic(targetPage)
    // Add class for active link
    document.querySelectorAll("#sidebarButton").forEach( el => el.classList.remove("active") )
    this.classList.add("active")
});

document.addEventListener("DOMContentLoaded",function(){
    // const currentPage = window.location.hash.split("#")[1]
    const currentPage = window.location.hash.split("#")[1]+".php"
    loadPageDynamic(`pages/${currentPage}`)
})

