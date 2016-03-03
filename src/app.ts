interface GeolocationPosition {
    coords: {},
    timestamp: number
}

interface GeolocationError {
    code: number,
    message: string
}

export class App {
    constructor() {
        this.bindEvents();
    }

    protected bindEvents() {
        console.log('bindEvents');
        document.addEventListener('deviceready', this.initGeolocation, false);
    }

    protected initGeolocation() {
        console.log(navigator);
        console.log(navigator.geolocation);

        var onSuccess = function(position: GeolocationPosition) {
            console.log(position.coords);
        };

        var onError = function(error: GeolocationError) {
            console.log(error);
        };

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    public getArticle() {
        
    }
}