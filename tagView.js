var added = false; // add only once

if (!added) {
    added = true;

    if (window.disableTagView && window.disableTagView === 'please') {
        // do nothing
    } else {
        document.addEventListener('miTagEvent', function(event) {
            logEvent(event.detail);
        });
    }

} else {
    window.disableTagView = 'dontdisable';
}

function logEvent(message) {
    console.log('%c Tag %c type:' + message.type + ' key:' + message.taggingkey, 'background: #222; color: #bada55', 'color: #00a1de', message.data);
}
