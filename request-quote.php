<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);
include('includes/dbconnection.php');

if(isset($_POST['submit'])) {
    try {
        // Get form data
        $name = $_POST['name'];
        $email = $_POST['email'];
        $mobilenumber = $_POST['mobilenumber'];
        $fromlocation = $_POST['fromlocation'];
        $tolocation = $_POST['tolocation'];
        $additionalinfo = $_POST['additionalinfo'];
        
        // Debug: Print submitted data
        echo "<!-- Debug: Submitted data: " . print_r($_POST, true) . " -->";
        
        // Prepare SQL statement
        $sql = "INSERT INTO tblquotes (Name, Email, MobileNumber, FromLocation, ToLocation, AdditionalInfo, Status) 
                VALUES (:name, :email, :mobilenumber, :fromlocation, :tolocation, :additionalinfo, 0)";
        
        // Prepare and execute query
        $query = $dbh->prepare($sql);
        $query->bindParam(':name', $name, PDO::PARAM_STR);
        $query->bindParam(':email', $email, PDO::PARAM_STR);
        $query->bindParam(':mobilenumber', $mobilenumber, PDO::PARAM_STR);
        $query->bindParam(':fromlocation', $fromlocation, PDO::PARAM_STR);
        $query->bindParam(':tolocation', $tolocation, PDO::PARAM_STR);
        $query->bindParam(':additionalinfo', $additionalinfo, PDO::PARAM_STR);
        
        if($query->execute()) {
            $LastInsertId = $dbh->lastInsertId();
            echo '<script>alert("Your quote request has been sent successfully. We will contact you soon!")</script>';
            echo "<!-- Debug: Quote inserted successfully. ID: " . $LastInsertId . " -->";
            
            // Clear form data
            $_POST = array();
        } else {
            echo '<script>alert("Something went wrong. Please try again")</script>';
            echo "<!-- Debug: Error executing query -->";
        }
    } catch (PDOException $e) {
        echo '<script>alert("Error: ' . $e->getMessage() . '")</script>';
        echo "<!-- Debug: Database error: " . $e->getMessage() . " -->";
    }
}
?>
<!DOCTYPE html>
<html>
<head>
<title>Janki Transport :: Request Quote</title>

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
<?php $pageTitle = "Request Quote"; ?>
<?php include_once('includes/banner.php');?>
<!-- //banner -->

<!-- request quote section -->
<div class="mail">
    <div class="container">
        <div class="w3l_header">
            <h3>Request a Quote</h3>
            <p class="quia">Fill out the form below to get a quote</p>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="w3l_services_grid1">
                    <h4>Contact Information</h4>
                    <p>Vedvyas, Rourkela-769014, India</p>
                    <div class="info-item">
                        <div class="feature-icon">
                            <i class="fa fa-phone"></i>
                        </div>
                        <p>9305179521</p>
                    </div>
                    <div class="info-item">
                        <div class="feature-icon">
                            <i class="fa fa-envelope"></i>
                        </div>
                        <p>ajayprusti5656@gmail.com</p>
                    </div>
                </div>
            </div>
            
            <div class="col-md-8">
                <div class="contact-form content-box">
                    <h4>Fill the Form</h4>
                    <form method="post" action="">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" name="name" placeholder="Your Name*" required="true" class="form-control" value="<?php echo isset($_POST['name']) ? htmlspecialchars($_POST['name']) : ''; ?>">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="email" name="email" placeholder="Your Email*" required="true" class="form-control" value="<?php echo isset($_POST['email']) ? htmlspecialchars($_POST['email']) : ''; ?>">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" name="mobilenumber" placeholder="Your Mobile Number*" required="true" class="form-control" value="<?php echo isset($_POST['mobilenumber']) ? htmlspecialchars($_POST['mobilenumber']) : ''; ?>">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" name="fromlocation" placeholder="From Location*" required="true" class="form-control" value="<?php echo isset($_POST['fromlocation']) ? htmlspecialchars($_POST['fromlocation']) : ''; ?>">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" name="tolocation" placeholder="To Location*" required="true" class="form-control" value="<?php echo isset($_POST['tolocation']) ? htmlspecialchars($_POST['tolocation']) : ''; ?>">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <textarea name="additionalinfo" placeholder="Additional Information" class="form-control"><?php echo isset($_POST['additionalinfo']) ? htmlspecialchars($_POST['additionalinfo']) : ''; ?></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <button type="submit" name="submit" class="btn btn-primary">Submit Quote Request</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- //request quote section -->

<!-- Map Section -->
<div class="section-divider"></div>
<div class="w3ls_map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.2814257759!2d84.89431731495943!3d22.27447798533063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201f72bdc8d187%3A0xc0fe71b9e0e0f861!2sVedvyas%2C%20Rourkela%2C%20Odisha!5e0!3m2!1sen!2sin!4v1645884588585!5m2!1sen!2sin" style="border:0; width:100%; height:400px;" allowfullscreen="" loading="lazy"></iframe>
</div>

<?php include_once('includes/footer.php');?>
<!-- for bootstrap working -->
<script src="js/bootstrap.js"></script>
</body>
</html>