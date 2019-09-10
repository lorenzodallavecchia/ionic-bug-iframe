//import "./hacks";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { createAppModule } from "./app.module";

platformBrowserDynamic().bootstrapModule(createAppModule());
