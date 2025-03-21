# Notification Manager  

A lightweight JavaScript notification manager that integrates with Service Workers to send push notifications, reminders, and dynamic redirects on notification click.  

## Features  
✅ Push notifications  
✅ Auto reminders when the user leaves the page  
✅ Dynamic URL redirection on notification click  
✅ Service Worker integration  

---

## Installation  
### 🌍 Use via CDN  
Add the following script to your HTML file:  
```html
<script src="https://cdn.jsdelivr.net/npm/@hamza-nawabi/notification-manager@2.4.4/index.min.js"></script>
<script>
    // 1️⃣ Initialize Notification Manager
    const notifier = new NotificationManager();
    // 2️⃣ Request Notification Permission
    notifier.requestPermission().then(permission => {
        if (permission === "granted") {
            console.log("✅ Notifications enabled!");
        } else {
            console.log("❌ Notifications blocked!");
        }
    });
    // 3️⃣ Send a Notification
    notifier.sendNotification(
        "Hello, User!", 
        "This is a test notification.",
        "https://example.com/icon.png", 
        "unique-tag", 
        "https://your-website.com"
    );
    // 4️⃣ Auto Notify When User Leaves Page
    notifier.autoNotifyWhenHidden(
        "Hey, come back!", 
        "We have something for you!", 
        "https://example.com/icon.png"
    );
</script>
```

## 🌍 Browser Compatibility  
| Browser        | Support Status |
|---------------|---------------|
| **Chrome**    | ✅ Supported |
| **Edge**      | ✅ Supported |
| **Firefox**   | ✅ Supported |
| **Safari (Mac)** | ✅ Supported |
| **iOS (Safari, Chrome, Edge)** | ❌ Not Supported |

ℹ **Note:** Apple restricts push notifications from Service Workers on iOS.

### 📄 License
© 2025 Hamza Nawabi. All rights reserved.

Let me know if you need any modifications! 🚀🔥