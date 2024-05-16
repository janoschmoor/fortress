#include <BLEDevice.h>
#include <BLEServer.h>
#include <BLEUtils.h>
#include <BLE2902.h>

// Define the BLE service and characteristic UUIDs
#define SERVICE_UUID        "0000180d-0000-1000-8000-00805f9b34fb"
#define CHARACTERISTIC_UUID "00002a37-0000-1000-8000-00805f9b34fb"

// Create a BLE server and a characteristic
BLEServer* pServer = NULL;
BLECharacteristic* pCharacteristic = NULL;

void setup() {
    // Create a BLE device
    BLEDevice::init("ESP32");

    // Create a BLE server
    pServer = BLEDevice::createServer();

    // Create a BLE service
    BLEService* pService = pServer->createService(SERVICE_UUID);

    // Create a BLE characteristic
    pCharacteristic = pService->createCharacteristic(
                                            CHARACTERISTIC_UUID,
                                            BLECharacteristic::PROPERTY_READ |
                                            BLECharacteristic::PROPERTY_WRITE
                                        );

    // Add a descriptor to the characteristic
    pCharacteristic->addDescriptor(new BLE2902());

    // Start the service
    pService->start();

    // Start advertising
    pServer->getAdvertising()->start();
}

void loop() {
    // Do nothing in the loop
}