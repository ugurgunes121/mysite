self.addEventListener("push", (e) => {
    e.waitUntil(self.registiration.showNotification("Başlık", {
        body: "metin açıklama",
        data: {
            dateOfArrival: Date.now(),
            primaryKey: "3"
        }
    }))

})