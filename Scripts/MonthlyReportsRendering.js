(function () {
    var customRenderingOverride = {};
    customRenderingOverride.Templates = {};



    var now = new Date();
    var month = now.getMonth();
    month = month + 1;
    console.log(month);
    if (month == 1) {
        customRenderingOverride.Templates.Fields = {
            "CompletedFebruary": { "View": renderCompleteMonth },
            "CompletedMarch": { "View": renderCompleteMonth },
            "CompletedApril": { "View": renderCompleteMonth },
            "CompletedMay": { "View": renderCompleteMonth },
            "CompletedJune": { "View": renderCompleteMonth },
            "CompletedJuly": { "View": renderCompleteMonth },
            "CompletedAugust": { "View": renderCompleteMonth },
            "CompletedSeptember": { "View": renderCompleteMonth },
                "CompletedOctober": { "View": renderCompleteMonth },
                "CompletedNovember": { "View": renderCompleteMonth },
            "CompletedDecember": { "View": renderCompleteMonth }
        }
    }
    else if (month == 2) {
        customRenderingOverride.Templates.Fields = {
            "CompletedJanuary": { "View": renderCompleteMonth },
            "CompletedMarch": { "View": renderCompleteMonth },
            "CompletedApril": { "View": renderCompleteMonth },
            "CompletedMay": { "View": renderCompleteMonth },
            "CompletedJune": { "View": renderCompleteMonth },
            "CompletedJuly": { "View": renderCompleteMonth },
            "CompletedAugust": { "View": renderCompleteMonth },
            "CompletedSeptember": { "View": renderCompleteMonth },
            "CompletedOctober": { "View": renderCompleteMonth },
            "CompletedNovember": { "View": renderCompleteMonth },
            "CompletedDecember": { "View": renderCompleteMonth }
        }
    }
    else if (month == 3) {
        customRenderingOverride.Templates.Fields = {
            "CompletedJanuary": { "View": renderCompleteMonth },
            "CompletedFebruary": { "View": renderCompleteMonth },
            "CompletedApril": { "View": renderCompleteMonth },
            "CompletedMay": { "View": renderCompleteMonth },
            "CompletedJune": { "View": renderCompleteMonth },
            "CompletedJuly": { "View": renderCompleteMonth },
            "CompletedAugust": { "View": renderCompleteMonth },
            "CompletedSeptember": { "View": renderCompleteMonth },
            "CompletedOctober": { "View": renderCompleteMonth },
            "CompletedNovember": { "View": renderCompleteMonth },
            "CompletedDecember": { "View": renderCompleteMonth }
        }
    }
    else if (month == 4) {
        customRenderingOverride.Templates.Fields = {
            "CompletedJanuary": { "View": renderCompleteMonth },
            "CompletedFebruary": { "View": renderCompleteMonth },
            "CompletedMarch": { "View": renderCompleteMonth },
            "CompletedMay": { "View": renderCompleteMonth },
            "CompletedJune": { "View": renderCompleteMonth },
            "CompletedJuly": { "View": renderCompleteMonth },
            "CompletedAugust": { "View": renderCompleteMonth },
            "CompletedSeptember": { "View": renderCompleteMonth },
            "CompletedOctober": { "View": renderCompleteMonth },
            "CompletedNovember": { "View": renderCompleteMonth },
            "CompletedDecember": { "View": renderCompleteMonth }
        }
    }
    else if (month == 5) {
        customRenderingOverride.Templates.Fields = {
            "CompletedJanuary": { "View": renderCompleteMonth },
            "CompletedFebruary": { "View": renderCompleteMonth },
            "CompletedMarch": { "View": renderCompleteMonth },
            "CompletedApril": { "View": renderCompleteMonth },
            "CompletedJune": { "View": renderCompleteMonth },
            "CompletedJuly": { "View": renderCompleteMonth },
            "CompletedAugust": { "View": renderCompleteMonth },
            "CompletedSeptember": { "View": renderCompleteMonth },
            "CompletedOctober": { "View": renderCompleteMonth },
            "CompletedNovember": { "View": renderCompleteMonth },
            "CompletedDecember": { "View": renderCompleteMonth }
        }
    }
    else if (month == 6) {
        customRenderingOverride.Templates.Fields = {
            "CompletedJanuary": { "View": renderCompleteMonth },
            "CompletedFebruary": { "View": renderCompleteMonth },
            "CompletedMarch": { "View": renderCompleteMonth },
            "CompletedApril": { "View": renderCompleteMonth },
            "CompletedMay": { "View": renderCompleteMonth },
            "CompletedJuly": { "View": renderCompleteMonth },
            "CompletedAugust": { "View": renderCompleteMonth },
            "CompletedSeptember": { "View": renderCompleteMonth },
            "CompletedOctober": { "View": renderCompleteMonth },
            "CompletedNovember": { "View": renderCompleteMonth },
            "CompletedDecember": { "View": renderCompleteMonth }

        }
    }

    else if (month == 7) {
        customRenderingOverride.Templates.Fields = {
            "CompletedJanuary": { "View": renderCompleteMonth },
            "CompletedFebruary": { "View": renderCompleteMonth },
            "CompletedMarch": { "View": renderCompleteMonth },
            "CompletedApril": { "View": renderCompleteMonth },
            "CompletedMay": { "View": renderCompleteMonth },
            "CompletedJune": { "View": renderCompleteMonth },
            "CompletedAugust": { "View": renderCompleteMonth },
            "CompletedSeptember": { "View": renderCompleteMonth },
            "CompletedOctober": { "View": renderCompleteMonth },
            "CompletedNovember": { "View": renderCompleteMonth },
            "CompletedDecember": { "View": renderCompleteMonth }
        }
    }
    else if (month == 8) {
        customRenderingOverride.Templates.Fields = {
            "CompletedJanuary": { "View": renderCompleteMonth },
            "CompletedFebruary": { "View": renderCompleteMonth },
            "CompletedMarch": { "View": renderCompleteMonth },
            "CompletedApril": { "View": renderCompleteMonth },
            "CompletedMay": { "View": renderCompleteMonth },
            "CompletedJune": { "View": renderCompleteMonth },
            "CompletedJuly": { "View": renderCompleteMonth },
            "CompletedSeptember": { "View": renderCompleteMonth },
            "CompletedOctober": { "View": renderCompleteMonth },
            "CompletedNovember": { "View": renderCompleteMonth },
            "CompletedDecember": { "View": renderCompleteMonth }
        }

    }
    else if (month == 9) {
        customRenderingOverride.Templates.Fields = {
            "CompletedJanuary": { "View": renderCompleteMonth },
            "CompletedFebruary": { "View": renderCompleteMonth },
            "CompletedMarch": { "View": renderCompleteMonth },
            "CompletedApril": { "View": renderCompleteMonth },
            "CompletedMay": { "View": renderCompleteMonth },
            "CompletedJune": { "View": renderCompleteMonth },
            "CompletedJuly": { "View": renderCompleteMonth },
            "CompletedAugust": { "View": renderCompleteMonth },
            "CompletedOctober": { "View": renderCompleteMonth },
            "CompletedNovember": { "View": renderCompleteMonth },
            "CompletedDecember": { "View": renderCompleteMonth }
        }
    }
    else if (month == 10) {
        customRenderingOverride.Templates.Fields = {
            "CompletedJanuary": { "View": renderCompleteMonth },
            "CompletedFebruary": { "View": renderCompleteMonth },
            "CompletedMarch": { "View": renderCompleteMonth },
            "CompletedApril": { "View": renderCompleteMonth },
            "CompletedMay": { "View": renderCompleteMonth },
            "CompletedJune": { "View": renderCompleteMonth },
            "CompletedJuly": { "View": renderCompleteMonth },
            "CompletedAugust": { "View": renderCompleteMonth },
            "CompletedSeptember": { "View": renderCompleteMonth },
            "CompletedNovember": { "View": renderCompleteMonth },
            "CompletedDecember": { "View": renderCompleteMonth }
        }

    }
    else if (month == 11) {
        customRenderingOverride.Templates.Fields = {
            "CompletedJanuary": { "View": renderCompleteMonth },
            "CompletedFebruary": { "View": renderCompleteMonth },
            "CompletedMarch": { "View": renderCompleteMonth },
            "CompletedApril": { "View": renderCompleteMonth },
            "CompletedMay": { "View": renderCompleteMonth },
            "CompletedJune": { "View": renderCompleteMonth },
            "CompletedJuly": { "View": renderCompleteMonth },
            "CompletedAugust": { "View": renderCompleteMonth },
            "CompletedSeptember": { "View": renderCompleteMonth },
            "CompletedOctober": { "View": renderCompleteMonth },
            "CompletedDecember": { "View": renderCompleteMonth }
        }

    }
    else if (month == 12) {
        customRenderingOverride.Templates.Fields = {
            "CompletedJanuary": { "View": renderCompleteMonth },
            "CompletedFebruary": { "View": renderCompleteMonth },
            "CompletedMarch": { "View": renderCompleteMonth },
            "CompletedApril": { "View": renderCompleteMonth },
            "CompletedMay": { "View": renderCompleteMonth },
            "CompletedJune": { "View": renderCompleteMonth },
            "CompletedJuly": { "View": renderCompleteMonth },
            "CompletedAugust": { "View": renderCompleteMonth },
            "CompletedSeptember": { "View": renderCompleteMonth },
            "CompletedOctober": { "View": renderCompleteMonth },
            "CompletedNovember": { "View": renderCompleteMonth }
        }

    }

    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(customRenderingOverride);
})();

function renderCompleteMonth(ctx) {
    var Value = ctx.CurrentItem[ctx.CurrentFieldSchema.Name];


    return "<span style='color:transparent'>" + Value + "</span>"
}
