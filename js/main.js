// Alpine 2.4.1
// Made this to practice the insert timing.
function newsTickerHandler() {
	return {
		state: {
			moving: true,
		},
		headlines: [],
		position: 0,
		offset: 0,
		speed: 25,
		visible: 10,
		pauseOnNextHeadline: 0,
		init: async function () {
			const data = [{ title: "WEB DEVELOPMENT" }, { title: "UI / UX DESIGN" }, { title: "MOBILE DEVELOPMENT" }, { title: "DIGITAL MARKETING" }]; // Corrected data array syntax
			this.headlines = data.map(post => post.title)
			this.$nextTick(() => {
				this.start()
			})
		},
		start() {
			this.loop = () => {
				const first = document.getElementById('news-0').getBoundingClientRect()
				if (first.x <= -first.width) {
					// Reorder for continuous loop
					const newHeadlines = this.headlines
					newHeadlines.push(newHeadlines.shift())
					this.headlines = newHeadlines
					this.offset = this.offset + Math.abs(first.width)
					this.$nextTick(() => {
						setTimeout(() => {
							requestAnimationFrame(this.loop)
						}, this.pauseOnNextHeadline)
					})
					return
				}
				this.position = this.state.moving ? this.position - this.speed : this.position
				setTimeout(() => {
					requestAnimationFrame(this.loop)
				}, 200) // This should match your duration-300 class
			}
			requestAnimationFrame(this.loop)
		},
	}
}











//
