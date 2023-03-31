import { LoggerServiceFactory } from '@greatminds/dp-logger-lib';
import { LoadConfiguration } from './LoadConfiguration';

const loadConfiguration: LoadConfiguration = new LoadConfiguration();

export async function configVariables(context: string) {
  const logger = LoggerServiceFactory.createLoggerService({ useSimpleFormat: true });
  const loadConfig = await loadConfiguration.buildConfiguration(logger);
  const { secretId } = loadConfig.get('aws');
  const configSecretId = loadConfig.get(secretId);
  const log = logger.getLogger(context);
  return { configSecretId, log };
}
