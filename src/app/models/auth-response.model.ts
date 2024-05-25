export interface AuthResponse {
  message: string;
  jwt: string;
  user_id?: number; // Opcional para manejar el posible undefined
}
