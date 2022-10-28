<script lang="ts">
	import placeholder from '@/assets/images/placeholder.png';
</script>

<div class="row">
	<div class="left">
		<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
		<p>
			Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden
			flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of
			sentences fly into your mouth.
		</p>
		<p>
			Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a
			small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
		</p>
	</div>

	<div class="right">
		<img src="{placeholder}" alt="Placeholder" />

		<p></p>
	</div>
</div>

<style lang="scss">
	.row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 2rem;
	}

	.right {
		text-align: center;
		img {
			width: 300px;
			height: 300px;
			object-fit: cover;
		}
	}

	.row > div {
		width: 50%;
	}

	p {
		margin-bottom: 1rem;
	}
</style>
