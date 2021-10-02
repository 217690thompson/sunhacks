let hashData = {}
let levels = {'1': 'level1.html', '2': 'level2.html', '3': 'level3.html', '4': 'level4.html', '5': 'level5.html'}

$(document).ready(function () {
    let a = window.location.hash.toString();
    window.location.hash = '';
    $(window).on('hashchange', _onHashChange);
    window.location.hash = a;
});

// $(document).on('click', () => {
//     _onHashChange();
// });

function _onHashChange() {
    hashData = {};
    if (window.location.hash.substring(1).length > 0) {
        window.location.hash.substring(1).split('&').forEach(item => {
            if (item.split('=').length === 2) {
                hashData[item.split('=')[0]] = decodeURIComponent(item.split('=')[1]);
            }
        });
    } else if (window.location.pathname == '/') {
        $('body').load('/html/homepage.html');
    }
    if (Object.keys(hashData).includes("level")) {
        if (Object.keys(levels).includes(hashData["level"])) {
            $('body').empty();
            $('body').load('/html/' + levels[hashData["level"]]);
            window['level' + hashData['level'] + 'Start']();
        } else {
            window.location.hash = "";
            window.location.reload();
        }
    }
}
