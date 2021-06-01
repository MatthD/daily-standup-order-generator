import { writable } from 'svelte-local-storage-store'

type Members = {
  [name: string]: string; // val is github avatar url
};

export const members = writable<Members>('members', {})
