const API_BASE_URL = 'http://localhost:5000/api'

export async function fetchStats() {
  const response = await fetch(`${API_BASE_URL}/stats`)
  if (!response.ok) {
    throw new Error('Failed to fetch stats')
  }
  return response.json()
}

export async function fetchRevenue() {
  const response = await fetch(`${API_BASE_URL}/revenue`)
  if (!response.ok) {
    throw new Error('Failed to fetch revenue data')
  }
  return response.json()
}

export async function fetchTraffic() {
  const response = await fetch(`${API_BASE_URL}/traffic`)
  if (!response.ok) {
    throw new Error('Failed to fetch traffic data')
  }
  return response.json()
}

export async function fetchOrders() {
  const response = await fetch(`${API_BASE_URL}/orders`)
  if (!response.ok) {
    throw new Error('Failed to fetch orders')
  }
  return response.json()
}

export async function fetchActivities() {
  const response = await fetch(`${API_BASE_URL}/activities`)
  if (!response.ok) {
    throw new Error('Failed to fetch activities')
  }
  return response.json()
}

export async function fetchClients() {
  const response = await fetch(`${API_BASE_URL}/clients`)
  if (!response.ok) {
    throw new Error('Failed to fetch clients')
  }
  return response.json()
}

export async function fetchProjects() {
  const response = await fetch(`${API_BASE_URL}/projects`)
  if (!response.ok) {
    throw new Error('Failed to fetch projects')
  }
  return response.json()
}