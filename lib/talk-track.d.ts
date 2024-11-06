declare module '@maverick-spirit/talk-track' {
  export interface LogOptions {
    role: string;
    message: string;
  }

  export function log(options: LogOptions): void;
}
