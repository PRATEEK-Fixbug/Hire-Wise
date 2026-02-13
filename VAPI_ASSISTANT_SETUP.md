# Vapi Assistant Setup Guide

## The Problem
You're getting "Assistant or Squad must be provided" error because the app needs a Vapi Assistant ID for generating interviews.

## Solution: Create a Vapi Assistant

### Step 1: Go to Vapi Dashboard

1. Visit: https://dashboard.vapi.ai/
2. Sign in with your account

### Step 2: Create an Assistant

1. In the left sidebar, click **Assistants**
2. Click **Create Assistant** or **New Assistant**
3. Configure the assistant with these settings:

#### Basic Settings:
- **Name**: Interview Generator
- **First Message**: "Hello! I'm here to help you create a customized interview. Let me ask you a few questions about the role you're preparing for."

#### Model Settings:
- **Provider**: OpenAI
- **Model**: gpt-4 or gpt-3.5-turbo
- **System Prompt**:
```
You are an AI assistant helping users create customized job interviews. Your task is to:

1. Greet the user warmly
2. Ask them about:
   - The job role they're preparing for
   - Their experience level (entry, mid, senior)
   - The tech stack or skills required
   - The interview type preference (behavioral, technical, or mixed)
   - How many questions they want (5-15)

3. Collect this information naturally through conversation
4. Confirm the details with the user
5. Thank them and let them know their interview is being generated

Keep the conversation natural, friendly, and professional. Ask one question at a time.
```

#### Voice Settings:
- **Provider**: 11labs or Deepgram
- **Voice**: Choose a professional voice (e.g., "Sarah" or "Rachel")
- **Speed**: 0.9-1.0

#### Transcriber Settings:
- **Provider**: Deepgram
- **Model**: nova-2
- **Language**: en

### Step 3: Get the Assistant ID

1. After creating the assistant, you'll see it in your assistants list
2. Click on the assistant to open its details
3. Copy the **Assistant ID** (it looks like: `asst_xxxxxxxxxxxxx`)

### Step 4: Add to Environment Variables

Add this line to your `.env.local` file:

```env
NEXT_PUBLIC_VAPI_WORKFLOW_ASSISTANT_ID=asst_your_assistant_id_here
```

Replace `asst_your_assistant_id_here` with the actual Assistant ID you copied.

### Step 5: Restart Your Dev Server

```bash
# Press Ctrl+C to stop, then:
npm run dev
```

## Alternative: Skip Interview Generation (Quick Fix)

If you just want to test the interview feature without setting up the assistant:

1. Go to the homepage: http://localhost:3000
2. Look for existing interviews in the "Latest Interviews" section
3. Click on any interview to start it
4. This will use the built-in interviewer (no assistant ID needed)

## Testing the Setup

After adding the Assistant ID:

1. Go to: http://localhost:3000/interview
2. Click the "Call" button
3. The assistant should greet you and start asking questions
4. Answer the questions naturally
5. Once done, it will generate your custom interview

## Troubleshooting

### Issue: Still getting "Assistant must be provided"
**Solution:**
- Make sure you added `NEXT_PUBLIC_VAPI_WORKFLOW_ASSISTANT_ID` to `.env.local`
- Restart your dev server
- Check that the Assistant ID is correct (starts with `asst_`)

### Issue: "Invalid API key"
**Solution:**
- Verify your `NEXT_PUBLIC_VAPI_WEB_API_KEY` is correct
- Check your Vapi account is active

### Issue: Assistant doesn't respond
**Solution:**
- Check your Vapi account has credits/quota
- Verify the assistant is enabled in the dashboard
- Check browser console for detailed errors

## What Each Interview Type Does

**Generate Interview** (`/interview`):
- Uses the Vapi Workflow Assistant
- Asks you questions about the job role
- Creates a custom interview based on your answers
- Saves it to your account

**Take Interview** (`/interview/[id]`):
- Uses the built-in interviewer configuration
- Asks you the pre-generated questions
- Records your answers
- Generates feedback at the end

---

**Quick Start:** If you just want to test the app, skip the assistant setup and use existing interviews from the homepage instead!
