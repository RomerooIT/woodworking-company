export interface AppConfigurationInterface {
  app: {
    port: number;
    host: string;
    protocol: 'http';
    // ssl: {
    //   key: string;
    //   cert: string;
    // };
  };
}
