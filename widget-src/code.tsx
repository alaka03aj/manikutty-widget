const { widget } = figma
const { AutoLayout} = widget

const Timer = () => {
  return (
    <AutoLayout fill="#FFFFFF">

      <AutoLayout direction="horizontal">
        {/* for taking input & buttons */}
      </AutoLayout>

      <AutoLayout direction="horizontal">
        {/* for displaying timer */}
      </AutoLayout>

    </AutoLayout>
  )
}

widget.register(Timer)