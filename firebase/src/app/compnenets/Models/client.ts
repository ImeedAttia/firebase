export interface Client{
  id?: string,
  firstName?: string,
  lastName?: string,
  email?: string,
  phone?: number | null,
  balance: number
}