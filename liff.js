window.onload = function() {
    const defaultLiffId = "1653382491-Bzkn9OXd";   // change the default LIFF value if you are not using a node server
    initializeLiffOrDie(defaultLiffId);
};

/**
* Check if myLiffId is null. If null do not initiate liff.
* @param {string} myLiffId The LIFF ID of the selected element
*/
function initializeLiffOrDie(myLiffId) {
    initializeLiff(myLiffId);
}

/**
* Initialize LIFF
* @param {string} myLiffId The LIFF ID of the selected element
*/
function initializeLiff(myLiffId) {
    liff
        .init({
            liffId: myLiffId
        })
        .then(() => {
            // start to use LIFF's api
            liff.scanCode().then(result => {
                // e.g. result = { value: "Hello LIFF app!" }
                const stringifiedResult = result.value;
                liff.sendMessages([{
                    'type': 'text',
                    'text': stringifiedResult
                }]).then(function() {
                    liff.closeWindow();
                }).catch(function(error) {
                    window.alert('Error sending message: ' + error);
                });
            }).catch(err => {
                window.alert('scanCode failed!');
            });
        })
        .catch((err) => {
            window.alert('Something went wrong with LIFF initialization.');
        });
}
