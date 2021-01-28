<?php
session_start();
include($_SERVER['DOCUMENT_ROOT'] . "/project/login-system/handlers/login-handler.php");
$page_name = "Typing Test";
include($_SERVER['DOCUMENT_ROOT'] . "/components/header.php");
?>
<body style="margin-top: 80px;">
<?php include($_SERVER['DOCUMENT_ROOT'] . "/components/navigation.php"); ?>
    <div style="margin-top: 7em;">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 style="text-align: center;color: #ee4b6a;">Typing Test</h1>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <br> <p id="typing-text" style="padding-right: 80px;padding-left: 80px;font-size: 22px;margin-bottom: 0px;"></p> <br>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <p style="margin-top: 0px;padding-top: 0px;padding-left: 80px;padding-right: 80px;margin-bottom: 0px; font-style: italic; color='#AAACB0'" id="text-source"></p> <br>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <p style="margin-top: 0px;padding-top: 0px;padding-left: 80px;padding-right: 80px;margin-bottom: 0px;">WPM: <span id="user-wpm"></span></p>
                </div>
            </div>
        </div>
    </div>
    <div></div>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h4 id="countdown" style="text-align: center;color: #1C2826;"></h4>
                </div>
                <div class="col-md-12" style="text-align: center;"><input type="text" id="wpm" style="text-align: left;width: 291px;" disabled></div>
            </div>
        </div>
    </div>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12" style="text-align: center;margin-top: 35px;"><button class="btn btn-primary" type="button" id="start-btn" style="background: #ee4b6a;color: #ffffff;">Start</button></div>
            </div>
        </div>
    </div>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <p class="text-center" style="margin-top: 16px;">View the source code&nbsp;<i class="fab fa-github"></i></p>
                </div>
            </div>
        </div>
    </div>
    <script src="<?php echo get_base_url() . "/"; ?>assets/js/jquery.min.js"></script>
    <script src="<?php echo get_base_url() . "/"; ?>assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="js/app.js"></script>
</body>
</html>
