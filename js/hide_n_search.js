

(function($) {
    $(document).ready(function(){
        // On page load insert the X button 
        // before the default input area
        $('#hide-n-search-button-x').insertBefore('#edit-keys');
        // When user clicks the magnifying glass button
        $('#hide-n-search-button').on('click', function(e) {
            // Show the input search field
            $('#block-wd8-search').css('display', 'block');
            $('#hide-n-search-button').css('display', 'none');
            $('#hide-n-search-button-x').css('display', 'block');
            return false;
          });

          $('#hide-n-search-button-x').on('click', function(e) {
              e.preventDefault();
                $('#block-wd8-search').css('display', 'none');
                $('#hide-n-search-button').css('display', 'block');
                return false;
          });
        })
})(jQuery);