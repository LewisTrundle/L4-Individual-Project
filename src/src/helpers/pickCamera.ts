import { cameras } from '../settings/cameras';

export const pickCamera = (): void => {
  for (const [_cameraName, camera] of Object.entries(cameras)) {
    const button = document.getElementById(camera.getButton());
    
    button?.addEventListener("click", () => {
      alert(`Switched to ${camera.getName()}`);
      makeButtonActive(button);
    });
  };
};


/**
 * Sets whichever button selected as 'active'.
 * @param button which button should be set as active
 */
const makeButtonActive = (button): void => {
  var activeCameraButton = document.querySelector(".active");
  activeCameraButton ? activeCameraButton.classList.remove("active") : null;
  button.classList.add("active");
};