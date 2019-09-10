import { DOCUMENT } from "@angular/common";
import { ApplicationRef, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicModule } from "@ionic/angular";

import { AppComponent } from "./app.component";

export function createAppModule() {
    const iframe = document.querySelector("iframe");
    const iframeDoc = iframe && iframe.contentDocument;
    if (!iframeDoc) {
        throw new Error("Iframe not ready");
    }

    @NgModule({
        imports: [
            BrowserModule,
            IonicModule.forRoot(),
        ],
        providers: [
            { provide: DOCUMENT, useValue: iframeDoc },
        ],
        declarations: [
            AppComponent,
        ],
        entryComponents: [
            AppComponent,
        ],
    })
    class AppModule {
        
        ngDoBootstrap(appRef: ApplicationRef) {
            appendStyle(iframeDoc!, "node_modules/@ionic/angular/css/core.css");
            appendStyle(iframeDoc!, "node_modules/@ionic/angular/css/normalize.css");
            appendStyle(iframeDoc!, "node_modules/@ionic/angular/css/typography.css");
            appRef.bootstrap(AppComponent, iframeDoc!.body);
        }
        
    }

    return AppModule;
}

function appendStyle(doc: Document, href: string): void {
    const el = doc.createElement("link");
    el.rel = "stylesheet";
    el.href = href;
    doc.head.appendChild(el);
}