import { ProtocolApi } from "@/lib/protocol-api";

type DonationsResponse = {
  data: any[];
  meta: {
    currentPage: number;
    pageSize: number;
    totalPages: number;
    totalRecords: number;
  }
}

export class DonationsService {
  private static api = new ProtocolApi();
  private static readonly ITEMS_PER_PAGE = 10;

  static async fetchDonationsCreated(page: number): Promise<DonationsResponse> {
    const skip = (page - 1) * DonationsService.ITEMS_PER_PAGE;

    return this.api
    .get<DonationsResponse>(`/donations?limit=${DonationsService.ITEMS_PER_PAGE}&skip=${skip}`)
    .then((response) => response.data)
  }

  static async createDonation(input: any) {
    return this.api
    .post(`/donations`, input)
    .then((response) => response.data)
  }
}
