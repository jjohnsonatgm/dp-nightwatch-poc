import { ConfigurationBuilderService } from '@greatminds/dp-configuration-lib';
import { LoggerService } from '@greatminds/dp-logger-lib';
export class LoadConfiguration {

  public async buildConfiguration(logger: LoggerService) {
    return ConfigurationBuilderService.getConfiguration(
      {
        useEnvironmental: true,
        secretsManagerSecretIds: [process.env.AWS__SECRET_ID || ''],
      },
      logger,
    );
  }

}
