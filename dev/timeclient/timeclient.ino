
// #include "TimeClient.h"
// #include "WIFI.h"

const char* ssid = "esp_test_network";
const char* pwd = "esp32-test-wificode";

void setup() {
    Serial.begin(9600);
}

void loop() {
    Serial.println("START");
    // WIFI wifi;
    // wifi.connect(ssid, pwd);
    // wifi.disconnect();
    Serial.println("END");
    Serial.println(" ");
    delay(5000);
}