# fortress

Opensource networkwide (wifi/bluetooth) extensible ESP32 based automation software. Next.js software interface, wireless chip reprogramming.
Further: all the iot stuff

## Table of Contents

- [Goals](#goals)
- [Roadmap](#roadmap)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Goals

- Build the main server using Next.js for hosting the ESP
- Implement a Bluetooth interface for communication between the server and clients
- Develop portable code for the "unit" clients

One main ESP hosts the main server and functions as the central controller for fortress. Every additional ESP, called a unit, interfaces with the server via Bluetooth. A unit is wirelessly reprogrammable and can act as a data collector and/or an actor. Actors function autonomously and execute the instructions received from the server. The systems shall be adjustable in low power consumption.

## Roadmap

- [ ] Research and select the appropriate Next.js framework version for the main server
- [ ] Set up the main server using Next.js and configure it to host the ESP
- [ ] Implement a Bluetooth interface for communication between the server and clients
- [ ] Develop portable code for the "unit" clients
- [ ] Test and debug the communication between the main server and the unit clients
- [ ] Implement wireless chip reprogramming functionality for the unit clients
- [ ] Design and implement data collection functionality for the unit clients
- [ ] Design and implement autonomous actor functionality for the unit clients
- [ ] Optimize power consumption for the entire system
- [ ] Conduct thorough testing and debugging of the entire system
- [ ] Document the project, including installation instructions, usage guidelines, and contribution guidelines
- [ ] Choose an appropriate open-source license for the project and specify it in the README.md file

## Installation

Instructions on how to install and set up your project.

## Usage

Guidelines on how to use your project, including examples and screenshots if applicable.

## Contributing

Information on how others can contribute to your project, including guidelines and code of conduct.

## License

Specify the license under which your project is distributed.
