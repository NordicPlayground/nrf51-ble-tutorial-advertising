# nrf51-ble-tutorial-advertising
This example is meant to be used togheter with the tutorial "A beginner's tutorial: Advertising" found on https://devzone.nordicsemi.com/tutorials/5/a-beginners-tutorial-advertising/. The purpose of the tutorial is to get you started with the basics of the nRF51x22 and Bluetooth Low Energy (BLE). The tutorial is fairly superficial and is meant to be a hands-on introduction to BLE advertising and broadcasting of a limited payload. Hopefully after going through these steps you will be able to set up a BLE link, advertise your intentions and send your first bytes of data over the air. 

Change Log 2016.02.09: Updated tutorial to suit SDK V11.0.0-2.alpha and the possibility to use both nRF51 and nRF52 kits. 

Requirements

<ul><ul>
<li>nRF51 DK or nRF52 DK Development Kit
<li>nRF51 Dongle
<li>Keil V5.17.
<li>Master Control Panel (MCP) V3.10.014
<li>nRFgo Studio V1.21.0.2
<li>SDK V11.0.0-2.alpha
<li>For nRF51 DK use SoftDevice S130 V2.0.0-7.alpha, for nRF52 DK use S132 V2.0.0-7.alpha
</ul></ul>

NOTE! Using the exact SDK and Softdevice versions is **VERY** important. As of today (2016.02.09) these are alpha releases, and the tutorial will be updated when the final releases are available.

Other kits, dongles and software versions might work as well, but this is what I have used. This tutorial will not cover how to install and setup the software. Please search the forum if you run into trouble before posting questions here. 

To compile the example download the files and copy the folder "nrf51-ble-tutorial-advertising" to "your_SDK_v11.0.0-2.alpha_folder\examples\ble_peripheral". Your main.c file should then be found in the folder "your_SDK_v11.0.0-2.alpha_folder\examples\ble_peripheral\nrf51-ble-tutorial-advertising". The example is intended for the zipped version of the SDK. It will **not work** with the Pack installer.

Further instructions and links to firmware and software are provided in the tutorial.

Please post any questions about this project on https://devzone.nordicsemi.com.
