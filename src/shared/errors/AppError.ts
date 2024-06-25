class AppError extends Error {
  public readonly message: string;
  public readonly statusCode: number;
  public readonly createdAt: Date;

  constructor(message: string, statusCode = 400) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.createdAt = new Date(); // Pode ser útil para rastrear quando o erro ocorreu
    Object.setPrototypeOf(this, AppError.prototype); // Garante a correta herança em JavaScript
  }
}

export default AppError;
