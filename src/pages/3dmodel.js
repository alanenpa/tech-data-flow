const IframeComponent = () => {
    const iframe = document.createElement("iframe");
    iframe.srcdoc = `<!DOCTYPE html>
    <html xmlns='http://www.w3.org/1999/xhtml'>
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <title>web</title>
        <style type="text/css">
        body { -ms-touch-action: none; }
        </style>
        <script type="text/javascript" src="./3d model/LED.37/files/KeyShotXR.js"></script>
        <script type="text/javascript">
        var keyshotXR;

        function initKeyShotXR() {
            var nameOfDiv = "KeyShotXR";
            var folderName = "LED.37";
            var viewPortWidth = 640;
            var viewPortHeight = 640;
            var backgroundColor = "#FFFFFF";
            var uCount = 18;
            var vCount = 9;
            var uWrap = true;
            var vWrap = false;
            var uMouseSensitivity = -0.05;
            var vMouseSensitivity = 0.05625;
            var uStartIndex = 9;
            var vStartIndex = 6;
            var minZoom = 1;
            var maxZoom = 1.52;
            var rotationDamping = 0.96;
            var downScaleToBrowser = true;
            var addDownScaleGUIButton = false;
            var downloadOnInteraction = false;
            var imageExtension = "jpg";
            var showLoading = true;
            var loadingIcon = "ks_logo.png"; // Set to empty string for default icon.
            var allowFullscreen = true; // Double-click in desktop browsers for fullscreen.
            var uReverse = false;
            var vReverse = false;
            var hotspots = {};
            var isIBooksWidget = false;
            
            keyshotXR = new keyshotXR(nameOfDiv,folderName,viewPortWidth,viewPortHeight,backgroundColor,uCount,vCount,uWrap,vWrap,uMouseSensitivity,vMouseSensitivity,uStartIndex,vStartIndex,minZoom,maxZoom,rotationDamping,downScaleToBrowser,addDownScaleGUIButton,downloadOnInteraction,imageExtension,showLoading,loadingIcon,allowFullscreen,uReverse,vReverse,hotspots,isIBooksWidget);
        }

        window.onload = initKeyShotXR;
        </script>
    </head>
    <body oncontextmenu="return false;">
        <div id="KeyShotXR"></div>
    </body>
    </html>
    `;
    
    return <div dangerouslySetInnerHTML={{ __html: iframe.outerHTML }} />;
}


const Model = () => {
    return (
        <div>
            <IframeComponent />
        </div>
    );
};

export default Model;