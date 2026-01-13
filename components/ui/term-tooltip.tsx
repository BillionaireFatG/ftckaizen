"use client"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const glossary: Record<string, string> = {
  // Control Theory
  "PID": "Proportional-Integral-Derivative: A feedback control loop that continuously calculates an error value and applies a correction based on proportional, integral, and derivative terms.",
  "feedforward": "A control strategy that uses knowledge of the system to predict and compensate for disturbances before they affect the output.",
  "motion profiling": "A technique to generate smooth acceleration and deceleration curves for more controlled and faster movements.",
  "kinematics": "The mathematics describing the motion of the robot based on wheel velocities and positions.",
  "PID tuning": "The process of adjusting the P, I, and D values to achieve optimal robot control performance.",
  
  // Drivetrain Basics
  "drivetrain": "The group of components that deliver power to the driving wheels, including motors, gears, and wheels.",
  "mecanum": "A type of holonomic wheel with rollers at 45° angles that allows omnidirectional movement without rotation.",
  "holonomic": "A drivetrain capable of moving in any direction without changing its orientation (can strafe sideways).",
  "swerve": "An advanced drivetrain where each wheel can independently rotate and drive, providing maximum maneuverability.",
  "omnidirectional": "Able to move in any direction without turning the robot - like moving sideways or diagonally.",
  "strafe": "To move sideways without rotating. Only holonomic drivetrains (mecanum, omni, swerve) can strafe.",
  "field-centric": "A control mode where the robot moves relative to the field (not the robot's orientation). Forward is always away from the driver.",
  
  // Mechanical Components
  "gear ratio": "The ratio between the number of teeth on two gears that are meshed together, determining the mechanical advantage.",
  "reduction": "A gear ratio greater than 1:1 that trades speed for torque (power). Example: 4:1 means 4x more torque, 1/4 speed.",
  "compound gearing": "Multiple gear stages combined together to achieve higher total gear ratios.",
  "chain": "A loop of connected links used to transfer power between sprockets, similar to a bicycle chain.",
  "sprocket": "A toothed wheel that engages with chain to transfer rotational power.",
  "belt": "A flexible loop (timing belt) used to transfer power between pulleys without slipping.",
  "pulley": "A wheel with a grooved rim that holds a belt for power transmission.",
  
  // Force & Power
  "torque": "A measure of rotational force, typically measured in Newton-meters (N⋅m). Higher torque means more pushing/pulling power.",
  "RPM": "Revolutions Per Minute: The number of complete rotations a motor or wheel makes in one minute.",
  "stall torque": "The maximum torque a motor can produce when it's prevented from rotating (at zero RPM).",
  "free speed": "The maximum RPM a motor can achieve with no load attached.",
  "traction": "The friction between the wheels and the playing surface that prevents slipping.",
  "friction coefficient": "A number representing how much grip exists between two surfaces. Higher = more grip.",
  "acceleration": "How quickly the robot's speed changes. Measured in meters per second squared (m/s²).",
  "velocity": "Speed in a specific direction. How fast the robot is moving.",
  
  // Sensors
  "encoder": "A sensor that measures the rotation of a motor or wheel, used for precise movement control.",
  "gyro": "Gyroscope: A sensor that measures rotational motion and orientation, essential for straight driving and turns.",
  "IMU": "Inertial Measurement Unit: Combines gyroscope and accelerometer to measure rotation and movement.",
  
  // Competition Terms
  "autonomous": "The period in FTC/FRC matches where the robot operates without driver input, following pre-programmed instructions.",
  "teleop": "Tele-operated: The period in matches where human drivers control the robot with gamepads.",
  "endgame": "The final 30 seconds of a match, often with special scoring opportunities.",
  
  // Electronics
  "motor controller": "An electronic device that controls the speed and direction of a motor.",
  "battery": "Power source for the robot. FTC uses 12V batteries that drain during matches.",
  "current": "The flow of electrical charge, measured in Amps (A). Too much current can trip breakers.",
  "voltage": "Electrical pressure that pushes current through a circuit. Measured in Volts (V).",
  "PWM": "Pulse Width Modulation: A method of controlling motor speed by rapidly switching power on and off.",
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
