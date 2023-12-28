import * as gcp from "@pulumi/gcp";

export const bigqueryDataset = new gcp.bigquery.Dataset("fail#1", {
    datasetId: "my-dataset",
});

export const bigqueryTable = new gcp.bigquery.Table("fail#1", {
    datasetId: "my-dataset",
	tableId: "my-table",
});
