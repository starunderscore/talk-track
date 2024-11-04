declare module '@spirit-code/talk-track' {
    export interface LogOptions {
      role: string;  // Accepts any string value
      message: string;
    }
  
    export function log(options: LogOptions): void;
  }
  