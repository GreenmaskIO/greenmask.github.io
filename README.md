# Greenmask Website

This is the official website for [greenmask.io](https://greenmask.io) - the Greenmask project. Greenmask is a high-performance, open-source database masking and subsetting tool designed to help you create safe, anonymized datasets from production databases for development, testing, and staging.

## Technologies

- **Docusaurus v3.9.2** - Modern static site generator
- **Node.js v20** - JavaScript runtime
- **TypeScript** - Type-safe JavaScript
- **React v19** - User interface library

## Local Development

### Prerequisites

- **Node.js v20** or later
- **npm**

### Running Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/GreenmaskIO/greenmask.github.io.git
   cd greenmask.github.io
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run start
   ```

   The site will be available at `http://localhost:3000` with live reload enabled.

4. **Build for production**

   ```bash
   npm run build
   ```

   This generates the static site in the `build/` directory.

## Contributing

We welcome contributions from the community! Here's how you can help:

### Contributing Blog Posts

1. Fork this repository
2. Create a new markdown file under `blog/` with your post (e.g., `YYYY-MM-DD-my-post.md`)
3. Add proper frontmatter (refer to existing posts for examples)
4. Submit a pull request

### Contributing Code or Content

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes in `docs/` or `src/`
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Open a pull request

### Reporting Issues

Found a bug or have a suggestion? Please open an issue on [GitHub](https://github.com/GreenmaskIO/greenmask.github.io/issues).

## Project Structure

```text
.
├── blog/                # Blog posts
├── docs/                # Documentation content (Markdown/MDX)
├── src/                 # Source code (React components and pages)
│   ├── components/      # Reusable React components
│   └── css/             # Stylesheets (Vanilla CSS)
├── static/              # Static files (images, favicons, documents)
├── docusaurus.config.ts # Main Docusaurus configuration
├── sidebars.ts          # Documentation sidebar configuration
└── package.json         # Node.js dependencies and scripts
```

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](https://github.com/GreenmaskIO/greenmask/blob/main/LICENSE) file in the main repository for details.

## Learn More

- [Greenmask Website](https://greenmask.io)
- [Greenmask GitHub](https://github.com/GreenmaskIO/greenmask)
- [Docusaurus Documentation](https://docusaurus.io/docs)
