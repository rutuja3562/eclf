// export type LogLevel = "DEBUG" | "INFO" | "WARN" | "ERROR";
export const LogLevel = {
  DEBUG: "DEBUG",
  INFO: "INFO",
  WARN: "WARN",
  ERROR: "ERROR",
} as const; // 👈 ensures string literals are preserved

export type LogLevel = keyof typeof LogLevel;

export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp?: string;
  context?: Record<string, unknown>;
}
export interface LogResponse {
  success: boolean;
  message?: string;
  error?: string;
}
