<?php
session_start();
error_reporting(0);

include('includes/dbconnection.php');
?>
<!DOCTYPE html>
<html>
<head>
<title>Janki Transport :: About Us</title>

<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);
		function hideURLbar(){ window.scrollTo(0,1); } </script>
<!-- //for-mobile-apps -->
<link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
<link href="css/animations.css" rel="stylesheet" type="text/css" media="all" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<!-- js -->
<script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
<!-- Stats-Number-Scroller-Animation-JavaScript -->
	<script src="js/waypoints.min.js"></script> 
	<script src="js/counterup.min.js"></script> 
	<script>
		jQuery(document).ready(function( $ ) {
			$('.counter').counterUp({
				delay: 10,
				time: 1000
			});
		});
	</script>
<!-- //Stats-Number-Scroller-Animation-JavaScript -->
<!-- //js -->
<link href='//fonts.googleapis.com/css?family=Lato:400,100,100italic,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
<link href='//fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic' rel='stylesheet' type='text/css'>
</head>
	
<body class="about-page">
<!-- header -->
<?php include_once('includes/header.php');?>
<!-- //header -->

<?php $pageTitle = "About Us"; ?>
<?php include_once('includes/banner.php');?>

<!-- about -->
<div class="about">
    <div class="container">
        <div class="agile_about_grids">
            <?php
            $sql="SELECT * from tblpage where PageType='aboutus'";
            $query = $dbh -> prepare($sql);
            $query->execute();
            $results=$query->fetchAll(PDO::FETCH_OBJ);

            if($query->rowCount() > 0) {
                foreach($results as $row) {
            ?>
            <div class="row">
                <div class="col-md-6">
                    <div class="about-image-container section-fade-in">
                        <img src="images/banner.jpg" alt="About Us" class="img-responsive about-img" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="about-content section-fade-in">
                        <div class="about-text">
                            <p class="lead">Welcome To Janki Transports, We are among-st the top packing moving Express companies. Provide our services in all over India. With more and more real estate development and people buying new apartments, shifting houses for work, business or personal reasons has increased over the years.</p>
                            
                            <div class="about-features">
                                <div class="feature-item floating">
                                    <i class="fa fa-check-circle"></i>
                                    <span>15+ Years of Experience</span>
                                </div>
                                <div class="feature-item floating">
                                    <i class="fa fa-check-circle"></i>
                                    <span>Pan India Services</span>
                                </div>
                                <div class="feature-item floating">
                                    <i class="fa fa-check-circle"></i>
                                    <span>Professional Team</span>
                                </div>
                                <div class="feature-item floating">
                                    <i class="fa fa-check-circle"></i>
                                    <span>24/7 Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <?php }} ?>
        </div>
    </div>
</div>
<!-- //about -->

<!-- footer -->
<?php include_once('includes/footer.php');?>
<!-- //footer -->
<!-- for bootstrap working -->
	<script src="js/bootstrap.js"></script>
<!-- //for bootstrap working -->
</body>
</html>