# How to Format Text (Bold, Underline, etc.)

This guide explains how to make certain words **bold**, *italic*, or underlined in your portfolio.

## Where You Can Use Formatting

### ✅ Works with Markdown Syntax

**1. About Section (`src/data/resume.tsx` - `DATA.summary`)**

This section uses Markdown, so you can use:

```tsx
summary: "This is **bold text** and this is *italic text*. You can also combine them: ***bold and italic***."
```

**2. Project Descriptions (`src/data/resume.tsx` - `DATA.projects[].description`)**

```tsx
description: "This project uses **React** and *TypeScript*. You can make key terms stand out with **bold**."
```

**Markdown Syntax:**
- **Bold**: `**text**` or `__text__`
- *Italic*: `*text*` or `_text_`
- ***Bold and Italic***: `***text***` or `___text___`

### ❌ Currently Doesn't Support Markdown

**1. Work Experience Descriptions (`src/data/resume.tsx` - `DATA.work[].description`)**
**2. Education Descriptions (`src/data/resume.tsx` - `DATA.education[].description`)**

These sections currently don't support Markdown. You have two options:

## Option 1: Enable Markdown for Work/Education Descriptions (Recommended)

To add formatting support to work and education descriptions, you'll need to modify the `ResumeCard` component to use Markdown. Here's how:

1. **Update `src/components/resume-card.tsx`:**
   - Import `Markdown` from `react-markdown`
   - Replace the description rendering to use `<Markdown>` component

**Example change:**
```tsx
// In resume-card.tsx, change line 106 from:
description

// To:
<Markdown className="prose max-w-full text-pretty font-sans text-xs dark:prose-invert">
  {description}
</Markdown>
```

After this change, you can use Markdown in work/education descriptions:
```tsx
description: [
  "Achieved **92% customer satisfaction** rate",
  "Led a team of *10 developers* to success",
  "Increased revenue by **$2M** in Q1"
]
```

## Option 2: Use HTML with Rich Text

If you want to keep the current setup but still format text, you would need to:
- Enable HTML rendering (requires `dangerouslySetInnerHTML` which needs security considerations)
- Or modify the component to parse and render HTML safely

## Examples

### In About Section (`DATA.summary`):
```tsx
summary: "Senior Product Manager with **7.5 years of experience** building and scaling global B2B, B2B2C, and enterprise digital platforms. Proven track record of leading product launches, driving outcomes such as a **92% customer recommendation rate**."
```

### In Project Descriptions:
```tsx
description: "An AI-powered learning platform built with **Next.js** and *TypeScript*. Features include real-time collaboration and advanced analytics."
```

### In Work Experience (after enabling Markdown):
```tsx
description: [
  "Owned the end-to-end lifecycle of **2 digital products**, including an AI-powered learning platform",
  "Scaling adoption to **300K+ users** per product across **60,000+ schools**",
  "Partnered with *Ops and Support teams* on field testing"
]
```

## Quick Reference

| Format | Markdown Syntax | Result |
|--------|----------------|--------|
| Bold | `**text**` | **text** |
| Italic | `*text*` | *text* |
| Bold + Italic | `***text***` | ***text*** |

**Note:** Underline is not standard Markdown. If you need underlines, you would need to use HTML (`<u>text</u>`) but this requires modifying the component to support HTML rendering.

## Need Help Adding Markdown Support?

If you want me to modify the `ResumeCard` component to support Markdown formatting in work/education descriptions, just let me know!
