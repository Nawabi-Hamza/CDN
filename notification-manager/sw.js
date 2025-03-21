/**
 * sw.js - Service Worker
 * © 2025 Hamza Nawabi. All rights reserved.
 * Email: hamza.nawabi119@gmail.com
 * WhatsApp: +93 766420877
 * Created: March 18, 2025
 */

self.addEventListener("push", function (event) {
    try {
        if (!event.data) {
            console.warn("🚨 No push data received.");
            return;
        }
        const data = event.data.json();
        self.registration.showNotification(data.title || "New Notification", {
            body: data.body || "You have a new message.",
            icon: data.icon || "https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/two-way-chat-bubble-icon.png",
            data: { url: data.url || "https://github.com/Nawabi-Hamza" }
        });
    } catch (error) {
        console.error("❌ Error handling push event:", error);
    }
});

self.addEventListener("notificationclick", function (event) {
    event.notification.close();

    event.waitUntil(
        (async () => {
            try {
                const allClients = await clients.matchAll({ type: "window", includeUncontrolled: true });
                const url = event.notification.data?.url || "https://github.com/Nawabi-Hamza";

                for (const client of allClients) {
                    if (client.url === url && "focus" in client) {
                        return client.focus();
                    }
                }
                if (clients.openWindow) {
                    return clients.openWindow(url);
                }
            } catch (error) {
                console.error("❌ Error opening notification URL:", error);
            }
        })()
    );
});
