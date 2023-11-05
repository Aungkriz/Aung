<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<i class="fa fa-facebook-official w3-hover-opacity" id="facebook-icon"></i>
<i class="fa fa-instagram w3-hover-opacity" id="instagram-icon"></i>
<i class="fa fa-twitter w3-hover-opacity" id="twitter-icon"></i>

<script>
// ใช้ jQuery เพื่อกำหนดความสามารถเมื่อคลิกที่ไอคอน Facebook
$("#facebook-icon").click(function() {
    // เปิดหน้าโซเชียลมีเดีย Facebook
    window.open("https://www.facebook.com/", "_blank");
});

// ใช้ jQuery เพื่อกำหนดความสามารถเมื่อคลิกที่ไอคอน Instagram
$("#instagram-icon").click(function() {
    // เปิดหน้าโซเชียลมีเดีย Instagram
    window.open("https://www.instagram.com/", "_blank");
});

// ใช้ jQuery เพื่อกำหนดความสามารถเมื่อคลิกที่ไอคอน Twitter
$("#twitter-icon").click(function() {
    // เปิดหน้าโซเชียลมีเดีย Twitter
    window.open("https://twitter.com/", "_blank");
});
</script>