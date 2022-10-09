import express from 'express';
import { Startup } from './Startup';

export class Program extends Startup {
  constructor() {
    super(express());

    this.buildConfigurations();
  }

  buildConfigurations() {

    this.useApplicationMiddlewares();

    this.setGlobalRoutesPrefix('/api/v1');

    this.setTestApplicationRoutes();

    this.catchUnknownRoutes();

  }

  public Run(): void {
    this.initialize();
  }
}

new Program().Run();
