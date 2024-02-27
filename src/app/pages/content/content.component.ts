import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { mock } from "../../data/mock";

@Component({
	selector: "app-content",
	standalone: true,
	imports: [RouterLink],
	templateUrl: "./content.component.html",
	styleUrl: "./content.component.css",
})
export class ContentComponent implements OnInit {
	contentImage!: string;
	contentTitle!: string;
	contentDescription!: string;

	private id: number | null = 0;

	constructor(private route: ActivatedRoute) {}
	ngOnInit(): void {
		this.route.paramMap.subscribe((params) => {
			const newId = params.get("id");
			this.id = parseInt(newId ?? "1");
		});

		this.setComponentData(this.id);
	}

	setComponentData(id: number | null) {
		const result = mock.filter((article) => article.id === id)[0];

		this.contentTitle = result.title;
		this.contentDescription = result.description;
		this.contentImage = result.image;
	}
}
