function vacuumChange()
{
  document.getElementById("img").src = "newVac.gif";
}
//Takes in an initial and secondary image and toggles between them when called.
function toggleImage(docId, firstImage, secImage, thirdImage)
{
  var imageName = document.getElementById(docId).src;
  if(imageName.match(firstImage))  {
    //Then
    document.getElementById(docId).src = secImage;
  }
  else if(imageName.match(secImage))
  {
    document.getElementById(docId).src = thirdImage;
  }
  else {
    document.getElementById(docId).src = firstImage;
  }
}
