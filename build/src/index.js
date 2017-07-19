'use strict';

System.register(['rodin/core', './container/mainContainer.js'], function (_export, _context) {
    "use strict";

    var RODIN, MainContainer, mainContainer;
    return {
        setters: [function (_rodinCore) {
            RODIN = _rodinCore;
        }, function (_containerMainContainerJs) {
            MainContainer = _containerMainContainerJs.MainContainer;
        }],
        execute: function () {
            RODIN.start();

            /**
             * MainContainer class draws and renders everything
             * @type {MainContainer}
             */
            mainContainer = new MainContainer();

            mainContainer.run();

            RODIN.messenger.on(RODIN.CONST.ACTIVE_SCENE, function () {
                if (RODIN.device.isMobile && RODIN.device.isVR) {
                    RODIN.Scene.HMDCamera.add(RODIN.GamePad.cardboard.gazePoint.Sculpt);
                }
            });
        }
    };
});