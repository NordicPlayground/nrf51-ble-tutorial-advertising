# nrf51-ble-tutorial-advertising
This example is meant to be used togheter with the tutorial "A beginner's tutorial: Advertising" found on https://devzone.nordicsemi.com/tutorials/5/a-beginners-tutorial-advertising/. The purpose of the tutorial is to get you started with the basics of the nRF51x22 and Bluetooth Low Energy (BLE). The tutorial is fairly superficial and is meant to be a hands-on introduction to BLE advertising and broadcasting of a limited payload. Hopefully after going through these steps you will be able to set up a BLE link, advertise your intentions and send your first bytes of data over the air. 

Requirements

<ul><ul>
<li>nRF51 DK Development Kit
<li>nRF51 Dongle
<li>Keil V5.12 or later
<li>Master Control Panel (MCP) V3.8.0. (You can also use the Master Control Panel found in the nRF Toolbox app for Android or the LightBlue app for iPhone)
<li>nRFgo Studio V1.18.0
<li>SDK V8.X.0 or V9.0.0 NOTE! The tutorial is written for SDK8.0.0 and the code style in SDK9.0.0 is slightly changed.
<li>SoftDevice S110 V8.0.0
</ul></ul>

Other kits, dongles and software versions might work as well, but this will not be covered here. This tutorial will not cover how to install and setup the software.

To compile it, clone the repository to "your_SDK_v8.X.0_folder\examples\ble_peripheral" or "your_SDK_v9.0.0_folder\examples\ble_peripheral". Download and extract the zipped version of the SDK. It will not work with the Pack installer. If you need help with this please have a look at this thread on devzone: https://devzone.nordicsemi.com/question/35068/compiling-github-projects/

Please post any questions about this project on https://devzone.nordicsemi.com.
