$('#home').children().hide();
$('#home').children().fadeIn(1000);
$('#guidelines').children().hide();
$('#about').children().hide();
$('#contact').children().hide();
$('#indoVideo').hide();
$('#turkeyVideo').hide();
$('#indoTurkey').children().hide();
$('#faq').children().hide();

$('#register').click(function(event) {
    $('.registForm').css('visibility', 'visible');
    console.log("Test");
    $('.uploader-green-button').css('display', 'block');
});

$('#closeButton').click(function(event) {
    $('.registForm').css('visibility', 'hidden');
    $('.uploader-green-button').css('display', 'none');
});

$('#panduan').click(function(event) {
    $('#home').children().hide();
    $('#faq').children().hide();
    $('#about').children().hide();
    $('#contact').children().hide();
    $('#indoTurkey').children().hide();
    $("#guidelines").children().fadeIn(1500);
    // $('#guidelines').children().fadeIn(1500);
});

$('#hubungi').click(function(event) {
    $('#home').children().hide();
    $('#faq').children().hide();
    $('#about').children().hide();
    $('#guidelines').children().hide();
    $('#indoTurkey').children().hide();
    $('#contact').children().fadeIn(1500);
});

$('#indoTurkeyNav').click(function(event) {
    $('#home').children().hide();
    $('#about').children().hide();
    $('#guidelines').children().hide();
    $('#contact').children().hide();
    $('#faq').children().hide();
    $('#indoTurkey').children().fadeIn(1500);
});

$('.aboutButton').click(function(event) {
    $('#home').children().hide();
    $('#about').children().hide();
    $('#contact').children().hide();
    $('#indoTurkey').children().hide();
    $('#faq').children().hide();
    $('#guidelines').children().fadeIn(1500);
});

$('#tentang').click(function(event) {
    $('#home').children().hide();
    $('#guidelines').children().hide();
    $('#contact').children().hide();
    $('#indoTurkey').children().hide();
    $('#faq').children().hide();
    $('#about').children().fadeIn(1500);
});

$('#beranda').click(function(event) {
    $('#guidelines').children().hide();
    $('#about').children().hide();
    $('#contact').children().hide();
    $('#indoTurkey').children().hide();
    $('#faq').children().hide();
    $('#home').children().fadeIn(1500);
});

$('#faqLink').click(function(event) {
    $('#guidelines').children().hide();
    $('#about').children().hide();
    $('#contact').children().hide();
    $('#indoTurkey').children().hide();
    $('#home').children().hide();
    $('#faq').children().fadeIn(1500);
});

$('#indoSign').click(function(event) {
    $('#turkeyVideo').hide();
    $('#indoVideo').fadeIn(500);
    console.log("TESTSTSTSTS");
});

$('#turkeySign').click(function(event) {
    $('#indoVideo').hide();
    $('#turkeyVideo').fadeIn(500);
});