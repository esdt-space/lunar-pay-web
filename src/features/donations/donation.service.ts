import { ProtocolApi } from '@/lib/protocol-api';
import { Donation } from './models';
import { CreateDonationDto, CreateDonationWidgetDto, UpdateDonationDto } from './dto';
import { User } from '@/screens/app/event/components/actions-table/types';

type DonationsResponse = {
  data: Donation[];
  meta: {
    currentPage?: number;
    pageSize?: number;
    totalPages?: number;
    totalRecords: number;
  }
}

type DonationsEventResponse = {
  data: {
    owner: string;
    amount: string;
    tokenIdentifier: string;
  }[];
  meta: {
    totalRecords: number;
  }
}

type EventActionsResponse = {
  data: User[];
  meta: {
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

  static async fetchDonationsForEvent(): Promise<DonationsEventResponse> {
    return this.api
    .get<DonationsEventResponse>(`/donations/event/donations-ranked`)
    .then((response) => response.data)
  }

  static async fetchActionsForEvent(): Promise<EventActionsResponse> {
    return this.api
    .get<EventActionsResponse>(`/event/actions`)
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

  static async createDonationWidget(input: CreateDonationWidgetDto) {
    return this.api
    .post(`/donations/widgets`, input)
    .then((response) => response.data)
  }
}
