# _User manual_ 

Provided below are instructions on how to use the robot controller.

## Controller
The home-page of the controller has 4 buttons as seen in the image below.

<img src="../dissertation/images/index.png" alt= "Home Page" width="75%" height="auto">

<br>
<br>

---
<br>
<br>

## Joystick
The joystick page of the controller allows the user to manually control the robot using the provided in-built joystick.

<img src="../dissertation/images/joystick.png" alt= "Joystick Page" width="75%" height="auto">

Before the joystick can be used, the user must first connect to the robot. To do this, please see [_Connecting to the Robot_](#connecting-to-the-robot).

To change the angle-motor mapping, please see [_Changing the Angle-Motor Mapping_](#changing-the-angle-motor-mapping).

To change the code speed, please see [_Adjusting the Code Speed_](#adjusting-the-code-speed).

<br>
<br>

---
<br>
<br>

## Self-Driving
The self-driving page of the controller allows the robot to drive autonomously using vision methods.

<img src="../dissertation/images/self-driving.png" alt= "Joystick Page" width="75%" height="auto">

Before these features can be used, please first enable camera permissions on your web browser [Enabling Camera Permissions](#enabling-camera-permissions).


**To use the Virtual Lead feature, please see [_Virtual Lead_](#virtual-lead).**

<br>

### Enabling Camera Permissions
To enable camera permissions on Chrome, simply click the lock icon next to the search bar and toggle camera permissions on. You may need to refresh the page after doing this.

On mobile devices, this can be done by navigating to your app permissions and clicking the option allowing camera permissions always on.

<img width="50%" src="../demos/camera-permissions.gif">

### Connecting to Host Cameras
To connect to your host cameras (the device running the web-browser), select a camera from the drop-down list, then click the 'Connect to Host Camera' button.

<img width="50%" src="../demos/host-camera.gif">

### Connecting to Peer Cameras
The self-driving page allows a user to connect and display a camera on a separate device (such as a mobile phone). To do this, please complete the following steps:
* Firstly, it is important that the host (the device the controller is running on) and the peer (the device whose camera you'd like to use) are sharing the same _public_ wifi. For example, a hotspot could be used for both devices, or a public wifi (such as 'UofGvisitor' for those at Glasgow University) could be used. You may need to refresh the page once this is done.
* Once the above step is complete, make sure there are no other tabs or apps on your mobile device using the camera.
* The devices then need to be linked. This can be done by using the peer device to scan the QR code in the bottom-right corner of the host - this will take your peer device to the _peer page_, from which you can share your camera feed. Alternatively, you can click the link just below the QR code to transfer the camera from the same device (such as in the example below) - however, this is equivalent to simply connecting to a host camera.
* On your peer device, select a camera, the press 'Transfer Video To Host' to transfer the camera feed to the host.
* The video should now be displayed on your host - make sure to close the QR code and enjoy!

_Note:_ It may also be handy to change your screen timeout time on your mobile device to 'never'. This is because when using a peer camera, it will disconnect from the host when your phone is off.

<img width="50%" src="../demos/connect-peer.gif">

### Controlling Vision Methods
The buttons at the right-side of the screen can be used to toggle which vision methods are active. There are three options to toggle:
* Colour Tracking
* Greyscale
* Colour Space Conversion

Note that marker detection cannot be toggled as is always active - as marked by the center point drawn on the canvas.

<img width="50%" src="../demos/control-vision.gif">

<br>
<br>

---
<br>
<br>

## Virtual Lead
The Virtual Lead feature allows the robot to follow the midpoint of the camera screen. This is done by detecting a marker attached to the robot and calculating the angle to turn to the midpoint.<br>
To use this feature, please do the following:
* Make sure your camera permissions are enabled [_Enabling Camera Permissions_](#enabling-camera-permissions).
* Make sure a qr-code or aruco marker is attached to the robot so it can be detected by a camera.
* Connect to a camera [_Connecting to Host Cameras_](#connecting-to-host-cameras) or [_Connecting to Peer Cameras_](#connecting-to-peer-cameras). It is best to use a peer device for this feature.
* Turn off colour-tracking, greyscale conversion, and colour-space conversion [_Controlling Vision Methods_](#controlling-vision-methods) 
* Connect to the robot [_Connecting to the Robot_](#connecting-to-the-robot).
* Enjoy!

<br>

### Important Please Read
There are a couple of important things to note while using this feature.
* The markers are detected best when your camera is ~0.5 meters away from the marker. The markers are also not detected well when they are at the edge of the camera screen.
* The quality of detection greatly depends on the quality of the camera used. Common Andriod phones have a poor camera quality, making the marker detection difficult.
* The lighting conditions matter greatly when detecting markers. It may take a few minutes to find the right lighting conditions which aren't too bright or dark.
* This feature has only been tested on browsers such as Google Chrome, therefore it might not work on all browsers.

<br>
<br>

---
<br>
<br>

## Connecting to the robot
There are a number of ways to connect to the robot, however, the easiest option is to either simply click 'connect' or move the joystick.

<img width="50%" src="../demos/connection-options.gif">

To connect to the robot, select the 'Web Bluetooth' option. Then select your device. When 'pair' is selected, the browser will then attempt to connect to your device - this may take a couple of seconds.

_Note_: It is not possible to connect to the robot using an IOS device.

<br>
<br>

---
<br>
<br>

## Settings
There are many various settings which can be adjusted for the robot. To access these settings, simply click the cog icon in the top-right corner.

<br>

### Adjusting the Code Speed
The speed at which code is sent to the robot can be adjusted in the settings modal. To do this, simply drag the slider to the desired speed. The speed is measured in milliseconds.

<img width="50%" src="../demos/code-speed.gif">

### Changing the Angle-Motor Mapping
The mapping of joystick angle to motor speed can be changed via the angle-motor mapping button. There are currently two possible mappings:
#### _Tight Control_
With this mapping, the robot will move at tighter angles, meaning small turns of the joystick correspond to higher turn-angles.
#### _Loose Control_
With this mapping, the robot will move at looser angles, meaning small turns of the joystick correspond to small turn-angles.

<img width="50%" src="../demos/mapping.gif">

### Diagnostic
To test how the robot moves at each angle of your current angle-motor mapping, a diagnostic can be performed by simply clicking the diagnostic button. A specific angle can be chosen, or all specified angles can be tested in order.

<img width="50%" src="../demos/diagnostic.gif">

### Changing the Robot Code
To view the code currently on the robot, select 'robot code' option.
On the left side, is code which can be uploaded to the robot, and on the right side is the code currently on the robot.
* _Get Device Code_: To get the code currently on the robot, select the 'get device code' option.
* _Upload Code_: To upload the code on the left to the robot, select the 'upload code' option.
* _Reset Code_: To reset the code on the robot, select the 'reset code' option.

<img width="50%" src="../demos/robot-code.gif">

### Checking the Battery Level
To check the battery percentage, simply click the battery icon in the top right corner.

<img width="50%" src="../demos/battery.gif">
