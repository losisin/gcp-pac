import * as gcp from "@pulumi/gcp";

// Fail common settings
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

// Fail end-of-life database version
export const mysqlDatabaseInstance = new gcp.sql.DatabaseInstance("fail#2", {
	databaseVersion: "MYSQL_5_7",
	rootPassword: "my-password",
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

// Fail database flags including their default values
export const mysqlDatabaseFlags = new gcp.sql.DatabaseInstance("fail#5", {
	databaseVersion: "MYSQL_8_0",
	rootPassword: "my-password",
	encryptionKeyName: "my-key",
	settings: {
		tier: "db-f1-micro",
		availabilityType: "REGIONAL",
		deletionProtectionEnabled: true,
		ipConfiguration: {
			ipv4Enabled: false,
			privateNetwork: "projects/my-project/global/networks/my-network",
			requireSsl: true,
		},
		backupConfiguration: {
			enabled: true,
			binaryLogEnabled: true,
		},
		databaseFlags: [
			{
				name: "local_infile",
				value: "on",
			},
			{
				name: "skip_show_database",
				value: "off",
			},
		],
	},
});
