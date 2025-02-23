export interface TokenResponse {
  token: string
  expires: Date
}

export interface AuthTokensResponse {
  access: TokenResponse
  refresh?: TokenResponse
}

export interface Meta {
  totalItems: number
  itemsPerPage: number
  totalPages: number
  currentPage: number
}
