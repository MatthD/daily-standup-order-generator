<script type="ts">
  import Navbar from "./_navbar.svelte"
  import { members } from '../store';

  //state
  let name: string = '';
  let urlIcon: string = '';

  function handleAdd() {
    if(!checkIfIconIsUrl(urlIcon)) return alert('Icon must be a url to image !')
    members.set({ ...$members, [name]: urlIcon }); // update value
  }

  function removeMember(name: string){
    const updatedMembers = members.set({ ...$members, [name]: undefined }); // update value
  }
  function checkIfIconIsUrl(urlIcon: string){
    try { return Boolean(new URL(urlIcon)); }
    catch(e){ return false; }
  }
  console.log($members); // read value with automatic subscription
</script>

<template>
  <Navbar />
  <section class="container">
    <div class="formAdd">
      <p>Add a team member</p>
      <div class="field">
        <label class="label" for="username">USERNAME</label>
        <div class="control">
          <input class="input" type="text" name="username" required bind:value={name} />
        </div>
      </div>
      <div class="field">
        <label class="label" for="githubIcon">AVATAR IMAGE URL</label>
        <div class="control">
          <input class="input" type="text" name="githubIcon" required bind:value={urlIcon} />
        </div>
      </div>
      <button class="button is-primary" on:click={handleAdd}>➕</button>
    </div>
  </section>
  <section class="memberList">
    <table class="table is-striped is-narrow is-hoverable tableMember">
      <thead>
        <tr>
          <th>Name</th>
          <th>Icon </th>
        </tr>
      </thead>
    <tbody>
      {#each Object.entries($members) as [memberName, memberIcon]}
        {#if memberIcon} 
        <tr>
          <td>{memberName}</td>
          <td>{memberIcon}</td>
          <td on:click={()=>removeMember(memberName)} class="removeMember">❌</td>
        </tr>
        {/if}
      {/each}
    </tbody>
  </table>
  </section>
</template>

<style>
  .formAdd {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .formAdd > * {
    margin-top: 100px;
    margin-right: 10px;
  }
  .formAdd > p {
    align-self: center;
    font-size: 20px;
  }
  .formAdd > button {
    align-self: center;
  }
  .memberList{
    display: flex;
    justify-content: center;
    margin-top: 50px;
    font-size: 20px;
  }
  .tableMember{
    min-width: 600px;
    width: 600px;
    max-width: 600px;
  }
  .removeMember{
    cursor: pointer;
  }
</style>
