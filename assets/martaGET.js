main();

function main()
{
   try {
     var xhr = new ActiveXObject("MSXML2.XMLHTTP.6.0");
     xhr.open("GET",
              "http://developer.itsmarta.com/BRDRestService/BRDRestService.svc/GetBusByRoute/15",
              false);
     xhr.send();

     var doc = xhr.responseXML;
     alert(doc.xml);    
   }
   catch (e) {
     alert(e.description);
   }
}

function alert(s)
{
   WScript.Echo(s);
}