/**
 * Created by Oga Okwoche on 2/21/14.
 */


//we will be deciding if an image has enough resolution for print based on the picture/picture  size.The more Dot Per Pixel (DPI) the better the print image the less the DPI, the more blurry the image becomes

var pixelWidth=prompt("Please enter the width in pixel");//This is the pixel width

var pixelHeight=prompt("Please enter the height in pixel");//This is the Pixel height

var printWidth=prompt("Please enter the Print size width in Inches");//This is the width of the print size

var printHeight=prompt ("Please enter the print size height in Inches");//This is the pixel height in Inches

var printerDPI=prompt("Please put in the Printer DPI in Pixels");//DPI stands for Dots Per Pixel.

var imagePrintDPI= pixelWidth/printWidth;// This is the minimum Image Print DPI that can give a good print resolution


if (imagePrintDPI>=printerDPI){//This condition applies if it is true
    (console.log("You can print this Image "));//this is the print result if the image DPI is greater than or equal to the printer DPI

}else if(imagePrintDPI<printerDPI && printerDPI> imagePrintDPI-50){//this condition applies if the first condition is false
    console.log("This image can be printed,but it is not the best.It will be blurry. Please increase the resolution");// this is the print result if the print DPI is less than the Image Print and less than(Image DPI print-50
}else{
    console.log("Sorry,We cannot print this image.Please increase the resolution ")// This is the print result if neither of the first 2 conditions are true.
}