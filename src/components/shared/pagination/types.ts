type PaginationMeta = {
  currentPage?: number;
  pageSize?: number;
  totalPages?: number;
  totalRecords: number;
}

export type PaginatedResponse<Data> = {
  data: Data[];
  meta: PaginationMeta;
}
