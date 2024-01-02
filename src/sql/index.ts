import { disallowDefaultVpc } from "./disallowDefaultVpc";
import { disallowEndOfLifeVersion } from "./disallowEndOfLifeVersion";
import { disallowImplicitPublicWhitelist } from "./disallowImplicitPublicWhitelist";
import { disallowPublicIp } from "./disallowPublicIp";
import { requireAutomatedBackup } from "./requireAutomatedBackup";
import { requireBinaryLogEnabledMysql } from "./requireBinaryLogEnabledMysql";
import { requireCmek } from "./requireCmek";
import { requireDatabaseFlagsMysql } from "./requireDatabaseFlagsMysql";
import { requireDeletionProtection } from "./requireDeletionProtection";
import { requireHighAvailability } from "./requireHighAvailability";
import { requirePointInTimeRecovery } from "./requirePointInTimeRecovery";
import { requireRootPasswordMysql } from "./requireRootPasswordMysql";
import { requireSslConnections } from "./requireSslConnections";

export const sqlPolicies = [
	disallowDefaultVpc,
	disallowEndOfLifeVersion,
	disallowImplicitPublicWhitelist,
	disallowPublicIp,
	requireAutomatedBackup,
	requireBinaryLogEnabledMysql,
	requireCmek,
	requireDatabaseFlagsMysql,
	requireDeletionProtection,
	requireHighAvailability,
	requirePointInTimeRecovery,
	requireRootPasswordMysql,
	requireSslConnections,
];
