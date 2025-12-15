# Deployment Configuration for Vercel

This portfolio is configured for easy deployment on Vercel. No additional configuration needed!

## What happens automatically:

1. ✅ Vercel detects the Vite project
2. ✅ Installs dependencies
3. ✅ Builds the project (`npm run build`)
4. ✅ Deploys the `dist/` folder
5. ✅ Sets up HTTPS and CDN automatically

## Custom Domain Setup

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## Environment Variables (if needed)

Create a `.env.local` file in the root:

```
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=your_email
```

Then reference in your code:
```javascript
const email = import.meta.env.VITE_CONTACT_EMAIL;
```

## Vercel CLI Deployment

```bash
npm install -g vercel
vercel
```

## More Info

- [Vercel Documentation](https://vercel.com/docs)
- [Vite + Vercel Guide](https://vercel.com/guides/deploying-a-vite-application)
