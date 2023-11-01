# Spider-Man Express Project

This is a simple Node.js Express project that serves a website featuring Spider-Man content. It includes three main pages: Home, Services, and Contact Us. Additionally, there's a custom middleware that restricts access outside of business hours.

## Prerequisites

Before you get started, ensure you have the following dependencies installed:

- Node.js
- Express.js
- Nodemon (for development)

You can install the required dependencies using npm. Refer to the `package.json` file for more details.

## Getting Started

1. Clone this repository to your local machine.

```bash
git clone <repository_url>

1. Navigate to the project directory.

cd express_checkpoint

2.Install the project dependencies.

npm install

3.Start the server using Nodemon.

npm start

The server will start on port 4000.

Usage
Access the following pages in your browser:

Home
Services
Contact Us
The middleware will prevent access outside of business hours.

Project Structure
server.js: The main server file that configures routes and serves the website.
date.js: Custom middleware to restrict access during non-business hours.
public: Directory containing HTML files and CSS styles for the website.
css: Directory with CSS files for styling the pages.
package.json: Project configuration file with dependencies and scripts.