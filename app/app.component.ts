import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    template: `
        <ion-app>
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-title>Test</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content>
                <ul>
                    <li>There must be an header and a footer, both blue</li>
                    <li>The header must have a faint shadow</li>
                </ul>
            </ion-content>
            <ion-footer>
                <ion-toolbar color="primary">
                    <ion-title>Footer</ion-title>
                </ion-toolbar>
            </ion-footer>
        </ion-app>
    `,
})
export class AppComponent {
}