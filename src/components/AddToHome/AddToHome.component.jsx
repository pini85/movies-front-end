import React, { useEffect, useState } from "react";
import { platforms, getPlatform } from "./Platforms";
import Modal from "../Modal/Modal.component";
import Button from "../Button/Button";
import * as S from "./addToHome.styles";

const AddToHome = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isToggled, setToggled] = useState(false);
  const platform = getPlatform();

  useEffect(() => {
    console.log("hello");
    window.addEventListener(
      "beforeinstallprompt",
      handleBeforeInstallPromptEvent
    );

    return function cleanup() {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPromptEvent
      );
    };
  }, []);

  const handleBeforeInstallPromptEvent = (e) => {
    console.log("in side handlebefore", e);
    if (!isInstalled()) {
      console.log("im in rhe handler");
      e.preventDefault();
      setDeferredPrompt(e);
      if (isSupported()) {
        setToggled(true);
      }
    }
  };

  const isInstalled = () => {
    if (
      window.navigator.standalone === true ||
      window.matchMedia("(display-mode: standalone)").matches
    ) {
      console.log("isInstalled: true. Already in standalone mode");
      return true;
    }
    console.log("isInstalled: false.");
    return false;
  };
  const isSupported = () => {
    if (deferredPrompt != null && platform === platforms.NATIVE) {
      console.log("supported: true - native platform");
      return true;
    }
    if (platform !== platforms.NATIVE && platform !== platforms.OTHER) {
      console.log("supported: true - manual support");
      return true;
    }
    console.log("supported: false");
    return false;
  };

  const handleInstall = async () => {
    console.log("handleInstall called");
    setToggled(false);
    if (deferredPrompt != null) {
      return deferredPrompt
        .prompt()
        .then((_) => deferredPrompt.userChoice)
        .then((choiceResult) => {
          if (choiceResult.outcome === "accepted") {
            console.log("PWA native installation successful");
            setToggled(false);
          } else {
            console.log("User opted out by cancelling native installation");

            setToggled(false);
          }
        })
        .catch((err) => {
          console.log("Error occurred in the installing process: ", err);
        });
    }
  };

  // const handleInstallationClick = async () => {
  //   setToggled(false);
  //   console.log("im in handle click");
  //   console.log("my deffredPromt is", deferredPrompt);
  //   if (deferredPrompt !== null) {
  //     deferredPrompt.prompt();
  //     const { outcome } = await deferredPrompt.userChoice;
  //     if (outcome === "accepted") {
  //       deferredPrompt = null;
  //     }
  //   }
  // };

  return (
    <div>
      {isToggled ? (
        <Modal
          isToggled={true}
          setToggled={setToggled}
          title="Download the app!"
        >
          <S.ButtonContainer>
            <Button
              title="Yes! Sounds amazing!"
              handleClick={handleInstall}
            ></Button>
            <Button
              title="No thank you"
              handleClick={() => setToggled(false)}
            ></Button>
          </S.ButtonContainer>
        </Modal>
      ) : null}
    </div>
  );
};
export default AddToHome;
