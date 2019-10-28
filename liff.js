window.onload = function() {
    const defaultLiffId = "1653382491-Bzkn9OXd";
    initializeLiff(defaultLiffId);
};

function initializeLiff(myLiffId) {
    liff
    .init({
        liffId: myLiffId
    })
    .then(() => {
        liff.scanCode().then(result => {
            const stringifiedResult = result.value;
            liff.sendMessages([{
                'type': 'text',
                'text': stringifiedResult
            }]).then(() => {
                liff.closeWindow();
            }).catch((error) => {
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
