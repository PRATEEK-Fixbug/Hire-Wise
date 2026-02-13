# Firebase Setup Checklist - Fix "Invalid Credential" Error

## The Problem
You're getting `Firebase: Error (auth/invalid-credential)` when trying to sign up. This means Firebase Authentication isn't properly configured.

## Solution: Follow These Steps

### Step 1: Enable Email/Password Authentication

1. Go to your Firebase Console: https://console.firebase.google.com/
2. Select your project: **voxnavi-d49ca**
3. In the left sidebar, click **Build** → **Authentication**
4. Click **Get started** (if you haven't set up Authentication yet)
5. Go to the **Sign-in method** tab
6. Find **Email/Password** in the list
7. Click on it to expand
8. Toggle the **Enable** switch to ON
9. Click **Save**

### Step 2: Create Firestore Database

1. In the left sidebar, click **Build** → **Firestore Database**
2. Click **Create database**
3. Choose **Start in production mode** (recommended)
4. Select a location (choose one closest to your users)
5. Click **Enable**

### Step 3: Set Up Firestore Security Rules (Important!)

After creating the database, you need to set up basic security rules:

1. In Firestore Database, go to the **Rules** tab
2. Replace the default rules with:

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection - users can read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Interviews collection - authenticated users can read all, write their own
    match /interviews/{interviewId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null && 
                              resource.data.userId == request.auth.uid;
    }
    
    // Feedback collection - authenticated users can read/write their own
    match /feedback/{feedbackId} {
      allow read, write: if request.auth != null && 
                           resource.data.userId == request.auth.uid;
    }
  }
}
```

3. Click **Publish**

### Step 4: Verify Your Configuration

After enabling authentication, verify your setup:

1. Check that Email/Password is enabled (green checkmark)
2. Check that Firestore Database is created
3. Restart your development server:
   ```bash
   # Press Ctrl+C to stop the server, then:
   npm run dev
   ```

### Step 5: Test Sign Up Again

1. Go to http://localhost:3000/sign-up
2. Fill in the form with:
   - Name: Test User
   - Email: test@example.com
   - Password: testpassword123
3. Click "Create an account"

## Common Issues & Solutions

### Issue: Still getting "invalid-credential" error
**Solution:** 
- Make sure you clicked "Save" after enabling Email/Password authentication
- Wait 1-2 minutes for Firebase to propagate the changes
- Clear your browser cache and try again
- Check the browser console for more detailed error messages

### Issue: "Permission denied" error
**Solution:** 
- Make sure you've set up Firestore security rules (Step 3)
- Verify the rules are published

### Issue: "Project not found" error
**Solution:** 
- Double-check your `.env.local` file has the correct project ID: `voxnavi-d49ca`
- Restart your development server

## Quick Verification Commands

Run these to verify your environment is set up correctly:

```bash
# Check if .env.local exists
dir .env.local

# Verify Node modules are installed
dir node_modules
```

## Need More Help?

If you're still having issues:
1. Check the Firebase Console → Authentication → Users tab to see if any users were created
2. Look at the browser console (F12) for detailed error messages
3. Check the terminal where `npm run dev` is running for server-side errors

---

**Most Common Fix:** Just enable Email/Password authentication in Firebase Console and restart your dev server!
