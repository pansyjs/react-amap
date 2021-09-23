export interface Options {
  key?: string;
  version?: string;
  plugins?: string[];
  AMapUI?: {
    version?: string;
    plugins?: string[];
  };
  Loca?: {
    version?: string;
  };
}

export interface Config {
  key?: string;
  AMap?: {
    version?: string;
    plugins?: string[];
  };
  AMapUI?: {
    version?: string;
    plugins?: string[];
  };
  Loca?: {
    version?: string;
  };
}
