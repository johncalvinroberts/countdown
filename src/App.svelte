<script lang="ts">
  import { parseMs } from "./lib/utils";
  const whenWeAreLeaving = new Date(2022, 4, 5, 9, 50, 0, 0);

  let title = "";
  const getTimeRemaining = () => {
    const now = new Date().valueOf();
    const msRemaining = whenWeAreLeaving.valueOf() - now;
    const timeRemaining = parseMs(msRemaining);
    title =
      msRemaining > 0
        ? "Time until we leave Shanghai 🀂🀅🀅🀏"
        : "Time since We Left Shanghai 🀅🀅🀗🀣🀂";
    return timeRemaining;
  };
  let timeRemaining = getTimeRemaining();
  setInterval(() => (timeRemaining = getTimeRemaining()), 1000);
</script>

<main>
  <div>
    <h1>
      {title}
    </h1>
    <h2>
      {timeRemaining.days}<small>days</small>
      {timeRemaining.hours}<small>hrs</small>
      {timeRemaining.minutes}<small>mins</small>
      {timeRemaining.seconds}<small>s</small>
    </h2>
  </div>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  h1 {
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    font-weight: 500;
    font-size: 2rem;
  }
  h2 {
    font-size: 8rem;
  }
  small {
    font-size: 1rem;
  }
</style>
