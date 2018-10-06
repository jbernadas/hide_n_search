

(function($) {
    $(document).ready(function(){
        $('#hide-n-search-button-x').insertBefore('#edit-keys');
        $('#block-wd8-search').addClass('hdn');
        if ($('#hide-n-search-button-x').hasClass('hdn')) {
            return;
        } else {$('#hide-n-search-button-x').addClass('hdn');}
        $('#hide-n-search-button.btn').on('click', function(e) {
            $('#hide-n-search-button-x').removeClass('hdn');
            if ($('#block-wd8-search').hasClass('hdn')) {
                e.preventDefault();
                $('#block-wd8-search').removeClass('hdn');
                return false;
            }
        });
        
        $('#hide-n-search-button-x.btn').on('click', function(e) {
            e.preventDefault();
            $('#block-wd8-search').addClass('hdn');
            $('#hide-n-search-button-x').addClass('hdn');
            return false;
        });
    })
})(jQuery);

