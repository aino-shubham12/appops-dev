<!DOCTYPE html>

<html lang="en">

<%@ page import = "java.io.File" %>
<%@ page import = "org.apache.commons.io.FileUtils" %>
<%@ page import = "java.nio.charset.Charset" %>

<%
	String path = "http://localhost:8080"; 
	String currentProfile = System.getProperty("currentProfile"); 
%>

<head>
  <meta charset="utf-8">
  <title>SignIn</title>
  <base href="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="stylesheet" href="login/styles.7ec7798fcd57a7f6afa4.css">


<script type="text/javascript">
	function init(){
	     window.cfgApiBaseUrl = "<%=path%>";
	     window.profile = "<%=currentProfile%>";
	}
	init();
</script>


</head>

<script>
  window.accountHandler = "org.appops.br.user.service.handler.EmailAccountHandler";
</script>

<body>
  <app-root></app-root>
<script type="text/javascript" src="login/runtime.5bdd4cb3b3fcc5bf333c.js"></script>
<script type="text/javascript" src="login/es2015-polyfills.062b315260d31e7ebbde.js" nomodule></script>
<script type="text/javascript" src="login/polyfills.e6e2af2448c5aa9f9d8e.js"></script>
<script type="text/javascript" src="login/scripts.0cdd2696cdcdd2547112.js"></script>
<script type="text/javascript" src="login/main.9d907e0cb6d0eb9f97ad.js"></script></body>



</body>
</html>
