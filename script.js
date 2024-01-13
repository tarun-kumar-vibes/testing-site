function toggleImage(imageNumber) {
    // Hide all images
    var allImages = document.getElementsByClassName("under-text-image");
    for (var i = 0; i < allImages.length; i++) {
      allImages[i].style.display = "none";
    }

    // Show the selected image
    var img = document.getElementById("under-text-image-nav-bar-image-" + imageNumber);
    if (img.style.display === "none") {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
}