String uri =
    "http://developer.itsmarta.com/BRDRestService/BRDRestService.svc/GetBusByRoute/15";

URL url = new URL(uri);
HttpURLConnection connection =
    (HttpURLConnection) url.openConnection();
connection.setRequestMethod("GET");
connection.setRequestProperty("Accept", "application/xml");

InputStream xml = connection.getInputStream();

DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
DocumentBuilder db = dbf.newDocumentBuilder();
Document doc = db.parse(xml);