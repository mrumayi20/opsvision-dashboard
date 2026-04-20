const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'

export type Stat = {
  title: string
  value: string
  change: string
  changeType: 'positive' | 'negative'
}

export type RevenueItem = {
  name: string
  revenue: number
}

export type TrafficItem = {
  name: string
  value: number
}

export type Order = {
  client: string
  date: string
  amount: string
  status: string
}

export type ActivityItem = {
  title: string
  description: string
  time: string
}

export type Client = {
  name: string
  industry: string
  contact: string
  status: string
  revenue: string
}

export type Project = {
  name: string
  owner: string
  deadline: string
  progress: number
  status: string
}

async function getJson<T>(url: string): Promise<T> {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }

  return response.json() as Promise<T>
}

export function fetchStats() {
  return getJson<Stat[]>(`${API_BASE_URL}/stats`)
}

export function fetchRevenue() {
  return getJson<RevenueItem[]>(`${API_BASE_URL}/revenue`)
}

export function fetchTraffic() {
  return getJson<TrafficItem[]>(`${API_BASE_URL}/traffic`)
}

export function fetchOrders() {
  return getJson<Order[]>(`${API_BASE_URL}/orders`)
}

export function fetchActivities() {
  return getJson<ActivityItem[]>(`${API_BASE_URL}/activities`)
}

export function fetchClients() {
  return getJson<Client[]>(`${API_BASE_URL}/clients`)
}

export function fetchProjects() {
  return getJson<Project[]>(`${API_BASE_URL}/projects`)
}