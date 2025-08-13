// hooks/useLogger.ts
import { fetchLogger } from "../../api/logger/loggerApi";
import { LogEntry, LogLevel } from "../../types/commonTypes";
import { useCallback } from "react";

export const useLogger = () => {
  const log = useCallback(
    (level: LogLevel, message: string, context?: Record<string, unknown>) => {
      const entry: LogEntry = {
        level,
        message,
        context,
        timestamp: new Date().toISOString(),
      };

      // Log to browser console in dev
      if (process.env.NODE_ENV !== "production") {
        switch (level) {
          case LogLevel.INFO:
            console.info("[INFO]", message, context);
            break;
          case LogLevel.WARN:
            console.warn("[WARN]", message, context);
            break;
          case LogLevel.ERROR:
            console.error("[ERROR]", message, context);
            break;
        }
      }

      // ✅ Use centralized fetchLogger utility
      fetchLogger(entry);
    },
    []
  );

  const info = useCallback(
    (message: string, context?: Record<string, unknown>) => {
      log(LogLevel.INFO, message, context);
    },
    [log]
  );

  const warn = useCallback(
    (message: string, context?: Record<string, unknown>) => {
      log(LogLevel.WARN, message, context);
    },
    [log]
  );

  const error = useCallback(
    (message: string, context?: Record<string, unknown>) => {
      log(LogLevel.ERROR, message, context);
    },
    [log]
  );

  return { info, warn, error };
};
