# Seed Sample Interviews Guide

## The Problem
After completing an interview, you see "You haven't taken any interviews yet!" because:
1. The interview generation process takes time
2. There are no pre-existing interviews to practice with
3. The database is empty for new users

## Solution: Seed Sample Interviews

I've created 6 pre-made sample interviews covering different roles and experience levels that users can immediately start practicing with.

## Method 1: Using the API Route (Easiest)

### Step 1: Make sure your dev server is running
```bash
npm run dev
```

### Step 2: Visit the seed endpoint in your browser
Open this URL:
```
http://localhost:3000/api/seed-interviews
```

### Step 3: Check the response
You should see:
```json
{
  "success": true,
  "message": "Successfully seeded 6 sample interviews!",
  "count": 6
}
```

### Step 4: Refresh your homepage
Go to http://localhost:3000 and you'll see the sample interviews in the "Latest Interviews" section!

## Method 2: Using Node Script (Alternative)

If you prefer to use a script:

### Step 1: Install dotenv (if not already installed)
```bash
npm install dotenv
```

### Step 2: Run the seed script
```bash
node scripts/seed-interviews.js
```

## Sample Interviews Included

### 1. Frontend Developer (Entry Level)
- **Type**: Mixed (Behavioral & Technical)
- **Questions**: 8
- **Tech Stack**: React, JavaScript, HTML5, CSS3, Git
- **Topics**: Virtual DOM, React Hooks, Responsive Design

### 2. Full Stack Developer (Mid Level)
- **Type**: Technical
- **Questions**: 10
- **Tech Stack**: Node.js, Express, MongoDB, React, TypeScript
- **Topics**: Event Loop, Databases, Authentication, APIs

### 3. Software Engineer (Entry Level)
- **Type**: Behavioral
- **Questions**: 7
- **Tech Stack**: Python, Git, Docker
- **Topics**: Learning, Teamwork, Problem Solving, Communication

### 4. Backend Developer (Mid Level)
- **Type**: Technical
- **Questions**: 9
- **Tech Stack**: Node.js, PostgreSQL, Redis, Docker, AWS
- **Topics**: SQL, Caching, Microservices, Testing

### 5. DevOps Engineer (Senior Level)
- **Type**: Mixed (Behavioral & Technical)
- **Questions**: 8
- **Tech Stack**: Docker, Kubernetes, AWS, Terraform, Jenkins
- **Topics**: CI/CD, Infrastructure as Code, Monitoring

### 6. Data Scientist (Entry Level)
- **Type**: Technical
- **Questions**: 8
- **Tech Stack**: Python, Pandas, NumPy, Scikit-learn, Jupyter
- **Topics**: Machine Learning, Data Preprocessing, Evaluation

## Verifying the Seed

### Check in Firebase Console
1. Go to https://console.firebase.google.com/project/voxnavi-d49ca/firestore
2. Open the `interviews` collection
3. You should see 6 documents with `userId: "system"`

### Check in Your App
1. Go to http://localhost:3000
2. Look for "Latest Interviews" section
3. You should see all 6 sample interviews
4. Click on any to start practicing!

## Re-seeding

If you want to re-seed (add fresh interviews):

### Option 1: Delete and Re-seed
1. Go to Firebase Console
2. Delete all documents where `userId = "system"`
3. Visit http://localhost:3000/api/seed-interviews again

### Option 2: Modify the API Route
Edit `app/api/seed-interviews/route.ts` and remove the check for existing interviews:
```typescript
// Comment out or remove this check:
/*
if (!existingInterviews.empty) {
  return NextResponse.json(...);
}
*/
```

## Customizing Sample Interviews

To add your own sample interviews:

1. Edit `app/api/seed-interviews/route.ts`
2. Add new interview objects to the `sampleInterviews` array:

```typescript
{
  interviewType: "Technical", // or "Behavioral" or "Mixed"
  jobRole: "Your Job Role",
  experienceLevel: "Entry Level", // or "Mid Level" or "Senior Level"
  techStack: ["tech1", "tech2", "tech3"],
  questionCount: 10,
  questions: [
    "Question 1?",
    "Question 2?",
    // ... more questions
  ],
  userId: "system",
  coverImageURL: "/amazon.png", // Choose from available images
  finalized: true,
  createdAt: new Date().toISOString(),
}
```

3. Visit http://localhost:3000/api/seed-interviews to add them

## Available Cover Images

You can use these cover images:
- `/amazon.png`
- `/facebook.png`
- `/spotify.png`
- `/reddit.png`
- `/pinterest.png`
- `/quora.png`
- `/adobe.png`
- `/hostinger.png`
- `/skype.png`
- `/telegram.png`
- `/tiktok.png`
- `/yahoo.png`

## Troubleshooting

### Error: "Sample interviews already exist"
**Solution**: Delete existing system interviews from Firebase Console first, or modify the API route to allow duplicates.

### Error: "Failed to seed interviews"
**Solution**: 
1. Check your Firebase credentials in `.env.local`
2. Ensure Firestore database is created
3. Check the console for detailed error messages

### Interviews not showing on homepage
**Solution**:
1. Make sure Firestore indexes are created (see FIX_CONNECTION_ERROR.md)
2. Hard refresh the page (Ctrl+F5)
3. Check browser console for errors

## Production Deployment

For production, you should:
1. Remove or protect the seed endpoint (add authentication)
2. Seed the database once during deployment
3. Consider using Firebase Admin SDK scripts instead of API routes

## Summary

The easiest way to get sample interviews:
1. Run `npm run dev`
2. Visit http://localhost:3000/api/seed-interviews
3. Refresh homepage
4. Start practicing!

Now users will always have interviews available to practice with, even before creating their own!
