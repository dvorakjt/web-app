import { LinearGradientIds } from "./constants" 

export function TealYellowGradient() {
  return (
    <linearGradient id={LinearGradientIds.TEAL_YELLOW_GRADIENT_ID} gradientUnits="userSpaceOnUse">
      <stop 
        offset={0}
        stopColor="#02ddc3"
      />
      <stop
        offset={100}
        stopColor="#ffed10"
      />
    </linearGradient>
  )
}