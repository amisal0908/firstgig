function generateImage() {
    var text = document.getElementById("textInput").value;
    text = encodeURIComponent(text); // Encode the Marathi text

    // Create a new image element
    var img = new Image();
    img.src = "https://via.placeholder.com/400x200.png?text=" + text;

    // Get the image output div and clear its content
    var imageOutput = document.getElementById("imageOutput");
    imageOutput.innerHTML = '';

    // Append the image to the image output div
    imageOutput.appendChild(img);
}
