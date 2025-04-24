<?php
// Get the current page name
$currentPage = basename($_SERVER['PHP_SELF']);
?>
<div class="banner <?php echo ($currentPage != 'index.php') ? 'banner-inner' : ''; ?>" style="background: url(images/banner.jpg) no-repeat 0px 0px; background-size: cover; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; -ms-background-size: cover;">
    <div class="container">
        <?php if($currentPage == 'index.php'): // Only show content on home page ?>
        <div class="row">
            <div class="col-md-12">
                <div class="w3ls_banner_info text-center">
                    <h2 class="gradient-text">Janki Transports</h2>
                    <p>Your Trusted Transport Partner</p>
                    <div class="wthree_more">
                        <a href="services.php" class="button--wayra button--border-thick button--text-upper button--size-s">Our Services</a>
                        <a href="request-quote.php" class="button--wayra button--border-thick button--text-upper button--size-s">Get Quote</a>
                    </div>
                </div>
            </div>
        </div>
        <?php else: // For other pages, show only the text content ?>
        <div class="w3ls_banner_info text-center">
            <h2 class="gradient-text">Janki Transports</h2>
            <?php if(isset($pageTitle)): ?>
                <h3 class="page-title"><?php echo $pageTitle; ?></h3>
            <?php endif; ?>
        </div>
        <?php endif; ?>
    </div>
</div> 