interface IGeolocationPosition {
    coords: {},
    timestamp: number;
}

interface IGeolocationError {
    code: number,
    message: string;
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

        var onSuccess = (position: IGeolocationPosition) => {
            console.log(position.coords);
        };

        var onError = (error: IGeolocationError) => {
            console.log(error);
        };

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    public getArticle() {
        
    }
}