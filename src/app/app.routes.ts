import { Routes } from "@angular/router";
import { ContentComponent } from "./pages/content/content.component";
import { HomeComponent } from "./pages/home/home.component";

export const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "content", component: ContentComponent },
];
