export class Configurations {

  // Default language
  public static get DEFAULT_LOCALE(): string {
    return 'en';
  }

  // Languages supported by application
  public static get SUPPORTED_LANGUAGE(): string[] {
    return ['en', 'fr'];
  }
}
