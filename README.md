
# Weather Data GraphQL API Project (THIS IS CURRENTLY UNDER CONSTRUCCTION)

This project is a weather application that leverages a GraphQL API hosted on Vercel to fetch weather data from the OpenWeather API. The application allows users to retrieve weather information for specific locations.

## Features

- Fetch weather data from OpenWeather API using GraphQL.
- Display current weather conditions, including temperature, humidity, wind speed, and description.
- Support for querying weather data for different locations.
- Intuitive user interface for a seamless user experience.

## Technologies Used

- GraphQL: A query language for APIs that allows efficient and flexible data retrieval.
- Vercel: A cloud platform for deploying applications with ease.
- OpenWeather API: A popular weather data provider.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/your-repo.git`
2. Navigate to the project directory: `cd your-repo`
3. Install dependencies: `npm install`
4. Set up environment variables: Create a `.env` file in the root directory and add the following:

   ```
   OPENWEATHER_API_KEY=your-api-key
   ```

   Replace `your-api-key` with your OpenWeather API key. You can obtain one by signing up at the [OpenWeather website](https://openweathermap.org/).

5. Start the development server: `npm start`
6. Open your browser and visit: `http://localhost:3000`

## Deployment

This application is deployed on Vercel. To deploy it to your own Vercel account, follow these steps:

1. Sign up for a Vercel account at [vercel.com](https://vercel.com).
2. Install the Vercel CLI globally: `npm install -g vercel`
3. Log in to your Vercel account using the CLI: `vercel login`
4. Deploy the application: `vercel --prod`

Vercel will provide you with a unique URL for your deployed application.

## Usage

- Enter the name of a location in the search bar to retrieve its weather data.
- The weather information will be displayed on the screen, including temperature, humidity, wind speed, and description.

## Contributing

Contributions to this project are welcome. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b my-branch`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-branch`
5. Submit a pull request.

Please make sure to update tests as appropriate.

## License

This project is licensed under the [MIT License](LICENSE).
