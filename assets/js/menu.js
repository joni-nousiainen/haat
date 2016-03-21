$(document).ready(function () {
  $('#menu').change(function () {
    var targetId = $('#menu > option:selected').val();
    if ( targetId != 'Valikko' ) {
      window.location.href = '#' + targetId;
    }
  });
});
