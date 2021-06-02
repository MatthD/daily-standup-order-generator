<script lang="ts">
  import Navbar from './_navbar.svelte';
  import Countdown from './_countdown.svelte';
  import { members } from '../store';

  let generated = false;
  let loading = false;
  let shuffledmembersName: string[];

  function handleGenerate() {
    loading = true;
    shuffledmembersName = shuffleArr(Object.keys($members));
    setTimeout(() => {
      loading = false;
      generated = true;
    }, 1500);
  }
  function shuffleArr(arr: any[]) {
    return arr
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
  }
</script>

<template>
  <Navbar />
  {#if !generated}
    <section class="container has-text-centered">
      <button
        class="button is-link is-light is-rounded is-large"
        class:is-loading={loading === true}
        on:click={handleGenerate}>GENERATE DAILY ORDER 🏁</button
      >
    </section>
  {:else}
    <h3 class="dailyTitle">Daily order of the day 🎉</h3>
    <div class="timer">
      <Countdown />
    </div>
    <div class="columns columns-contains">
      {#each shuffledmembersName as name, index}
        <div class="column column-member">
          <div class="card card-member">
            <div class="card-image">
              <figure class="image is-250x250 avatar">
                <img src={$members[name]} alt={name} />
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <strong>{index + 1}</strong>
                <p>{name}</p>
              </div>
            </div>
          </div>
        </div>
        {#if index < shuffledmembersName.length - 1}
          <p class="nextMember">➡️</p>
        {/if}
      {/each}
    </div>
  {/if}
</template>

<style>
  @keyframes flip-scale-up-hor {
    0% {
      transform: scale(1) rotateX(0);
    }
    50% {
      transform: scale(2) rotateX(-90deg);
    }
    100% {
      transform: scale(1) rotateX(-180deg);
    }
  }
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .dailyTitle {
    margin-top: 100px;
    margin-bottom: 50px;
    font-size: 35px;
  }
  .card-member {
    animation: flip-scale-up-hor 0.5s linear alternate-reverse both;
  }
  .timer{
    width: 250px;
    height: 250px;
    margin-bottom: 75px;
  }
  .column-member {
    max-width: 300px;
  }
  .avatar {
    width: 250px;
    height: 250px;
  }
  .avatar > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    border-radius: 100%;
  }
  .nextMember {
    font-size: 70px;
    align-self: center;
  }
  .columns-contains{
    flex-wrap: wrap;
  }
</style>
