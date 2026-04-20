import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'OpsVision API is running' })
})

app.get('/api/stats', (req, res) => {
  res.json([
    {
      title: 'Total Revenue',
      value: '$128,400',
      change: '+12.5%',
      changeType: 'positive',
    },
    {
      title: 'Active Clients',
      value: '1,248',
      change: '+8.2%',
      changeType: 'positive',
    },
    {
      title: 'Conversion Rate',
      value: '6.8%',
      change: '-1.1%',
      changeType: 'negative',
    },
    {
      title: 'Open Projects',
      value: '34',
      change: '+4.3%',
      changeType: 'positive',
    },
  ])
})

app.get('/api/revenue', (req, res) => {
  res.json([
    { name: 'Jan', revenue: 18000 },
    { name: 'Feb', revenue: 22000 },
    { name: 'Mar', revenue: 19500 },
    { name: 'Apr', revenue: 27800 },
    { name: 'May', revenue: 24500 },
    { name: 'Jun', revenue: 32000 },
  ])
})

app.get('/api/traffic', (req, res) => {
  res.json([
    { name: 'Direct', value: 38 },
    { name: 'Referral', value: 24 },
    { name: 'Social', value: 18 },
    { name: 'Email', value: 20 },
  ])
})

app.get('/api/orders', (req, res) => {
  res.json([
    {
      client: 'Acme Corp',
      date: '2026-04-18',
      amount: '$12,400',
      status: 'Completed',
    },
    {
      client: 'Bright Labs',
      date: '2026-04-17',
      amount: '$8,950',
      status: 'Pending',
    },
    {
      client: 'NovaTech',
      date: '2026-04-16',
      amount: '$15,200',
      status: 'Completed',
    },
    {
      client: 'Urban Retail',
      date: '2026-04-15',
      amount: '$6,780',
      status: 'In Review',
    },
    {
      client: 'Zenith Works',
      date: '2026-04-14',
      amount: '$11,350',
      status: 'Completed',
    },
  ])
})

app.get('/api/activities', (req, res) => {
  res.json([
    {
      title: 'New client signed',
      description: 'Bright Labs joined the professional plan.',
      time: '2 hours ago',
    },
    {
      title: 'Payment received',
      description: 'Acme Corp completed a payment of $12,400.',
      time: '4 hours ago',
    },
    {
      title: 'Project milestone reached',
      description: 'NovaTech dashboard redesign entered final review.',
      time: 'Yesterday',
    },
    {
      title: 'Support ticket resolved',
      description: 'Urban Retail issue was closed by the ops team.',
      time: 'Yesterday',
    },
  ])
})

app.get('/api/clients', (req, res) => {
  res.json([
    {
      name: 'Acme Corp',
      industry: 'Retail',
      contact: 'sarah@acme.com',
      status: 'Active',
      revenue: '$24,000',
    },
    {
      name: 'Bright Labs',
      industry: 'Healthcare',
      contact: 'mike@brightlabs.com',
      status: 'Pending',
      revenue: '$18,500',
    },
    {
      name: 'NovaTech',
      industry: 'Technology',
      contact: 'emma@novatech.com',
      status: 'Active',
      revenue: '$31,200',
    },
    {
      name: 'Urban Retail',
      industry: 'E-commerce',
      contact: 'alex@urbanretail.com',
      status: 'Inactive',
      revenue: '$12,800',
    },
    {
      name: 'Zenith Works',
      industry: 'Manufacturing',
      contact: 'james@zenithworks.com',
      status: 'Active',
      revenue: '$27,400',
    },
  ])
})

app.get('/api/projects', (req, res) => {
  res.json([
    {
      name: 'NovTech Redesign',
      owner: 'Emma Wilson',
      deadline: '2026-05-10',
      progress: 82,
      status: 'In Progress',
    },
    {
      name: 'Acme Analytics Portal',
      owner: 'James Carter',
      deadline: '2026-04-28',
      progress: 100,
      status: 'Completed',
    },
    {
      name: 'Bright Labs CRM Setup',
      owner: 'Sophia Lee',
      deadline: '2026-05-16',
      progress: 56,
      status: 'In Progress',
    },
    {
      name: 'Urban Retail Migration',
      owner: 'Michael Brown',
      deadline: '2026-04-25',
      progress: 34,
      status: 'Delayed',
    },
    {
      name: 'Zenith Works Reporting Suite',
      owner: 'Olivia Parker',
      deadline: '2026-05-22',
      progress: 72,
      status: 'In Progress',
    },
  ])
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})