export class App {
    constructor() {
        this.bindEvents();
    }

    protected bindEvents() {
        console.log('bindEvents');
        document.addEventListener('deviceready', this.initGeolocation, false);
        document.addEventListener('deviceready', this.initMediaCapture, false);
    }

    protected initGeolocation() {
        console.log('initGeolocation', navigator.geolocation);

        var onSuccess = (position: Position) => {
            console.log('getCurrentPosition coords:', position.coords);
        };

        var onError = (error: PositionError) => {
            console.log('getCurrentPosition error:', error.message);
        };

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    protected initMediaCapture() {
        console.log('initMediaCapture', navigator.device.capture);

        var onSuccess = (mediaFiles: MediaFile[]) => {
            var i: number;
            var path: string;
            var len: number;

            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                path = mediaFiles[i].fullPath;
                console.log('mediaFile path', path);
            }
        };

        var onError = (error: CaptureError) => {
            console.log('captureImage error:', error.message);
        };

        navigator.device.capture.captureImage(onSuccess, onError, { limit: 2 });
    }

    public getArticle() {
        
    }
}