export const getTime = (d?: string) => {
	const date = d ? new Date(d) : new Date()
	return {
		hour: date.getHours(),
		secs: date.getSeconds(),
		min: date.getMinutes(),
		dateString: date.toLocaleDateString("en-US", {
			weekday: "long",
			day: "numeric",
			month: "long",
			year: "numeric",
		}),
	}
}