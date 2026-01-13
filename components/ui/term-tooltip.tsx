"use client"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const glossary: Record<string, string> = {
  "PID": "Proportional-Integral-Derivative: A feedback control loop that continuously calculates an error value and applies a correction based on proportional, integral, and derivative terms.",
  "feedforward": "A control strategy that uses knowledge of the system to predict and compensate for disturbances before they affect the output.",
  "drivetrain": "The group of components that deliver power to the driving wheels, including motors, gears, and wheels.",
  "gear ratio": "The ratio between the number of teeth on two gears that are meshed together, determining the mechanical advantage.",
  "torque": "A measure of rotational force, typically measured in Newton-meters (N⋅m). Higher torque means more pushing/pulling power.",
  "RPM": "Revolutions Per Minute: The number of complete rotations a motor or wheel makes in one minute.",
  "mecanum": "A type of holonomic wheel with rollers at 45° angles that allows omnidirectional movement without rotation.",
  "holonomic": "A drivetrain capable of moving in any direction without changing its orientation (can strafe sideways).",
  "swerve": "An advanced drivetrain where each wheel can independently rotate and drive, providing maximum maneuverability.",
  "encoder": "A sensor that measures the rotation of a motor or wheel, used for precise movement control.",
  "gyro": "Gyroscope: A sensor that measures rotational motion and orientation, essential for straight driving and turns.",
  "autonomous": "The period in FTC/FRC matches where the robot operates without driver input, following pre-programmed instructions.",
  "stall torque": "The maximum torque a motor can produce when it's prevented from rotating (at zero RPM).",
  "free speed": "The maximum RPM a motor can achieve with no load attached.",
  "traction": "The friction between the wheels and the playing surface that prevents slipping.",
  "motion profiling": "A technique to generate smooth acceleration and deceleration curves for more controlled and faster movements.",
  "kinematics": "The mathematics describing the motion of the robot based on wheel velocities and positions.",
}

interface TermTooltipProps {
  term: string
  children: React.ReactNode
}

export function TermTooltip({ term, children }: TermTooltipProps) {
  const definition = glossary[term.toLowerCase()]
  
  if (!definition) {
    return <>{children}</>
  }

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="underline decoration-dotted decoration-primary/50 cursor-help hover:decoration-primary transition-colors">
            {children}
          </span>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs bg-card border-primary/20 shadow-lg">
          <p className="font-semibold text-primary mb-1">{term}</p>
          <p className="text-sm text-muted-foreground">{definition}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
