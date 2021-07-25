chrome.action.onClicked.addListener(() => {
    chrome.tabs.query({ active: true, currentWindow: true },  (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { message: 'Ping' }, (response) => {
            console.log(response)
        })
    })
})

