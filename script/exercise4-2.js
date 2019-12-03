$('.face').click(function() {
	console.log("btnl is clicked!");
});
$( function() {
    $( '.face' ).draggable();
  } );
$( function() {
    $( '.left_eye' ).draggable();
  } );
$( function() {
    $( '.right_eye' ).draggable();
  } );
$( function() {
    $( '.nose' ).draggable();
  } );
$( function() {
    $( '.mouth' ).draggable();
  } );

$( function() {
    $( ".face" ).selectable();
  } );

