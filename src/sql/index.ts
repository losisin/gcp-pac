import { disallowDefaultVpc } from "./disallowDefaultVpc";
import { disallowEndOfLifeVersion } from "./disallowEndOfLifeVersion";
import { disallowImplicitPublicWhitelist } from "./disallowImplicitPublicWhitelist";
import { disallowPublicIp } from "./disallowPublicIp";
import { requireAutomatedBackup } from "./requireAutomatedBackup";
import { requireCmek } from "./requireCmek";
import { requireDeletionProtection } from "./requireDeletionProtection";
import { requireHighAvailability } from "./requireHighAvailability";
import { requirePointInTimeRecovery } from "./requirePointInTimeRecovery";
import { requireSslConnections } from "./requireSslConnections";

export const sqlPolicies = [
	disallowDefaultVpc,
	disallowEndOfLifeVersion,
	disallowImplicitPublicWhitelist,
	disallowPublicIp,
	requireAutomatedBackup,
	requireCmek,
	requireDeletionProtection,
	requireHighAvailability,
	requirePointInTimeRecovery,
	requireSslConnections,
];
