export interface PagedResponse<T> {
  data: T;
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}
