export interface BaseSingle<T> {
  message: string;
  status: number;
  data: T;
}