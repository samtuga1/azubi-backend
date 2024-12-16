export default class ApiError extends Error {
  statusCode?: number;
  logMessage?: string;
  constructor(message: string, statusCode?: number, logMessage?: string) {
    super(message);
    this.statusCode = statusCode;
    this.logMessage = logMessage;
  }
}
