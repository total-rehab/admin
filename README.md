# Total Rehab admin

The admin interface for the Total Rehab app, built using
[Next.js](https://nextjs.org/docs) and [React Admin](https://marmelab.com/react-admin/),
with a custom data provider that integrates with the Total Rehab API.

## Getting Started

Install dependencies:

```text
yarn install
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

### Backend API

The backend API to be used is set via the `API_BASE_URL` environment variable.

### Authentication

Supabase authentication is set via the `SUPABASE_URL` and `SUPABASE_ANON_KEY`
environment variables. These can be retrieved from the Supabase dashboard.

### Media library

To enable image uploads you will need to make sure that Supabase storage has
a public bucket called "images", containing a filter called "public" for a given
environment.

## Deployments

We deploy to the static site to production whenever a change is merged into the
`main` branch, which is set as the default branch in GitHub.

At the time of writing there is no staging environment, primarily due to the
size of the project, the fact that there was only a single developer working
on it, and to save on costs. However, you can target a staging environment while
developing locally (see below).

## Staging

If you want to target a staging environment during local development create a
`.env` file and add in the `API_BASE_URL`, `SUPABASE_URL` and `SUPABASE_ANON_KEY`.
