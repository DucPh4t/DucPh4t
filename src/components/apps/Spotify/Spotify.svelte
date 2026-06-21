<script lang="ts">
	const {
		is_being_dragged,
	}: {
		is_being_dragged: boolean;
	} = $props();

	$inspect(is_being_dragged);
</script>

<section class="container">
	<header class="app-window-drag-handle">
		<span>Spotify</span>
	</header>

	<div class="iframe-container">
		<iframe
			src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4g8G42Q22wE?utm_source=generator&theme=0"
			title="Spotify Playlist"
			allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
			loading="lazy"
		></iframe>
	</div>
</section>

<style>
	.container {
		background-color: #121212; /* Solid Spotify dark color - prevents transparency */
		padding: 0;
		border-radius: inherit;
		display: grid;
		grid-template-rows: auto 1fr;
		height: 100%;
		width: 100%;
		overflow: hidden;
		box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
	}

	header {
		padding: 0.8rem;
		display: flex;
		justify-content: center;
		background-color: #121212;
		border-bottom: 1px solid rgba(255, 255, 255, 0.08);
		border-top-left-radius: 0.75rem;
		border-top-right-radius: 0.75rem;
		user-select: none;
		z-index: 10;

		span {
			color: #1db954; /* Spotify green */
			font-weight: 700;
			font-size: 0.85rem;
			letter-spacing: 0.2px;
		}
	}

	.iframe-container {
		width: 100%;
		height: 100%;
		background-color: #121212;
		border-bottom-left-radius: 0.75rem;
		border-bottom-right-radius: 0.75rem;
		overflow: hidden;
	}

	iframe {
		width: 100%;
		height: 100%;
		border: none;
		border-bottom-left-radius: 0.75rem;
		border-bottom-right-radius: 0.75rem;
	}

	:global(.tl-container.spotify) {
		top: 0.6rem;
		left: 0.6rem;
	}
</style>
