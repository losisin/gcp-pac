import * as gcp from '@pulumi/gcp'

// Fail common settings
export const sqlDatabaseInstance = new gcp.sql.DatabaseInstance('fail#1', {
	databaseVersion: 'POSTGRES_15',
	region: 'europe-west1',
	settings: {
		tier: 'db-f1-micro',
		availabilityType: 'ZONAL',
		ipConfiguration: {
			ipv4Enabled: true,
			privateNetwork: 'projects/my-project/global/networks/default',
			authorizedNetworks: [
				{
					value: '0.0.0.0/0'
				}
			]
		},
		backupConfiguration: {
			enabled: false,
			binaryLogEnabled: false,
			pointInTimeRecoveryEnabled: false
		},
		databaseFlags: [
			{
				name: 'log_connections',
				value: 'on'
			},
			{
				name: 'log_disconnections',
				value: 'on'
			},
			{
				name: 'log_statement',
				value: 'ddl'
			},
			{
				name: 'cloudsql.enable_pgaudit',
				value: 'on'
			},
			{
				name: 'asd',
				value: 'asd'
			}
		]
	}
})

// Fail end-of-life database version
export const mysqlDatabaseInstance = new gcp.sql.DatabaseInstance('fail#2', {
	databaseVersion: 'MYSQL_5_7',
	rootPassword: 'my-password',
	clone: {
		sourceInstanceName: 'my-instance'
	},
	encryptionKeyName: 'my-key'
})

export const postgresDatabaseInstance = new gcp.sql.DatabaseInstance('fail#3', {
	databaseVersion: 'POSTGRES_11',
	clone: {
		sourceInstanceName: 'my-instance'
	},
	encryptionKeyName: 'my-key'
})

export const sqlserverDatabaseInstance = new gcp.sql.DatabaseInstance('fail#4', {
	databaseVersion: 'SQLSERVER_2017_STANDARD',
	clone: {
		sourceInstanceName: 'my-instance'
	},
	encryptionKeyName: 'my-key'
})

// Fail database flags including their default values
export const mysqlDatabaseFlags = new gcp.sql.DatabaseInstance('fail#5', {
	databaseVersion: 'MYSQL_8_0',
	rootPassword: 'my-password',
	encryptionKeyName: 'my-key',
	settings: {
		tier: 'db-f1-micro',
		availabilityType: 'REGIONAL',
		deletionProtectionEnabled: true,
		ipConfiguration: {
			ipv4Enabled: false,
			privateNetwork: 'projects/my-project/global/networks/my-network',
			sslMode: 'ENCRYPTED_ONLY'
		},
		backupConfiguration: {
			enabled: true,
			binaryLogEnabled: true
		},
		databaseFlags: [
			{
				name: 'local_infile',
				value: 'on'
			},
			{
				name: 'skip_show_database',
				value: 'off'
			}
		],
		passwordValidationPolicy: {
			enablePasswordPolicy: true
		}
	}
})

export const sqlserverDatabaseFlags = new gcp.sql.DatabaseInstance('fail#6', {
	databaseVersion: 'SQLSERVER_2019_STANDARD',
	rootPassword: 'my-password',
	encryptionKeyName: 'my-key',
	settings: {
		tier: 'db-f1-micro',
		availabilityType: 'REGIONAL',
		deletionProtectionEnabled: true,
		ipConfiguration: {
			ipv4Enabled: false,
			privateNetwork: 'projects/my-project/global/networks/my-network',
			sslMode: 'ENCRYPTED_ONLY'
		},
		backupConfiguration: {
			enabled: true,
			binaryLogEnabled: true
		},
		databaseFlags: [
			{
				name: 'external scripts enabled',
				value: 'on'
			},
			{
				name: 'cross db ownership chaining',
				value: 'on'
			},
			{
				name: 'user connections',
				value: '10000'
			},
			{
				name: 'user options',
				value: '1'
			},
			{
				name: 'remote access',
				value: 'on'
			},
			{
				name: '3625',
				value: 'on'
			},
			{
				name: 'contained database authentication',
				value: 'on'
			}
		],
		passwordValidationPolicy: {
			enablePasswordPolicy: true
		}
	}
})

export const postgresDatabaseFlags = new gcp.sql.DatabaseInstance('fail#7', {
	databaseVersion: 'POSTGRES_15',
	rootPassword: 'my-password',
	encryptionKeyName: 'my-key',
	settings: {
		tier: 'db-f1-micro',
		availabilityType: 'REGIONAL',
		deletionProtectionEnabled: true,
		ipConfiguration: {
			ipv4Enabled: false,
			privateNetwork: 'projects/my-project/global/networks/my-network',
			sslMode: 'ENCRYPTED_ONLY'
		},
		backupConfiguration: {
			enabled: true,
			binaryLogEnabled: true
		},
		databaseFlags: [
			{
				name: 'log_error_verbosity',
				value: 'terse'
			},
			{
				name: 'log_connections',
				value: 'off'
			},
			{
				name: 'log_statement',
				value: 'none'
			},
			{
				name: 'log_min_error_statement',
				value: 'panic'
			},
			{
				name: 'log_min_duration_statement',
				value: '10000'
			},
			{
				name: 'cloudsql.enable_pgaudit',
				value: 'off'
			}
		],
		passwordValidationPolicy: {
			enablePasswordPolicy: true
		}
	}
})
