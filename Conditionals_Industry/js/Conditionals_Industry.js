/**
 * Created by Oga Okwoche on 2/21/14.
 */


//we will be deciding if an image has enough resolution for print based on the picture/picture  size.The more Dot Per Pixel (DPI) the better the print image the less the DPI, the more blurry the image becomes

var pixelWidth=prompt("Please enter the width in pixel");//This is the pixel width

var pixelHeight=prompt("Please enter the height in pixel");

var printWidth=prompt("Please enter the Print size width in Inches");

var printHeight=prompt ("Please enter the print size height in Inches");

var printerDPI=prompt("Please put in the Printer DPI in Pixels");//DPI stands for Dots Per Pixel.

var imagePrintDPI= pixelWidth/printWidth;


if (imagePrintDPI>=printerDPI){
    (console.log("You can print this Image "));//this is the print result if the image DPI is greater than or equal to the printer DPI

}else if(imagePrintDPI<printerDPI && printerDPI> imagePrintDPI-50){
    console.log("This image can be printed,but it is not the best.It will be blurry. Please increase the resolution");
}else{
    console.log("Sorry,We cannot print this image.Please increase the resolution ")
}