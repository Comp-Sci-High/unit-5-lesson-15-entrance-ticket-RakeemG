// Create a function that tests the post route handler [2 pts]

async function testPostRoute(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}


// Call the function [1 pt]


// Show us the successful POST fetch [1 pt]

