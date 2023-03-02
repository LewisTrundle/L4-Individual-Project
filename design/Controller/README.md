# _Competition Design_

## Important Links
* [Controller Wireframes](https://www.figma.com/file/dxfMdaXn4rrurm93kZYPLj/Robot-Controllers?node-id=0%3A1&t=XkWuCs9I574eSuOh-1)
* [Controller Interaction Flowchart](https://www.figma.com/file/jJUwSdq3vsMHxdOay33aca/Controller-Flowchart?node-id=0%3A1&t=S0oUmJRLOW4hJQI9-1)

---
<br>

## Controller User Interface
Wireframes for the controller pages were made using Figma and can be seen via this link: [Controller Wireframes](https://www.figma.com/file/dxfMdaXn4rrurm93kZYPLj/Robot-Controllers?node-id=0%3A1&t=XkWuCs9I574eSuOh-1)

The main four pages for the controller are the home, joystick, host, and peer pages. The wireframes for each are shown below:

<img src="../../dissertation/images/controller_wireframes/home_page_wireframe.png" alt= "Home Page Wireframe" width="250" height="auto">
<img src="../../dissertation/images/controller_wireframes/joystick_wireframe.png" alt= "Joystick Page Wireframe" width="250" height="auto">
<img src="../../dissertation/images/controller_wireframes/host_wireframe.png" alt= "Host Page Wireframe" width="250" height="auto">
<img src="../../dissertation/images/controller_wireframes/peer_wireframe.png" alt= "Peer Page Wireframe" width="auto" height="250">

---
<br>

## Controller Interaction Flow
Interactions and logic flow for the controller were modelled using a flowchart using Figma. These flowcharts can be seen via this link: [Controller Interaction Flowchart](https://www.figma.com/file/jJUwSdq3vsMHxdOay33aca/Controller-Flowchart?node-id=0%3A1&t=S0oUmJRLOW4hJQI9-1)

Flowcharts for the main-page, joystick-page, self-driving-page, and marker detection are shown below:

<img src="../../dissertation/images/controller_flows/controller_flow.png" alt= "Home Page Wireframe" width="200" height="auto">
<img src="../../dissertation/images/controller_flows/joystick_flow.png" alt= "Joystick Page Wireframe" width="400" height="auto">
<img src="../../dissertation/images/controller_flows/vision_flow.png" alt= "Host Page Wireframe" width="400" height="auto">
<img src="../../dissertation/images/controller_flows/marker_flow.png" alt= "Peer Page Wireframe" width="auto" height="300">

---
<br>

## Angle-Motor Mappings
Joystick angles were mapped to speeds for the left and right motor to be set to. Different mappings were tested.

### Tight Mapping
| Angle | Left Motor | Right Motor |
|-------|------------|-------------|
|   0   |      1     |      0      |
|   45  |      1     |      0      |
|   90  |      1     |      1      |
|  135  |      0     |      1      |
|  180  |      0     |      1      |
|  225  |      0     |      1      |
| 225.1 |      0     |      -1     |
|  270  |     -1     |      -1     |
| 314.9 |     -1     |      0      |
|  315  |      1     |      0      |
|  360  |      1     |      0      |

<img src="../../dissertation/images/angle_motor_mappings/Tight Angle-Motor Mapping.png" alt= "Home Page Wireframe" width="800" height="auto">

<br>

### Loose Mapping
| Angle | Left Motor | Right Motor |
|-------|------------|-------------|
|   0   |      1     |      0      |
|   45  |      1     |     0.5     |
|   90  |      1     |      1      |
|  135  |     0.5    |      1      |
|  180  |      0     |      1      |
| 180.1 |      0     |      -1     |
|  225  |    -0.5    |      -1     |
|  270  |     -1     |      -1     |
|  315  |     -1     |     -0.5    |
| 359.9 |     -1     |      0      |
|  360  |      1     |      0      |

<img src="../../dissertation/images/angle_motor_mappings/Loose Angle-Motor Mapping.png" alt= "Joystick Page Wireframe" width="800" height="auto">

---
<br>

## Markers
The following QR-code was used as the marker attatched to the robot.

<img src="../../dissertation/images/markers/qr-code.png" alt= "Joystick Page Wireframe" width="200" height="auto" style="background-color: white">