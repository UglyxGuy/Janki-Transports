<?php
session_start();
error_reporting(0);
include('includes/dbconnection.php');
?>
<!DOCTYPE html>
<html>
<head>
<title>Janki Transports :: Home Page</title>

<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);
		function hideURLbar(){ window.scrollTo(0,1); } </script>
<!-- //for-mobile-apps -->
<link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
<link href="css/animations.css" rel="stylesheet" type="text/css" media="all" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<!-- js -->
<script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
<!-- //js -->
<!-- load-more -->
<script>
	$(document).ready(function () {
		size_li = $("#myList li").size();
		x=1;
		$('#myList li:lt('+x+')').show();
		$('#loadMore').click(function () {
			x= (x+1 <= size_li) ? x+1 : size_li;
			$('#myList li:lt('+x+')').show();
		});
		$('#showLess').click(function () {
			x=(x-1<0) ? 1 : x-1;
			$('#myList li').not(':lt('+x+')').hide();
		});
	});
</script>
<!-- //load-more -->
<link href='//fonts.googleapis.com/css?family=Lato:400,100,100italic,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
<link href='//fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic' rel='stylesheet' type='text/css'>
</head>
	
<body>
<!-- header -->
<?php include_once('includes/header.php');?>
<!-- //header -->

<!-- banner -->
<?php include_once('includes/banner.php');?>
<!-- //banner -->

<!-- features -->
<div class="features">
    <div class="container">
        <h3 class="w3l_header">Why Choose Us?</h3>
        <div class="features-grids">
            <div class="col-md-4 features-grid">
                <div class="features-grid-icon">
                    <i class="fa fa-truck" aria-hidden="true"></i>
                </div>
                <div class="features-grid-info">
                    <h4>Reliable Service</h4>
                    <p>24/7 availability with professional drivers and well-maintained vehicles.</p>
                </div>
            </div>
            <div class="col-md-4 features-grid">
                <div class="features-grid-icon">
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                </div>
                <div class="features-grid-info">
                    <h4>On-Time Delivery</h4>
                    <p>We ensure your goods reach their destination on time, every time.</p>
                </div>
            </div>
            <div class="col-md-4 features-grid">
                <div class="features-grid-icon">
                    <i class="fa fa-shield" aria-hidden="true"></i>
                </div>
                <div class="features-grid-info">
                    <h4>Safe Transport</h4>
                    <p>Your goods are handled with utmost care and safety measures.</p>
                </div>
            </div>
            <div class="clearfix"> </div>
        </div>
    </div>
</div>
<!-- //features -->

<!-- testimonials -->
<div class="testimonials">
    <div class="container">
        <h3 class="w3l_header">Our Team</h3>
        <div class="w3_testimonials_grids">
            <section class="slider">
                <div class="flexslider">
                    <ul class="slides">
                        <li>	
                            <div class="w3_testimonials_grid">
                                <h5>Mr. Ajay Prusti</h5>
                                <p>Founder & Manager</p>
                                <p>With over 15 years of experience in the transport industry</p>
                            </div>
                        </li>
                        <li>	
                            <div class="w3_testimonials_grid">
                                <h5>Mr. Alok Raut</h5>
                                <p>Transport Agent</p>
                                <p>Expert in logistics and route planning</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <!-- flexSlider -->
            <link rel="stylesheet" href="css/flexslider.css" type="text/css" media="screen" property="" />
            <script defer src="js/jquery.flexslider.js"></script>
            <script type="text/javascript">
                $(window).load(function(){
                    $('.flexslider').flexslider({
                        animation: "slide",
                        start: function(slider){
                            $('body').removeClass('loading');
                        }
                    });
                });
            </script>
            <!-- //flexSlider -->
        </div>
    </div>
</div>
<!-- //testimonials -->

<!-- stats -->
<div class="stats">
    <div class="container">
        <div class="stats-info">
            <div class="col-md-3 col-xs-3 stats-grid">
                <div class="stats-grid-left">
                    <i class="fa fa-truck" aria-hidden="true"></i>
                </div>
                <div class="stats-grid-right">
                    <h4>50+</h4>
                    <p>Vehicles</p>
                </div>
                <div class="clearfix"> </div>
            </div>
            <div class="col-md-3 col-xs-3 stats-grid">
                <div class="stats-grid-left">
                    <i class="fa fa-users" aria-hidden="true"></i>
                </div>
                <div class="stats-grid-right">
                    <h4>100+</h4>
                    <p>Happy Clients</p>
                </div>
                <div class="clearfix"> </div>
            </div>
            <div class="col-md-3 col-xs-3 stats-grid">
                <div class="stats-grid-left">
                    <i class="fa fa-road" aria-hidden="true"></i>
                </div>
                <div class="stats-grid-right">
                    <h4>1000+</h4>
                    <p>Trips Completed</p>
                </div>
                <div class="clearfix"> </div>
            </div>
            <div class="col-md-3 col-xs-3 stats-grid">
                <div class="stats-grid-left">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <div class="stats-grid-right">
                    <h4>25+</h4>
                    <p>Cities Covered</p>
                </div>
                <div class="clearfix"> </div>
            </div>
            <div class="clearfix"> </div>
        </div>
    </div>
</div>
<!-- //stats -->

<!-- footer -->
<?php include_once('includes/footer.php');?>
<!-- //footer -->

<!-- for bootstrap working -->
<script src="js/bootstrap.js"></script>
<!-- //for bootstrap working -->
</body>
</html>