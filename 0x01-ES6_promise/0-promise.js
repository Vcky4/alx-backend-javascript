export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous API call, you can replace this with your actual API call.
        setTimeout(() => {
            const success = true; // Replace with your success condition
            if (success) {
                resolve({ data: 'API response data' });
            } else {
                reject(new Error('API request failed'));
            }
        }, 2000); // Simulating a 2-second delay
    });
}
