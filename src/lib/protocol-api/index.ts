import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

import { AppEnvironment } from '@/environment'

export class ProtocolApi {
  static apiUrl = AppEnvironment.microservice.apiUrl

  apiVersion = '1'

  headers: { [key: string]: string } = {
    'content-type': 'application/json',
  }

  withHeader(key: string, value: string) {
    this.headers = {
      ...this.headers,
      [key.toLowerCase()]: value,
    }

    return this
  }

  async get<T = unknown>(resource: string, options: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    return axios.get(this.getUrl(resource), this.mergeOptions(options))
  }

  async put<T = unknown>(resource: string, data?: unknown, options: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    return axios.put(this.getUrl(resource), data, this.mergeOptions(options))
  }

  async patch<T = unknown>(resource: string, data?: unknown, options: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    return axios.patch(this.getUrl(resource), data, this.mergeOptions(options))
  }

  async post<T = unknown>(resource: string, data?: unknown, options: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    return axios.post(this.getUrl(resource), data, this.mergeOptions(options))
  }

  async delete<T = unknown>(resource: string, data?: unknown, options: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    return axios.request({
      data,
      method: 'DELETE',
      url: this.getUrl(resource),
      ...this.mergeOptions(options),
    })
  }

  private getUrl(resource: string) {
    return `v${this.apiVersion}${resource}`
  }

  private mergeOptions(options: AxiosRequestConfig) {
    return {
      baseURL: ProtocolApi.apiUrl,
      ...options,
      headers: {
        ...this.headers,
        ...(options.headers || {}),
      },
    } as AxiosRequestConfig
  }
}
