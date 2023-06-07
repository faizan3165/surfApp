let editForm = document.getElementById("postEditForm");

editForm.addEventListener("submit", (e) => {
  // imgs that the user is going to upload
  let uploadedImages = document.getElementById("uploadedImages").files.length;

  // imgs that have already been uploaded
  let existingImages = document.querySelectorAll(".deleteImage").length;

  // imgs that have been selected
  let selectedImages = document.querySelectorAll(".deleteImage:checked").length;

  let newTotal = existingImages - selectedImages + uploadedImages;
  let imgsToRemove = newTotal - 4;

  if (newTotal > 4) {
    e.preventDefault();
    alert(
      `You can upload only 4 images at a time, please remove ${imgsToRemove} ${
        imgsToRemove === 1 ? "image" : "images"
      } and try again.`
    );
  }
});
