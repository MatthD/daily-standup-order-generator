<script>
	import daily from 'images/scrum-daily';
</script>

<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	img {
		width: 200px;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Daily standup order (random) generator 🎉</title>
</svelte:head>

<h1>Daily standup order generator!</h1>

<div>

</div>
<img alt="Daily scrum" src="{daily}" />

<p>You can use this app for free in <strong>generate</strong> or just fork (and like ?😍) on <a href="https://github.com/MatthD/daily-standup-order-generator" target="_blank">github</a></p>
