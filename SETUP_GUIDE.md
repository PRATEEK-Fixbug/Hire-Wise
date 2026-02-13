# VoxNavi - Complete Setup Guide

This guide will walk you through setting up all the required API keys and services to run VoxNavi locally.

## Prerequisites

- Node.js 18 or higher
- npm or yarn package manager
- A Google account
- A Vapi account (for voice assistant features)

---

## Step 1: Firebase Setup

Firebase is used for authentication and database (Firestore).

### 1.1 Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or "Create a project"
3. Enter a project name (e.g., "voxnavi-your-name")
4. Follow the setup wizard (you can disable Google Analytics if not needed)

### 1.2 Enable Authentication

1. In your Firebase project, go to **Build > Authentication**
2. Click "Get started"
3. Go to the **Sign-in method** tab
4. Enable **Email/Password** authentication
5. Click "Save"

### 1.3 Create Firestore Database

1. Go to **Build > Firestore Database**
2. Click "Create database"
3. Choose **Start in production mode** (you can adjust rules later)
4. Select a location closest to your users
5. Click "Enable"

### 1.4 Get Firebase Client Keys (Public)

1. Go to **Project Settings** (gear icon) > **General**
2. Scroll down to "Your apps"
3. Click the **Web** icon (`</>`) to add a web app
4. Register your app with a nickname (e.g., "VoxNavi Web")
5. Copy the config values:
   - `apiKey` → `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `appId` → `NEXT_PUBLIC_FIREBASE_APP_ID`

### 1.5 Get Firebase Admin Keys (Private)

1. Go to **Project Settings** > **Service accounts**
2. Click "Generate new private key"
3. Click "Generate key" - a JSON file will download
4. Open the JSON file and extract:
   - `project_id` → `FIREBASE_PROJECT_ID`
   - `client_email` → `FIREBASE_CLIENT_EMAIL`
   - `private_key` → `FIREBASE_PRIVATE_KEY`

**Important:** Keep the private key secure and never commit it to version control!

---

## Step 2: Google AI (Gemini) Setup

Google's Gemini AI is used for generating interview questions and feedback.

### 2.1 Get Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Select your Google Cloud project (or create a new one)
5. Copy the API key → `GOOGLE_API_KEY`

**Note:** The free tier includes generous limits for testing and development.

---

## Step 3: Vapi AI Setup

Vapi provides the voice assistant functionality for conducting interviews.

### 3.1 Create Vapi Account

1. Go to [Vapi Dashboard](https://dashboard.vapi.ai/)
2. Sign up for an account
3. Complete the onboarding process

### 3.2 Get Vapi API Key

1. In the Vapi Dashboard, go to **API Keys**
2. Create a new API key or copy an existing one
3. Copy the key → `NEXT_PUBLIC_VAPI_WEB_API_KEY`

**Note:** Vapi offers a free tier for testing. Check their pricing for production use.

---

## Step 4: Environment Variables Setup

### 4.1 Create .env.local File

1. Copy the `.env.local.example` file to `.env.local`:
   ```bash
   copy .env.local.example .env.local
   ```

2. Open `.env.local` and fill in all the values you collected:

```env
# Firebase Client (Public)
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef123456

# Firebase Admin (Private)
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQE...\n-----END PRIVATE KEY-----\n"

# Google AI
GOOGLE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# Vapi AI
NEXT_PUBLIC_VAPI_WEB_API_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

### 4.2 Important Notes

- Keep quotes around `FIREBASE_PRIVATE_KEY`
- Preserve the `\n` characters in the private key
- Never commit `.env.local` to version control (it's already in `.gitignore`)

---

## Step 5: Install Dependencies and Run

### 5.1 Install Dependencies

```bash
npm install
```

### 5.2 Run Development Server

```bash
npm run dev
```

### 5.3 Open the Application

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Troubleshooting

### Firebase Authentication Issues

- Verify that Email/Password authentication is enabled in Firebase Console
- Check that your API keys are correct
- Ensure the private key has proper line breaks (`\n`)

### Gemini API Issues

- Verify your API key is active in Google AI Studio
- Check if you've exceeded the free tier limits
- Ensure the API key has the necessary permissions

### Vapi Connection Issues

- Verify your Vapi API key is correct
- Check your Vapi account status and limits
- Ensure you have a stable internet connection for voice features

### Environment Variable Issues

- Make sure `.env.local` is in the root directory
- Restart the development server after changing environment variables
- Check for typos in variable names (they're case-sensitive)

---

## Security Best Practices

1. **Never commit** `.env.local` or any file containing API keys
2. **Rotate keys** regularly, especially if they're exposed
3. **Use different keys** for development and production
4. **Set up Firebase Security Rules** for Firestore to protect your data
5. **Enable billing alerts** on Google Cloud to avoid unexpected charges

---

## Next Steps

Once everything is set up:

1. Create an account in your local app
2. Try creating a custom interview
3. Test the voice interview feature
4. Review the feedback system

For production deployment, check the [README.md](README.md) for Vercel deployment instructions.

---

## Support

If you encounter issues:

- Check the [GitHub Issues](https://github.com/KeepSerene/vox-navi-ai-interview-prep-next-app/issues)
- Review Firebase, Google AI, and Vapi documentation
- Contact the project maintainer

Happy interviewing! 🎤
