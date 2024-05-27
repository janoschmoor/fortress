#include <WiFi.h>
#include <NTPClient.h>
#include <WiFiUdp.h>

const char* ssid = "esp_test_network";
const char* password = "esp32-test-wificode";

WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, "pool.ntp.org");

void setup() {
    Serial.begin(9600);
    WiFi.begin(ssid, password);
    
    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.println("Connecting to WiFi...");
    }
    timeClient.begin();
}

void loop() {
    timeClient.update();
    Serial.println(timeClient.getFormattedTime());
    delay(1000);
}