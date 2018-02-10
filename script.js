window.onload = function() 
{
    
    //create slider and image
    var slider = document.getElementById("slider");
    var image = new Image();
    
    //image is in slider
    slider.appendChild(image);
    
    //create thumbnails
    var thumbnails = document.getElementsByClassName("thumbnail");
    var currentThumbnail = thumbnails[0];
    
    //first thumbnail shown in slider as a big picture
    image.src = currentThumbnail.getAttribute("src");
    //underline first thumbnail
    currentThumbnail.className += " current";
    
    for (var i = 0; i < thumbnails.length; i ++) 
    {
        
        thumbnails[i].onmouseover = function()
        {
            
            /* replace class for empty - removes the underline of first thumbnail after another thumbnail is hovered 
            in other way first and hovered thumbnail would be underlined both */
            currentThumbnail.className = currentThumbnail.className.replace("current", "");
            
            currentThumbnail = this;
            
            //underline current (hovered) thumbnail
            currentThumbnail.className += " current";
            //current (hovered) thumbnail shown in slider as a big picture
            image.src = this.getAttribute("src");
        };
    }

};
