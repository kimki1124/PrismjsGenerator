$(document).ready(function(){
    // Copy to clipboard 버튼 클릭 이벤트
    var clipboard = new Clipboard('.copyBtn', {
        text: function(trigger) {
            return $('#convertSource').val();
        }
    });

    // Copy to clipboard 성공 이벤트
    clipboard.on('success', function(e){
        setTooltip('Copied!');
        hideTooltip();
    });

    // Copy to clipboard 실패 이벤트
    clipboard.on('error', function(e){
        setTooltip('Failed!');
        hideTooltip();
    });
});

/**
 * CONVERT 버튼 클릭 이벤트
 */
$("#convert").click(function(){
    var source = $('#originAddress').val();
    var key = source.split('https://drive.google.com/open?id=')[1];

    $(".convertSource").removeAttr("hidden");

    var convertTag = '<img src="http://drive.google.com/uc?export=view&id='+key+'" />';
    $("#convertSource").val(convertTag);
});

/**
 * Copy to clipboard 버튼 클릭 툴팁
 */
function setTooltip(message) {
    $('.copyBtn').tooltip('hide')
        .attr('data-original-title', message)
        .tooltip('show');
}

function hideTooltip() {
    setTimeout(function() {
        $('.copyBtn').tooltip('hide');
    }, 1000);
}