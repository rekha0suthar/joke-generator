const jokeButton = document.getElementById('joke-btn');
const joke = document.getElementById('joke');
const dummyText = document.getElementById('dummy-txt');

const getJokes = () => {
  const jokes = fetch('https://api.chucknorris.io/jokes/random');
  jokes
    .then((response) => {
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      return response.json();
    })
    .then((data) => {
      joke.textContent = data.value;
      dummyText.style.display = 'none';
      joke.style.backgroundColor = 'chartreuse';
      joke.style.padding = '20px';
    })
    .catch((error) => {
      console.error(error);
    });
};

jokeButton.addEventListener('click', getJokes);
