const { widget } = figma
const { AutoLayout, Text, Input, useSyncedState } = widget

const Timer = () => {
  const lightMode = {
    background: "#FFFFFF",
    button: "#000000",
    text: "#000000",
    buttonText: "#FFFFFF",
    buttonRed: "DD0000"
  }

  const darkMode = {
    background: "#000000",
    text: "#FFFFFF",
    button: "#FFFFFF"
  }

  const font = "Space Mono"
  const [seconds, setSeconds] = useSyncedState("seconds", "0")
  const [started, setStarted] = useSyncedState("started", false)

  const handleStart = () => {
    setStarted(!started)
  }
  return (
    <AutoLayout fill={lightMode.background} width={400} height={200} padding={{ vertical: 45, horizontal: 70 }} spacing={10}>

      <AutoLayout direction="horizontal" spacing={8}>
        {/* for taking input & buttons */}
        <Input
          value={seconds}
          placeholder="Enter time in seconds"
          onTextEditEnd={(e) => {
            setSeconds(e.characters);
          }}
          fontSize={12}
          fill={lightMode.text}
          width={167}
          inputFrameProps={{
            fill: lightMode.background,
            stroke: lightMode.text,
            cornerRadius: 3,
            padding: 7.5,
          }}
          inputBehavior="wrap"
        />

        <AutoLayout width={76} height={30} fill={ started ? lightMode.buttonRed : lightMode.button } padding={{ vertical: 6, horizontal: 22 }} cornerRadius={3} spacing={"auto"} 
          onClick={handleStart}>
          <Text fontFamily={font} fill={lightMode.buttonText} fontSize={12} hidden={ started ? true : false }>START</Text>
          <Text fontFamily={font} fill={lightMode.buttonText} fontSize={12} hidden={ started ? false : true }>STOP</Text>
        </AutoLayout>
      </AutoLayout>

      <AutoLayout direction="horizontal">
        {/* for displaying timer */}
      </AutoLayout>

    </AutoLayout>
  )
}

widget.register(Timer)