// var resdiv=document.getElementById(finbar);
// resdiv.style.diplay=none;
// var calculatecd=function(){

// }

function calculatecd(){

	var barcodenum=document.getElementById("itmid").value;
	var mynum=parseInt(barcodenum);
	if(isNaN(mynum))
	{
		alert("Please enter the numerical values only");
	}
	else
	{
		var odd=0;
		var sum=0;
		for(var i=barcodenum.length-1;i>=0;i--)
		{
			if(odd==0)
			{
				sum=parseInt(sum) + parseInt((barcodenum[i]*3));
				odd=1;
			}
			else
			{
				sum=parseInt(sum) + parseInt(barcodenum[i]);
				odd=0;				
			}
			// alert(sum);

		}
		sum=10-(sum%10);
		// alert(barcodenum[0]);
		// alert(barcodenum.length);
		alert("Check digit is: "+sum);
		document.getElementById("cditmid").value=barcodenum+sum;
		document.getElementById("finbar").style.display="block";
		JsBarcode("#barcode", barcodenum+sum);
	    // ?alert("done");
	}
}

function createbarcode()
{
	var lines = document.getElementById("itminput").value.split("\n");
	if(lines[0]=="")
	{
		alert("Please enter the Item Ids for generating barcodes");
	}
	else
	{
		for(var i = 0;i < lines.length;)
		{
			if(lines[i]!="")
			{
				if(i!=lines.length-1)
				{
					document.getElementById("tblBarcde").innerHTML+="<tr><td><svg id=\"barcode"+i+"\"></svg></td><td><svg id=\"barcode"+(i+1)+"\"></svg></td></tr>";
					JsBarcode("#barcode"+i, lines[i]);
					JsBarcode("#barcode"+(i+1), lines[i+1]);
					i=i+2;
				}
				else
				{
					document.getElementById("tblBarcde").innerHTML+="<tr><td><svg id=\"barcode"+i+"\"></svg></td><td></td></tr>";
					JsBarcode("#barcode"+i, lines[i]);
					i++;
				}
			}
			else
			{
				i++;
			}
		}
		document.getElementById("printbtn").style.display="block";
		document.getElementById("usrin").style.display="none";
		document.getElementById("tblBarcde").style.display="block";
	}
}


function printdiv(){
     var printContents = document.getElementById("barcgen").innerHTML;
     var originalContents = document.body.innerHTML;
     document.body.innerHTML = printContents;
     window.print();
     document.body.innerHTML = originalContents;
}


function showcalccd(){
	document.getElementById("calccheckd").style.display="block";
	document.getElementById("imgslde").style.display="none";
	document.getElementById("barcgen").style.display="none";
}


function showbargen(){
	document.getElementById("imgslde").style.display="none";
	document.getElementById("barcgen").style.display="block";
	document.getElementById("calccheckd").style.display="none";
	document.getElementById("usrin").style.display="block";
	document.getElementById("tblBarcde").style.display="none";
	document.getElementById("printbtn").style.display="none";
	document.getElementById("tblBarcde").innerHTML="";

}






var myIndex = 0;
carousel();

function carousel() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	myIndex++;
	if (myIndex > x.length) {myIndex = 1}    
		x[myIndex-1].style.display = "block";  
	setTimeout(carousel, 9000);    
}