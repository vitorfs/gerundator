(function ($) {

    $.fn.disable = function (disable) {
        var buttonLabel = $(this).html();
        var dataLoading = $(this).attr("data-loading");
        var dataOriginal = $(this).attr("data-original");

        if (disable == true && !$(this).is(":disabled")) {
            $(this).attr("data-original", buttonLabel);
            if (dataLoading != null) { 
                buttonLabel = dataLoading; 
            } 
            else {
                if (buttonLabel.substr(buttonLabel.length - 1) == "r") {
                    buttonLabel = buttonLabel.substr(0, buttonLabel.length - 1) + "ndo";
                }
                buttonLabel += "…";
            }
        }

        if (disable == false && $(this).is(":disabled")) {
            if (dataOriginal != null) {
                buttonLabel = dataOriginal;
            }
            else {
                if (buttonLabel.substr(buttonLabel.length - 1) == "…")
                    buttonLabel = buttonLabel.substr(0, buttonLabel.length - 1);
                if (buttonLabel.substr(buttonLabel.length - 3) == "ndo")
                    buttonLabel = buttonLabel.substr(0, buttonLabel.length - 3) + "r";
            }
        }

        $(this).html(buttonLabel);
        $(this).attr("disabled", disable);
    };

    $.fn.toggleDisable = function () {
        $(this).disable(!$(this).is(":disabled"));
    };

}(jQuery));