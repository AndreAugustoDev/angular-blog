import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
	selector: "app-big-card",
	standalone: true,
	imports: [RouterLink],
	templateUrl: "./big-card.component.html",
	styleUrl: "./big-card.component.css",
})
export class BigCardComponent {
	@Input()
	cardImage!: string;
	@Input()
	cardTitle!: string;
	@Input()
	cardDescription!: string;
	@Input()
	id!: string;
}
