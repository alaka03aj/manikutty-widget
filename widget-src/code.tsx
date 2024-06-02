const { widget } = figma
const { AutoLayout, Text, Input, useSyncedState } = widget

type VerticalHorizontalPadding = {
  vertical?: number
  horizontal?: number
}

const Timer = () => {
  const lightMode = {
    background: "#FFFFFF",
    button: "#000000",
    text: "#000000",
    buttonText: "#FFFFFF"
  }

  const darkMode = {
    background: "#000000",
    text: "#FFFFFF",
    button: "#FFFFFF"
  }

  const font = "Space Mono"

  const padding: VerticalHorizontalPadding = { vertical: 45, horizontal: 70 }

  const [seconds, setSeconds] = useSyncedState("seconds", "0")

  return (
    <AutoLayout fill={lightMode.background} width={400} height={200} padding={padding} spacing={10}>

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
        <AutoLayout width={76} height={30} fill={lightMode.button} padding={{ vertical: 6, horizontal: 22 }} cornerRadius={3} spacing={"auto"}>
          <Text fontFamily={font} fill={lightMode.buttonText} fontSize={12}>START</Text>
        </AutoLayout>
      </AutoLayout>

      <AutoLayout direction="horizontal">
        {/* for displaying timer */}
      </AutoLayout>

    </AutoLayout>
  )
}

widget.register(Timer)