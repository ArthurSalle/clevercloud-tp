/* eslint-disable no-unused-vars */
// Generated with https://app.quicktype.io/?l=ts based on the API response

export interface Instances {
  type: string;
  version: string;
  name: string;
  variant: Variant;
  description: string;
  enabled: boolean;
  comingSoon: boolean;
  maxInstances: number;
  tags: string[];
  deployments: Deployment[];
  flavors: Flavor[];
  defaultFlavor: Flavor;
  buildFlavor: Flavor;
}

export interface Flavor {
  name: Name;
  mem: number;
  cpus: number;
  gpus: number;
  disk: null;
  price: number;
  available: boolean;
  microservice: boolean;
  machine_learning: boolean;
  nice: number;
  price_id: PriceID;
  memory: Memory;
}

export interface Memory {
  unit: Unit;
  value: number;
  formatted: Formatted;
}

export enum Formatted {
  The1024MiB = '1024 MiB',
  The14336MiB = '14336 MiB',
  The16384MiB = '16384 MiB',
  The2048MiB = '2048 MiB',
  The24576MiB = '24576 MiB',
  The256MiB = '256 MiB',
  The26624MiB = '26624 MiB',
  The32768MiB = '32768 MiB',
  The4096MiB = '4096 MiB',
  The512MiB = '512 MiB',
  The6144MiB = '6144 MiB',
  The8192MiB = '8192 MiB',
}

export enum Unit {
  B = 'B',
}

export enum Name {
  L = 'L',
  M = 'M',
  MlL = 'ML_L',
  MlS = 'ML_S',
  MlXs = 'ML_XS',
  Nano = 'nano',
  Pico = 'pico',
  S = 'S',
  The2Xl = '2XL',
  The3Xl = '3XL',
  Xl = 'XL',
  Xs = 'XS',
}

export enum PriceID {
  Apps2XL = 'apps.2XL',
  Apps3XL = 'apps.3XL',
  AppsL = 'apps.L',
  AppsM = 'apps.M',
  AppsMLL = 'apps.ML_L',
  AppsMLS = 'apps.ML_S',
  AppsMLXS = 'apps.ML_XS',
  AppsNano = 'apps.nano',
  AppsPico = 'apps.pico',
  AppsS = 'apps.S',
  AppsXL = 'apps.XL',
  AppsXS = 'apps.XS',
}

export enum Deployment {
  FTP = 'ftp',
  Git = 'git',
}

export interface Variant {
  id: string;
  slug: string;
  name: string;
  deployType: string;
  logo: string;
}
