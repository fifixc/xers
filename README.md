<p align="center">
 <img width="100px" src="./assets/logo.svg" align="center" alt="Xers Readme Stats" />
 <h2 align="center">Xers – GitHub Readme Stats</h2>
 <p align="center">Get an awesome and dynamically card of your GitHub stats on your READMEs easily and quickly</p>
</p>

> 🚀 This is a simple project to generate dynamic statistics in your Github Readme. The project is built using Typescript and the runtime Bun!

> [!IMPORTANT]\
> Since the GitHub API only [allows 5k requests per hour per user account](https://docs.github.com/en/graphql/overview/resource-limitations) our instance will be private! :(

# GitHub Stats Card

Copy and paste this into your markdown, and that's it. Simple!

Change the `?username=` value to your GitHub username.

```md
https://example.com/stats?username=YOUR_USERNAME_HERE
```

> [!WARNING]\
> By default, the stats card only shows statistics like stars, commits, and pull requests from public repositories. To show private statistics on the stats card, you should [deploy your own instance](#deploy-on-your-own) using your own GitHub API token.

## Development
To start the development server run:
```bash
bun run dev
```

# Demo
<img src="./assets/template.svg" />