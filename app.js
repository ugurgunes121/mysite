window.addEventListener("load", async() => {
    const button = document.querySelector("#button")

    const sw = await navigator.serviceWorker.register("http://127.0.0.1:5000/static/js/sw.js")
    console.log("service worker", sw)
    button.addEventListener( "click", async () => {
        const serviceWorker = await navigator.serviceWorker.ready;
        const ClientID = await serviceWorker.pushManager.subscribe({
            userVisibleOnly: true, 
            applicationServerKey: "BJkADRnyWKYFnkJSWrdnqRgz7EqOYlhZ8OAhDUVo-g9QBb3-Yqr4j_4S5aprCIdESq-DZiA5cfdXLwAgUdwJCwg",
        });
        console.log(ClientID);
        console.log(JSON.stringify(ClientID));
    })
})