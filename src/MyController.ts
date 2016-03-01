import {MyView} from "./MyView";

export class MyController {
    protected view: MyView;

    public constructor(view: MyView) {
        this.view = view;
    }

    public startAction() {
        var msg = 'starting from MyController.';
        alert(msg);
        console.log(msg);
    }
}