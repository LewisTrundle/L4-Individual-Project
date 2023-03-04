# _Robot Controller_

## File Structure
### _public_
This folder contains the html code and other elements use to display the controller.
* _images/_ - Contains the images used on the controller.
* _robotCode/_ - Contains the code that can be uploaded to the robot.

### _src/classes_
This folder contains the classes which are used throughout the controller. There are three classes used:
* _AngleMotorMapping.ts_ - Maps the angle which the robot should move to speeds for its' left and right motor.
* _Robot.ts_ - Defines all the attributes and methods to be used by the robot.
* _VideoFeed.ts_ - Contains the attributes and methods involved in displaying a video and establishing a connection between a host and peer.

### _src/components_
This folder contains the components created to structure the pages of the controller.
* _common.ts_ - Contains common components which are used multiple times throughout the controller.
* _helpers.ts_ - Contains helper functions which help create components and their functionality.
* _home.ts_ - Contains code used to render the home page.
* _host.ts_ - Contains code used to render the host page.
* _joytick.ts_ - Contains code used to render the joystick page.
* _modals.ts_ - Contains the components used to create various different modals.
* _peer.ts_ - Contains code used to render the peer page.

### _src/pages_
This folder loads all the code necessary to run each page on the web browser.
* _host.ts_ - Contains code for the host and peer page.
* _index.ts_ - Contains code for the index page.
* _joystick.ts_ - Contains code for the joystick page.

### _src/settings_
This folder contains various settings which are used and can be changed by the controller.
* _angleMotorMappings.ts_ - Defines the angle-motor mappings which can be used by the controller. These mappings are created using the _AngleMotorMapping.ts_ class.
* _settings.ts_ - Contains other various settings which can be changed and used, such as the code speed, and the upload code button.

### _src/styles_
This folder contains the scss styles used to style the controller. There is only one file called _app.scss_.

### _src/vision_
This folder contains the various methods which all contribute towards the vision pipeline of the controller.
* _colourSpaceConversion.ts_ - Toggles on and off greyscaling and other colour space conversions.
* _colourTracker.ts_ - Allows the control to track pre-defined colours on the screen.
* _markerDetection.ts_ - Allows the control to track QR code and Aruco markers.
* _visionPipeline.ts_ - Controls the overall vision pipeline.

### _.env_
This specifies environmental variables, such as the app name.

### _deploy.sh_
This script is used to deploy the application to a Github Pages environment.

### _package.json_
This specifies the packages used in the project.

### _tsconfig.json_
This configures options related to the Typescript compiler.

### *user_manual.md*
This contains instructions on how to use the controller.

### _webpack.config.js_
This configures the bundling process to package the project into a web-app.


<br>
<br>

---
<br>
<br>

## Build Instructions
To use the controller it can be simply accessed from this url: https://lewistrundle.github.io/L4-Individual-Project/index.html.

However, if you wish to build and host the controller locally, then please follow the steps below.

<br>

### Build Steps
This project is not yet a published npm package. Therefore to get the controller locally, you must clone the `live` branch of the project folder through HTTPS using the following command:

		git clone -b live https://github.com/LewisTrundle/L4-Individual-Project.git

Once this is done, a local server can be created on Visual Studio Code which can host the controller locally. This can be done using the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.

Your controller should now be live and ready to use!

<br>

### Requirements

List the all of the pre-requisites software required to set up your project (e.g. compilers, packages, libraries, OS, hardware)

For example:

* Python 3.7
* Packages: listed in `requirements.txt` 
* Tested on Windows 10

or another example:

* Requires Raspberry Pi 3 
* a Linux host machine with the `arm-none-eabi` toolchain (at least version `x.xx`) installed
* a working LuaJIT installation > 2.1.0


### Test steps

List steps needed to show your software works. This might be running a test suite, or just starting the program; but something that could be used to verify your code is working correctly.

Examples:

* Run automated tests by running `pytest`
* Start the software by running `bin/editor.exe` and opening the file `examples/example_01.bin`


<br>
<br>

---
<br>
<br>

## Limitations of Use

<br>
<br>

---
<br>
<br>

## How To Use Instructions
For instructions on how to use the controller, please refer to the user manual [User Manual](user_manual.md)



