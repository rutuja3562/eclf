// utils/fetchLogger.ts

import { API_BASE_URL } from "../../config/config";
import { LogEntry } from "../../types/commonTypes";
import axios from "axios";

export const createLogger = async (entry: LogEntry): Promise<void> => {
  try {
    await fetch("/api/loggerApi", {
      method: "POST",
      body: JSON.stringify(entry),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.warn("Failed to send log to server", err);
  }
};

export const fetchLogger = async (entry: LogEntry): Promise<void> => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/logger`, {
      params: { ...entry },
    });
    return data;
  } catch (err) {
    console.error("Error logging entry", err);
  }
};
