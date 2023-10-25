export const baseUrl = 'https://www.reddit.com';

export const fetchPopular = async() => {
    const response = await fetch(`${baseUrl}/r/popular.json`);
    const json = await response.json();

    return json.data.children.map((post) => post.data);
};