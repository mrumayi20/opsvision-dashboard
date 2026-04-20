const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'

async function getJson<T>(url: string): Promise<T> {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }

  return response.json()
}

export function fetchStats() {
  return getJson(`${API_BASE_URL}/stats`)
}

export function fetchRevenue() {
  return getJson(`${API_BASE_URL}/revenue`)
}

export function fetchTraffic() {
  return getJson(`${API_BASE_URL}/traffic`)
}

export function fetchOrders() {
  return getJson(`${API_BASE_URL}/orders`)
}

export function fetchActivities() {
  return getJson(`${API_BASE_URL}/activities`)
}

export function fetchClients() {
  return getJson(`${API_BASE_URL}/clients`)
}

export function fetchProjects() {
  return getJson(`${API_BASE_URL}/projects`)
}