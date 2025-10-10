# Paystation Payment Integration

A secure, full stack payment flow that integrates directly with the Paystation API. It automatically creates merchant sessions, manages OAuth token authentication, and generates downloadable TXT receipts after successful transactions. Uses ngrok to provide a temporary public callback URL for local development.

Tech Stack
Frontend: React, TypeScript, Vite, Tailwind CSS
Backend: Node.js, CORS, Dotenv, OAuth authentication, Ngrok

```pqsql
HostedPaymentForm/
│
├── client/   ← React + Vite + Tailwind
│   └── package.json
│   └── .env
│
└── server/   ← Express + Node + ngrok
    └── package.json
    └── .env
```

```bash
git clone https://github.com/jack-crawford-1/hostedPaymentForm.git
cd HostedPaymentForm
```

```bash
cd server
npm install
```

```bash
cd ../client
npm install
```

## Environment Variables

Create a `.env` file inside both folders using the examples below.

### **Server `.env`**

This file defines the server port, Paystation API endpoints, and credentials used for authentication.

```
# SERVER PORT IN DEVELOPMENT
PORT=3000

# PAYSTATION ENDPOINTS
TOKEN_URL=https://api.paystation.co.nz/oauth/token
PAYSTATION_API_URL=https://api.paystation.co.nz/v1/hosted/purchases

# PAYSTATION KEYS
CLIENT_ID=oauthClientId
CLIENT_SECRET=oauthClientSecret
PAYSTATION_ID=paystationId
GATEWAY_ID=gatewayId
```

### **Client `.env`**

The client needs to know where to send new purchase requests (via the local proxy)

and where Paystation should send the callback (the `RESPONSE_URL`).

```
LOCAL_PROXY_URL = "http://localhost:3000/api/proxy/purchase";
RESPONSE_URL=https://your-ngrok-domain.ngrok-free.app.dev/api/capture
```

💡 The `/api/capture`path points to the backend route that receives and processes

Paystation’s response (the callback endpoint for completed payments).

### Adding ngrok (Persistent URL for Local Development)

1.  Authenticate the ngrok agent. This saves your Authtoken to the default configuration file so you only have to do it once per machine.

```bash
    ngrok config add-authtoken $YOUR_AUTHTOKEN
```

2.  Start express server on port 3000: From server directory

```bash
    npm run dev
```

3.  Start ngrok on same port as server: From server directory

```bash
    npx ngrok http 3000
```

4.  After a few seconds, you’ll see something like:

```bash
    Forwarding  https://your-ngrok-domain.ngrok-free.app.dev -> [http://localhost:3000](http://localhost:3000/)
```

That’s your **public URL** that Paystation (or your frontend) can call back to.

5. Update client env response url:

```bash
    RESPONSE_URL=https://your-ngrok-domain.ngrok-free.app.dev/api/capture.`
```

The `/api/capture` path points to the backend’s route that receives and processes Paystation’s response (the callback endpoint for completed payments).

6. Start client on port 5173: From client directory

```bash
    npm run dev
```

7. Your React frontend will start, and when you submit a form, it’ll hit the backend at:

```bash
    https://your-ngrok-domain.ngrok-free.app.dev/api/capture
```

and ngrok will forward it to

```bash
    http://localhost:3000/api/capture

```

<br/>
<br/>
<img src="./assets/images/landingPage.png" alt="Landing Page" width="400">
<img src="./assets/images/hostedPage.png" alt="Paystation Hosted Page" width="400">
<img src="./assets/images/successPage.png" alt="Success Page" width="400">
