export abstract class GetCompanyConfigValueUseCase {
  abstract execute(configPath: string): Promise<string>;
}
