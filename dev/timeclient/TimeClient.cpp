// #include "TimeClient.h"

// TimeClient::TimeClient() {
//     // Add your implementation here
// }

// TimeClient::begin() {
//     // Add your implementation here
//     Serial.begin(9600);
//     WiFi.begin(ssid, password);
    
//     while (WiFi.status() != WL_CONNECTED) {
//         delay(1000);
//         Serial.println("Connecting to WiFi...");
//     }
//     timeClient.begin();
// }

// TimeClient::update() {
//     // Add your implementation here
//     timeClient.update();
//     Serial.println(timeClient.getFormattedTime());
//     delay(1000);
// }