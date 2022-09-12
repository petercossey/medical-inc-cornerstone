import PageManager from "../theme/page-manager";

export default class HelloWorld extends PageManager {
    constructor(context) {
        super(context);
    }

    onReady() {
        // DOM is ready
        console.log(this.context.donationProducts)
    }
}