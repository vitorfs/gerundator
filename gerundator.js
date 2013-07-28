(function ($) {
    $.fn.disable = function (action) {
        var text = $(this).html();
        if (action) {
            if (text.substr(text.length - 1) == "r")
                text = text.substr(0, text.length - 1) + "ndo";
            text += "…";
        }
        else {
            if (text.substr(text.length - 1) == "…")
                text = text.substr(0, text.length - 1);
            if (text.substr(text.length - 3) == "ndo")
                text = text.substr(0, text.length - 3) + "r";
        }
        $(this).html(text);
        $(this).attr("disabled", action);
    };

    $.fn.toggleDisable = function () {
        $(this).disable(!$(this).is(":disabled"));
    };
}(jQuery));
