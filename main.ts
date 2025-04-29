input.onLogoEvent(TouchButtonEvent.Touched, function () {
    record.startRecording(record.BlockingState.Blocking)
    record.playAudio(record.BlockingState.Blocking)
})
basic.forever(function () {
	
})
