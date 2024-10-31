# Infinite Scroll Project with Local Editing and Deletion

## Description

This project fetches a list of items from a server and displays them with infinite scroll. As the user scrolls, additional items are loaded dynamically. Users can also locally edit and delete items in the list. The project includes:

- **Infinite scrolling** with gradual item loading.
- **Local item editing and deletion**.
- **Unit testing** for key functionalities using Jest and React Testing Library.

## Deployment

The project is deployed on GitHub Pages. You can view it [here](https://cosmic-faloodeh-0dfdb7.netlify.app/).

## Technologies Used

- **TypeScript**
- **React** with **MobX** for state management
- **CSS Modules** for scoped styling
- **Vite** for bundling
- **Jest** and **React Testing Library** for testing

## Requirements

- **API**: GitHub API
- **UI Kit**: This project uses [Material UI](https://mui.com/) for consistent design.
- **Authentication**: Implemented with your GitHub API token.
- **Manual list handling**: The infinite scroll and list functionality are implemented without relying on third-party libraries for scrolling.

## Setup and Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/LaraNU/techno-test-vk.git
   cd techno-test-vk
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Add a `.env` file with your GitHub API token:

   ```
   VITE_GITHUB_TOKEN=your_github_token
   ```

4. Run the project:

   ```
   npm run dev
   ```

5. To run tests:
   ```
   npm run test
   ```

## Usage

- **Infinite Scrolling**: The list will automatically load more items as you scroll down.
- **Local Editing and Deletion**: Hover over an item to reveal edit and delete options. Changes are applied locally.

## Testing

Unit tests are located in the `__tests__` folder.

Run tests using:

`npm run test`
