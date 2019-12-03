// narrative.js
$('#n1').click(function() {
	console.log("btnl is clicked!");
});

// $( function() {
//     $( '#n1' ).draggable();
//   } );

// $( function() {
//     $( '#n2' ).draggable();
//   } );

// $( function() {
//     $( '#n3' ).draggable();
//   } );

// $( function() {
//     $( '#n4' ).draggable();
//   } );

// $( function() {
//     $( '#n5' ).draggable();
//   } );

// $( function() {
//     $( '#n6' ).draggable();
//   } );

  $( function() {
    $( "#n1,#n2,#n3,#n4,#n5,#n6").draggable();
    $( "#f1" ).droppable({
      drop: function( event, ui ) {
        $("#s1").show();
      }
    });
  } );

  $( function() {
    $( "#n1,#n2,#n3,#n4,#n5,#n6").draggable();
    $( "#f2" ).droppable({
      drop: function( event, ui ) {
        $("#s2").show();
      }
    });
  } );

  $( function() {
    $( "#n1,#n2,#n3,#n4,#n5,#n6").draggable();
    $( "#f3" ).droppable({
      drop: function( event, ui ) {
        $("#s3").show();
      }
    });
  } );

    $( function() {
    $( "#n1,#n2,#n3,#n4,#n5,#n6").draggable();
    $( "#f4" ).droppable({
      drop: function( event, ui ) {
        $("#s4").show();
      }
    });
  } );





  



