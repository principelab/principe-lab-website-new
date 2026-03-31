# Content Update Guide

This guide explains how to update the website content (News, Publications, and Team members).

## Where to Edit

All content is managed in a single file: **`src/constants.tsx`**

---

## 1. Updating News

Edit the `NEWS` array in `src/constants.tsx`. Items appear in **reverse chronological order** (newest first).

### News Item Structure

```typescript
export const NEWS: NewsItem[] = [
  {
    id: '1',                    // Unique identifier (use dates or custom IDs)
    date: "Jan 20, 2026",       // Date format: "Month DD, YYYY"
    content: "Your news update here...",  // Brief description
    image: "assets/your-image.jpg"  // Optional: path to image in src/assets/
  },
  // Add new items ABOVE existing ones (they appear first on the page)
];
```

### Example

```typescript
{
  id: '4',
  date: "Mar 15, 2026",
  content: "New grant awarded for computational neuroscience research!",
  image: "assets/grant_announcement.jpg"
}
```

---

## 2. Updating Publications

Edit the `PUBLICATIONS` array in `src/constants.tsx`. Items appear in **reverse chronological order**.

### Publication Structure

```typescript
export const PUBLICATIONS: Publication[] = [
  {
    id: '1',                    // Unique identifier
    title: "Your Paper Title",
    authors: ["Author 1", "Author 2", "Author 3"],
    journal: "Journal Name, Volume, Pages",  // or "bioRxiv, YYYY.MM.DD.number"
    image: "assets/figure.jpg",  // Optional: cover image
    year: 2026,
    abstract: "Brief abstract (2-3 sentences)",
    tags: ["Peer Reviewed", "Pre-print"],  // Optional: e.g., "Peer Reviewed", "Pre-print", "Conference"
    links: {
      pdf: "https://doi.org/...",      // PDF link
      code: "https://github.com/...",   // Optional: code repository
      data: "https://..."               // Optional: data repository
    }
  },
  // Add new publications ABOVE existing ones
];
```

### Example

```typescript
{
  id: '7',
  title: "Machine Learning Approaches for Epilepsy Surgery Planning",
  authors: ["K Ivankovic", "J Montoya-Gálvez", "A Principe"],
  journal: "Journal of Neural Engineering, 23(4), 046001",
  image: "assets/figure1.jpg",
  year: 2026,
  abstract: "We present a novel machine learning framework for predicting epilepsy surgery outcomes...",
  tags: ["Peer Reviewed", "Open Access"],
  links: {
    pdf: "https://doi.org/10.xxxx/jne.2026.046001",
    code: "https://github.com/principelab/eplanning"
  }
}
```

---

## 3. Updating Team Members

Edit the `TEAM` array in `src/constants.tsx`. Items appear in **reverse order**.

### Team Member Structure

```typescript
export const TEAM: TeamMember[] = [
  {
    id: '1',                    // Unique identifier
    name: "Dr. Full Name",      // As it should appear on the website
    role: "Principal Investigator",  // e.g., "Principal Investigator", "Post-doctoral Fellow", "Ph.D. Candidate", "Research Associate"
    image: "assets/your-photo.jpg",  // Path to photo in src/assets/
    interests: "Research interest 1, Research interest 2, Research interest 3",  // Comma-separated
    links: {
      scholar: "https://scholar.google.com/...",
      github: "https://github.com/...",
      twitter: "https://twitter.com/..."
    }
  },
  // Add new members ABOVE existing ones
];
```

### Example

```typescript
{
  id: '4',
  name: "Maria Rodriguez",
  role: "Ph.D. Candidate",
  image: "assets/maria.jpg",
  interests: "Neural coding, computational psychiatry, large-scale brain simulations",
  links: {
    scholar: "https://scholar.google.com/citations?user=example",
    github: "https://github.com/mariarodriguez"
  }
}
```

---

## 4. Adding Images

1. Place image files in **`public/assets/`**
2. Use descriptive filenames (e.g., `montoya_2025.jpg`, `team_member_01.jpg`)
3. Recommended formats: `.jpg`, `.png`
4. Recommended size: ~150-200 KB for photos

### Image Naming Convention
- Publications: `{authors}_year.jpg` (e.g., `montoya_et_al_2025.jpg`)
- Team: `{lastname}_photo.jpg` (e.g., `principe.jpg`, `karla.jpg`)
- News: `{topic}_year.jpg` (e.g., `multiPEC_2025.jpg`)

---

## 5. Quick Start Workflow

1. **Make changes** in `src/constants.tsx`
2. **Add images** to `public/assets/` if needed
3. **Test locally**:
   ```bash
   npm run dev
   ```
4. **Build and deploy**:
   ```bash
   npm run build
   npm run deploy
   ```

---

## 6. File Structure Reference

```
src/
├── constants.tsx      # EDIT THIS FILE for content updates
├── components/
│   ├── Navigation.tsx
│   ├── TeamGrid.tsx
│   ├── PublicationCard.tsx
│   └── NewsSection.tsx
├── assets/
│   ├── principe.jpg           # Team photo
│   ├── karla.jpg              # Team photo
│   ├── justo.jpeg             # Team photo
│   ├── montoya_et_al_2025.jpg # Publication image
│   ├── multiPEC.png           # News image
│   └── ...                    # More images
└── types.ts                # TypeScript type definitions (read-only)
```

---

## 7. TypeScript Type Definitions

For reference, here are the type definitions:

### NewsItem
```typescript
interface NewsItem {
  id: string;
  date: string;
  content: string;
  image?: string;  // Optional
}
```

### Publication
```typescript
interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  abstract: string;
  image?: string;  // Optional
  tags: string[];
  links: {
    pdf?: string;
    code?: string;
    data?: string;
  };
}
```

### TeamMember
```typescript
interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  interests: string;
  links: {
    scholar?: string;
    github?: string;
    twitter?: string;
  };
}
```

---

## 8. Common Issues

| Issue | Solution |
|-------|----------|
| Images not showing | Check file is in `public/assets/` and path is correct |
| New content not appearing | Ensure items are added ABOVE existing ones in the array |
| TypeScript errors | Use the exact type definitions from `src/types.ts` |
| Build fails | Run `npm install` to ensure dependencies are up to date |

---

## Support

For questions or issues, contact the lab administrator or check the GitHub repository.
