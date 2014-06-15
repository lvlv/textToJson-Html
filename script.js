$(document).ready(function() {

    function toCamel(txt) {
        return txt.replace(/(\ [a-zA-Z])/g, function ($1) {
            return $1.toUpperCase().replace(' ', '')
        })
    }

    function toObj(arr) {
        var obj = {};
        for (var i = 0; i < arr.length; ++i) {
            obj[ toCamel(arr[i]).replace(/\s\(([^)]+)\)/g, '') ] = arr[i];
        }
        return obj;
    }

    var classes = [];

    $('#go').click(function () {
        var text = $('.in').val();

        var array = text.split(/\r\n|\r|\n/g);
        var obj = toObj(array);

        $('.outJson').val(
            JSON.stringify(obj).replace(/\:/g, ': ').split(',').join(',\n')
        );

        for (var i in obj) {
            classes.push('<li><span class="str-local-LabelMorbiDUI_' + i + '</span></li>');
        }

        $('.outHtml').val(
                '<ul>' + classes.join('\n').toString() + '</ul>'
        );

        classes.length = 0;

    });
})