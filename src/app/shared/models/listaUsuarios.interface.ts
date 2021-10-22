export interface ListaUsuarios {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

export interface data {
  data: [
    {
      id: number,
      email: string,
      first_name:string, 
      last_name:string,
      avatar: string

    }
  ]
} 