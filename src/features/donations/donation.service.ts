import { ProtocolApi } from '@/lib/protocol-api';
import { Donation } from './models';
import { CreateDonationDto, UpdateDonationDto } from './dto';

type DonationsResponse = {
  data: Donation[];
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

  static async donationById(id: string) {
    return this.api
      .get<Donation>(`/donations/${id}`)
      .then((response) => response.data)
      .then(data => new Donation(data))
  }

  static async fetchDonationsCreated(page: number): Promise<DonationsResponse> {
    const skip = (page - 1) * DonationsService.ITEMS_PER_PAGE;

    return this.api
    .get<DonationsResponse>(`/donations?limit=${DonationsService.ITEMS_PER_PAGE}&skip=${skip}`)
    .then((response) => response.data)
  }

  static async createDonation(input: CreateDonationDto) {
    return this.api
    .post(`/donations`, input)
    .then((response) => response.data)
  }

  static async updateDonation(id: string, input: UpdateDonationDto) {
    return this.api
    .put(`/donations/${id}`, input)
    .then((response) => response.data)
  }
}
