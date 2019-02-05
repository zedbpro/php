<?php 

if (isset($_POST['name'])) {
	echo $_POST['name'];
}
?>
<form method="POST" action="">
<p> name </p>
<input type="text"  name="name"/>
<input type="submit"  value="kepp value"/>

</form>