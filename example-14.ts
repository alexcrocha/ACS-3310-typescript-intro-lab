// These functions take a function as an argument.
// Set the type for the parameters

// In all of the functions below type the callback

// This function takes a callback that receives a string.

function callYouLater(callback: (str: string) => void, time: number): void {
	setTimeout(() => {
	  callback('What it be like?')
	}, time)
}



function callMeMaybe(callback: (obj: { success: boolean, probability: number }) => void, probability: number): void {
	setTimeout(() => {
		if (Math.random() * 100 < probability) {
		  return callback({ success: true, probability })
		}
		callback({ success: false, probability })
	}, 1000)
}

//


export {
  callYouLater,
  callMeMaybe
}
