---
tags: cogxi
excalidraw-plugin: parsed
aliases:
  - RDF
type: excalidraw
---
is a:: [[knowledge representation language]]
[Wikiwand - Resource Description Framework](https://www.wikiwand.com/en/Resource_Description_Framework#Overview)

RDF is a directed graph composed of triple statements:

1) a node for the subject, 
2) an arc that goes from a subject to an object for the predicate, and 
3) a node for the object. 

![[Resource Description Framework]]

See: [[FOL|Predicate Logic]]


Each of the three parts of the statement can be identified by a [Uniform Resource Identifier](https://www.wikiwand.com/en/Uniform_Resource_Identifier "Uniform Resource Identifier") (URI). An object can also be a literal value. This simple, flexible data model has a lot of [expressive power](https://www.wikiwand.com/en/Expressive_power_(computer_science) "Expressive power (computer science)") to represent complex situations, relationships, and other things of interest, while also being appropriately abstract.

[SPARQL](https://www.wikiwand.com/en/SPARQL "SPARQL") is a standard query language for RDF graphs. [RDF Schema](https://www.wikiwand.com/en/RDF_Schema "RDF Schema") (RDFS), [Web Ontology Language](https://www.wikiwand.com/en/Web_Ontology_Language "Web Ontology Language") (OWL) and [SHACL](https://www.wikiwand.com/en/SHACL "SHACL") (Shapes Constraint Language) are ontology languages that are used to describe RDF data.


---

# Text Elements
Object ^dLw45bvK

Subject ^9P4Fafu1

predicate ^rKbzXTXH

[Toggle between Excalidraw and Markdown mode](cmd://obsidian-excalidraw-plugin:toggle-excalidraw-view) ^bc1Jsvtv

%%
# Drawing
```json
{
	"type": "excalidraw",
	"version": 2,
	"source": "https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.0.24",
	"elements": [
		{
			"type": "ellipse",
			"version": 58,
			"versionNonce": 796208361,
			"isDeleted": false,
			"id": "pfm_nekLAz9dXjJvd8AeB",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -260,
			"y": -60,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 160,
			"height": 160,
			"seed": 881713910,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"type": "text",
					"id": "9P4Fafu1"
				},
				{
					"id": "-8XcODRyhbO5JTt3GDR4V",
					"type": "arrow"
				}
			],
			"updated": 1710770698631,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 250,
			"versionNonce": 258945575,
			"isDeleted": false,
			"id": "9P4Fafu1",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -217.64309693828318,
			"y": 7.931457505076196,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 75.14910888671875,
			"height": 24,
			"seed": 233729898,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710770698631,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "Subject",
			"rawText": "Subject",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "pfm_nekLAz9dXjJvd8AeB",
			"originalText": "Subject",
			"lineHeight": 1.2,
			"baseline": 19
		},
		{
			"type": "ellipse",
			"version": 68,
			"versionNonce": 1207019465,
			"isDeleted": false,
			"id": "rqZXfTae6v4vY4BAsHp-a",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 100,
			"y": -60,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 160,
			"height": 160,
			"seed": 1898067254,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"type": "text",
					"id": "dLw45bvK"
				},
				{
					"id": "-8XcODRyhbO5JTt3GDR4V",
					"type": "arrow"
				}
			],
			"updated": 1710770698631,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 267,
			"versionNonce": 657741127,
			"isDeleted": false,
			"id": "dLw45bvK",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 147.30363462909963,
			"y": 7.931457505076196,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 65.25564575195312,
			"height": 24,
			"seed": 1154295030,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710770698631,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "Object",
			"rawText": "Object",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "rqZXfTae6v4vY4BAsHp-a",
			"originalText": "Object",
			"lineHeight": 1.2,
			"baseline": 19
		},
		{
			"type": "arrow",
			"version": 36,
			"versionNonce": 1423689385,
			"isDeleted": false,
			"id": "-8XcODRyhbO5JTt3GDR4V",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -80,
			"y": 20,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 160,
			"height": 0,
			"seed": 800365494,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"type": "text",
					"id": "rKbzXTXH"
				}
			],
			"updated": 1710770698631,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "pfm_nekLAz9dXjJvd8AeB",
				"gap": 20,
				"focus": 0
			},
			"endBinding": {
				"elementId": "rqZXfTae6v4vY4BAsHp-a",
				"gap": 20,
				"focus": 0
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "triangle",
			"points": [
				[
					0,
					0
				],
				[
					160,
					0
				]
			]
		},
		{
			"type": "text",
			"version": 13,
			"versionNonce": 1286083687,
			"isDeleted": false,
			"id": "rKbzXTXH",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -46.686767578125,
			"y": 8,
			"strokeColor": "#e03131",
			"backgroundColor": "#b2f2bb",
			"width": 93.37353515625,
			"height": 24,
			"seed": 1641712298,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710770698631,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "predicate",
			"rawText": "predicate",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "-8XcODRyhbO5JTt3GDR4V",
			"originalText": "predicate",
			"lineHeight": 1.2,
			"baseline": 19
		},
		{
			"type": "text",
			"version": 27,
			"versionNonce": 665779017,
			"isDeleted": false,
			"id": "bc1Jsvtv",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -240,
			"y": -120,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 477.5209655761719,
			"height": 24,
			"seed": 55588,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1710770703747,
			"link": "cmd://obsidian-excalidraw-plugin:toggle-excalidraw-view",
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "Toggle between Excalidraw and Markdown mode",
			"rawText": "[Toggle between Excalidraw and Markdown mode](cmd://obsidian-excalidraw-plugin:toggle-excalidraw-view)",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Toggle between Excalidraw and Markdown mode",
			"lineHeight": 1.2,
			"baseline": 19
		}
	],
	"appState": {
		"theme": "dark",
		"viewBackgroundColor": "#ffffff",
		"currentItemStrokeColor": "#1e1e1e",
		"currentItemBackgroundColor": "#b2f2bb",
		"currentItemFillStyle": "solid",
		"currentItemStrokeWidth": 2,
		"currentItemStrokeStyle": "solid",
		"currentItemRoughness": 0,
		"currentItemOpacity": 100,
		"currentItemFontFamily": 4,
		"currentItemFontSize": 20,
		"currentItemTextAlign": "left",
		"currentItemStartArrowhead": null,
		"currentItemEndArrowhead": "triangle",
		"scrollX": 389.18990164956176,
		"scrollY": 351.2893965057553,
		"zoom": {
			"value": 1.1808998557546078
		},
		"currentItemRoundness": "sharp",
		"gridSize": 20,
		"gridColor": {
			"Bold": "#C9C9C9FF",
			"Regular": "#EDEDEDFF"
		},
		"currentStrokeOptions": null,
		"previousGridSize": null,
		"frameRendering": {
			"enabled": true,
			"clip": true,
			"name": true,
			"outline": true
		}
	},
	"files": {}
}
```
%%