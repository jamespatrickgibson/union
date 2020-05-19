<script>
	import { onMount } from "svelte";

	import {
		Box,
		Button,
		FixedImage,
		Frame,
		Link,
		List,
		ListItem,
		Navigation,
		NavigationSection,
		MediaObject,
		Stack,
		SplitView,
		Text,
	} from "../../src/components/index.js";
	import { run } from "svelte/internal";

	let album;
	let tracks;

	async function loadAlbum() {
		await fetch("../album-data.json", {
			method: "GET",
			headers: {
				"content-type": "application/json",
			},
		})
			.then((response) => response.json())
			.then(
				(data) => (
					(album = data.data[0].attributes),
					(tracks = data.data[0].relationships.tracks.data)
				)
			)
			.catch((err) => {
				console.log(err);
			});
	}

	function millisToMinutesAndSeconds(millis) {
		var minutes = Math.floor(millis / 60000);
		var seconds = ((millis % 60000) / 1000).toFixed(0);
		return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
	}

	onMount(loadAlbum);
</script>

<style lang="scss">
	@use "../../src/scss/utils/all" as *;

	.apple-music-app {
		height: 60vh;
		overflow: hidden;
		border-radius: var(--size-border-radius-2);

		&__sidebar {
			height: 100%;
			overflow: auto;
		}
		&__main {
			height: 100%;
			display: flex;
			flex-direction: column;
		}
		&__controls {
			flex-shrink: 0;
		}
		&__body {
			flex-grow: 1;
			overflow: auto;
		}
	}
</style>

<div class="apple-music-app">
	<Box mode="dark" space="0">
		<SplitView>
			<nav class="apple-music-app__sidebar" slot="primary">
				<Box>
					<input type="search" placeholder="search" />
					<Navigation>
						<NavigationSection title="Apple Music">
							<List>
								<ListItem>
									<Text size="3">
										<Link to="./" type="implied">For You</Link>
									</Text>
								</ListItem>
								<ListItem>
									<Text size="3">
										<Link to="./" type="implied">Browse</Link>
									</Text>
								</ListItem>
								<ListItem>
									<Text size="3">
										<Link to="./" type="implied">Radio</Link>
									</Text>
								</ListItem>
							</List>
						</NavigationSection>

						<NavigationSection title="Library">
							<List>
								<ListItem>
									<Text>
										<Link to="./" type="implied">Recently Added</Link>
									</Text>
								</ListItem>
								<ListItem>
									<Text>
										<Link to="./" type="implied">Artists</Link>
									</Text>
								</ListItem>
								<ListItem>
									<Text>
										<Link to="./" type="implied">Albums</Link>
									</Text>
								</ListItem>
								<ListItem>
									<Text>
										<Link to="./" type="implied">Songs</Link>
									</Text>
								</ListItem>
								<ListItem>
									<Text>
										<Link to="./" type="implied">Genres</Link>
									</Text>
								</ListItem>
							</List>
						</NavigationSection>

						<NavigationSection title="Playlists">
							<List>
								<ListItem>
									<Text>
										<Link to="./" type="implied">Playlist 1</Link>
									</Text>
								</ListItem>
								<ListItem>
									<Text>
										<Link to="./" type="implied">Playlist 2</Link>
									</Text>
								</ListItem>
							</List>
						</NavigationSection>
					</Navigation>
				</Box>
			</nav>
			<div class="apple-music-app__main" slot="secondary">
				<div class="apple-music-app__controls">
					<Box>
						<Button type="ghost">Shuffle</Button>
						<Button type="ghost">Previous</Button>
						<Button type="ghost">Pause</Button>
						<Button type="ghost">Next</Button>
						<Button type="ghost">Repeat</Button>
						<input type="range" />
					</Box>
				</div>

				<div class="apple-music-app__body">
					{#if album}
						<Box mode="black">
							<MediaObject>
								<div slot="media">
									<FixedImage
										src="{album.artwork.url}"
										alt="{album.name}, {album.artistName}"
										size="7"
										radius="2"
									/>
								</div>
								<Box>
									<Text weight="bold" size="8">{album.name}</Text>
									<Text size="6">
										<Link type="implied" to="./">{album.artistName}</Link>
									</Text>
								</Box>
								<Box>
									<Button variant="brand" size="2">Play</Button>
									<Button variant="brand" size="2">Shuffle</Button>
									<Button type="ghost" size="2">Add</Button>
									<Button type="ghost" size="2">More</Button>
								</Box>
								<!-- Track List -->
								{#if tracks}
									<Box>
										<List>
											{#each tracks as track}
												<ListItem>
													<MediaObject>
														<div slot="media">
															<Text>{track.attributes.trackNumber}</Text>
														</div>
														<Text weight="bold">{track.attributes.name}</Text>
														<div slot="end">
															<Text>
																{millisToMinutesAndSeconds(track.attributes.durationInMillis)}
															</Text>
														</div>
													</MediaObject>
												</ListItem>
											{/each}
										</List>
									</Box>
								{/if}
							</MediaObject>

						</Box>
					{/if}
				</div>
			</div>
		</SplitView>
	</Box>
</div>
