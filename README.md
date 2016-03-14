# nrf51-ble-tutorial-advertising
This example is meant to be used togheter with the tutorial "A beginner's tutorial: Advertising" found on https://devzone.nordicsemi.com/tutorials/5/a-beginners-tutorial-advertising/. The purpose of the tutorial is to get you started with the basics of the nRF51x22 and Bluetooth Low Energy (BLE). The tutorial is fairly superficial and is meant to be a hands-on introduction to BLE advertising and broadcasting of a limited payload. Hopefully after going through these steps you will be able to set up a BLE link, advertise your intentions and send your first bytes of data over the air. 

Change Log 2016.03.14: Updated tutorial to suit SDK V11.0.0 and the possibility to use both nRF51 and nRF52 kits. 

Requirements

<ul><ul>
<li>nRF51 DK or nRF52 DK Kit
<li>nRF51 Dongle
<li>Keil V5.12 or later.
<li>Master Control Panel (MCP)
<li>nRFgo Studio
<li>SDK V11.0.0. NOTE! This tutorial is written for SDK V11.0.0. Example files for older SDKs can also be found, but the APIs are different.
<li>For nRF51 DK use SoftDevice S130 V2.0.0, for nRF52 DK use S132 V2.0.0.
</ul></ul>

Other kits, dongles and software versions might work as well, but this is what I have used. This tutorial will not cover how to install and setup the software. Please search the forum if you run into trouble before posting questions here. 

To compile the example download the files and copy the folder "nrf51-ble-tutorial-advertising" to "your_SDK_folder\examples\ble_peripheral". Your main.c file should then be found in the folder "your_SDK_folder\examples\ble_peripheral\nrf5x-ble-tutorial-advertising". 

Further instructions and links to firmware and software are provided in the tutorial.

Please post any questions about this project on https://devzone.nordicsemi.com.
