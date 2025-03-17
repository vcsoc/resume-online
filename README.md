# Resume Timeline

This is a static website displaying a resume timeline with interactive features like a skills chart and PDF download.

## Prerequisites

To run this website locally, you need:
- A modern web browser (e.g., Chrome, Firefox, Safari).
- **Node.js** installed on your laptop (version 14 or higher). Download and install it from [https://nodejs.org/](https://nodejs.org/) if you don’t have it.

## Setup and Running Instructions

### Step 1: Extract the Folder
- Unzip the `resume-online` folder to a location on your laptop (e.g., Desktop or Documents).

### Step 2: Open the Terminal
- **Windows**: Open Command Prompt (cmd) or PowerShell.
  - Press `Win + R`, type `cmd` or `powershell`, and press Enter.
- **Mac**: Open Terminal.
  - Press `Cmd + Space`, type `Terminal`, and press Enter.

### Step 3: Navigate to the Project Directory
- In the terminal, navigate to the `resume-online` folder using the `cd` command.
  - Example (Windows): `cd C:\Users\YourName\Desktop\resume-online`
  - Example (Mac): `cd ~/Desktop/resume-online`

### Step 4: Start the Local Server
- Run the following command to start a local server:
npm start
- This will use `npx serve` to serve the website on your local machine. You should see output like:
Serving!
Local: http://localhost:3000
- Note: The port number might vary (e.g., 5000). Use the URL provided in the output.

### Step 5: Open the Website
- Open your web browser (e.g., Chrome, Firefox).
- Navigate to the URL shown in the terminal (e.g., `http://localhost:3000`).
- You should see the resume timeline website with an interactive timeline, skills chart, and a "Download PDF" button.

### Troubleshooting
- **Error: "fetch failed" or timeline.yaml not found**:
- Ensure you are running the site using the local server (`npm start`) and not by double-clicking `index.html`. Opening the file directly (`file://`) may cause issues with loading the `timeline.yaml` file.
- **Error: "npm start" not working**:
- Make sure Node.js is installed. Run `node -v` in the terminal to check. If not installed, download and install it from [https://nodejs.org/](https://nodejs.org/).
- Ensure you are in the `resume-online` directory when running `npm start`.
- **Fonts not loading**:
- The site uses Google Fonts (Poppins), which requires an internet connection. If you are offline, the fonts will fall back to Arial.

## Features
- **Interactive Timeline**: Click on markers to view job details.
- **Skills Chart**: Displays a bar chart of skills with proficiency levels (labels are displayed vertically).
- **PDF Download**: Click the "Download PDF" button to generate a PDF version of the resume.
- **Theme Toggle**: Switch between light and dark themes using the button in the top-right corner.
- **Search**: Use the search bar to filter timeline entries by title, company, or skill.