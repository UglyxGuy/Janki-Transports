<?php
session_start();
error_reporting(0);
include('includes/dbconnection.php');

  ?>
<!DOCTYPE html>
<html>
<head>
<title>Janki Transport :: Services</title>

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
<link href='//fonts.googleapis.com/css?family=Lato:400,100,100italic,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
<link href='//fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic' rel='stylesheet' type='text/css'>
</head>
	
<body>
<!-- header -->
	<?php include_once('includes/header.php');?>
<!-- //header -->
<!-- banner -->
<?php $pageTitle = "Our Services"; ?>
<?php include_once('includes/banner.php');?>
<!-- //banner -->

<!-- services -->
	<div class="services">
		<div class="container">
			<div class="w3l_header">
				<h3>Our Services</h3>
				<p class="quia">Professional Transport Solutions</p>
			</div>

			<div class="w3l_services_grids">
				<?php
$sql="SELECT * from tblservices";
$query = $dbh -> prepare($sql);
$query->execute();
$results=$query->fetchAll(PDO::FETCH_OBJ);

$cnt=1;
if($query->rowCount() > 0)
{
foreach($results as $row)
{               ?>
				<div class="col-md-4 w3l_services_grid">
					<div class="w3l_services_grid1">
						<span class="service-img"><img src="images/services/<?php echo $row->Image;?>" width="100%" height="200" alt="<?php echo htmlentities($row->Title);?>"></span>
						<h4><?php echo htmlentities($row->Title);?></h4>
						<p><?php echo substr(($row->Description),0,95);?>.</p>
					</div>
				</div>
				<?php if($cnt % 3 == 0) { ?>
				<div class="clearfix visible-md visible-lg"></div>
				<?php } ?>
				<?php if($cnt % 2 == 0) { ?>
				<div class="clearfix visible-sm"></div>
				<?php } ?>
				<?php $cnt=$cnt+1;}} ?>
				<div class="clearfix"></div>
			</div>
		</div>
	</div>
<!-- //services -->

<!-- Stats Section -->
<div class="section-divider"></div>
<section class="stats-section">
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-sm-6">
                <div class="stat-counter">
                    <div class="stat-number counter">15</div>
                    <h4>Years Experience</h4>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="stat-counter">
                    <div class="stat-number counter">1000</div>
                    <h4>Happy Clients</h4>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="stat-counter">
                    <div class="stat-number counter">50</div>
                    <h4>Cities Covered</h4>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="stat-counter">
                    <div class="stat-number counter">24</div>
                    <h4>Hour Support</h4>
                </div>
            </div>
        </div>
    </div>
</section>
<div class="section-divider"></div>

<?php include_once('includes/footer.php');?>
<!-- for bootstrap working -->
	<script src="js/bootstrap.js"></script>
	<script>
		// Loading animation
		window.addEventListener('load', function() {
			document.querySelector('.loading-overlay').classList.add('loaded');
		});

		// Initialize counters
		jQuery(document).ready(function($) {
			$('.counter').counterUp({
				delay: 10,
				time: 1000
			});
		});
	</script>
<!-- //for bootstrap working -->
</body>
</html>