<script lang="ts">
  import { parseMs } from "./lib/utils";

  const whenWeAreLeaving = Date.parse(
    "Thu May 05 2022 09:50:00 GMT+0800 (China Standard Time)"
  );

  let title = "";
  const getTimeRemaining = () => {
    const now = new Date().valueOf();
    const msRemaining = whenWeAreLeaving - now;
    const timeRemaining = parseMs(msRemaining);
    title =
      msRemaining > 0
        ? "Time until we leave Shanghai 🀂🀅🀅🀏"
        : "Time since We Left Shanghai 🀅🀅🀗🀣🀂";
    return timeRemaining;
  };
  let timeRemaining = getTimeRemaining();
  setInterval(() => {
    timeRemaining = getTimeRemaining();
    document.title = `${timeRemaining.days}:${timeRemaining.days}:${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}`;
  }, 1000);
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

<style global>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    --pink: #ffb8ff;
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
  body {
    background-color: var(--pink);
    max-width: 100vw;
    overflow: hidden;
  }
</style>
