import * as gcp from "@pulumi/gcp";

export const sqlDatabaseInstance = new gcp.sql.DatabaseInstance("fail#1", {
	databaseVersion: "POSTGRES_15",
	region: "europe-west1",
	settings: {
		tier: "db-f1-micro",
		availabilityType: "ZONAL",
		ipConfiguration: {
			ipv4Enabled: true,
			privateNetwork: "projects/my-project/global/networks/default",
			authorizedNetworks: [
				{
					value: "0.0.0.0/0",
				},
			],
		},
		backupConfiguration: {
			enabled: false,
			binaryLogEnabled: false,
			pointInTimeRecoveryEnabled: false,
		},
	},
});

export const mysqlDatabaseInstance = new gcp.sql.DatabaseInstance("fail#2", {
	databaseVersion: "MYSQL_5_7",
	clone: {
		sourceInstanceName: "my-instance",
	},
	encryptionKeyName: "my-key",
});

export const postgresDatabaseInstance = new gcp.sql.DatabaseInstance("fail#3", {
	databaseVersion: "POSTGRES_11",
	clone: {
		sourceInstanceName: "my-instance",
	},
	encryptionKeyName: "my-key",
});

export const sqlserverDatabaseInstance = new gcp.sql.DatabaseInstance("fail#4", {
	databaseVersion: "SQLSERVER_2017_STANDARD",
	clone: {
		sourceInstanceName: "my-instance",
	},
	encryptionKeyName: "my-key",
});
