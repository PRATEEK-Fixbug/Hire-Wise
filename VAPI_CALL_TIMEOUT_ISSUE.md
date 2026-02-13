# Vapi Call Timeout/Ejection Issue

## The Problem

You're experiencing:
- Interview calls ending prematurely (around question 12 of 15)
- Error: "Meeting ended due to ejection: Meeting has ended"
- Call disconnects before completing all questions

## Root Causes

### 1. Vapi Free Tier Limits
Vapi's free tier has limitations:
- **Call duration limit**: Usually 10-15 minutes per call
- **Monthly minutes**: Limited total minutes per month
- **Concurrent calls**: Limited simultaneous calls

### 2. Inactivity Timeout
If there's silence for too long (no speech detected), the call may auto-terminate.

### 3. API Quota Exceeded
Your Vapi account may have reached its usage limits for the billing period.

### 4. Assistant Configuration
The assistant might have a max duration or max turns configured.

## Solutions

### Immediate Workarounds

#### Option 1: Reduce Question Count
Instead of 15 questions, try:
- 5-8 questions for shorter interviews
- This ensures completion within time limits

#### Option 2: Keep Responses Concise
- Answer questions more briefly
- Avoid long pauses between responses
- This reduces total call duration

#### Option 3: Split Into Multiple Sessions
- Create multiple shorter interviews
- Complete 5-7 questions per session
- This works within free tier limits

### Long-Term Solutions

#### Solution 1: Upgrade Vapi Account
Visit https://dashboard.vapi.ai/billing and upgrade to a paid plan:
- **Starter Plan**: More minutes, longer calls
- **Pro Plan**: Unlimited minutes, no time limits
- **Enterprise**: Custom limits

#### Solution 2: Check Your Vapi Usage
1. Go to https://dashboard.vapi.ai/
2. Check your dashboard for:
   - Minutes used this month
   - Remaining quota
   - Call duration limits
3. If quota is exceeded, wait for monthly reset or upgrade

#### Solution 3: Optimize Assistant Configuration
If you created a custom assistant:
1. Go to https://dashboard.vapi.ai/assistants
2. Edit your assistant
3. Check for:
   - Max duration settings
   - Max turns/messages settings
   - Timeout configurations
4. Increase or remove these limits

#### Solution 4: Add Call Extension Logic
Modify the interview to handle timeouts gracefully:
- Save progress when call ends
- Allow resuming from last question
- Split long interviews into parts

## Checking Your Vapi Account Status

### Step 1: Login to Vapi Dashboard
Visit: https://dashboard.vapi.ai/

### Step 2: Check Usage
Look for:
- **Minutes Used**: How many minutes you've consumed
- **Minutes Remaining**: Your quota left
- **Plan Type**: Free, Starter, Pro, etc.

### Step 3: Check Call Logs
1. Go to **Calls** section
2. Find your recent interview calls
3. Check:
   - Duration of each call
   - Why they ended (timeout, manual, error)
   - Any error messages

## Improved Error Handling

I've updated the `InterviewAgent` component to:
- Show better error messages when calls end
- Log message counts for debugging
- Inform users that progress is saved
- Provide clearer feedback about why calls ended

## Testing the Fix

After the code update:

1. **Restart your dev server**:
   ```bash
   npm run dev
   ```

2. **Start a new interview**:
   - Go to an interview page
   - Click "Call"
   - Answer questions

3. **Monitor the console**:
   - Open browser DevTools (F12)
   - Watch for message counts
   - Check for timeout warnings

4. **If call ends early**:
   - Note how many questions were completed
   - Check the error message
   - Your transcript should still be saved

## Recommended Settings

For best results with free tier:

### Interview Settings
- **Question Count**: 5-8 questions
- **Response Time**: Keep answers under 2 minutes each
- **Total Duration**: Aim for under 10 minutes total

### Assistant Configuration (if custom)
- **Max Duration**: 15 minutes (or remove limit)
- **Silence Timeout**: 30 seconds
- **Max Turns**: 20-30 exchanges

## Alternative: Use Text-Based Interviews

If voice limits are too restrictive, consider:
- Adding a text-based interview option
- Using chat instead of voice
- Hybrid approach (voice for some, text for others)

## Contact Vapi Support

If issues persist:
1. Email: support@vapi.ai
2. Discord: Join Vapi's Discord community
3. Documentation: https://docs.vapi.ai/

Provide them with:
- Your account email
- Call IDs from dashboard
- Error messages
- Expected vs actual behavior

## Summary

The call is ending due to Vapi's time/usage limits. The best solutions are:
1. **Short term**: Reduce questions to 5-8
2. **Long term**: Upgrade your Vapi plan
3. **Alternative**: Check usage and wait for monthly reset

Your interview progress is being saved even when calls end early, so users can still get feedback on the questions they completed.
