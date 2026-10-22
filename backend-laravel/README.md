# Parveen Fleets Pvt Ltd - Enterprise Backend Architecture (Laravel 11 & MySQL)

Enterprise RESTful API backend service powering **PARVEEN FLEETS PVT LTD** corporate mobility platform.

---

## 🛠 Tech Stack

- **Framework**: Laravel 11.x
- **PHP Version**: 8.2+
- **Database**: MySQL 8.0+ / MariaDB
- **Authentication**: Laravel Sanctum (Stateful tokens + Multi-Role ACL)
- **Caching & Queues**: Redis / Database Queue
- **Security**: CSRF Protection, Rate Limiting (Throttle Middleware), Parameter Validation, Encrypted Data, SSL Compatible

---

## 🚀 Getting Started

### 1. Environment Configuration

Copy `.env.example` to `.env`:

```env
APP_NAME="Parveen Fleets Enterprise"
APP_ENV=production
APP_KEY=base64:YOUR_GENERATED_KEY
APP_DEBUG=false
APP_URL=https://api.parveenfleets.in

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=parveen_fleets_db
DB_USERNAME=parveen_admin
DB_PASSWORD=YOUR_STRONG_PASSWORD

SANCTUM_STATEFUL_DOMAINS=www.parveenfleets.in,parveenfleets.in
SESSION_DRIVER=database
QUEUE_CONNECTION=database
```

### 2. Install Dependencies

```bash
composer install --optimize-autoloader --no-dev
php artisan key:generate
```

### 3. Run Database Migrations

Execute MySQL migrations for all core schemas:

```bash
php artisan migrate --seed
```

This creates:
- `leads`: Corporate leads and RFP submissions with audit trails
- `bookings`: Dispatch orders with lifecycle states (`Pending` → `Assigned` → `Confirmed` → `In Progress` → `Completed`)
- `vehicles`: Fleet asset telematics registry, seating capacities, and fuel types
- `clients`: Enterprise corporate accounts and monthly contract tiers
- `users`: Multi-role enterprise staff (`Admin`, `Manager`, `Operations`, `Sales`, `Support`)

### 4. Running Locally

```bash
php artisan serve --port=8000
```

---

## 📡 Key REST API Endpoints

| Method | Endpoint | Description | Access |
|---|---|---|---|
| `POST` | `/api/v1/leads` | Submit corporate transportation inquiry | Public (Throttled) |
| `POST` | `/api/v1/auth/login` | Multi-role enterprise login | Public |
| `GET` | `/api/v1/leads` | List all inquiries with filtering | Admin / Sales |
| `PATCH` | `/api/v1/leads/{id}/status` | Update lead qualification status | Admin / Sales |
| `GET` | `/api/v1/leads/export/excel` | Stream leads as Excel CSV file | Admin / Manager |
| `GET` | `/api/v1/bookings` | Active trip dispatch roster | Operations / Admin |
| `PATCH` | `/api/v1/bookings/{id}/status` | Update dispatch status | Operations |
| `GET` | `/api/v1/vehicles` | Real-time vehicle telematics catalog | All Authenticated |
| `GET` | `/api/v1/dashboard/stats` | Real-time command metrics | Admin / Manager |
