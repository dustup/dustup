$(document).ready =>
    $('select[remote=true]').change ->
        window.location.href = $(this).find('option:selected').attr('path')
